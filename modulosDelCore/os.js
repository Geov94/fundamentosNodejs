const os = require ('os');

console.log (os.arch()); // arquiterctura de equipo
console.log (os.platform());// tipo de plataforma de sistema operativo
console.log (os.cpus()); //informacion de nuestro procesador y nucleos
console.log (os.arch().length);
console.log (os.constants); //errores y señales del sistema
const size =1024;
function kb (byte){
    
    return byte/size 
}
console.log (os.freemem()); // mirar los bytes libres de memoria
console.log(kb(os.freemem()));