const request = require('request');
const argv = require('yargs').argv;

/*
request('http://www.google.com', function (error, response, body){
    console.log('error:', error); // 
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
*/

let direccion = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`;

request({
    url: url,
    json: true
},(error, response, body)=>{
    if(error){
        console.log('Servicio no disponible');
    } else if(body.status === 'ZERO_RESULTS'){
        console.log('No hay datos a mostrar');
    } else if(body.status === 'OK'){
        console.log(JSON.stringify(body, undefined, 2));
    }
});