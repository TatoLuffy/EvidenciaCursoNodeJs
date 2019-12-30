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
 


app.set('view engine', 'pug');

app.get('/', (req,res) => {
    res.render('template', {titulo: 'pug', mensaje: 'DaniCode'});
}); 

app.listen(3000, () => {

});