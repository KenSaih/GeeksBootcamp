#Exercise1

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal_cat = Bengal("Simba", 3)
chartreux_cat = Chartreux("Luna", 5)
siamese_cat = Siamese("Milo", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()

#Exercise2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_strength = self.run_speed() * self.weight
        other_strength = other_dog.run_speed() * other_dog.weight

        if my_strength > other_strength:
            return f"{self.name} wins the fight!"
        elif my_strength < other_strength:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"

dog1 = Dog("Alexa", 3, 15)
dog2 = Dog("Buddy", 2, 20)
dog3 = Dog("Rocky", 4, 25)

print(dog1.bark())  
print(dog2.run_speed())  
print(dog1.fight(dog2))  

 
#Exercise3

from Exercise2 import Dog  
import random  

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dog_names):
        names = ", ".join(dog_names)
        print(f"{names} all play together.")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet.")

pet_dog = PetDog("Fido", 2, 10)
pet_dog.train()
pet_dog.play("Alexa", "Buddy", "Rocky")
pet_dog.do_a_trick()

#Exercise4

class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Félicitations ! {kwargs['name']} est né dans la famille {self.last_name}.")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False  # Si le membre n'existe pas

    def family_presentation(self):
        print(f" Famille {self.last_name}:")
        for member in self.members:
            print(f"  - {member['name']}, {member['age']} ans, {member['gender']}")


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] < 18:
                    raise Exception(f"{name} est trop jeune pour utiliser son pouvoir !")
                print(f" {name} utilise son pouvoir : {member['power']} !")
                return
        print(f" {name} n'est pas dans la famille.")

    def incredible_presentation(self):
        print("\n* Voici notre famille INCROYABLE ! *")
        super().family_presentation()
        for member in self.members:
            print(f"  Super-héros: {member['incredible_name']}, Pouvoir: {member['power']}")
incredibles_family = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])
incredibles_family.incredible_presentation()
try:
    incredibles_family.use_power("Michael")
    incredibles_family.use_power("Sarah")
except Exception as e:
    print(e)
incredibles_family.born(name="Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

incredibles_family.incredible_presentation()