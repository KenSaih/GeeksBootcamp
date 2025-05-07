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
