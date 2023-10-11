const fs = require('fs');

fs.readFile('worldSeed.json', (err, data) => {
    if (err) {
        console.error('Error reading the seed:', err);
    } else {
        const worldArray = JSON.parse(data);
        console.log('World array recreated from seed.');
    }
});
