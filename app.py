from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# API route
@app.route('/api/data', methods=['POST'])
def api_data():
    data = request.get_json()
    response = {'message': f'Hello, {data["name"]}!'}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
