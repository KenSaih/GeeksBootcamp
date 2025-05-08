import random

def campare_numbers(user_number):
    if not 1 <= user_number <= 100:
        return "Please enter a number between 1 and 100."
    
    computer_number = random.randint(1, 100)

    if user_number == computer_number:
        return f"Congratulations! the both numbers are {user_number}"
    else:
        return f"Your number was {user_number}, the computer's number was {computer_number}. Better luck next time!"
 
    

