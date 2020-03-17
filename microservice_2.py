from flask import Flask, jsonify
from time import gmtime, strftime
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

movies = []

id = 0
@app.route('/colors', methods=['GET'])
def get_color():
	global id
	id = id + 1
	r = lambda: random.randint(0,255)
	return jsonify({'id': id, 'font_color': '#%02X%02X%02X' % (r(),r(),r()), 'background_color': '#%02X%02X%02X' % (r(),r(),r()) } ), 200


app.run(port=228)