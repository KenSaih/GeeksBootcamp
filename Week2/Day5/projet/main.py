from fastapi import FastAPI
from app.routes import router
from config import create_table

app = FastAPI()


@app.on_event("startup")
def startup_event():
    create_table()

app.include_router(router)

@app.get('/')
def home():
    return{"message": "Welcome to the User API!"}