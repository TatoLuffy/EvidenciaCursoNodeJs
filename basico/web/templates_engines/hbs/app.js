const express = require("express");
const app = express();

let personas = [
    {
        id: 1,
        nombre: "DaniCode"
    },
    {
        id: 2,
        nombre: "Dani"
    },
    {
        id: 3,
        nombre: "Code"
    }
]
 


app.set('view engine', 'hbs');

// Recorre todos los datos de personas y las muestra mediante la plantilla
app.get('/', (req,res) => {
    res.render('template', {grantitulo: 'handlebars', mensaje: 'DaniCodeHdb', personas : personas});
}); 

app.listen(3000, () => {

});