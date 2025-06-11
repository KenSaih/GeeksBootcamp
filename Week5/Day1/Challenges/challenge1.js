function makeAllCaps(makeCaps) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(makeCaps)) {
            const allCaps = makeCaps.map(item => item.toUpperCase());
            resolve(allCaps);
        } else {
            reject(new Error("Input is not an array"));
        }
    });
    
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words)) {
            const sortedWords = words.sort();
            resolve(sortedWords);
        } else {
            reject(new Error("Input is not an array"));
        }
    });

    
}

// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))