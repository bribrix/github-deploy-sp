from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_submit_form():
    response = client.post(
        "/form",
        json ={"name": "Alice"},
    )
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, Alice!"}