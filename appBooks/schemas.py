from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime


# User schemas
class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserCreate(UserBase):
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(UserBase):
    id: int
    is_admin: bool
    created_at: datetime

    class Config:
        orm_mode = True


# Book schemas
class BookBase(BaseModel):
    title: str
    author: str
    description: Optional[str] = None


class BookCreate(BookBase):
    pass


class BookUpdate(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    description: Optional[str] = None


class BookResponse(BookBase):
    id: int
    owner_id: int
    created_at: datetime

    class Config:
        orm_mode = True


# Review schemas
class ReviewBase(BaseModel):
    text: str
    rating: int = Field(..., ge=1, le=5)


class ReviewCreate(ReviewBase):
    pass


class ReviewUpdate(BaseModel):
    text: Optional[str] = None
    rating: Optional[int] = Field(None, ge=1, le=5)


class ReviewResponse(ReviewBase):
    id: int
    book_id: int
    user_id: int
    created_at: datetime

    class Config:
        orm_mode = True


class BookWithReviews(BookResponse):
    reviews: List[ReviewResponse] = []

    class Config:
        orm_mode = True


# Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
    user_id: Optional[int] = None
    is_admin: Optional[bool] = None