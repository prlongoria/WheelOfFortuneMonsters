const players=["Aide", "Dani", "Deimos"];
const buttonStart= document.getElementById("#controls");
buttonStart.onclick= startGame;
document.getElementById("#controls").onclick= startGame;
const screen= document.getElementById("screengame");
// console.log(players);
// const test = checkName("Dani"):
// console.log(test);
function checkName(name){
    let nameInArray= players.includes(name);
    return nameInArray;
}
//const test2=printMessage("bieeeeeen");
function printMessage(text){
    window.alert(text);
}
//const test3= deleteNameOfArray("Dani");
//console.log(players)
function deleteNameOfArray(name){
    let  deletedPlayer= players.indexOf(name);
    players.splice( deletedPlayer, 1 );
}
//const test4=printNameInScreen("Dani")
function printNameInScreen(randonName){
    document.getElementById("screengame").innerHTML=`<h1 style="color: white">${randonName}</h1>`
}
function startGame(){
    const ramdomName = players[Math.floor(Math.random() * players.length)];
    printNameInScreen(ramdomName);
    deleteNameOfArray(ramdomName);
}
const test4=showSacrificedPlayer("Dani")
function showSacrificedPlayer(player_name) {
    let screen_game = document.getElementById('screen-game')
    screen_game.innerHTML = `<div class="SacrificedPlayer"><p>El jugador ${player_name} ha sido eliminado</p></div>`;
}