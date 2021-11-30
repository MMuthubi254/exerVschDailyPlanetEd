var ballers = ["Lebron", "Lillard", "Curry", "Durant", "Gianis", "Irving"];

function todaysGoat(whoishetruegoat, playername) {
    if (!whoishetruegoat) {
        return "jordan outplays " + playername + ", it is not even a match";
    } else {
        return "Jordan in his glory Chicago days. "+ playername +" has no chance.";
    }
}

for (var i=0; i < ballers.length; i++) {
    var whoishetruegoat;
    if( i % 2 === 0) {
        whoishetruegoat = true;
    } else {
        whoishetruegoat = false;
    }
    console.log(todaysGoat(whoishetruegoat, ballers[i]));
}

function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
}

console.log( howAttractedIsLoisLaneToMe() ) ;

var Morris = true;
var Stephen = false;

while (Morris) {
    console.log("trying sport analytics");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        Morris = false;
        Stephen = true;
        console.log("try sport commentating!");
    }
}