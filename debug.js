const loadWorld = require('./loadWorld')
const loadCivs = require('./loadCivs')
const worldGen = require('./worldGen')
const chalk = require('chalk')
const tongueTome = require('./tongueTome')

const civs = loadCivs()
const worldArray = loadWorld()

// console.log(civs)

// console.log(worldArray[civs['uti'].x][civs['uti'].y])

// worldGen.displayCivlizationsMap(civs, worldArray)

function genMonotheist(){
    function getSacredTextName(religionName){
        let titleType = ['teaching', 'sacred'][Math.floor(Math.random()*2)]

        if(titleType == 'teaching'){
            let titleStart = ['The Way Of ', 'The '][Math.floor(Math.random()*2)]

            return titleStart+`${religionName}`
        } else{
            let textName = tongueTome.getWord()

            return textName[0].toLocaleUpperCase()+textName.slice(1)
        }
    }

    let godName = tongueTome.getName(2)
    let religionName = godName+['ianism', 'anism', 'nism', 'ism'][Math.floor(Math.random()*4)]
    let religiousTexts = []
    let religiousTextQuantity = ['various', 'one'][Math.floor(Math.random()*2)]
    if(religiousTextQuantity == 'various'){
        let howMany = Math.floor(Math.random()*2)+1

        for(let i=0; i<howMany; i++){
            let textName = tongueTome.getWord()

            let thisReligiousText = {
                'title': textName[0].toLocaleUpperCase()+textName.slice(1),
                'myth': 'WIP',
                'writtenBy': `${tongueTome.getName(2)} ${tongueTome.getName()}` 
            }

            religiousTexts.push(thisReligiousText)
        }
    } else{
        let thisReligiousText = {
            'title': getSacredTextName(religionName),
            'myth': 'WIP',
            'writtenBy': `${tongueTome.getName(2)} ${tongueTome.getName()}` 
        }

        religiousTexts.push(thisReligiousText)
    }
    let rituals = []
    let ritualsAmmount = Math.floor(Math.random()*5)+1
    for(let i=0; i<ritualsAmmount; i++){
        let ritualName = tongueTome.getWord()

        let thisRitual = {
            'name': ritualName[0].toLocaleUpperCase()+ritualName.slice(1),
            'description': 'WIP'
        }

        rituals.push(thisRitual)
    }

    let religionData = {
        'name': religionName,
        'deities': [godName],
        'religiousTexts': [religiousTexts],
        'practices': rituals
    }

    console.log(religionData)
    console.log(religionData.religiousTexts)
    console.log(religionData.practices)
}

genMonotheist()