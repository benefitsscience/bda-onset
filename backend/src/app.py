"""
Main flask interface
"""
from flask import Flask, request
from run import run

app = Flask(__name__)


@app.route('/regression', methods=['POST'])
def run_regression():

    data = request.get_json()

    weights = list(run(l2_weight=data['data']))
    return {'coefficients': weights}
