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
    saludar: () => {
        console.log('Hola Coder');
    },
    sumar: (a,b) => {
        return a + b;
    },
    sumar2: (a,b)=> a + b,
    mostrar1: (a)=> a + 10,
    mostrar2: a  => a + 10
}