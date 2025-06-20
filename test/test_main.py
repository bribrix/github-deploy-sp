from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_submit_form():
    response = client.post(
        "/form",
        json ={
            "age": 44,
            "gender": 0,
            "cp": 3,
            "bp": 5,
            "cholesterol": 3,
            "fbs": 1,
            "ecg": 1,
            "mhr": 3,
            "exang": 0,
            "oldpeak": 1.5,
            "slope": 1,
            "ca": 4,
            "thal": 6
        }
    )
    assert response.status_code == 200
    assert response.json() == {"message": "Data received"}