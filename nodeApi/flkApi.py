from flask import Flask
from script1 import tweets
js = tweets()
app = Flask(__name__)

@app.route('/flask', methods=['GET'])
def index():
    print(js)
    return js

if __name__ == "__main__":
    app.run(port=5000, debug=True)