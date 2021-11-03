

const numbers = document.getElementById("numbers");
const result= document.getElementById("result");

let a =parseInt(prompt("Introduce el primer número" ));
let b =parseInt(prompt("Introduce el segundo número" ));
let c =parseInt(prompt("Introduce el tercer número" ));

numbers.textContent="Los números introducidos son "+a+", "+b+", "+c;

/*Ordenamiento de numero mas grande al mas pequeño   
>” (mayor) y “< menor*/

if(a>=b && a>=c){
    if(b>c){
        result.textContent="Números de mayor a menor: "+a+", "+b+", "+c;
    }else {
        result.textContent="Números de mayor a menor: "+a+", "+c+", "+b;
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent="Números de mayor a menor: "+b+", "+a+", "+c;
    }else{
        result.textContent="Números de mayor a menor: "+b+", "+c+", "+a;
    }

}else if(c>=a && c>=b){
    if(a>b){
        result.textContent="Números de mayor a menor: "+c+", "+a+", "+b;
    }else{
        result.textContent="Números de mayor a menor: "+c+", "+b+", "+a;
    }

}
    
 
