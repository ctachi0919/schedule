from flask import Blueprint, jsonify, request
from models.diary import Diary
from db.db import db

diary_bp = Blueprint('diary', __name__)

# Register type
register = 0
update = 1

# Date type
day = 0
month = 1

@diary_bp.route('/register/diary', methods=['POST'])
def register_diary():
    data = request.get_json()
    if not data:
        # Data is missing
        print(f"Parameters doesn't exist.")
        return jsonify({}), 400

    text = data['text']
    type = data['type']

    if not text or type is None:
        # Text and type are missing
        print(f"Parameters doesn't exist (text, type).")
        return jsonify({}), 400

    if type == register:
        # Type register
        date = data['date']
        if not date:
            # Date is missing
            print(f"Parameters doesn't exist (text).")
            return jsonify({}), 400

        print(f"Start to register diary date:{date}, diary text:{text}.")

        # Add data
        diary = Diary(date=date, diary=text)
        db.session.add(diary)
    else:
        id = data['id']
        if not id:
            # Id is missing
            print(f"Parameters doesn't exist (id).")
            return jsonify({}), 400
        
        print(f"Start to update diary id:{id}, diary text:{text}.")

        # Check if whether data exists
        diary = Diary.query.get(id)
        if not diary:
            print("Diary not found.")
            return jsonify({}), 404
        
        # Update data
        diary.diary = text

    try:
        # Execute
        db.session.commit()
        return jsonify({}), 200
    except Exception as e:
        db.session.rollback()
        print("Unexpected error occured:", e)
        return jsonify({}), 500

@diary_bp.route('/delete/diary', methods=['POST'])
def delete_diary():
    data = request.get_json()
    if not data:
        # Data is missing
        print("Parameters doesn't exist.")
        return jsonify({}), 400

    id = data.get('id')
    if not id:
        # Id is missing
        print("Parameters doesn't exist (id).")
        return jsonify({}), 400

    print(f"Start to delete diary id:{id}.")

    # Check if whether data exists
    diary = Diary.query.get(id)
    if diary:
        print("Diary not found.")
        return jsonify({}), 404
    
    db.session.delete(diary)
    db.session.commit()
    return jsonify({}), 200

@diary_bp.route('/get/diary', methods=['GET'])
def get_diary():
    date_type = int(request.args.get('date_type'))
    print(f"Start to get diary type:{date_type}.")

    if date_type == day:
        # Get only specific day's data
        date_str = request.args.get('date')
        if not date_str:
            # Date is missing
            return jsonify({}), 400

        # Get data
        result = Diary.query.filter_by(date=date_str).first()

        if not result:
            # Result is missing
            return jsonify({}), 200

        diary = {"id": result.id, "text": result.diary}
        return jsonify(diary), 200

    else:
        # Get all data from start day to end day
        day_from = request.args.get('from')
        day_to = request.args.get('to')
        if not day_from or not day_to:
            # Days are missing
            return jsonify({}), 400

        # Get data
        result = Diary.query.filter(Diary.date >= day_from, Diary.date <= day_to).all()

        if not result:
            return jsonify({}), 200

        diary = [{"id": d.id, "date": d.date, "text": d.diary} for d in result]
        return jsonify({"diary": diary}), 200
