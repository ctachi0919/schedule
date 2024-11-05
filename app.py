from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    # Pass 'こんにちは' to the HTML template
    return render_template('index.html', message='こんにちは')

# Run the app if you’re testing it locally
if __name__ == "__main__":
    app.run(debug=True)
