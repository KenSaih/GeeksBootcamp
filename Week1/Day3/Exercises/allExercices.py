#Exercise1

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

#Step 1: Create Cat Objects
cat1 = Cat("Mittens", 7)
cat2 = Cat("Whiskers", 5)
cat3 = Cat("Fluffy", 2)
cats = [cat1, cat2, cat3]
#Step 2: Create a Function to Find the Oldest Cat
def find_oldest_cat(cats):
    oldest_cat = cats[0]
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat  

#Step 3: Call the Function and Print the Result 
oldest_cat = find_oldest_cat(cats)
print(f"The oldest cat is {oldest_cat.name} and is {oldest_cat.age} years old.")



#Exercise2

#Step 1: Create the Dog Class
class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    def bark (self):
        print(f"{self.name} goes woof!")


    def jump(self):
       x = self.height * 2
       print(f"{self.name} jumps {x} cm high!")
#Step 2: Create Dog Objects
davids_dog = Dog("Rex", 50)
sarahs_dog  = Dog("Buddy", 60)
#Step 3: Print Dog Details and Call Methods
davids_dog.bark()
davids_dog.jump()
sarahs_dog .bark()
sarahs_dog .jump() 
#Step 4: Compare Dog Sizes
def compare_dogs_size(davids_dog, sarahs_dog):
    if davids_dog.height > sarahs_dog.height:
        print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
    elif davids_dog.height < sarahs_dog.height:
        print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")
    else:
        print(f"{davids_dog.name} and {sarahs_dog.name} are the same height.")

print (compare_dogs_size (davids_dog, sarahs_dog)) 
        
#Exercise3

class Song:
    def __init__(self , lyrics):
      self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line) 

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()



   
   
#Exercise4

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    #add 
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to {self.name}")
        else:
            print(f"{new_animal} is already in {self.name}")
    
    def get_animals(self):
        print("\nAnimals in", self.name + ":")
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold from {self.name}")
        else:
            print(f"{animal_sold} is not in {self.name}")
    
    def sort_animals(self):
        sorted_animals = {}
        for animal in sorted(self.animals):
            first_letter = animal[0]
            if first_letter in sorted_animals:
                if isinstance(sorted_animals[first_letter], list):
                    sorted_animals[first_letter].append(animal)
                else:
                    sorted_animals[first_letter] = [sorted_animals[first_letter], animal]
            else:
                sorted_animals[first_letter] = animal
        return sorted_animals
    
    def get_groups(self):
        sorted_animals = self.sort_animals()
        print("\nAnimal groups in", self.name + ":")
        for letter, animals in sorted_animals.items():
            print(f"{letter}: {animals}")

# instance
new_york_zoo = Zoo("Central Park Zoo")

# Add animals
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Eel")
new_york_zoo.add_animal("Emu")

new_york_zoo.get_animals()
new_york_zoo.sell_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.get_groups()
