function otraFuncion(){
     breaking();


}

function breaking (){
    return 3+z;
}

function seRompeAsinc(cb){
    setTimeout(function (){
        try{
            return 3+z;

        } catch(err){
            console.error('error en funcion asincrona')
            cb(err);

        }
       
    })
}

try{
    // otraFuncion();
    seRompeAsinc(function(err){
        console.log(err.message)
    });

}catch(err){
    console.log('ReferenceError: error en la function ')
    console.error(err.message)

}


