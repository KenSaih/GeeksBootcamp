heightCm = input("Enter your height in centimeters: ")
try:
    heightCm = int(heightCm)
    if heightCm > 145:
        print("You're tall enough to ride!")
    else:
        print("You need to drink some milk to grow more!")
except ValueError:
    print("Please enter a valid number for your height.")