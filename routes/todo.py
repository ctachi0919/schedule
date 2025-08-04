from flask import Blueprint, jsonify, request
from models.todo import Todo, TodoDetail, Categories
from db.db import db

todo_bp = Blueprint('todo', __name__)

# Register type
register = 0
update = 1

@todo_bp.route('/get/categories', methods=['GET'])
def get_diary():
    print(f"Start to get categories.")
    try:
      # Get data
      result = Categories.query.all()
      categories = [{"id": c.id, "name": c.name} for c in result]

      return jsonify({"categories": categories}), 200
    except Exception as e:
        db.session.rollback()
        print("Unexpected error occured:", e)
        return jsonify({}), 500


@todo_bp.route('/register/todo', methods=['POST'])
def register_todo():
    data = request.get_json()
    if not data:
        # Data is missing
        print(f"Parameters doesn't exist.")
        return jsonify({}), 400

    todo_id = data.get('id')
    category_id = data.get('category')
    title = data.get('title')
    parent = data.get('parent')

    if not category_id and not title and not parent:
        # Text and type are missing
        print(f"No Parameters exist.")
        return jsonify({}), 400

    if category_id or title:
        # Register todo
        if todo_id:
            columns = [f"id:{todo_id}"]
            if category_id: columns.append(f"category_id: {category_id}")
            if title: columns.append(f"title: {title}")
            msg = f"Start to update todo ({' '.join(columns)})"
            print(msg)

            # Check if whether data exists
            todo = Todo.query.get(todo_id)
            if not todo:
              print("Todo not found.")
              return jsonify({}), 404
        
            # Update data
            if category_id: todo.category_id = category_id
            if title: todo.title = title
        else:
            print(f"Start to register todo category_id:{category_id}, title:{title}.")
            # Add data
            todo = Todo(category_id=category_id, title=title)
            db.session.add(todo)
    # else:
    #     # Register todo_detail
    #     for child in children:
    #         title = child['title']
    #         list = child['list']
    #         for todo in list:
    #             name = todo['name']
    #             is_checked = todo['isChecked']
                

    try:
        # Execute
        db.session.commit()
        return jsonify({}), 200
    except Exception as e:
        db.session.rollback()
        print("Unexpected error occured:", e)
        return jsonify({}), 500

# @todo_bp.route('/delete/diary', methods=['POST'])
# def delete_diary():
#     data = request.get_json()
#     if not data:
#         # Data is missing
#         print("Parameters doesn't exist.")
#         return jsonify({}), 400

#     id = data.get('id')
#     if not id:
#         # Id is missing
#         print("Parameters doesn't exist (id).")
#         return jsonify({}), 400

#     print(f"Start to delete diary id:{id}.")

#     # Check if whether data exists
#     diary = Diary.query.get(id)
#     if diary:
#         print("Diary not found.")
#         return jsonify({}), 404
    
#     db.session.delete(diary)
#     db.session.commit()
#     return jsonify({}), 200

# @todo_bp.route('/get/diary', methods=['GET'])
# def get_diary():
#     date_type = int(request.args.get('date_type'))
#     print(f"Start to get diary type:{date_type}.")

#     if date_type == day:
#         # Get only specific day's data
#         date_str = request.args.get('date')
#         if not date_str:
#             # Date is missing
#             return jsonify({}), 400

#         # Get data
#         result = Diary.query.filter_by(date=date_str).first()

#         if not result:
#             # Result is missing
#             return jsonify({}), 200

#         diary = {"id": result.id, "text": result.diary}
#         return jsonify(diary), 200

#     else:
#         # Get all data from start day to end day
#         day_from = request.args.get('from')
#         day_to = request.args.get('to')
#         if not day_from or not day_to:
#             # Days are missing
#             return jsonify({}), 400

#         # Get data
#         result = Diary.query.filter(Diary.date >= day_from, Diary.date <= day_to).all()

#         if not result:
#             return jsonify({}), 200

#         diary = [{"id": d.id, "date": d.date, "text": d.diary} for d in result]
#         return jsonify({"diary": diary}), 200
