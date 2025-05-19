import psycopg2

DATABASE_URL = "dbname=authentification user=postgres password=Ines1991 host=localhost port=5432"

#python connect to postgreSQL.
def get_db_connection():
    return psycopg2.connect(DATABASE_URL)

def create_table():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL ,
                age INTEGER NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL 
            )
    """)
    conn.commit()
    cur.close()
    conn.close()

create_table()
print("table created successfully")
print("connected to database")