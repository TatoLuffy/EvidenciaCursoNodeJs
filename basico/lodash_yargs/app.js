const _ = require("lodash");

let x = { "nombre": "Dan"}
let y = { "apodo": "Birto"}
let z = [
    { nombre: "Dan", apellido: "General Bonaparte"},
    { nombre: "Birto", apellido: "De Los Angeles"}
]

// Sirve para concatenar objetos de tipo json. Sin usar stringify json.parse.
let resultado = _.assign(x,y,z);

console.log(resultado);