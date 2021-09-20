console.log('nunca te rindas,Dios esta contigo');
let i=0;
let z=401;

setInterval(function(){
    console.log(i)
 i++;

  if (i ===5){
      console.log('forzamos el error');
      var a = 3+z;
      console.log(a);
  }
  
},1000);

//control + C para matar un proceso
