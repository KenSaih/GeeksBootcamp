#Exercice1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result = zip(keys, values)
dictionary = dict(result)
print(dictionary)

#Exercice2

#Without asking the user for the ages of the family members, create a dictionary with the names and ages of the family members.
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# Initialize an empty dictionary to store names of family members and their ages
family = {}

# Ask the user for the number of family members
num_members = int(input("Enter the number of family members: "))

# Collect names and ages from the user
for _ in range(num_members):
    name = input("Enter the name of the family member: ").strip()
    age = int(input(f"Enter the age of {name}: "))
    family[name] = age

# Initialize total cost
total_cost = 0

# Iterate through the family dictionary
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    
    # cost for each family member
    print(f"{name.capitalize()} has to pay: ${cost}")
    
    # Add to the total cost
    total_cost += cost

# total cost
print(f"The family's total cost for the movies is: ${total_cost}")

#Exercice3

#Create a dictionary called brand 
brand={
 'name': 'Zara',
 'creation_date': 1975,
 'creator_name': 'Amancio Ortega Gaona',
 'type_of_clothes': ['men', 'women', 'children','home'],
 'international_competitors': ['Gap', 'H&M', 'Benetton'],
 'number_stores': 7000,
 'major_colors': {
    'France': 'blue',
    'Spain': 'red',
    'US': ['pink', 'green']
 }
 }

#2-change the number of stores to 2
brand['number_stores'] = 2
# print the value of the key number_stores
print(brand['number_stores'])
#3-use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
brand['type_of_clothes']
print(f"Zara's clients are: {brand['type_of_clothes']}")
#4-Add a key called country_creation with a value of Spain.
brand['country_creation'] = "Spain"
print(brand['country_creation'])
#5-Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')
    print(brand['international_competitors'])
#6-Delete the information about the date of creation.
del brand['creation_date']

#7. Print the last international competitor.
print(brand['international_competitors'][-1])
#8. Print the major clothes colors in the US.
print(brand['major_colors']['US'])
#9. Print the length of the dictionary.
pairs  = len(brand)
print(pairs)
#10. Print the keys of the dictionary.
keys_list = list(brand.keys())
print(keys_list)
#11. Create another dictionary called more_on_zara  
more_on_zara={
    'creation_date': 1975,
    'number_stores': 10000
}
# 12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

brand.update(more_on_zara)
print(brand)
#13. Print the value of the key number_stores. What just happened ?
brand['number_stores'] =10000
print(brand['number_stores'])
#What just happened ? || Given that the key number_stores already existed in the brand dictionary, the value was updated to 10000.

#Exercice4

def describe_city(city, country='USA'):
    """Display city and country."""
    print(f"{city} is in {country}")
    describe_city('New York')      
    describe_city('London', 'UK') 
    describe_city('Paris', 'France')

#Exercice5

import random

def campare_numbers(user_number):
    if not 1 <= user_number <= 100:
        return "Please enter a number between 1 and 100."
    
    computer_number = random.randint(1, 100)

    if user_number == computer_number:
        return f"Congratulations! the both numbers are {user_number}"
    else:
        return f"Your number was {user_number}, the computer's number was {computer_number}. Better luck next time!"
 
    

#Exercice6

def make_shirt(size='large', text='I love Python'):
    """Prints the size and message of the shirt."""
    print(f"The shirt size is {size} and the message is '{text}'.")
    make_shirt()
    make_shirt(size='medium')
    make_shirt(size='small', text='Python is awesome!')
    make_shirt(size='extra large', text='Hello World!')
    make_shirt()


#Exercice7

import random

def get_season_from_month(month):
    if month in [12, 1, 2]:
        return 'winter'
    elif month in [3, 4, 5]:
        return 'spring'
    elif month in [6, 7, 8]:
        return 'summer'
    else:
        return 'autumn'

def get_random_temp(season):
    temp_ranges = {
        'winter': (-10, 16),
        'spring': (0, 23),
        'summer': (16, 40),
        'autumn': (8, 28)
    }
    min_temp, max_temp = temp_ranges[season]
    return round(random.uniform(min_temp, max_temp), 1)

def get_temperature_advice(temp):
    if temp < 0:
        return " that's freezing! Wear some extra layers today"
    elif 0 <= temp < 16:
        return "Quite chilly! Don't forget your coat"
    elif 16 <= temp < 23:
        return "Pleasant temperature. Perfect for a light jacket!"
    elif 23 <= temp < 32:
        return "Warm weather! Time for t-shirts"
    else:
        return "Hot day! Don't forget to stay hydrated"

def main():
    try:
        month = int(input("Enter the month number (1-12): "))
        if not 1 <= month <= 12:
            print("Invalid month. Please enter a number between 1 and 12.")
            return
            
        season = get_season_from_month(month)
        temperature = get_random_temp(season)
        
        print(f"\nFor month {month} ({season})")
        print(f"The temperature right now is {temperature} degrees Celsius.")
        print(get_temperature_advice(temperature))
        
    except ValueError:
        print("Please enter a valid number between 1 and 12.")

if __name__ == "__main__":
    main()


#Exercice8

def play_quiz():
    data = [
        {
            "question": "What is Baby Yoda's real name?",
            "answer": "Grogu"
        },
        {
            "question": "Where did Obi-Wan take Luke after his birth?",
            "answer": "Tatooine"
        },
        {
            "question": "What year did the first Star Wars movie come out?",
            "answer": "1977"
        },
        {
            "question": "Who built C-3PO?",
            "answer": "Anakin Skywalker"
        },
        {
            "question": "Anakin Skywalker grew up to be who?",
            "answer": "Darth Vader"
        },
        {
            "question": "What species is Chewbacca?",
            "answer": "Wookiee"
        }
    ]
    
    correct_answers = 0
    wrong_answers = []
    
    print("\nWelcome to the Star Wars Quiz!")
    print("Answer these questions about Star Wars. May the Force be with you!\n")
    
    for question_data in data:
        print(question_data["question"])
        user_answer = input("Your answer: ").strip()
        
        if user_answer.lower() == question_data["answer"].lower():
            correct_answers += 1
            print("Correct!\n")
        else:
            wrong_answers.append({
                "question": question_data["question"],
                "user_answer": user_answer,
                "correct_answer": question_data["answer"]
            })
            print("Wrong!\n")
    
    return correct_answers, wrong_answers

def show_results(correct_answers, wrong_answers):
    total_questions = 6
    print("\n=== Quiz Results ===")
    print(f"Correct answers: {correct_answers}/{total_questions}")
    print(f"Incorrect answers: {len(wrong_answers)}/{total_questions}")
    
    if wrong_answers:
        print("\nQuestions you got wrong:")
        for wrong in wrong_answers:
            print(f"\nQuestion: {wrong['question']}")
            print(f"Your answer: {wrong['user_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}")
    
    if len(wrong_answers) > 3:
        print("\nYou had more than 3 wrong answers. You should try again!")
        if input("\nWould you like to play again? (yes/no): ").lower().startswith('y'):
            main()
    else:
        print("\nWell done! You're a true Star Wars fan!")

def main():
    correct_answers, wrong_answers = play_quiz()
    show_results(correct_answers, wrong_answers)

if __name__ == "__main__":
    main()
