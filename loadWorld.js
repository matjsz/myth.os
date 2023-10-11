const fs = require('fs');

const loadWorld = () => {
    const worldData = fs.readFileSync('worldSeed.json')
    const worldArray = JSON.parse(worldData)
    console.log('World array recreated from seed.')
    return worldArray
}

module.exports = loadWorld