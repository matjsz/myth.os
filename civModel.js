civs[civName] = {
    'name': civName[0].toUpperCase()+civName.slice(1),
    'color': generateRandomRGB(),
    'id': civName,
    'uid': uuidv4(),
    'tier': 0,
    'capital': [x, y],
    'territory': [[x, y]],
    'culture': {
        'language': {
            'name': 'Language Name',
            'origin': 'Tribe that created it',
            'family': 'Linguistic family that it belongs',
            'writingSystem': {
                'has': false,
                'uses': 'Can be: semantic symbols | phonetic symbols | cursive',
            }
        },
        'religion': {
            'name': 'Religion Name',
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
            'clothing': 'Panawee',
            'festivals': [],
            'folkloreAndMyths': [{
                'name': 'The Forest Walker',
                'tale': '...'
            }],
        },
        'militaryAndDefense': {
            'famousFor': 'Can be archery, cavalry, etc',
            'weaponsAndArmor': [],
            'militaryCampaigns': [],
        },
        'relationsWithOtherCivs': {
            'alliances': [{
                'name': 'Ugovind Empire',
                'startedIn': 435,
                'startedBy': 'Can be by lostWar, agreement or threatening'
            }],
            'warsAndConflicts': [{
                'name': 'Grant Empire',
                'startedIn': 438,
                'lastedUntil': 'ongoing',
                'startedBy': 'Grant Empire or it can be Our Empire',
                'won': false || true
            }],
            'tradeAgreements': ['Ugovind Empire'],
        },
        'historicalEvents': {
            'events': [{
                'name': 'The Fall of The Emperor',
                'description': 'The Emperor was killed by the opposition.',
                'happenedIn': 235,
            }],
            'leadersAndFigures': [{
                'name': 'The Emperor',
                'role': 'ruler',
                'bornIn': 202,
                'dead': true,
                'deathIn': 235
            }],
            'achievements': [],
            'catastrophesAndCrises': [],
        },
        'socialStructure': {
            'slaveryOrServitude': false || true,
            'sameSexRelationships': false,
            'socialClasses': [],
        },
    }
}