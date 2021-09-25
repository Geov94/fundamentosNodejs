function saludo (nombre,miCallback){

 
    setTimeout(function(){
    console.log(`holaaa ${nombre} :)`); 
    miCallback(nombre);
    },2000);
}

function adios (nombre,otroCallback){
    setTimeout(function(){
        console.log(`adiooos ${nombre} ,excelente dia`)
        otroCallback();
    },1200);
}

console.log('iniciando proceso');

saludo('Geovani',function(nombre){
    adios(nombre,function(){
    console.log('finalizando proceso') 
    });
    
});


   
