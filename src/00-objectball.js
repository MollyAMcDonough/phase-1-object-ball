function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7 
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15 
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5 
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1 
                }
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10 
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                }
            },
        },
    };
    return obj;
}

function teamColors(teamName) {
    const go = gameObject();
    if (go.home.teamName === teamName) {
        return go["home"]["colors"];
    } else if (go.away.teamName === teamName) {
        return go["away"]["colors"];
    }
}

function playersNumbers(teamName) {
    const go = gameObject();
    const jerseys = [];
    if (go.home.teamName === teamName) {
        for (const key in go.home.players) {
            jerseys.push(go.home.players[key]["number"]);
        }
    } else if (go.away.teamName === teamName) {
        for (const key in go.away.players) {
            jerseys.push(go.away.players[key]["number"]);
        }
    }
        return jerseys;
}

function bigShoeRebounds () {
    const go = gameObject();
    let bigShoe = 0;
    let rebounds = 0;
    for (const key in go.home.players) {
        if (go.home.players[key]["shoe"]>bigShoe) {
            bigShoe = go.home.players[key]["shoe"];
            rebounds = go.home.players[key]["rebounds"];
        }
    }
    for (const key in go.away.players) {
        if (go.away.players[key]["shoe"]>bigShoe) {
            bigShoe = go.away.players[key]["shoe"];
            rebounds = go.away.players[key]["rebounds"];
        }
    }
    return rebounds;
}

function winningTeam () {
    const go = gameObject()
    let homePoints = 0;
    let awayPoints = 0;
    for (const key in go.home.players) {
        homePoints += go.home.players[key]["points"];
    }
    for (const key in go.away.players) {
        awayPoints += go.away.players[key]["points"];
    }
    if (homePoints>awayPoints) {
        return go.home.teamName;
    } else {
        return go.away.teamName;
    }
}

function teamNames(go) {
    const arr = ["home","away"];
    const colorsArr = [];
    for (let i of arr) {
        colorsArr.push(go[i]["teamName"]);
    }
    return colorsArr;
}

function numPointsScored(playersName) {
    const go = gameObject();
    if (go.home.players[playersName]){
        return go.home.players[playersName]["points"]
    } else if (go.away.players[playersName]){
        return go.away.players[playersName]["points"];
    }
}

function shoeSize(playersName) {
    const go = gameObject();
    if (go.home.players[playersName]){
        return go.home.players[playersName]["shoe"]
    } else if (go.away.players[playersName]){
        return go.away.players[playersName]["shoe"];
    }
}

function playerStats(playersName) {
    const go = gameObject();
    if (go.home.players[playersName]){
        return go.home.players[playersName];
    } else if (go.away.players[playersName]){
        return go.away.players[playersName];
    }
}

function playerWithLongestName() {
    const go = gameObject();
    let nameLength = 0;
    let player = '';
    for (const key in go.home.players) {
        if (key.length>nameLength) {
            nameLength = key.length;
            player = key;
        }
    }
    for (const key in go.away.players) {
        if (key.length>nameLength) {
            nameLength = key.length;
            player = key;
        }
    }
    return player;
}
