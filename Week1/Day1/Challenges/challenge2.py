# Ask the user for a string
user_string = input("Enter a string: ")

# Remove duplicate consecutive letters
new_string = ""
for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i - 1]:
        new_string += user_string[i]

# Display the new string
print("The new string without consecutive duplicates is:", new_string)