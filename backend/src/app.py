"""
Main flask interface
"""
from flask import Flask, request, jsonify
from process_data import process_data

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def get_data():
    inputs = request.get_json()
    client, condition = inputs["client"], inputs["condition"]
    outputs = process_data(client, condition)
    return jsonify(outputs)
