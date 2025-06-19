from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_submit_form():
    response = client.post(
        "/form",
        data={"name": "Alice"},
        headers={"Content-Type": "application/x-www-form-urlencoded"}
    )
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, Alice!"}