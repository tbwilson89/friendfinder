var path = require('path')

var friendsData = require('../data/friends')

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function(req, res) {
    let topMatch
    let topScore = 0
    friendsData.forEach((item, i)=>{
      let compScore = 0
      if(i === 0){
        topMatch = item
      }
      for(index in item.scores){
        compScore += Math.abs(item.scores[index] - req.body.scores[index])
      }
      console.log(`${topScore > compScore} ${topScore} ${compScore}`)
      if(i === 0){
        topScore = compScore
        topMatch = item
      } else if (topScore > compScore){
        topScore = compScore
        topMatch = item
      }
    })

    friendsData.push(req.body);

    res.json(topMatch);
  });
}
