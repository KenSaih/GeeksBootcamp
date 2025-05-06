# Ask the user for a number and a length
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

# Generate the list of multiples
multiples = [number * i for i in range(1, length + 1)]

# Print the list of multiples
print("The list of multiples is:", multiples)