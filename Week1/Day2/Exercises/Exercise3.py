#Create a dictionary called brand 
brand={
 'name': 'Zara',
 'creation_date': 1975,
 'creator_name': 'Amancio Ortega Gaona',
 'type_of_clothes': ['men', 'women', 'children','home'],
 'international_competitors': ['Gap', 'H&M', 'Benetton'],
 'number_stores': 7000,
 'major_colors': {
    'France': 'blue',
    'Spain': 'red',
    'US': ['pink', 'green']
 }
 }

#2-change the number of stores to 2
brand['number_stores'] = 2
# print the value of the key number_stores
print(brand['number_stores'])
#3-use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
brand['type_of_clothes']
print(f"Zara's clients are: {brand['type_of_clothes']}")
#4-Add a key called country_creation with a value of Spain.
brand['country_creation'] = "Spain"
print(brand['country_creation'])
#5-Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
if 'international_competitors' in brand:
    brand['international_competitors'].append('Desigual')
    print(brand['international_competitors'])
#6-Delete the information about the date of creation.
del brand['creation_date']

#7. Print the last international competitor.
print(brand['international_competitors'][-1])
#8. Print the major clothes colors in the US.
print(brand['major_colors']['US'])
#9. Print the length of the dictionary.
pairs  = len(brand)
print(pairs)
#10. Print the keys of the dictionary.
keys_list = list(brand.keys())
print(keys_list)
#11. Create another dictionary called more_on_zara  
more_on_zara={
    'creation_date': 1975,
    'number_stores': 10000
}
# 12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

brand.update(more_on_zara)
print(brand)
#13. Print the value of the key number_stores. What just happened ?
brand['number_stores'] =10000
print(brand['number_stores'])
#What just happened ? || Given that the key number_stores already existed in the brand dictionary, the value was updated to 10000.