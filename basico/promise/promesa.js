let operacion = (n1,n2) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            let suma = n1+n2;
            if(suma>5){
                res(n1+n2);
            } else {
                rej('Error en la suma');
            }
            res(n1+n2);
        },2000);
    });
}

module.exports = {
    operacion
}