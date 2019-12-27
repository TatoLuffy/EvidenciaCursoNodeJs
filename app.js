const os = require('os');
const fs = require('fs');

const mi = require('./mito.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

// Usar una función de mito.js
mi.saludar();

// console.log(cpu);
// console.log(sistema);
// console.log(usuario);

/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('miarchivoprueba.txt',`Información del cpu: ${cpu_string} `, function(error){
    if (error){
        console.log('Error al crear archivo de prueba');
    }
});*/

