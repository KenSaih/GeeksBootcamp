sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []

# Informing the customers about the unavailability of pastrami sandwiches
print("The deli has run out of pastrami sandwiches.")

# Removing all occurrences of "Pastrami sandwich" from sandwich_orders
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")


finished_sandwiches = []

# Preparing the sandwiches and adding them to finished_sandwiches
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"I made your {current_sandwich}.")
    finished_sandwiches.append(current_sandwich)

# Listing all the sandwiches that were made
print("\nAll sandwiches have been made.")
print("The following sandwiches have been made:")
for sandwich in finished_sandwiches:
    print(sandwich)
