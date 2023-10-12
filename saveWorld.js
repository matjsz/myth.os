const fs = require('fs');

const saveWorld = (worldArray) => {
    const seedData = JSON.stringify(worldArray)

    fs.writeFileSync('worldSeed.json', seedData, 'utf-8')
    console.log('Seed saved successfully.')
}

module.exports = saveWorld