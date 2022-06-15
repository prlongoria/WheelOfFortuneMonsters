const players=["Aide", "Dani", "Deimos"];
const buttonStart= document.getElementById("controls");
buttonStart.onclick= startGame;
const screen= document.getElementById("screen-game");
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
function startGame(){
    const ramdomName = players[Math.floor(Math.random() * players.length)];
    showSacrificedPlayer(ramdomName);
    deleteNameOfArray(ramdomName);
    if(players.length===1){
        winGame(players);
    }
}
//const test4=showSacrificedPlayer("Dani")
function showSacrificedPlayer(player_name) {
    screen.innerHTML = `<div class="SacrificedPlayer"><p>El jugador ${player_name} ha sido eliminado</p></div>`;
}

function winGame(winName){
    screen.innerHTML = `<div class="winner"><p>El jugador ${winName} ha sobrevivido</p><button id="reboot">reiniciar</button></div>`;     
}
function toReset(){
   document.getElementById("reboot").onclick= location. reload();
   

}


