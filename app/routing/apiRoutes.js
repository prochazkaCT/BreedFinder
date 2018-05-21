
//Requiring and redeclaring the breeds object array with all of the dog breed scores. 
var dogBreeds = require("../data/breeds");

module.exports = function(app) {
  
    app.get("/api/breeds", function(req, res) {
      res.json(dogBreeds);
    });
  
    app.post("/api/breeds", function(req, res) {
        var dogMatch = {
            name: "",
            photo: "",
            dogDifference: 1000
        }

    var userData = req.body;
    var userName = userData.name;
    var dogScore = userData.scores;

    var totalDiff = 0;
     //A nested loop to loop through the breeds of dogs for the best match based on the users input. 
    for (var i = 0; i < dogBreeds.length; i ++) {
        // console.log(dogBreeds[i].name);
        totalDiff = 0;

        for (var j = 0; j <dogBreeds[i].scores[j]; j++) {
            totalDiff += Math.abs(dogScore[j] - dogBreeds[i].scores[j]);

            if (totalDiff <= dogMatch.dogDifference) {
                dogMatch.name = dogBreeds[i].name;
                dogMatch.photo = dogBreeds[i].photo;
                dogMatch.dogDifference = totalDiff;
            }
        }
    }

    dogBreeds.push(userData);
    res.json(dogMatch)
    // console.log(dogMatch);
    // console.log(userData);
    });

}