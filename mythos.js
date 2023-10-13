
// Tribes (groups with names of some people)
// - Nomadic tribe
// - Settler tribe

const worldGen = require("./worldGen")
const tongueTome = require("./tongueTome")
const { v4: uuidv4 } = require('uuid');
const saveCivs = require("./saveCivs");
const loadCivs = require("./loadCivs");
const loadWorld = require("./loadWorld");

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

// Generate civilizations (STEP 1)
const plantCivs = () => {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
      
    function generateRandomRGB() {
        const red = getRandomNumber(0, 255)
        const green = getRandomNumber(0, 255)
        const blue = getRandomNumber(0, 255)
        return [red, green, blue]
    }

    const civCribs = ['b', 'g', 'f']

    for (let y = 0; y < height; y++) {
        let row = '';
        for (let x = 0; x < width; x++) {
            const terrainType = worldData[x][y];
            if(civCribs.includes(terrainType)){
                if(Math.random()*100 <= chanceToSpawnCiv){
                    let civName = tongueTome.getWord(Math.floor(Math.random()*3+2))
                    let civNameUpper = civName[0].toUpperCase()+civName.slice(1)

                    civs[civName] = {
                        'name': civNameUpper,
                        'color': generateRandomRGB(),
                        'id': civName,
                        'uid': uuidv4(),
                        'tier': 0,
                        'capital': [x, y],
                        'territory': [[x, y]],
                        'culture': {
                            'language': {
                                'name': civNameUpper+'nese',
                                'origin': civName,
                                'family': civNameUpper+'nese',
                                'writingSystem': {
                                    'has': false,
                                    'uses': '',
                                }
                            },
                            'religion': {
                                'name': '',
                                'deities': ['Deity1', 'Deity2'],
                                'religiousTexts': ['Holy Book1', 'Holy Book2'],
                                'practices': ['Ritual1', 'Ritual2'],
                            },
                            'government': {
                                'type': 'tribal',
                                'rulers': 'Tribal Chief Name',
                                'successionRules': ['duel', 'bloodline', 'religious', 'voting'],
                                'laws': [],
                            },
                            'economy': {
                                'has': false,
                                'mainTrades': [],
                                'currency': '',
                                'tradePartners': [],
                            },
                            'technologyTier': {
                                'forging': 0,
                                'chemistry': 0,
                                'writing': 0,
                            },
                            'artAndCulture': {
                                'artForms': [],
                                'culturalSymbols': [],
                                'clothing': '',
                                'festivals': [],
                                'folkloreAndMyths': [],
                            },
                            'militaryAndDefense': {
                                'famousFor': 'Can be archery, cavalry, etc',
                                'weaponsAndArmor': [],
                                'militaryCampaigns': [],
                            },
                            'relationsWithOtherCivs': {
                                'alliances': [],
                                'warsAndConflicts': [],
                                'tradeAgreements': [],
                            },
                            'historicalEvents': {
                                'events': [],
                                'leadersAndFigures': [],
                                'achievements': [],
                                'catastrophesAndCrises': [],
                            },
                            'socialStructure': {
                                'slaveryOrServitude': true,
                                'sameSexRelationships': false,
                                'socialClasses': [],
                            },
                        }
                    }
                }
            }
        }
    }

    saveCivs(civs)
}

// Grow territory
const growCivs = (turns) => {
    const civsData = civs
    const worldSeedData = loadWorld()
    var civsCoords = []


    const containsCoord = (array, subArray) => array.some((item) => item.every((val, index) => val === subArray[index]))

    function worldTargetCoordExpandable(coord, currentTerritory){
        try{
            const terrainGroundAllowed = ['b', 'g', 'f']

            var x = coord[0]
            var y = coord[1]
    
            if(coord[0] < 0){
                return false
            }
            if(coord[1] < 0){
                return false
            }

            if(coord[0] > 0){
                x = coord[0]
            }
    
            if(coord[1] > 0){
                y = coord[1]
            }

            if(x >= 100){
                return false
            }

            if(y >= 100){
                return false
            }
    
            const terrainType = worldSeedData[x][y];
            if(terrainGroundAllowed.includes(terrainType)){
                if(!containsCoord(currentTerritory, coord)){
                    if(!containsCoord(civsCoords, coord)){
                        civsCoords.push(coord)
                        return true
                    }
                } else{
                    return false
                }
            } else{
                return false
            }
        } catch(e){
            console.log(x, y)
            console.log(e)
            return null
        }
    }

    function growCiv(civId){
        let civTerritoryBeforeGrowth = civsData[civId].territory // Civ cells
        
        const civsExpansionLimitsByTier = {
            0: 21,
            1: 77,
            2: 173
        }

        if(civTerritoryBeforeGrowth.length < civsExpansionLimitsByTier[civsData[civId].tier]){
            for(civCellId in civTerritoryBeforeGrowth){
            
                let civCell = civTerritoryBeforeGrowth[civCellId]
                // Check X
                for(let i=0; i<2; i++){
                    
                    if(i%2!=0){
                        let targetCoord = civCell[0]-1
                        
                        if(worldTargetCoordExpandable([targetCoord, civCell[1]], civTerritoryBeforeGrowth)){
                            civsData[civId].territory.push([targetCoord, civCell[1]])
                        }
                    } else {
                        let targetCoord = civCell[0]+1
                        
                        if(worldTargetCoordExpandable([targetCoord, civCell[1]], civTerritoryBeforeGrowth)){
                            civsData[civId].territory.push([targetCoord, civCell[1]])
                        }
                    }  
                }
    
                // Check Y
                for(let i=0; i<2; i++){
                    if(i%2!=0){
                        let targetCoord = civCell[1]-1
                        
                        if(worldTargetCoordExpandable([civCell[0], targetCoord], civTerritoryBeforeGrowth)){
                            civsData[civId].territory.push([civCell[0], targetCoord])
                        }
                    } else {
                        let targetCoord = civCell[1]+1
                        
                        if(worldTargetCoordExpandable([civCell[0], targetCoord], civTerritoryBeforeGrowth)){
                            civsData[civId].territory.push([civCell[0], targetCoord])
                        }
                    }
                }
            }   
        }
    }

    console.log('Starting territory expasion for all civs.\n')
    for(let i=0; i<turns; i++){
        for(let civId in civsData){
            growCiv(civId)
        }
    }

    saveCivs(civsData)

    worldGen.displayCivlizationsMap(civsData, worldData)
}

// plantCivs()
const civsUpdt = loadCivs()
console.log(civsUpdt['owa'].culture)
// worldGen.displayCivlizationsMap(civs, worldData)
// growCivs(50)