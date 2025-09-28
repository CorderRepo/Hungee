from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/echo", methods=["POST"])
def echo():
    data = request.get_json()
    return jsonify(data)

# 👉 Add this new route
@app.route("/places", methods=["POST"])
def save_places():
    data = request.get_json()  # get JSON from React Native
    print("Received places:", data)  # log to console for debugging
    return jsonify({"status": "success", "count": len(data)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
