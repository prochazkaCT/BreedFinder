//DATA -- the below are the breeds of dogs that the survey will look through to find a breed match for the user
var breeds = [
    {
        "name": "Affenpinscher",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/affenpinscher_01_lg.jpg",
        "scores": [
            1, 1, 1, 1, 1, 3, 3, 4, 1, 2
        ]
    }, {
        "name": "Chihuahua",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/chihuahua_01_lg.jpg",
        "scores": [
            1, 4, 4, 4, 4, 5, 5, 1, 4, 4
    ]
    },{
        "name": "Border Terrier",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/border-terrier_01_lg.jpg",
        "scores": [
           2, 2, 2, 2, 2, 1, 2, 4, 4, 3
    ]
    },{
        "name": "Lhasa Apso",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/lhasa-apso_01_lg.jpg",
        "scores": [
           2, 5, 5, 3, 5, 3, 4, 1, 1, 1
    ]
    },{
        "name": "Cattle Dog",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/australian-cattle-dog_01_lg.jpg",
        "scores": [
           3, 1, 2, 1, 2, 1, 1, 1, 4, 3
    ]
    },{
        "name": "Brittany",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/brittany_01_lg.jpg",
        "scores": [
           3, 1, 2, 1, 2, 2, 2, 4, 2, 3
    ]
    },{
        "name": "Mini Bull-Terrier",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/miniature-bull-terrier_01_lg.jpg",
        "scores": [
           3, 2, 5, 4, 5, 4, 4, 5, 4, 1
    ]
    },{
        "name": "Chinese Shar-Pei",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/chinese-shar-pei_01_lg.jpg",
        "scores": [
           4, 4, 4, 4, 3, 3, 2, 1, 4, 5
    ]
    },{
        "name": "Bearded Collie",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/bearded-collie_01_lg.jpg",
        "scores": [
           4, 1, 1, 1, 1, 1, 1, 4, 1, 3
    ]
    },{
        "name": "Akita",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/akita_01_lg.jpg",
        "scores": [
           5, 2, 3, 3, 1, 1, 1, 2, 1, 2
    ]
    },{
        "name": "Tibetan Mastiff",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/tibetan-mastiff_01_lg.jpg",
        "scores": [
           5, 5, 1, 1, 5, 4, 4, 5, 4, 4
    ]
    },{
        "name": "Bullmastiff",
        "photo": "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/bullmastiff_01_lg.jpg",
        "scores": [
            5, 2, 5, 4, 1, 4, 1, 1, 2, 4
        ]
    },
];


//Here we are exporting the dog breed array so the other files can access it when it is required. 
module.exports = breeds;
