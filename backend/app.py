from flask import Flask, request
from process_data import process_data

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/data', methods=["POST"])
def get_current_time():
    inputs = request.get_json()
    client, condition = inputs["Client"], inputs["Condition"]
    outputs = process_data(client, condition)
    return outputs
