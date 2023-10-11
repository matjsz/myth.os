const fs = require('fs');

const saveCivs = (civsObj) => {
    const seedData = JSON.stringify(civsObj);

    fs.writeFile('civsSeed.json', seedData, (err) => {
    if (err) {
        console.error('Error saving the seed:', err);
    } else {
        console.log('Seed saved successfully.');
    }
    });
}

module.exports = saveCivs