#Part1

import random

class Game:
    def get_user_item(self):
        """Demander à l'utilisateur de choisir entre rock, paper, ou scissors."""
        while True:
            user_choice = input("Select rock, Paper, or scissors: ").lower()
            if user_choice in ['rock', 'Paper', 'scissors']:
                return user_choice
        

    def get_computer_item(self):
        """Choisir rock, paper, ou scissors aléatoirement pour l'ordinateur."""
        return random.choice(['rock', 'Paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        """Comparer les choix et déterminer le résultat du jeu."""
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "win"
        else:
            return "loss"

    def play(self):
        """Jouer une partie, afficher le résultat et retourner le résultat."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        # Affichage des résultats
        print(f"You chose : {user_item}. The computer chose : {computer_item}. Result : {result}")

        return result
    
#Part2

from Part1 import Game

def get_user_menu_choice():
    """Affiche le menu et demande à l'utilisateur de choisir une option."""
    while True:
        print("\nMenu :")
        print("(g) Play a new game")
        print("(x) Show scores and exit")
        choice = input(": ").strip().lower()
        if choice in ['g', 'x']:
            return choice
    

def print_results(results):
    """Affiche les résultats du jeu."""
    print("\nGame results:")
    print(f"You won {results['win']} times")
    print(f"You lost {results['loss']} times")
    print(f"You drew {results['draw']} times")
    print("Thank you for playing!")

def main():
    """Fonction principale pour jouer au jeu et gérer les scores."""
    results = {"win": 0, "loss": 0, "draw": 0}

    while True:
        choice = get_user_menu_choice()

        if choice == 'g':
            game = Game()
            result = game.play()
            if result == "win":
                results["win"] += 1
            elif result == "loss":
                results["loss"] += 1
            else:
                results["draw"] += 1

        elif choice == 'x':
            print_results(results)
            break

if __name__ == "__main__":
    main()