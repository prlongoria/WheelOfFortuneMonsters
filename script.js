const players=["Kitty","MOTICA","misi","Chandler","Joey", "Goofy","Kira","guti","vilma", "dorito","Deimos"];
const buttonInsert = document.getElementById("insert");
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
    let deletedPlayer= players.indexOf(name);
    players.splice( deletedPlayer, 1 );
    printArrayInPanel(players);
}

function startGame(){
    const ramdomName = players[Math.floor(Math.random() * players.length)];
    setTimeout(showSacrificedPlayer, 2000, ramdomName);    
    deleteNameOfArray(ramdomName);
    if (players.length===1){
        setTimeout(winGame, 2000, players);        
    }
}

function showSacrificedPlayer(player_name) {
    screen.innerHTML = `<div class="SacrificedPlayer"><h1>${player_name} has sido abducido</h1></div>`;
}

function winGame(winName){
    screen.innerHTML = `<div class="winner" style="background-image: url(/imagenes/fiesta.gif)"><h1 >${winName} eres el único superviviente</h1><button id="reboot" onclick="toReset()" style = "margin-left: 28vw;">reiniciar</button></div>`;     
}

function toReset(){
   return location.reload();
}

function changeName(){
    const name=document.getElementById("writeName").value;
     const checkedName=checkName(name);
     if (checkedName){
        checkNewName(name);
    }else{
        const text="El nombre no existe en la lista"
        printMessage(text);
    }
}

function checkNewName(name){    
    const newName=window.prompt("Introduce el nuevo nombre");
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
    if (checkedName){
        deleteNameOfArray(writeName);
        printArrayInPanel();
    } else {
        printMessage ("El nombre no está en la lista");
    }
}

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


