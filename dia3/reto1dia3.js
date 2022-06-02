const http = require("http");
const server= http.createServer(function(request,response){
    console.log("petición recibida del cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"],request.headers["content-length"],request.headers["content-type"]);
  response.writeHead(200,{
      "Content-type": "application/json"
  });
    if (request.url=="/bye")
    {
        let objeto ={
            ok:true,
            message:"Adios"

        }
        response.write(JSON.stringify(objeto));
       
    }else{
         let obj={
        ok:true,
        message:"recibido"
    }
    response.write(JSON.stringify(obj));
   
    }
    response.end();
})
server.listen(3000);