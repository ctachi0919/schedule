from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
from datetime import date

# Action
select = 0
insert = 1
update = 2
delete = 3

# Date type
day = 0
month = 1

def execute_mysql(action, query, values=None):
    print(action, query, values)
    try:
        db = mysql.connector.connect(
            # host='localhost',
            # user='root',
            # password='root',
            # database='schedule'
            host='Tachinya529.mysql.pythonanywhere-services.com',
            user='Tachinya529',
            password='chiki529',
            database='Tachinya529$schedule'
        )
        cursor = db.cursor()
        cursor.execute(query, values)

        if action == select:
            row = cursor.fetchall()
            db.close()
            return row

        db.commit()
        db.close()
        return True

    except Exception as e:
        print('mysql error:', e)
        if db:
          return db.rollback()
        return False
    
    finally:
        if cursor:
            cursor.close()
        if db:
            db.close()

app = Flask(__name__)
CORS(app)

@app.route('/register/diary', methods=['POST'])
def register_diary():
    data = request.get_json()
    date = data['date']
    text = data['text']
    print(date, text)

    if not data or not text:
        # Return error if request param doesn't exist
        return jsonify({}),400

        # Register diary
    result = execute_mysql(insert, "INSERT INTO diary (date, diary) VALUES (%s, %s)",(date, text) )
    return jsonify({}), 200 if result else jsonify({}), 500

@app.route('/get/diary', methods=['GET'])
def get_diary():
    date_type = int(request.args.get('date_type'))
    print(date_type)
    if date_type == day:
        date = request.args.get('date')
        if not date:
            # Return error if args doesn't exist 
            return jsonify({}), 400
        
        result = execute_mysql(select, "SELECT diary FROM diary WHERE date = %s", (date,))

        if not result:
            return jsonify({}), 500
    
        return jsonify({"text": result[0][0] if result[0][0] else ""}), 200
    else:
        day_from = request.args.get('from')
        day_to = request.args.get('to')
        if not day_from or not day_to:
            # Return error if args doesn't exist 
            return jsonify({}), 400
        
        result = execute_mysql(select, "SELECT date, diary FROM diary WHERE date >= %s AND date <= %s", (day_from, day_to,))
        print(result)
    
        if not result:
            return jsonify({}), 500
    
        diary = []
        for row in result:
            diary.append({"date": row[0], "text": row[1]})
        
        print(diary)

        return jsonify({"diary": diary}), 200

if __name__ == '__main__':
    app.run(debug=True)
