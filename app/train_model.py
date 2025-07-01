import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib

from ucimlrepo import fetch_ucirepo 

# fetch dataset 
heart_disease = fetch_ucirepo(id=45)    

# data (as pandas dataframes) 
X = pd.DataFrame(heart_disease.data.features)
y = pd.DataFrame(heart_disease.data.targets)

y_binary = y.copy()
y_binary["num"] = y["num"].apply(lambda val: 1 if val > 0 else 0)

X_train, X_test, y_train, y_test = train_test_split(X, y_binary, test_size=0.2, random_state=42)

model = RandomForestClassifier()
model.fit(X_train, y_train)

# Prédictions
y_pred = model.predict(X_test)

# Rapport de classification
print(classification_report(y_test, y_pred))

# Accuracy
print("Accuracy:", accuracy_score(y_test, y_pred))

joblib.dump(model, "model_heart.pkl")

