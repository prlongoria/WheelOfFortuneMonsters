const players=["Aide", "Dani", "Deimos"];
const buttonStart= document.getElementById("controls");
buttonStart.onclick= startGame;
const screen= document.getElementById("screen-game");
document.getElementById("reboot").onclick=toReset;
const buttonModify= document.getElementById("changeName");
buttonModify.onclick=changeName;
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
    printPlayersInScreen(players);
}
function startGame(){
    const ramdomName = players[Math.floor(Math.random() * players.length)];
    showSacrificedPlayer(ramdomName);
    deleteNameOfArray(ramdomName);
    console.log(players)
    if (players.length===1){
        winGame(players);
    }
}
//const test4=showSacrificedPlayer("Dani")
function showSacrificedPlayer(player_name) {
    screen.innerHTML = `<div class="SacrificedPlayer"><h1>El jugador ${player_name} ha sido eliminado</h1></div>`;
}

function winGame(winName){
    screen.innerHTML = `<div class="winner"><p>El jugador ${winName} ha sobrevivido</p><button id="reboot" onclick="toReset()">reiniciar</button></div>`;     
}
function toReset(){
    console.log("bieeeen")
   return location.reload();
}
function changeName(){
    const name=document.getElementById("writeName").value;
     const checkedName=checkName(name);
    if (checkedName){
        checkNewName();
    }else{
        const text="El nombre no existe en la lista"
        printMessage(text);
    }
}
function checkNewName(){
    const newName=window.prompt("Introduce el nuevo nombre");
    const checkedNewName=checkName(newName);
    if(checkedNewName===null){
        const text="Tienes que introducir un nombre";
        printMessage(text);
    }
    if(checkedNewName){
        const text="este nombre ya existe";
        printMessage(text);
    } else{
        deleteNameOfArray(newName);
        }
}

//Kitty,MOTICA,misi,Chandler, Joey, Goofy y Kira,guti,vilma, dorito,Deimos







