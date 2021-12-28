let config = {
    'email': 'email@domain.org',
    'pass':'password',
    "routine": [
        [''], // sunday 
        ['math','geo','comp','chem'], // monday 
        ['hce','math','hin','eng'],  // tuesday
        ['math','geo','chem','phy'], // wednesday
        ['hce','chem','hin','eng'], // thursday
        ['math','geo','edu','phy'], // friday
        ['hce','chem','hin','eng'] // saturday
    ],
    "times": [
        new Date().setHours(8,5,0,0), // (HH, MM, SS, MS)
        new Date().setHours(9,0,0,0),
        new Date().setHours(10,10,0,0),
        new Date().setHours(11,05,0,0)
    ],
    "links": {
        'hin':'https://meet.google.com/bor-rddz-ifr',
        'eng':'https://meet.google.com/lookup/gx2o7p7bzj',
        'math':'https://meet.google.com/lookup/eg4zbvqqf3',
        'geo':'https://meet.google.com/lookup/gflb74w6lm',
        'hce':'https://meet.google.com/lookup/bc3cp6olvz',
        'chem':'https://meet.google.com/lookup/dmknsrfdev',
        'bio':'https://meet.google.com/lookup/e3cdias5nj',
        'phy':'https://meet.google.com/ssv-nxjn-vrp',
        'edu':'https://meet.google.com/lookup/hg2xu3okug'
    }
};

module.exports = config;
