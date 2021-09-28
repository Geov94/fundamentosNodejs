// nos permite acceder a archivos de nuestro sistema y modificarlos y demas

const fs = require ('fs');

function leer (ruta,cb){
    fs.readFile(ruta, (err,data)=>{
        cb(data.toString());
    })
}

leer(__dirname+'/archivo.txt',console.log);

function escribir (ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function(err){
        if (err){
            console.error('no he podido escribirlo');
        } else {
            console.log('se escribio correctamente')
        }
    });

}

function borrar (ruta,cb){
    fs.unlink(ruta,cb);
}

// // escribir(__dirname+'/archivo2.txt','soy un txt nuevo',console.log);
// leer(__dirname+'/archivo2.txt',console.log);


 borrar(__dirname+'/archivo2.txt',console.log);