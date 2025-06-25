// read-directory.js
const fs = require('fs');

fs.readdir('.', (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }

    console.log('📁 Files in this directory:');
    files.forEach(file => {
        console.log('•', file);
    });
});