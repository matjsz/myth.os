const loadWorld = require('./loadWorld')
const loadCivs = require('./loadCivs')
const worldGen = require('./worldGen')
const chalk = require('chalk')

const civs = loadCivs()
const worldArray = loadWorld()

// console.log(civs)

// console.log(worldArray[civs['uti'].x][civs['uti'].y])

// worldGen.displayCivlizationsMap(civs, worldArray)

// Function to generate a random number between a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
  
function generateRandomRGB() {
    const red = getRandomNumber(0, 255)
    const green = getRandomNumber(0, 255)
    const blue = getRandomNumber(0, 255)
    return [red, green, blue]
}
  
for(let i=0; i<10; i++){
    const randomRGBColor = generateRandomRGB()
  
    console.log(chalk.bgRgb(randomRGBColor[0], randomRGBColor[1], randomRGBColor[2]).white('test'))
}