 async function saludo (nombre){
    return new Promise (function (resolve,reject){
        setTimeout(function(){
            console.log(`holaaa ${nombre} :)`); 
           resolve(nombre);
        //    reject('404 not found');
            },1350);

    }) ;
    
}
async function hablar(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(function(){
            console.log('bla bla bla bla');
            resolve(nombre);
        },1050)
    });
    
}
async function adios (nombre){
    return new Promise ((resolve,reject)=>{

        setTimeout(function(){
            console.log(`adiooos ${nombre} ,excelente dia`)
            resolve();
            
        },1200);

    })
    
}

async function main (){
let nombre = await saludo('geovani');
await hablar();
await hablar();
await adios (nombre);
console.log('terminamos el proceso');

}

console.log('iniciamos  el proceso');
main();
