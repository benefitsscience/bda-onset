"""
Main flask interface
"""
from flask import Flask, request

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def get_data():
    data = request.get_json()
    return 0
