const fs = require('fs');

const saveWorld = (worldArray) => {
    const seedData = JSON.stringify(worldArray);

    fs.writeFile('worldSeed.json', seedData, (err) => {
    if (err) {
        console.error('Error saving the seed:', err);
    } else {
        console.log('Seed saved successfully.');
    }
    });
}

module.exports = saveWorld