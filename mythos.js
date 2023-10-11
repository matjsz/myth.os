
// Tribes (groups with names of some people)
// - Nomadic tribe
// - Settler tribe

const worldGen = require("./worldGen")
const { v4: uuidv4 } = require('uuid');

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

// World Info
const width = 100;  // Width of the world
const height = 100; // Height of the world
const chanceToSpawnCiv = 0.6

// Civilizations info (temporary)
const civs = {}

// Generate world
const worldData = worldGen.worldArray

const plantCivs = () => {
    const civCribs = ['b', 'g', 'f']

    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldData[x][y];
            if(civCribs.includes(terrainType)){
                if(Math.random()*100 <= chanceToSpawnCiv){
                    civs[uuidv4()] = {
                        'name': 'Civ',
                        'x': x,
                        'y': y,
                    }
                }
            }
        }
    }
}


// Generate cultures
const createCultures = () => {
    // for(let i=0; i<regions.length; i++){
    //     for(let j=0; j<3; j++){
    //         console.log(i)
    //         let region = regions[0][i][j]
    //         let continent = regionsData[i].name
    //         let culturesForThisRegion = Math.floor(Math.random()*4)+1
            
    //         for(let k=0; k<=culturesForThisRegion; k++){
    //             let thisCulture = {
    //                 name: "Culture",
    //                 regionOfStart: region,
    //                 continentOfStart: continent,
    //                 language: "Culture's Language",
    //                 religion: {
    //                     name: "Culture's Religion",
    //                     type: "Type"
    //                 },
    //                 core: "Core"
    //             }
    //             let thisCultureID = thisCulture.name.toLowerCase()+" "+k

    //             cultures[thisCultureID] = thisCulture
    //         }
    //     }
    // }
}

plantCivs()
console.log(civs)
worldGen.displayCivlizationsMap(civs)