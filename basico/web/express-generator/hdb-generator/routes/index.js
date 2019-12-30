var express = require('express');
var router = express.Router();

/* GET home page. */
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

// Recorre todos los datos de personas y las muestra mediante la plantilla
app.get('/', (req,res) => {
  res.render('template', {title: 'handlebars', mensaje: 'DaniCodeHdb', personas : personas});
}); 
module.exports = router;
