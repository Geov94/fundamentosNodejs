

function asincrona (callback){
    setTimeout(function(){
        try{
            let a=3+3;
            callback(null,a);
        }catch(e){
            callback(e);
        }
    },1000)
}

asincrona(function(err,dato){
    if(err){
        console.error('tenemos un error');
        console.error(err);
        return false;
    }
      console.log('todo ok,mi dato es ',dato);
})

//no funciona pede ser por la version de las clases
//throw err,funcion sincronas,asincronas no funciona
