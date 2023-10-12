const fs = require('fs');

const loadWorld = () => {
    try {
        const worldData = fs.readFileSync('worldSeed.json', 'utf8')
        const worldArray = JSON.parse(worldData)
        console.log('World array recreated from seed.')
        return worldArray
    } catch (error) {
        console.error('Error loading world data:', error)
        return null
    }
}

module.exports = loadWorld