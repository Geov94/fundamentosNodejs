const {exec,spawn} = require ('child_process');
// const { stdout } = require('process');
//const exec = require ('child_process').exec;  arriba esta desconstruido
// exec ('node modulosDelCore/console.js',(err,stdout,sterr)=>{
//     if (err){
//         console.error(err.message)
//         return false;
//     }
//     console.log(stdout);

// })

let proceso = spawn ('ls',['-la']);

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data',function(dato){
    console.log('murio el proceso ? ')
    console.log(proceso.killed);
    console.log (dato.toString());
});


proceso.on('exit',function(){
    console.log('Proceso Finalizado');
    console.log(proceso.killed);
    
})