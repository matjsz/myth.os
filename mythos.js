
// Tribes (groups with names of some people)
// - Nomadic tribe
// - Settler tribe

const worldGen = require("./worldGen")
const tongueTome = require("./tongueTome")
const { v4: uuidv4 } = require('uuid');
const saveCivs = require("./saveCivs");

// Nations
// - Kingdom
// - Empire

// -------------------------------------------------------

// Culture
// - Language
// - Religion
// - Core - The culture's core (religion, military, art [stories, painting, music | can be religion-based], knowledge [astronomy, nature, medicine | can be religion-based])

// -------------------------------------------------------

// The evolution of a Tribe to a Nation can be caused by:
// - Conquest of other tribes
// - Union of other tribes
// - Conquest by a kingdom
// - Conquest by an empire

// So a Tribe can be:
// - Turned into a kingdom
// - Indexed into a kingdom or an empire and still be the same tribe
// - Indexed into a kingdom or an empire and be destroyed by the conquerors

// World Info and Global Vars
const width = 100;  // Width of the world
const height = 100; // Height of the world
const chanceToSpawnCiv = 0.6
const civTiers = {
    0: 'Tribe',
    1: 'Kingdom',
    2: 'Empire'
}

// Civilizations info (temporary)
const civs = {}

// Generate world
const worldData = worldGen.generateWorld()

const plantCivs = () => {
    const civCribs = ['b', 'g', 'f']

    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldData[x][y];
            if(civCribs.includes(terrainType)){
                if(Math.random()*100 <= chanceToSpawnCiv){
                    let civName = tongueTome.getWord(Math.floor(Math.random()*3+2))

                    civs[civName] = {
                        'name': civName[0].toUpperCase()+civName.slice(1),
                        'id': civName,
                        'uid': uuidv4(),
                        'tier': 0,
                        'x': x,
                        'y': y,
                    }
                }
            }
        }
    }

    saveCivs(civs)
}

plantCivs()
console.log(civs)
worldGen.displayCivlizationsMap(civs, worldData)