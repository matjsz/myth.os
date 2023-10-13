const loadWorld = require('./loadWorld')
const loadCivs = require('./loadCivs')
const worldGen = require('./worldGen')
const chalk = require('chalk')

const civs = loadCivs()
const worldArray = loadWorld()

// console.log(civs)

// console.log(worldArray[civs['uti'].x][civs['uti'].y])

// worldGen.displayCivlizationsMap(civs, worldArray)

console.log(civs)