my_fav_numbers = {1,6,8,9,10}
#Add 2 new numbers to the set.
my_fav_numbers.add(2)
print(my_fav_numbers)
my_fav_numbers.add(3)
print(my_fav_numbers)
# Remove the last number.
my_fav_numbers.remove(10)
print(my_fav_numbers)
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {20,7,15,11}
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)