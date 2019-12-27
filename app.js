const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

// console.log(cpu);
// console.log(sistema);
// console.log(usuario);

fs.appendFile('miarchivoprueba.txt','Información del cpu: ' + JSON.stringify(cpu), function(error){
    if (error){
        console.log('Error al crear archivo de prueba');
    }
});

