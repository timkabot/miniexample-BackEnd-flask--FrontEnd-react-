from flask import Flask, jsonify
from time import gmtime, strftime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

movies = []

id = 0
@app.route('/time', methods=['GET'])
def get_time():
	global id
	id = id + 1
	return jsonify({'id': id, 'time': strftime("%H:%M:%S", gmtime()) }), 200

@app.route('/date', methods=['GET'])
def get_date():
	global id
	id = id + 1
	return jsonify({'id': id, 'date': strftime("%Y-%m-%d", gmtime()) }), 200

app.run()