const os = require('os');
const fs = require('fs');

const mi = require('./mito.js');

// Es un arreglo
console.log(module);

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

// Usar una función de mito.js
//mi.saludar();

mi.saludar();

console.log(mi.sumar(11,2));
console.log("Mostrar 1: " + mi.mostrar1(10));
console.log("Mostrar 2: " + mi.mostrar2(10));


// console.log(cpu);
// console.log(sistema);
// console.log(usuario);

setTimeout(()=>{
    console.log("Se lanzo el timeout por 3 segndos")
},3000);

/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('miarchivoprueba.txt',`Información del cpu: ${cpu_string} `, function(error){
    if (error){
        console.log('Error al crear archivo de prueba');
    }
});*/

