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