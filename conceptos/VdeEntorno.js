let nombre= process.env.NOMBRE || 'carebola';
let web = process.env.WEB || 'inexistente :('

console.log ('hola '+ nombre);
console.log ('mi web es '+ web);

// variables de entorno buena practica en mayuscula y mas de dos palabras
// separadas por _  VARIABLES_DE_ENTORNO 
// WEB
// NOMBRE