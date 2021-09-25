function saludo (nombre,miCallback){

 
    setTimeout(function(){
    console.log(`holaaa ${nombre} :)`); 
    miCallback(nombre);
    },2000);
}
function hablar(miCallbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla');
        miCallbackHablar();
    },1050)
}
function adios (nombre,otroCallback){
    setTimeout(function(){
        console.log(`adiooos ${nombre} ,excelente dia`)
        otroCallback();
        
    },1200);
}

console.log('iniciando proceso');

saludo('Geovani',function(nombre){
    conversacion(nombre,5,function(){
     console.log('Finalizando Proceso') 
    });
});


function conversacion (nombre,veces,callback){ //funcion recursiva

    if(veces >0){
        hablar(function(){
            conversacion(nombre,--veces,callback);
    
        });


    } else {
        adios(nombre,callback);
    }
    

}