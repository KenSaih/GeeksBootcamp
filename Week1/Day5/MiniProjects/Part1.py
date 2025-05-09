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