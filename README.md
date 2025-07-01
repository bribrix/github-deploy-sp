# github-deploy-sp
School/Formation

# 🫀 Heart Disease Risk Predictor

App web permettant pour la prédiction du risque d'attaque cardiaque à partir de données physiologiques.  
Frontend React + API REST FastAPI + modèle Random Forest (Accuracy 90%) + architectecture dockerisé + déploiement automatisé via Azure.

---

## 🧠 Modèle Machine Learning

- **Dataset utilisé** : [Heart Disease Dataset (UCI)](https://archive.ics.uci.edu/ml/datasets/heart+Disease)
- **Target** : Présence ou non de maladie cardiaque (binaire)
- **Features utilisées** : `age`, `sex`, `cp`, `trestbps`, `chol`, `fbs`, `restecg`, `thalach`, `exang`, `oldpeak`, `slope`, `ca`, `thal`
- **Algorithme** : `RandomForestClassifier`

---

## 🧪 API - Exemple de requête

### Endpoint : `POST /predict`

**Requête JSON**
```json
{
  "age": 63,
  "sex": 1,
  "cp": 3,
  "trestbps": 145,
  "chol": 233,
  "fbs": 1,
  "restecg": 0,
  "thalach": 150,
  "exang": 0,
  "oldpeak": 2.3,
  "slope": 0,
  "ca": 0,
  "thal": 1
}
