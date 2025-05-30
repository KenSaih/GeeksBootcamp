const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

/*Le code utilise la déstructuration d'objets et de tableaux. Le résultat affiché sera :

I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

Explication : La déstructuration permet d'extraire `name`, `country`, `city`, et les coordonnées (`lat` et `lng`) de l'objet `person`.*/