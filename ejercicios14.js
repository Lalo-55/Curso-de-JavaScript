/*  ////Ejercicio 1///

let nombre= prompt("Ingrese su nombre");
let edad= parseInt(prompt("Ingrese su edad"));

alert(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${(edad+1)} años`);
*/
   ///Ejercicio 2///
   /*let base=0, altura=0, radio=0, resultado=0;
   
   let opcion=prompt("Que figura quiere que calcule el área");
   
   if(opcion==="triangulo"){
       alert("Es triangulo");
       base=prompt("Ingrese la base del triangulo");
       altura=prompt("Ingrese la altura del triangulo");
       resultado=(base*altura)/2;
       alert(`El área del triangulo es: ${resultado}`);
       
       
       
    }else if(opcion==="rectangulo"){
        alert("Es rectangulo");
        base=prompt("Ingrese la base del rectangulo");
        altura=prompt("Ingrese la altura del rectangulo");
        resultado=(base*altura);
        alert(`El área del rectangulo es: ${resultado}`);
    }
    else{
        alert("Es circulo");
        radio=prompt("Ingrese el radio del circulo");
        resultado=Math.PI*radio*radio;
        alert(`El área del circulo es: ${resultado}`);
    }
        */ 
    ///Ejercicio 3///
    /*
    let num=parseInt(prompt("Ingrese un número"));
    
    for(let i=0;i<=num;i++){
        if(i%2==0)
        alert(`Es par - ${i}`);
        else
        alert(`Es impar - ${i}`);
    }*/
    
    ///Ejercicio 4///
 /*   let num=parseInt(prompt("Ingrese un número"));
    let primo=true;
    
    for(let i=2;i<num;i++){
        if(num%i==0)
        primo=false;
    }

    if(primo)
    alert(`El número ${num} es un número primo`);
    else
    alert(`El número ${num} no es un numero primo`);
*/
///Ejercicio 5///
/*
let num=parseInt(prompt("Ingrese un número para sacar el factorial de ese número"));
let numFacto=1;

for(let i=1;i<=num;i++){
    numFacto=numFacto*i;
    console.log(numFacto);

}
alert(`El número factorial de ${num} es: ${numFacto}`);
*/
///Ejercicio 6///
/*
let numero=0, suma=0, contador=0;


do{
    numero=parseInt(prompt("Ingrese un número para sumarlo"));

    suma+=numero;
    console.log(`${suma}`);
    contador++;

}while(suma<=50);

alert(`El total acumulado es ${suma}, sean introducido ${contador} numeros`);
   */
  ///Ejercicio 7/// 
/*
  let num=[2,4,6,1,8], pares=[], impar=[];
  let multi=0, ram=0;

  

  for(let i=0;i<num.length;i++){
      
      multi=(num[i]*parseInt(Math.random()*10));
      if(multi%2==0){
        pares.push(multi);
    }
    else {
        impar.push(multi);
    }

  }
  alert(num);
alert(`Array de numeros pares ${pares}`);
alert(`Array de numeros impares ${impar}`);
*/

 ///Ejercicio 8///
/* const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 console.log(letras);
 let numero=0, posicion=0;
 do{

    numero=prompt("ingresa un numero de DNI");
    
    if(numero<=0 || numero>10000000){
    alert(`el numero ${numero} es invalido, ingresa otro`);
    }
    else{
        posicion=numero%23;
        
        alert(`El array de letra es : \n${letras}\nLa posicion es ${posicion} y la letra es ${letras[posicion]}`);
    }


 }while(numero<=0 || numero>10000000);*/

 ///Ejercicio 9///
 /*
const vocales=['a','e','i','o','u'];
const signos=[',','.',' ',';'];
let palabra='', vocal=0, consonantes=0;
palabra=prompt("Ingrese una palabra");

palabra=palabra.toLocaleLowerCase();

for(let i=0;i<palabra.length;++i){
    if(vocales.indexOf(palabra[i])>=0){
        vocal++;
    }else if(signos.indexOf(palabra[i])>=0){
        console.log("Es un signo o un espacio");
    }
    
    else{
        consonantes++;
    }


}
alert(`El texto "${palabra}"\nEl número de vocales es: ${vocal}\nEl número de consonantes es: ${consonantes}`);

 */
///Ejercicio 10///

const color=["azul", "amarillo", "rojo", "verde", "rosa"];
let colorUser=prompt("Ingres un color");

let elemento= color.find(element => element === colorUser);

if(!elemento){
    alert("Color no encontrado");
}else{
    alert(`El color ${elemento} se encontro`);

}




    
    

