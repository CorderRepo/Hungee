import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()


# Replace with your project info
url: str = os.environ.get("SUPAURL")
key: str = os.environ.get("SUPAKEY")
#print(url,key)
supabase: Client = create_client(url, key)


response = supabase.table("Accept_Data").select("*").execute()
print(response.data)  # List of dictionaries with table rows

response = supabase.table("Reject_Data").select("*").execute()
print(response.data)  # List of dictionaries with table rows