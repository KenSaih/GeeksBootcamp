from config import get_db_connection

def create_user(name : str , age : int , email : str):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO users (name, age, email) VALUES (%s, %s, %s) RETURNING id;", (name, age, email)) 
    user_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    return {"id": user_id, "name": name, "age": age, "email": email}

def get_user(user_id : int):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE id = %s;", (user_id,))
    user = cur.fetchone()
    cur.close()
    conn.close()
    return user or {"error": "user not found"}

def delete_user (user_id : int):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM users WHERE id = %s;", (user_id,))
    conn.commit()
    cur.close()
    conn.close()
    return {"message": "user deleted"}

def update_user(user_id: int, name: str, age: int, email: str):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        UPDATE users SET name = %s, age = %s, email = %s WHERE id = %s RETURNING id, name, age, email;
    """, (name, age, email, user_id))
    user = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return user or {"error": "User not found"}

def get_all_users():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name, age, email FROM users;")
    users = cur.fetchall()
    cur.close()
    conn.close()
    
    if not users:
        return {"message": "No users found"}
    
    return [{"id": user[0], "name": user[1], "age": user[2], "email": user[3]} for user in users]