const { escribir } = require("./writeAndReadObject");

let person0={
    name:"",
    surnemae:"",
    age:0
} 
let readline = require("readline");
const { añadir } = require("../reto3node");
    let rl = readline.createInterface(process.stdin, process.stdout);
 

 exports.final =function readConsole(llamada){
    rl.question("Introduce nombre: ",(name1)=>
    {
        person0.name=name1 ;
        rl.question("Introduce apellido: ",(apellido1)=>
        {
            person0.surnemae=apellido1;
            rl.question("Introduce edad: ",(age1)=>
            {
                person0.age=age1; 
              person01={
                  "name":name1,
                  "surname":apellido1,
                  "age":age1
              }
              llamada(person01);
            })})

            })


        }