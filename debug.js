const loadWorld = require('./loadWorld')
const loadCivs = require('./loadCivs')

const civs = loadCivs()
const worldArray = loadWorld()

console.log(civs)

console.log(worldArray[civs['38705e3d-644c-4b0d-8615-7ef3db9f423d'].x][civs['38705e3d-644c-4b0d-8615-7ef3db9f423d'].y])