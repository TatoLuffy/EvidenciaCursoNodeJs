const fs = require("fs");

fs.readFile('data.txt', "utf-8", (error,data)=> {
    if (error){
        console.log(`Error: ${console.error()}`);
    } else {
        console.log(data);
    }
} );
