from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from jose import jwt, JWTError

from .auth import SECRET_KEY, ALGORITHM


class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # List of paths that don't require authentication
        public_paths = [
            "/login", 
            "/signup", 
            "/docs", 
            "/openapi.json", 
            "/redoc"
        ]
        
        # Skip authentication for public paths
        if any(request.url.path.startswith(path) for path in public_paths):
            return await call_next(request)
        
        # Skip auth for GET requests to /books and /books/{id} for public access
        if request.url.path == "/books" and request.method == "GET":
            return await call_next(request)
            
        if request.url.path.startswith("/books/") and request.method == "GET":
            return await call_next(request)
        
        # Get the token from the header
        token = request.headers.get("Authorization")
        
        if not token:
            raise HTTPException(status_code=403, detail="No authentication token provided")
        
        try:
            scheme, jwt_token = token.split()
            
            if scheme.lower() != "bearer":
                raise HTTPException(status_code=403, detail="Invalid authentication scheme")
            
            payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=[ALGORITHM])
            
            # Store user info in request state
            request.state.user = payload
            
        except (JWTError, ValueError):
            raise HTTPException(status_code=403, detail="Invalid or expired token")
        
        return await call_next(request)