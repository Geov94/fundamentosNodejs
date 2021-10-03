const bcrypt = require ('bcrypt');

// cifrar la contraseña

const password = '1234Segura*';

bcrypt.hash (password,3,function(err,hash){
    console.log(hash);
    bcrypt.compare(password,hash,function(err,res){
        console.log(res)
    })
}) 