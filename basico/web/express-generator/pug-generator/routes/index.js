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
router.get('/', (req,res) => {
  res.render('index', {title: 'pug', mensaje: 'DaniCodePug', personas : personas});
}); 

module.exports = router;
