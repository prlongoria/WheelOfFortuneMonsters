let players=["Aide", "Dani", "Deimos"];//modifique const por let para que se modifique y actualize al array
const buttonInsert = document.getElementById("insert")//boton insert
buttonInsert.onclick = insertName;
function checkName(name){
    let nameInArray= players.includes(name);
    return nameInArray;
}
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
