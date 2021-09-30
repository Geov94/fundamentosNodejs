// console.log('Algo') //logs para cosas que quieras guardar
// console.info('Algo')//para obtener informacion de los procesos que ejecutamos
// console.error('errorsote')

// console.warn('advertencia')

// var tabla = [
//     {
//         a:3,
//         b:'G'
//     },
//     {
//         a:50,
//         b:'S'


//     }
// ]
// console.log(tabla)
// console.table(tabla)


// console.group('conversacion')
// console.log ('hola')
// console.log ('parla bien sabrosa')
// console.log ('adios')
// console.groupEnd('conversacion')

// console.log('esto es diferente')


function f1(){
    console.group('funcion 1')
    console.log('esto es de f1')
    console.log('esto tambien')
    f2();
    console.log('hemos vuelto a la f1')
    console.groupEnd('funcion 1 ')
}

function f2 (){
    console.group('funcion 2')
    console.log('esto es de f2')
    console.log('f2 ready')    
    console.groupEnd('funcion 2 ')
}

console.log ('empezamos');
f1();


console.count('jugador')
console.count('jugador')
console.count('jugador')
console.countReset('jugador')
console.count('jugador')
