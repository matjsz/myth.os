
// Tribes (groups with names of some people)
// - Nomadic tribe
// - Settler tribe

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

// -------------------------------------------------------

// The space in which it happens will be separated in:

// northernRegions = [RegionA, RegionB]
// centerRegions = [RegionC, RegionD]
// southRegions = [RegionE, RegionF]
// westernRegions = [RegionG, RegionH]
// easternRegions = [RegionI, RegionJ]

// RegionA can access RegionB easily
// RegionA can access RegionC going south
// RegionA can access RegionE going more into the south
// RegionA can access RegionG by going south and then west
// RegionA can access RegionI by going south and then east

//                                                |A, B|
//                                     |G, H| |C, D| |I, J|
//                                                |E, F|

// Or... I could do a matrix.

// regions = [
//   [
//     [[0, 0], [0, 0], [0, 0]], 
//     [[0, 0], [0, 0], [0, 0]],
//     [[0, 0], [0, 0], [0, 0]]
//   ],
// ]

// And maybe:

// regions = [
//   [
//     [[0, 0], [0, 0], [0, 0]], 
//     [[0, 0], [0, 0], [0, 0]],
//     [[0, 0], [0, 0], [0, 0]]
//   ],
//   [
//     [[0, 0], [0, 0], [0, 0]], 
//     [[0, 0], [0, 0], [0, 0]],
//     [[0, 0], [0, 0], [0, 0]]
//   ],
//   [
//     [[0, 0], [0, 0], [0, 0]], 
//     [[0, 0], [0, 0], [0, 0]],
//     [[0, 0], [0, 0], [0, 0]]
//   ],
// ]

regions[0] = continentA
regions[1] = continentB
regions[2] = continentC

var regions = []
var regionsData = {}
var cultures = {}

// Generate regions

const createWorld = () => {
    let continents = Math.floor(Math.random()*3)+1
    for(let i=0; i<continents; i++){
        regions.push([
            ['NW', 'NN', 'NE'],
            ['WW', 'CC', 'EE'],
            ['SW', 'SS', 'SE']
        ])
        regionsData[i] = {
            name: "",
            biome: [""]
        }
    }

    console.log(regions, regionsData)
}

createWorld()

// Generate cultures

const createCultures = () => {
    for(let i=0; i<regions.length; i++){
        for(let j=0; j<3; j++){
            console.log(i)
            let region = regions[0][i][j]
            let continent = regionsData[i].name
            let culturesForThisRegion = Math.floor(Math.random()*4)+1
            
            for(let k=0; k<=culturesForThisRegion; k++){
                let thisCulture = {
                    name: "Culture",
                    regionOfStart: region,
                    continentOfStart: continent,
                    language: "Culture's Language",
                    religion: {
                        name: "Culture's Religion",
                        type: "Type"
                    },
                    core: "Core"
                }
                let thisCultureID = thisCulture.name.toLowerCase()+" "+k

                cultures[thisCultureID] = thisCulture
            }
        }
    }

    console.log(cultures)
}

createCultures()