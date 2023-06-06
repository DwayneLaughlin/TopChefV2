const data = require('./data.json')
const http = require('http')
const Team = require('./Team.js')

//create and populate objects for teams
const teamDwayne  = new Team();
teamDwayne.player = "Dwayne Laughlin";
teamDwayne.teamName = "Da Big Homies";
teamDwayne.roster = [
    data.Seasons['Season 1'].Roster[0],
    data.Seasons['Season 1'].Roster[5],
    data.Seasons['Season 1'].Roster[10],
    data.Seasons['Season 1'].Roster[11],
    data.Seasons['Season 1'].Roster[4],
    data.Seasons['Season 1'].Roster[2]
];
teamDwayne.score = 0

const teamVanessa = new Team();
teamVanessa.player = "Vanessa Underwood-Laughlin";
teamVanessa.teamName = "Team Big Legs";
teamVanessa.roster = [
    data.Seasons['Season 1'].Roster[1],
    data.Seasons['Season 1'].Roster[3],
    data.Seasons['Season 1'].Roster[6],
    data.Seasons['Season 1'].Roster[7],
    data.Seasons['Season 1'].Roster[8],
    data.Seasons['Season 1'].Roster[9]
]
teamVanessa.score = 0;

//creates an array to pass team objects into
const teamArray = []
teamArray.push(teamDwayne)
teamArray.push(teamVanessa)
//pushes the array with team information to teams object
Object.assign(data.Teams, teamArray)
console.log(data.Teams)
