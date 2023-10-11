// Import the noise library
const Noise = require('noisejs').Noise;
const saveWorld = require('./saveWorld.js')

// Initialize the noise generator
const noise = new Noise(Math.random())

// Constants for grid size and parameters
const width = 100;  // Width of the world
const height = 100; // Height of the world
const scale = 0.02; // Adjust the scale to control terrain roughness
const octaves = 6; // Number of octaves for Perlin noise
const persistence = 0.5; // Persistence for Perlin noise

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
	{ threshold: 1.0, type: "u" },
];
  
  	// Create an array representing terrain types based on the heightmap
	const worldArray = new Array(width);
	for (let x = 0; x < width; x++) {
		worldArray[x] = new Array(height);
		for (let y = 0; y < height; y++) {
			const heightValue = worldMap[x][y];
			let terrainType = "u";

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

// Just a detail to keep track for later: specific terrain types can be accessed by using worldArray[x][y], where x and y are the coordinates.

// Define characters to represent terrain types
const terrainCharacters = {
    'w': '~',
    'b': '.',
    'g': ',',
    'f': '"',
    'm': '^',
    'u': ' ',
};
  
// Display the world map in the command prompt
const displayWorldMap = () => {
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

// Saves the entire world map array into a JSON file as a seed
saveWorld(worldArray)

// worldGen package
const worldGen = {
    worldArray: worldArray,
    displayMap: displayWorldMap
}

module.exports = worldGen