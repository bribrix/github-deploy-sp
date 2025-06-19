from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en prod, remplace "*" par l'URL de ton frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):
    name: str

@app.post("/form")
def receive_form(data: FormData):
    print(f"Received: {data.name}")
    return {"message": f"Hello, {data.name}!"}