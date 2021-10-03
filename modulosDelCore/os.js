const os = require ('os');

console.log (os.arch()); // arquiterctura de equipo
console.log (os.platform());// tipo de plataforma de sistema operativo
console.log (os.cpus()); //informacion de nuestro procesador y nucleos
console.log (os.arch().length);
console.log (os.constants); //errores y señales del sistema
const SIZE =1024;
function kb (byte){return byte/SIZE}
function mb (byte){return kb(byte)/SIZE}
function gb (byte){return mb(byte)/SIZE}
console.log (os.freemem()); // mirar los bytes libres de memoria
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));


console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());