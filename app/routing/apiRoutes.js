// Dependencies
// =============================================================
var friends = require("../data/friends.js")

module.exports = function(app) {


 
  app.get("/api/friends", function(req, res) {
   
    res.json(friends)
  });

  app.post("/api/friends", function(req, res) {
   
    // var newFriend = req.body;
    // var newFriendScores = newFriend.scores;
    // var difference = 0;
    // var bestFriend = 0;

    // for (let i = 0; i < friends.length; i++) {
      
    //   difference = 0
    //   var friendsScore = friends[i].score

    //   for (let j = 0; j < friendsScore.length; j++) {
        
    //     difference+= Math.abs(parseInt(newFriendScores[j]) - parseInt(friends[i].scores));

    //     if (difference <= newFriendScores) {
    //       bestFriend = i;
    //     }
    //   }
    // }
    // friends.push(newFriend);
    // res.json(friends[bestFriend]);
    res.json(friends[0]);
  });
 
 };
