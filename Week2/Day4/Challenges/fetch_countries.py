import requests
import psycopg2
import random

DB_NAME = "restcountries"
USER = "postgres"
PASSWORD = "azer"
HOST = "localhost"
PORT = "5432"

#api url
API_URL = "https://restcountries.com/v3.1/all"

def get_countries():
    # get data
    response = requests.get(API_URL)
    if response.status_code == 200:
        return response.json()
    else:
        print("rrror fetching data")
        return []

def pick_random_countries(countries, count=10):
    return random.sample(countries, count)

def insert_countries(countries):
    connection = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
    cursor = connection.cursor()

    query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"
    
    for country in countries:
        cursor.execute(query, (
            country.get("name", {}).get("common", "Unknown"),
            country.get("capital", ["Unknown"])[0], #defaulting to "Unknown" if missing
            country.get("flags", {}).get("png", "Unknown"),
            country.get("subregion", "Unknown"),
            country.get("population", 0)
        ))
    
    connection.commit()
    connection.close()
    print("countries added!!")

all_countries = get_countries()
if all_countries:
    random_countries = pick_random_countries(all_countries)
    insert_countries(random_countries)