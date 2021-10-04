console.time('codigo total')
let suma = 0;
console.time('bucle')
for(let i=0;i<1600000008;i++){
    suma +=1;
}
console.timeEnd('bucle')

let suma2 = 0;
console.time('bucle 2')
for(let i=0;i<1600000058;i++){
    suma +=1;
}
console.timeEnd('bucle 2')
console.time('asincrona');
console.log('empieza el proceso asincrono')
asincrona()
    .then(()=>{
        console.timeEnd('asincrona')
    })

console.timeEnd('codigo total')

function asincrona (){
    return new Promise ((resolve)=>{
        setTimeout(function(){
            console.log('finaliza el proceso asincrono');
            resolve();
        })

    })
}

