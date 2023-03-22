function sum(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}
console.log(calc(2, 2, sum));

//set timeOut
setTimeout(function(){
    console.log('hola javascript');
}, 2000)

//funcion saludo
function gretting(name){
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, `Agustin`)