const express= require("express");
const app = express();
app.get("/",function(req,res){
    console.log("Petición recibida del cliente");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
    
    
        let obj={
            ok:true,
            message:"recibido"
        }
        // res.send(JSON.stringify(obj))
        res.json(obj)

    


})
app.get("/bye",function(req,res){
    console.log(req.url);
   let objeto ={
   ok:true,
   message:"Adios"
}
res.json(objeto);
})

app.listen(4000);