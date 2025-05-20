from fastapi import FastAPI, Depends, HTTPException, Request, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from starlette.middleware.base import BaseHTTPMiddleware
from typing import List, Optional
from datetime import datetime, timedelta
from jose import jwt, JWTError
from passlib.context import CryptContext
import uvicorn

# Local imports
from config import SessionLocal, engine, Base
import models
import schemas
import crud
from middleware import AuthMiddleware
from dependencies import get_db, get_current_user, get_current_admin_user

# Create database tables
Base.metadata.create_all(bind=engine)

# Constants
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"  # Change in production!
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Initialize password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Initialize FastAPI app
app = FastAPI(
    title="Book Review API",
    description="A RESTful API to manage books and reviews",
    version="1.0.0"
)

# Add middleware for authentication
app.add_middleware(AuthMiddleware)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# User Authentication Routes
@app.post("/signup", response_model=schemas.User)
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/login", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Create access token with expiration time
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = crud.create_access_token(
        data={"sub": user.email, "role": user.role},
        expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

# Book Routes
@app.post("/books", response_model=schemas.Book)
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db), 
                current_user: schemas.User = Depends(get_current_user)):
    return crud.create_book(db=db, book=book, user_id=current_user.id)

@app.get("/books", response_model=List[schemas.Book])
def read_books(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    books = crud.get_books(db, skip=skip, limit=limit)
    return books

@app.get("/books/{book_id}", response_model=schemas.Book)
def read_book(book_id: int, db: Session = Depends(get_db)):
    db_book = crud.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return db_book

@app.put("/books/{book_id}", response_model=schemas.Book)
def update_book(book_id: int, book: schemas.BookUpdate, db: Session = Depends(get_db),
                current_user: schemas.User = Depends(get_current_user)):
    db_book = crud.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    # Only allow owner or admin to update book
    if db_book.owner_id != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    return crud.update_book(db=db, book_id=book_id, book=book)

@app.delete("/books/{book_id}")
def delete_book(book_id: int, db: Session = Depends(get_db),
                current_user: schemas.User = Depends(get_current_admin_user)):
    db_book = crud.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    crud.delete_book(db=db, book_id=book_id)
    return {"ok": True}

# Review Routes
@app.post("/books/{book_id}/review", response_model=schemas.Review)
def create_review(book_id: int, review: schemas.ReviewCreate, db: Session = Depends(get_db),
                 current_user: schemas.User = Depends(get_current_user)):
    # Check if book exists
    db_book = crud.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    return crud.create_review(db=db, review=review, book_id=book_id, user_id=current_user.id)

@app.get("/books/{book_id}/reviews", response_model=List[schemas.Review])
def read_reviews(book_id: int, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # Check if book exists
    db_book = crud.get_book(db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    reviews = crud.get_reviews_by_book(db, book_id=book_id, skip=skip, limit=limit)
    return reviews

@app.put("/books/{book_id}/reviews/{review_id}", response_model=schemas.Review)
def update_review(book_id: int, review_id: int, review: schemas.ReviewUpdate, 
                 db: Session = Depends(get_db), current_user: schemas.User = Depends(get_current_user)):
    # Check if review exists
    db_review = crud.get_review(db, review_id=review_id)
    if db_review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    
    # Only allow the review author or admin to update
    if db_review.user_id != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    return crud.update_review(db=db, review_id=review_id, review=review)

@app.delete("/books/{book_id}/reviews/{review_id}")
def delete_review(book_id: int, review_id: int, db: Session = Depends(get_db),
                 current_user: schemas.User = Depends(get_current_user)):
    # Check if review exists
    db_review = crud.get_review(db, review_id=review_id)
    if db_review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    
    # Only allow the review author or admin to delete
    if db_review.user_id != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    crud.delete_review(db=db, review_id=review_id)
    return {"ok": True}

# User Management Routes (Admin only)
@app.get("/users", response_model=List[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db),
              current_user: schemas.User = Depends(get_current_admin_user)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db),
               current_user: schemas.User = Depends(get_current_admin_user)):
    # Prevent self-deletion
    if user_id == current_user.id:
        raise HTTPException(status_code=400, detail="Cannot delete your own account")
    
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    
    crud.delete_user(db=db, user_id=user_id)
    return {"ok": True}

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)