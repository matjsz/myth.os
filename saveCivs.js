const fs = require('fs');

const saveCivs = (civsObj) => {
    const seedData = JSON.stringify(civsObj);

    fs.writeFileSync('civsSeed.json', seedData, 'utf-8')
    console.log('Civs seed saved successfully.')
}

module.exports = saveCivs