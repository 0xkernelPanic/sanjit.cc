function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const moves ["F","L","U","B","R","D",
"F'","L'","U'","B'","R'","D'",
"F2","L2","U2","B2","R2","D2"];
scra = [];
for (i = 0; i < 5; i++) {
  if (i == 0){
    var char = moves[getRandomInt(0,18)];

  }
  else {
    char = moves[getRandomInt(0,18)];
    var prevMove = moves[i - 1];
    

  }
  scra.push;
}
