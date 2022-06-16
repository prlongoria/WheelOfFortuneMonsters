const players=["Aide", "Dani", "Deimos"];
const buttonInsert = document.getElementById("insert")//boton insert
buttonInsert.onclick = insertName;
const buttonStart= document.getElementById("controls");
buttonStart.onclick= startGame;
let buttonDelete= document.getElementById("delete");
buttonDelete.onclick = deleteName;
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
    console.log("paso 1 listo")
    let insertedName=document.getElementById("write").value;
    //insertedName = insertedName.toLowerCase();
    let nameVerified= checkName()
    function checkName(name){
        let nameInArray= players.includes(insertedName);
        return nameInArray;
    }
    while (nameVerified){
        alert("Error, ya existe este jugador")
        break
    }
    while (!nameVerified){
        alert("Bienvenido")
            let doc = document.createElement('p');
            doc.innerHTML = insertedName;
            const container = document.querySelector('#participants');
            container.appendChild(doc);
       /*  
        let OutputMod=insert()
            function insert(){
                players.push(insertedName)
                return (players)
            }
        document.getElementById("participants").innerHTML=OutputMod;
        */
        nameVerified++
    }
}






