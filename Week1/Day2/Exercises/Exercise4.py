def describe_city(city, country='USA'):
    """Display city and country."""
    print(f"{city} is in {country}")
    describe_city('New York')      
    describe_city('London', 'UK') 
    describe_city('Paris', 'France')