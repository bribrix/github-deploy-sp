from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en prod, remplace "*" par l'URL de ton frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):
    age: int
    gender: int
    cp: int
    bp: int
    cholesterol: int
    fbs: int
    ecg: int
    mhr: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int

@app.post("/form")
def receive_form(data: FormData):
    print(json.dumps(data.dict(), indent=2))
    return {"message": f"Data received"}