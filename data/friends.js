// data goes in here somehow
var apiRoutes = require('../routing/apiRoutes')
var friends = [
    {
        name:"John",
        scores:[
            1,
            2,
            3
        ]
    },
    {
        name:"Allison",
        scores:[
            2,
            5,
            5
        ]
    }
];

function saveData(data) {

    var tempArr = [];
    for (var keys in data) {
        if (keys != "name") {
            tempArr.push(keys.substr(3));
        }
    }
    var temp = {
        "name": data.name,
        "scores": tempArr
    }
    friends.push(temp);
    console.log(friends);
    //friends array with scores
    
}

function findMatch(){
    var newUserPosition = friends.length-1
    var totalDifference=0;
    var smallestDifference=100;
    var match=[];
    for(var i=0;i<friends.length-1;i++){
        for(var j=0;j<friends[i].scores.length;j++){
            totalDifference+=Math.abs(parseInt(friends[i].scores[j])-parseInt(friends[newUserPosition].scores[j]))
        }
        if(totalDifference<=smallestDifference){
            smallestDifference = totalDifference;
            match.push(friends[i].name);
        }
    }
    
    return match;
}

module.exports = {
    saveData: saveData,
    findMatch: findMatch,
    friends:friends
}