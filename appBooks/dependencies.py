from fastapi import Depends, HTTPException, status, Request
from sqlalchemy.orm import Session

from . import models
from .config import get_db


def get_book(book_id: int, db: Session = Depends(get_db)):
    """Get book by ID"""
    book = db.query(models.Book).filter(models.Book.id == book_id).first()
    if book is None:
        raise HTTPException(status_code=404, detail="Book not found")
    return book


def get_review(review_id: int, db: Session = Depends(get_db)):
    """Get review by ID"""
    review = db.query(models.Review).filter(models.Review.id == review_id).first()
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    return review


def get_user(user_id: int, db: Session = Depends(get_db)):
    """Get user by ID"""
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_current_user_from_request(request: Request, db: Session = Depends(get_db)):
    """Get current user from request state"""
    if not hasattr(request.state, "user"):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )
    
    user_id = request.state.user.get("user_id")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token"
        )
    
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )
    return user


def check_if_admin(request: Request):
    """Check if user is admin from request state"""
    if not hasattr(request.state, "user"):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated"
        )
    
    is_admin = request.state.user.get("is_admin", False)
    if not is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return True


def check_book_owner(
    book: models.Book = Depends(get_book),
    current_user: models.User = Depends(get_current_user_from_request)
):
    """Check if current user is the book owner or admin"""
    if book.owner_id != current_user.id and not current_user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return book


def check_review_owner(
    review: models.Review = Depends(get_review),
    current_user: models.User = Depends(get_current_user_from_request)
):
    """Check if current user is the review owner or admin"""
    if review.user_id != current_user.id and not current_user.is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return review