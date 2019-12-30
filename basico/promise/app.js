let prom = require('./promesa');

prom.operacion(2,3).then((resultado) => {
    console.log(resultado);
});

/*
let promesa = new Promise((resolve,reject)=>{
    //resolve('Exito al procesar la promesa');
    reject('Error');
});

promesa.then((resultado)=> {
    console.log(resultado);
}, (error) => {
    console.log(error);
});
*/