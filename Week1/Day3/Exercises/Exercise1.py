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



