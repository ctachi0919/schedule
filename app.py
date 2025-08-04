from flask import Flask, render_template
from flask_cors import CORS
from db.db import db
from routes.diary import diary_bp
from routes.todo import todo_bp
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

username = os.getenv("USER_NAME")
password = os.getenv("PASSWORD")
host = os.getenv("HOST")
database = os.getenv("DATABASE")

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://{username}:{password}@{host}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
app.register_blueprint(diary_bp, url_prefix="/")
app.register_blueprint(todo_bp, url_prefix="/")

# Caution!
# Remove comment out
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
