const data = require('./data.json');

class Team {
    constructor(id, teamName, player, roster, score){
        this.id = id;
        this.teamName = teamName;
        this.player = player;
        this.roster = roster;
        this.score = score;
    }

   addPoints(points){
    return this.score += points;
   }

   decreasePoints(points){
    if(this.score -= points <= -1){
        return this.score = 0;
    } else {
        return this.score -= points;
    }
    
   }


    
}
module.exports = Team;