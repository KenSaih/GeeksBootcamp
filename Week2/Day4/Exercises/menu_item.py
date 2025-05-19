import psycopg2

DB_NAME = "Restaurant"
USER = "postgres"
PASSWORD = "azer"
HOST = "localhost"
PORT = "5432"


class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        connection = psycopg2.connect(
            dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )
        cursor = connection.cursor()

        query = """
        INSERT INTO menu_items (item_name, item_price)
        VALUES (%s, %s)
        """
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        connection.close()

    def delete(self):
        connection = psycopg2.connect(
            dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )
        cursor = connection.cursor()

        query = """
        DELETE FROM menu_items
        WHERE item_name = %s
        """
        cursor.execute(query, (self.name,))
        connection.commit()
        connection.close()

    def update(self, new_name, new_price):
        connection = psycopg2.connect(
            dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT
        )
        cursor = connection.cursor()

        query = """
        UPDATE menu_items
        SET item_name = %s, item_price = %s
        WHERE item_name = %s
        """
        cursor.execute(query, (new_name, new_price, self.name))
        connection.commit()
        connection.close()

        #update the object
        self.name = new_name
        self.price = new_price