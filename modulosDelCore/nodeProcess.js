
process.on ('beforeExit',()=>{
    console.log('el proceso va a terminar');
})

process.on ('exit',()=>{ 
    console.log('Geovani ,el proceso Acabo');
    setTimeout(()=>{
        console.log('esto ya no se vera sale del even loop');
    })
})

setTimeout(()=>{
    console.log('esto si se vera');
})

process.on('uncaughtException',(err,origen)=>{
    console.log('se nos ha pasado un error');
    console.error(err.message);
});

noExistoPapu();

console.log('sigo yo ome')

// por eso hay que tener cuidado con los hilos de donde vienen los procesos