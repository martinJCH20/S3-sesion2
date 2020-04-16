//Crear una funcion que eleve al cuadrado y al cubo un numero enviado como parametro de dicha funcion, esta debe ser una variable
function cuadradoCubo(number){
    let re =/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if(re.test(number)){
        console.log(`El número ${number}: al cuadrado: ${Math.pow(number,2)} - al cubo: ${Math.pow(number,3)}.`);
    }else
        console.log(`El valor ${number} no es un número entero positivo.`)
}

var initialnumber = 10;
cuadradoCubo(initialnumber);

var initialnumber = 5;
cuadradoCubo(initialnumber);

var initialnumber = 2;
cuadradoCubo(initialnumber);

var initialnumber = false;
cuadradoCubo(initialnumber);