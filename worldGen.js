// Import libraries
const Noise = require('noisejs').Noise;
const chalk = require('chalk');
const saveWorld = require('./saveWorld.js')

// Initialize the noise generator
const noise = new Noise(Math.random())

// Constants for grid size and parameters
const width = 250;  // Width of the world
const height = 250; // Height of the world
const scale = 0.005; // Adjust the scale to control terrain roughness
const octaves = 12; // Number of octaves for Perlin noise
const persistence = 0.5; // Persistence for Perlin noise

const generateWorld = () => {
    // Create an empty 2D array to represent the world
    const worldMap = new Array(width);
    for (let x = 0; x < width; x++) {
        worldMap[x] = new Array(height);
    }

    // Generate a heightmap using Perlin noise
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const noiseValue = generateNoise(x, y);
            worldMap[x][y] = noiseValue;
        }
    }

    // Define terrain types with threshold values as an array of objects
    const terrainTypes = [
        { threshold: 0.0, type: "w" },
        { threshold: 0.2, type: "b" },
        { threshold: 0.4, type: "g" },
        { threshold: 0.6, type: "f" },
        { threshold: 0.8, type: "m" },
        { threshold: 1.0, type: "s" },
    ];
    
    // Create an array representing terrain types based on the heightmap
    const worldArray = new Array(width);
    for (let x = 0; x < width; x++) {
        worldArray[x] = new Array(height);
        for (let y = 0; y < height; y++) {
            const heightValue = worldMap[x][y];
            let terrainType = "s";

            for (const terrain of terrainTypes) {
                if (heightValue <= terrain.threshold) {
                    terrainType = terrain.type;
                    break;
                }
            }

            worldArray[x][y] = terrainType;
        }
    }
    

    // Create a function to generate Perlin noise
    function generateNoise(x, y) {
        let amplitude = 1;
        let frequency = 1;
        let noiseHeight = 0;

        for (let i = 0; i < octaves; i++) {
            const xCoord = x * scale * frequency;
            const yCoord = y * scale * frequency;
            const perlinValue = noise.simplex2(xCoord, yCoord);
            noiseHeight += perlinValue * amplitude;

            amplitude *= persistence;
            frequency *= 2;
        }

        return noiseHeight;
    }

    // Saves the entire world map array into a JSON file as a seed
    saveWorld(worldArray)

    return worldArray
}

// Just a detail to keep track for later: specific terrain types can be accessed by using worldArray[x][y], where x and y are the coordinates.

// Define characters to represent terrain types
const terrainCharacters = {
    'w': '~',
    'b': '.',
    'g': ',',
    'f': '"',
    'm': '^',
    's': '-',
};

// Define characters to represent terrain "walkabilty"
// '-' = walkable
// '.' = barely walkable
// ' ' = unwalkable
const terrainCharactersWalkability = {
    'w': ' ',
    'b': '.',
    'g': '-',
    'f': '-',
    'm': '.',
    's': ' ',
};

// This one is obvious.
const terrainCharactersSailability = {
	'w': '-',
    'b': ' ',
    'g': ' ',
    'f': ' ',
    'm': ' ',
    's': ' ',
}

const terrainEmojis = {
	'w': '🌊',
    'b': '🏝️',
    'g': '🌾',
    'f': '🌲',
    'm': '⛰️',
    's': '❄️',
}

const coloredCharacters = {
    'w': chalk.bgBlue.blue('~~'),
    'b': chalk.bgYellow.yellow('..'),
    'g': chalk.bgGreenBright.greenBright(',,'),
    'f': chalk.bgGreen.green('""'),
    'm': chalk.bgRed.red('^^'),
    's': chalk.bgWhite.white(',,')
}
  
// Display the world map in the command prompt
const displayWorldMap = (worldArray) => {
    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldArray[x][y];
            const character = terrainCharacters[terrainType];
            row += character;
        }
        console.log(row);
    }
}

const displayTerrain = (worldArray) => {
    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldArray[x][y];
            const character = terrainCharactersWalkability[terrainType];
            row += character;
        }
        console.log(row);
    }
}

const displaySea = (worldArray) => {
    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldArray[x][y];
            const character = terrainCharactersSailability[terrainType];
            row += character;
        }
        console.log(row);
    }
}

const displayEmojiMap = (worldArray) => {
    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldArray[x][y];
            const character = terrainEmojis[terrainType];
            row += character;
        }
        console.log(row);
    }
}

const displayColoredMap = (worldArray) => {
    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldArray[x][y];
            const character = coloredCharacters[terrainType];
            row += character;
        }
        console.log(row);
    }
}

const displayCivlizationsMap = (civs, worldArray) => {
    function coordsAreEqual(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false
            }
        }
        return true
      }

    const containsCoord = (array, subArray) => array.some((item) => item.every((val, index) => val === subArray[index]))
    let coordsByCivId = {}
    let allTheCoords = []
    let capitalsByCivId = {}

    for (let civsId in civs){
        coordsByCivId[civsId] = civs[civsId].territory
        capitalsByCivId[civsId] = civs[civsId].capital
        for(let civCellId in civs[civsId].territory){
            allTheCoords.push(civs[civsId].territory[civCellId])
        }
    }

    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            var thisCoord = [x, y]
            if(containsCoord(allTheCoords, thisCoord)){
                for(civId in coordsByCivId){
                    let civColor = civs[civId].color
                    if(coordsByCivId[civId].length == 1){
                        if(coordsAreEqual(coordsByCivId[civId][0], thisCoord)){
                            row +=  `${chalk.bgRgb(civColor[0], civColor[1], civColor[2]).white(civs[civId].name[0])}${chalk.bgRgb(civColor[0], civColor[1], civColor[2]).white(civs[civId].name[0])}`
                        } 
                    } else{
                        if(containsCoord(coordsByCivId[civId], thisCoord)){
                            if(coordsAreEqual(capitalsByCivId[civId], thisCoord)){
                                row += chalk.bgRgb(civColor[0], civColor[1], civColor[2]).bold("**")
                            } else {
                                row += `${chalk.bgRgb(civColor[0], civColor[1], civColor[2]).white(civs[civId].name[0])}${chalk.bgRgb(civColor[0], civColor[1], civColor[2]).white(civs[civId].name[0])}`
                            }
                        }
                    }
                }
            } else {
                const terrainType = worldArray[x][y];
                const character = coloredCharacters[terrainType];
                row += character;
            }
        }
        console.log(row);
    }

    console.log("\nCivilizations:\n")

    for(civId in civs){
        let civColor = civs[civId].color
        console.log(`${chalk.bgRgb(civColor[0], civColor[1], civColor[2]).white(civs[civId].name[0])}${chalk.bgRgb(civColor[0], civColor[1], civColor[2]).white(civs[civId].name[0])} - ${civs[civId].name}`)
    }
}

// worldGen package
const worldGen = {
    generateWorld: generateWorld,
    displayMap: displayWorldMap,
	displayTerrain: displayTerrain,
	displaySea: displaySea,
	displayEmojiMap: displayEmojiMap,
    displayColoredMap: displayColoredMap,
    displayCivlizationsMap, displayCivlizationsMap
}

module.exports = worldGen