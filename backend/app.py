from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/api/data', methods=['GET'])
def get_data():
    # Sample data to send to the frontend
    data = {"message": "Hello from the Flask backend!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
