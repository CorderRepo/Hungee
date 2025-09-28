import os
from flask import Flask, request, jsonify
from supabase import create_client, Client
from dotenv import load_dotenv
import json

app = Flask(__name__)

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route("/api/send", methods=["POST"])
def send():
    # Directly get JSON from request body
    data = request.get_json()
    
    # Print to server logs
    print("📩 Received JSON:", data)

    # Example: access the "store" key
    if isinstance(data, list) and len(data) > 0 and "store" in data[0]:
        print("➡️ Store value:", data[0]["store"])
        if data[0]["store"] == "Accept":
            response = supabase.table("Accept_Data").insert({"JSON":data[1]}).execute()
        elif data[0]["store"] == "Reject":
            response = supabase.table("Reject_Data").insert({"JSON":data[1]}).execute()

    return jsonify({"status": "ok", "received": data})

@app.route("/api/trade", methods=["POST"])
def trade():
    # Parse JSON body from the request
    data = request.get_json()

    # Just send the same JSON back to the frontend
    return {"transaction" : "success"}

if __name__ == "__main__":
    app.run(debug=True)
