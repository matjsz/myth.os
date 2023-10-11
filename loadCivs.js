const fs = require('fs');

const loadCivs = () => {
    const civsData = fs.readFileSync('civsSeed.json')
    const civs = JSON.parse(civsData)
    console.log('Civilizations object recreated from seed.')
    return civs
}

module.exports = loadCivs