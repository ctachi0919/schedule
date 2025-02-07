from flask import Flask, render_template, request, jsonify

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
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
