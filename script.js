const players=["Aide", "Dani", "Deimos"];
const buttonInsert = document.getElementById("insert")//boton insert
buttonInsert.onclick = insertName;
const buttonStart= document.getElementById("controls");
buttonStart.onclick= startGame;
let buttonDelete= document.getElementById("delete");
buttonDelete.onclick = deleteName;
const screen= document.getElementById("screen-game");
const buttonModify= document.getElementById("changeName");
buttonModify.onclick=changeName;
const playersStart = printArrayInPanel(players);

function checkName(name){
    let nameInArray= players.includes(name);
    return nameInArray;
}

function printMessage(text){
    window.alert(text);
}

function deleteNameOfArray(name){
    let  deletedPlayer= players.indexOf(name);
    players.splice( deletedPlayer, 1 );
    printArrayInPanel(players);
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
    screen.innerHTML = `<div class="winner"><h1>El jugador ${winName} ha sobrevivido</h1><button id="reboot" onclick="toReset()" style = "margin-left: 28vw;">reiniciar</button></div>`;     
}
function toReset(){
    console.log("bieeeen")
   return location.reload();
}
function changeName(){
    const name=document.getElementById("writeName").value;
     const checkedName=checkName(name);
    console.log(checkName);
     if (checkedName){
        checkNewName(name);
    }else{
        const text="El nombre no existe en la lista"
        printMessage(text);
    }
}
function checkNewName(name){    
    const newName=window.prompt("Introduce el nuevo nombre");
    console.log (newName);
    const checkedNewName=checkName(newName);    
    
    if(checkedNewName){
        const text="este nombre ya existe";
        printMessage(text);
    } else{
        let indexOfNameToChange = players.indexOf(name);
        players[indexOfNameToChange] = newName;
        printArrayInPanel(players);
       return players
        }
}


function printArrayInPanel () {
    const participants = document.getElementById("participants");
    participants.innerHTML="";
    players.forEach (element => {    
        participants.innerHTML+= `<p>${element}</p>`; 
    })
}


function deleteName (){ 
    let writeName = document.getElementById("writeName").value;    
    let checkedName = checkName(writeName);
    //writeName = writeName.toLowerCase();
    if (checkedName){
        deleteNameOfArray(writeName);
        printArrayInPanel();
    } else {
        printMessage ("El nombre no está en la lista");
    }
}

//Kitty,MOTICA,misi,Chandler, Joey, Goofy y Kira,guti,vilma, dorito,Deimos
//modifique const por let para que se modifique y actualize al array
function insertName(){
     let insertedName = document.getElementById("writeName").value;
     let nameVerified = checkName(insertedName);    
    if(insertedName !==""){     
        if (nameVerified){
        printMessage("El jugador ya está en la lista");
        } else{
            alert("Bienvenido");
            players.push(insertedName);
            printArrayInPanel();            
        }
    }
}



