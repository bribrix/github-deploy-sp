from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_predict_valid_input():
    response = client.post(
        "/predict",
        payload ={
            "age": 44,
            "sex": 0,
            "cp": 3,
            "trestbps": 5,
            "chol": 3,
            "fbs": 1,
            "restecg": 1,
            "thalach": 3,
            "exang": 0,
            "oldpeak": 1.5,
            "slope": 1,
            "ca": 4,
            "thal": 6
        }
    )

    assert response.status_code == 200
    # Structure de la réponse
    json_data = response.json()
    assert "message" in json_data
    assert "Prediction is :" in json_data["message"]