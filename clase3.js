let cadena="Hola mundo";

document.write("<h2>Propiedades de los String</h2>");
document.write("<h2>La cadena es: "+cadena+"</h2>");
document.write("<h3>Propiedad 'length' devuelve el tamaño del String</h3>");
document.write("<h4>cadena.length = "+ cadena.length+" </h4>");
document.write("<h3>Propiedad 'toUpperCase' devuelve una la cedana pero en mayusculas</h3>");
document.write("<h4>cadena.toUpperCase= "+cadena.toUpperCase()+"</h4>");
document.write("<h3> </h3>");
document.write("<h4> </h4>");

console.log(cadena.indexOf("mundo")+" regresa la posicion en donde encuentra coincidencias");
console.log(cadena.indexOf("n"));


console.log("Metodo replace\n"+cadena.replace("mundo", "amigos"));

console.log(cadena.substring(3));
console.log(cadena.substring(5,9));

console.log(cadena.slice(0,-6));


let cadena2="   El método trim. elimina los espacios al principio y al final de un String    ";
console.log(cadena2);
console.log(cadena2.trim());

console.log(cadena.startsWith("Hola"));


console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("mundo"));

console.log(cadena.includes("o"));

console.log(cadena.repeat(10));




let nombre="Perenganito";
let apellido="Fuentes";
let edad=19;

console.log("Hola "+nombre+" "+apellido+". Tienes "+edad+" años.");











