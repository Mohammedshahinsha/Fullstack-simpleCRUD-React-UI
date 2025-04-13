```http
POST /api/students HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "name": "Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test@example.com",
  "mobile": "1234567890"
}
```

Response (201 Created):
```json
{
  "id": 6,
  "name": "Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test@example.com",
  "mobile": "1234567890"
}
```