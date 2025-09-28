from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/send", methods=["POST"])
def send():
    # Parse JSON body from the request
    data = request.get_json()

    # Just send the same JSON back to the frontend
    return {"transaction" : "success"}

@app.route("/api/trade", methods=["POST"])
def trade():
    # Parse JSON body from the request
    data = request.get_json()

    # Just send the same JSON back to the frontend
    return {"transaction" : "success"}

if __name__ == "__main__":
    app.run(debug=True)
