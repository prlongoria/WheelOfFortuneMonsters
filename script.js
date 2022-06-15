//function para insertar nombre 
//Pasos
//1 clik (desencadenar una accion con buton on click)
//2 get value del input (coger lo que ingresron en mi input)
//3 covertir esa cadena en minuscula ()
//4 repasar los onjetos (foreach)del array de mi output
//5 verificar si la cadena anterior esta incluida
//si el include is true que arroje un alert con el mensaje "El nombre de este jugador ya esta registrado"
//si el include is false que ejecute la funcion de agregar ese valor en el array de my output
const buttonInsert = document.getElementById("insert")

buttonInsert.onclick = insertName;

let Output= ["patricia", "lucy", "daniel", "cesar", "toufick"]
//let description=document.getElementById ("player")
//description.innerHTML= Output;


function insertName(){
    console.log("paso 1 listo")
    let insertedName=document.getElementById("write").value;
    console.log(insertedName + " " + "paso 2 listo")
    insertedName = insertedName.toLowerCase();
    console.log(insertedName + " " + "paso 3 listo")
    while (Output.includes(insertedName)){
        alert("Error, ya existe este jugador")
        Output++
    }
    while (!Output.includes(insertedName)){
        alert("Bienvenido")
        let OutputMod=insert()
            function insert(){
                Output.push(insertedName)
                return (Output)
            }
        document.getElementById("player").innerHTML=OutputMod;
        Output++
    }
    /*let OutputVerified=verified()
    function verified(){
        Output.includes(insertedName)
        console.log("true") 
    }
    /*Output.forEach(function(word) {
        console.log("paso 4 listo");
        if (word.includes(insertedName)){
            console.log("paso 5 listo")
            alert("Error, ya existe este jugador")
            console.log("paso 6 listo") 
        }
        else{
            let OutputMod=insert()
            function insert(){
                Output.push(insertedName)
                return (Output)
            }
        document.getElementById("player").innerHTML=OutputMod;
        }
    });*/
    
    
}
//document.getElementById ("player").innerHTML=Output.push(insertedName);
            //return Output;