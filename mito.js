console.log('Se esta importando la funcionalidad de otro archivo');

function saludar(){
    console.log('Bienvenido a esta pequeña aplicación');
}

module.exports.saludar = function(){
    console.log('Función flecha')
}
 
let suscriptores = 22000;

module.exports.subs = suscriptores; 

module.exports = {
    subs : suscriptores,
    saludar : function() {
        console.log('Hola Coder');
    }

}