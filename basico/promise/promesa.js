let operacion = (n1,n2) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(n1+n2);
        },2000);
    });
}

module.exports = {
    operacion
}