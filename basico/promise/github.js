const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/mitocode21').then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});