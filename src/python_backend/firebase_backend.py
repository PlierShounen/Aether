import firebase_admin
import random
import time
from firebase_admin import credentials, db

# Initialize Firebase
cred = credentials.Certificate("C:\Programming\Projects\PlatformIO\Aether\src\python_backend\project-aether-6c98f-firebase-adminsdk-fbsvc-bb5457a533.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://project-aether-6c98f-default-rtdb.asia-southeast1.firebasedatabase.app/"
})

# Reference to the database
ref = db.reference("sensor_data")

# Function to send random data
def send_random_data():
    while True:
        data = {
            "temperature": round(random.uniform(20, 40), 2),  # Random temperature (20-40°C)
            "humidity": round(random.uniform(30, 90), 2),  # Random humidity (30-90%)
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        }

        # Push data to Firebase
        ref.push(data)
        print(f"Data sent: {data}")

        # Wait for 5 seconds before sending next data
        time.sleep(5)

# Run the function
send_random_data()
