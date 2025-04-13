```http
PUT /api/students/6 HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
  "name": "Updated Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test-updated@example.com",
  "mobile": "9876543210"
}
```

Response (200 OK):
```json
{
  "id": 6,
  "name": "Updated Test Student",
  "rollNumber": "R12345-UNIQUE",
  "email": "unique-test-updated@example.com",
  "mobile": "9876543210"
}
```