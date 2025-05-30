function estAnagramme(chaine1, chaine2) {
    // Supprimer les espaces et convertir en minuscules
    const nettoyer = (str) => str.replace(/\s/g, '').toLowerCase();
    
    const chaineNettoyee1 = nettoyer(chaine1);
    const chaineNettoyee2 = nettoyer(chaine2);
    
    // Si les longueurs sont différentes, ce ne peut pas être un anagramme
    if (chaineNettoyee1.length !== chaineNettoyee2.length) {
        return false;
    }
    
    // Trier les caractères et comparer
    const trier = (str) => str.split('').sort().join('');
    
    return trier(chaineNettoyee1) === trier(chaineNettoyee2);
}

// Exemples d'utilisation
console.log(estAnagramme("Astronomer", "Moon starer")); // true
console.log(estAnagramme("School master", "The classroom")); // true
console.log(estAnagramme("The Morse Code", "Here come dots")); // true
console.log(estAnagramme("Hello", "World")); // false
console.log(estAnagramme("Listen", "Silent")); // true
console.log(estAnagramme("Test", "Taste")); // false