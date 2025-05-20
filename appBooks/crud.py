from sqlalchemy.orm import Session
from typing import List, Optional

from . import models, schemas
from .auth import get_password_hash


# User CRUD operations
def create_user(db: Session, user: schemas.UserCreate):
    """Create a new user"""
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        username=user.username,
        hashed_password=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_users(db: Session, skip: int = 0, limit: int = 100):
    """Get all users"""
    return db.query(models.User).offset(skip).limit(limit).all()


def get_user_by_id(db: Session, user_id: int):
    """Get user by ID"""
    return db.query(models.User).filter(models.User.id == user_id).first()


def delete_user(db: Session, user_id: int):
    """Delete a user"""
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
    return db_user


# Book CRUD operations
def create_book(db: Session, book: schemas.BookCreate, owner_id: int):
    """Create a new book"""
    db_book = models.Book(
        title=book.title,
        author=book.author,
        description=book.description,
        owner_id=owner_id
    )
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book


def get_books(db: Session, skip: int = 0, limit: int = 100):
    """Get all books"""
    return db.query(models.Book).offset(skip).limit(limit).all()


def get_book_by_id(db: Session, book_id: int):
    """Get book by ID"""
    return db.query(models.Book).filter(models.Book.id == book_id).first()


def update_book(db: Session, book_id: int, book_update: schemas.BookUpdate):
    """Update a book"""
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if db_book:
        update_data = book_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_book, key, value)
        db.commit()
        db.refresh(db_book)
    return db_book


def delete_book(db: Session, book_id: int):
    """Delete a book"""
    db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if db_book:
        db.delete(db_book)
        db.commit()
    return db_book


# Review CRUD operations
def create_review(db: Session, review: schemas.ReviewCreate, book_id: int, user_id: int):
    """Create a new review"""
    db_review = models.Review(
        text=review.text,
        rating=review.rating,
        book_id=book_id,
        user_id=user_id
    )
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review


def get_reviews_by_book(db: Session, book_id: int, skip: int = 0, limit: int = 100):
    """Get all reviews for a book"""
    return db.query(models.Review).filter(models.Review.book_id == book_id).offset(skip).limit(limit).all()


def get_review_by_id(db: Session, review_id: int):
    """Get review by ID"""
    return db.query(models.Review).filter(models.Review.id == review_id).first()


def update_review(db: Session, review_id: int, review_update: schemas.ReviewUpdate):
    """Update a review"""
    db_review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if db_review:
        update_data = review_update.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(db_review, key, value)
        db.commit()
        db.refresh(db_review)
    return db_review


def delete_review(db: Session, review_id: int):
    """Delete a review"""
    db_review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if db_review:
        db.delete(db_review)
        db.commit()
    return db_review