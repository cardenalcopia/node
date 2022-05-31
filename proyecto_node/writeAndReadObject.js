let person2={
    name:"Roberto",
    surname:"Diaz",
    age:37
}
 exports.escribir = function writeAndRead(ruta,pers){
    let fs= require("fs");  
    let persona= JSON.stringify(pers);
    fs.writeFile(ruta,persona,function()
    {
        fs.readFile(ruta,function(err,pers){ let dato= JSON.parse(pers);
        console.log(dato);})
       
    })
}
// writeAndRead("persona2.json",person2);