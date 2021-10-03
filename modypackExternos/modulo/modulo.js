function saludar (){
    console.log('hola mundo');
}


//si no exporto la funcion al querer llamarla en otro archivo me traera 
// un objeto vacio


module.exports = {
    saludar,
    prop1:'que haces',
    prop2:'como estas'

};