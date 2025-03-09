import json

def format_firebase_data():
    data = {
        "users": {
            "user1": {"id": 1, "name": "Alice", "email": "alice@example.com"},
            "user2": {"id": 2, "name": "Bob", "email": "bob@example.com"}
        },
        "orders": {
            "order1": {"order_id": 101, "user_id": 1, "amount": 50.75},
            "order2": {"order_id": 102, "user_id": 2, "amount": 120.00}
        },
        "products": {
            "product1": {"product_id": 201, "name": "Laptop", "price": 1500.00},
            "product2": {"product_id": 202, "name": "Phone", "price": 800.00}
        }
    }

    return json.dumps(data, indent=4)

# Print formatted data
print(format_firebase_data())
