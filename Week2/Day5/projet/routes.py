from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from crud import create_user, get_user, delete_user, update_user, get_all_users

router = APIRouter(prefix="/users")

class User(BaseModel):
    name: str
    age: int
    email: str

@router.get("/")
def fetch_all_users():
    return get_all_users()

@router.post("/")
def add_user(user: User):
    return create_user(user.name, user.age, user.email)


@router.get('/{user_id}')
def fetch_user(user_id : int):
    return get_user(user_id)

@router.put("/{user_id}")
def modify_user(user_id: int, user: User):
    return update_user(user_id, user.name, user.age, user.email)

@router.delete("/{user_id}")
def remove_user(user_id: int):
    return delete_user(user_id)