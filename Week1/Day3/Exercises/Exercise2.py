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
        