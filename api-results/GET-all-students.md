```http
GET /api/students HTTP/1.1
Host: localhost:5000
Accept: application/json
```

Response (200 OK):
```json
[
  {
    "id": 3,
    "name": "Mohammed shahinsha Abdul Ali",
    "rollNumber": "727622BAD109 ",
    "email": "mohammedshahinsha3333@gmail.com",
    "mobile": "09994814936"
  },
  {
    "id": 4,
    "name": "Test Student",
    "rollNumber": "R98765",
    "email": "test@example.com",
    "mobile": "1234567890"
  }
]
```