const fs = require("fs");

console.log("Iniciado");

/*fs.readFile('data.txt', "utf-8", (error,data)=> {
    if (error){
        console.log(`Error: ${console.error()}`);
    } else {
        console.log(data);
    }
} );
*/

/*
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);
console.log("Finalizado");
*/

/*
fs.rename('data.txt', 'data_renombrado.txt', (error) => {
    if(error) throw error;
    console.log('Se ha renombrado!!');
});
*/

/*
fs.appendFile('data.txt', '\n Gracias por suscribirte', (error) =>{
    if (error) console.log(`Error: ${error}`)
});

fs.unlink('data2.txt', (error) => {
    if (error) throw Error;
    console.log('Archivo eliminado');
})

*/

//fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

fs.readdir('./../../', (error, files) => {
    if (error) throw error;
    files.forEach(file => {
        console.log(file);
    })
});