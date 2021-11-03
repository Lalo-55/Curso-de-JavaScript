
const num=document.getElementById("number");

let numero=parseInt(prompt("Ingrese un número"));

/* Condicional switch */

switch(numero){
    case 1:num.textContent="El caso es: "+numero;
        break;
    case 2:num.textContent="El caso es: "+numero;
        break;
    case 3:num.textContent="El caso es: "+numero;
        break;
    case 4:num.textContent="El caso es: "+numero;
        break;
    default: num.textContent="El caso no es ni 1 ,2 3 ni 4";

}

/**Otra forma de utilizar switch */
switch(numero){
    case 1:
    case 3:
    case 5:
        prompt("El número ingresado es impar  ");
        break;
    case 2:
    case 4:
    case 6:
        prompt("El número ingresado es par");

}