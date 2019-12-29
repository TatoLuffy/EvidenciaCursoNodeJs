const _ = require("lodash");
const argv = require('yargs').argv;

/*
let x = { "nombre": "Dan"}
let y = { "apodo": "Birto"}
let z = [
    { nombre: "Dan", apellido: "General Bonaparte"},
    { nombre: "Birto", apellido: "De Los Angeles", edad: 22}
]
*/

/*
// Sirve para concatenar objetos de tipo json. Sin usar stringify json.parse.
let resultado = _.assign(x,y,z);
console.log(resultado);
*/

//_.times(3, ()=> console.log("Repetición for"));

/*
let resultado = _.find(z, {nombre:"Birto"});
console.log(resultado);
*/

/*
//Valor de entrada al usuario, input tradicional
let comando = process.argv;
console.log(comando);

let comando2 = process.argv[2];

if (comando2 === 'usuario'){
    if (process.argv[3] == 'DaniCode') {
        let x = { "nombre": "Dan"}
        let y = { "apodo": "Birto"}
        let z = [
            { nombre: "Dan", apellido: "General Bonaparte"},
            { nombre: "Birto", apellido: "De Los Angeles", edad: 22}
        ]
        let resultado = _.find(z, {nombre:"Birto"});
        console.log(resultado);
    } else {
        console.log('Usuario no valido');
    }
}
*/

//YARGS
//console.log(argv);
//console.log(argv.argvs); 

if (argv.usuario === "DaniCode"){
    let x = { "nombre": "Dan"}
    let y = { "apodo": "Birto"}
    let z = [
        { nombre: "Dan", apellido: "General Bonaparte"},
        { nombre: "Birto", apellido: "De Los Angeles", edad: 22}
    ]
    let resultado = _.find(z, {nombre:"Birto"});
    console.log(resultado);
} else {
    console.log('Usuario no valido');
}


