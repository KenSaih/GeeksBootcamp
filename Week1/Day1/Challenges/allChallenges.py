#Challenge1

# Ask the user for a number and a length
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

# Generate the list of multiples
multiples = [number * i for i in range(1, length + 1)]

# Print the list of multiples
print("The list of multiples is:", multiples)

#Challenge2

# Ask the user for a string
user_string = input("Enter a string: ")

# Remove duplicate consecutive letters
new_string = ""
for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i - 1]:
        new_string += user_string[i]

# Display the new string
print("The new string without consecutive duplicates is:", new_string)