from flask import Flask, render_template, request, jsonify
import pymysql

app = Flask(__name__)

# Post test
@app.route('/api/data', methods=['POST'])
def api_data():
    data = request.get_json()
    response = {'message': f'Hello, {data["name"]}!'}
    return jsonify(response)

# Main
@app.route('/')
def home():
    conn = pymysql.connect(
        host='Tachinya529.mysql.pythonanywhere-services.com',
        user='Tachinya529',
        password='chiki529',
        database='Tachinya529$schedule'
    )

    cursor = conn.cursor()
    cursor.execute("SHOW TABLES;")
    print(cursor.fetchall())

    cursor.close()
    conn.close()

    return render_template('index.html')


if __name__ == '__main__':
    app.run()
