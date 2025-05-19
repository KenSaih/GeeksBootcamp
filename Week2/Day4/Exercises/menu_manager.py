import psycopg2

DB_NAME = "Restaurant"
USER = "postgres"
PASSWORD = "azer"
HOST = "localhost"
PORT = "5432"


class MenuManager:

    @classmethod
    def get_by_name(cls, item_name):
        connection = psycopg2.connect(
            dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )
        cursor = connection.cursor()

        query = """
        SELECT * FROM menu_items
        WHERE item_name = %s
        """
        cursor.execute(query, (item_name,))
        result = cursor.fetchone()
        connection.close()

        if result:
            return result
        else:
            return None

    @classmethod
    def all_items(cls):
        connection = psycopg2.connect(
            dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )
        cursor = connection.cursor()

        query = "SELECT * FROM menu_items"
        cursor.execute(query)
        result = cursor.fetchall()
        connection.close()
        return result