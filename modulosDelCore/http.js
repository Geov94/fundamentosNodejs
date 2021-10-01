const http = require('http');


http.createServer(router).listen(3000);

function router(req,res){

    console.log('Nueva Peticion ');
    console.log(req.url);

    switch(req.url){
        case "/hola":
            res.write('hola futuro programador')
            res.end();
            break;

        default:
            res.write('error 404 Not Found')
            res.end();
    }

    res.writeHead(201,{'content-type':'text/plain'})
    res.write('aprendiendo a usar response de http node js')
    res.end();

}

console.log ('escuchando http en el puerto 3000')

//puertos comunes 3000 30001 80 8080 

