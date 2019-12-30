const https = require("https");

let username = 'tatoluffy';

//http://www.useragentstring.com/pages/useragentstring.php
let CHROME_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36';
let FIREFOX_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1';
let IE_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko';

let options = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: { 'user-agent':  CHROME_USER_AGENT}
};

// Petición con los datos en el objeto options. La petición va a ser al host indicado.
let request = https.request(options, (response) => {
    let body = '';
    response.on('data', (outResponseGitHub) => {
        body += outResponseGitHub;
    });

    // Proceso al terminar el request
    response.on('end', (out) => {
        let json = JSON.parse(body);
        console.log(json);
        console.log(json.blog);
    });
});

// Si sucede algun error se muestra por pantalla
request.on('error', (e)=>{
    console.log(e);
});

// Cerrar la petición
request.end();