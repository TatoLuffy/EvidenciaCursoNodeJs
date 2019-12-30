const express = require('express');
const app = express();

// Revisar si esta logado el usuario
let isLogin = () => true;

let logger = (req,res,next) => {
    console.log('Petición de tipo: ', req.method);
    next();
}

let showIP = (req,res,next) => {
    console.log('IP: 127.0.0.1');
    next();
}

// Interceptador de las peticiones
app.use((req, res, next) => {
    if(isLogin()){
        next();
    } else {
        res.send('No estas logeado');
    }
}, logger, showIP);

//app.use(logger);

// Ejemplo 
app.get('/:user', function (req, res) {
    let usuario = req.params.user;
    res.send(`Bienvenido ${usuario}`);
});

app.put('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    res.send('Hello World!');
});

app.delete('/', function (req, res) {
    res.send('Hello World!');
});
  
app.listen(3000, () => {
console.log('Example app listening on port 3000!');
});