function saludo (nombre){
    return new Promise (function (resolve,reject){
        setTimeout(function(){
            console.log(`holaaa ${nombre} :)`); 
           // resolve(nombre);
           reject('404 not found');
            },1350);

    }) ;
    
}
function hablar(nombre){
    return new Promise ((resolve,reject)=>{
        setTimeout(function(){
            console.log('bla bla bla bla');
            resolve(nombre);
        },1050)
    });
    
}
function adios (nombre){
    return new Promise ((resolve,reject)=>{

        setTimeout(function(){
            console.log(`adiooos ${nombre} ,excelente dia`)
            resolve();
            
        },1200);

    })
    
}



// saludo('Geovani',function(nombre){
//     conversacion(nombre,3,function(){
//      console.log('Finalizando Proceso') 
//     });
// });


function conversacion (nombre,veces,callback){ //funcion recursiva

    if(veces >0){
        hablar(function(){
            conversacion(nombre,--veces,callback);
    
        });


    } else {
        adios(nombre,callback);
    }
    

}

// ---

console.log('Proceso iniciado')
saludo('Andres Geovani')

  .then(hablar)    
  .then(adios) 
  .then((nombre)=>{
      console.log('Proceso terminado')
  })
  .catch (error =>{
      console.error('fallo el sistema x0219cd')
      console.error(error);
  })