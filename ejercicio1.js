// Esta variable contiene ambos nombres
let nombres = "Jorge Andres"

// Cada variable contiene su apellido
let apellido1 = "Orozco"
let apellido2 = "Quiroga"

// Esta variable concatena las variables anteriores
let nombreCompleto = nombres + " " + apellido1 + " " + apellido2

//Finalmente lo mostramos por consola
console.log(nombreCompleto)





// Variable boleana
let estado = true

estado = false

console.log(estado)



let num1 = 1
let num2 = 3
if (num2 > num1) {
  console.log("El número 2 es mayor");
}
else {
  console.log("El número 1 es mayor");
}


// Definimos la función
function sumar (x , z){
  
  console.log(x + z)
  }
  // Llamamos la función
  sumar (3,5)
  

  //Defino la función
  function mostrarMiNombre (){
    console.log("Jonathan")
  }
  //Llamo la función 4 veces
  mostrarMiNombre ()
  mostrarMiNombre ()
  mostrarMiNombre ()
  mostrarMiNombre ()
  



  // Mostrar cien veces mi nombre
  function mostrarCienVecesMiNombre (){
    for (let i = 0 ; i <= 100 ; i ++){
      console.log("Jonathan");
    }
  }
  //Llamo la función
  mostrarCienVecesMiNombre ()




  // Defino la función
function mostrarCien() {
  for (let i = 1 ; i <= 50 ; i ++) {
    console.log(i * 2)
  }
}
// Llamo la función
 mostrarCien()




 //Defino la función
let numero = 3; {
  for (let i = 1 ; i <= 10 ; i ++)
    console.log(numero * i)
}




//Defino la función
function tablaMultiplicar(numero){
  for (let i = 1 ; i <= 10 ; i ++){
    console.log(numero  + " x " + i + " = " + numero*i);
  }
}

tablaMultiplicar(3)


//Defino la función
function tablaMultiplicar(numero){
  for (let i = 1 ; i <= 10 ; i ++){
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

tablaMultiplicar(3)





// JUEVES 15 DE FEBRERO

// Defino un array vacío
let animales = [];

// Agrego un elemento al array con push
animales.push("león");
animales.push ("jirafa")
animales.push("hipopótamo")
animales.push("Cocodrilo")
animales.push("serpiente")

// Pido que me muestre el arreglo
console.log(animales.length)
console.table(animales)
console.log(animales.slice(3))
console.log(animales.pop())





// Defino un array vacío
let animals = [1, 2, {nombre:"Perro"}];

// Pido que me muestre el arreglo
console.log(animales[2])
console.log(animales[2].nombre)



// Defino un array vacío
let cantantes = ["Juanes", "Juan Gabriel", "Shakira", "Joe Arroyo", "Ana  Gabriel", "Hector Lavoe"];

for (let i = 0; i < cantantes.length; i++){
  console.log(cantantes[i])
}






let moto = {
  marca : "Honda",
  modelo : 2020,
  cilindraje : 125,
  seguro : true 
}

console.log(moto.modelo)

let datos = moto
console.log(datos)




// Definir un array con los días de la semana y mostrar por consola
let diasDeLaSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]
console.log(diasDeLaSemana)




// Definir un array con nombres de ciudades, agregar la ciudad de Cartagena al final del array
let ciudades = ["Popayán", "Cali"]
ciudades.push("Cartagena")
console.log(ciudades)


// Crear un objeto llamado persona con sus propiedades nombres, apellidos, edad y sexo. Mostrar el valor de edad por consola
let persona = {
  nombres: "Jonathan",
  apellidos : "Fandiño",
  edad : 39,
  sexo : "Masculino"
}
console.log(persona.edad)



// Explicaciones Lunes 19

function calculaMatricula (estrato) {
  let totalAPagar = 100000
  if (estrato <= 3) return totalAPagar = 0;
  if (estrato <= 5) return totalAPagar;
  if (estrato <= 8) return totalAPagar*1.2;
}
calculaMatricula (8)
console.log("El estudiante paga " + calculaMatricula (8))


// Ejercicio 1

let nombreCliente = "Jonathan"
let producto = "Computador"
let precioProducto = 1500000
let cantidad = 2
let totalAPagar = cantidad*precioProducto
    
console.log ("El cliente " + nombreCliente + " adquirió la cantidad de " 
+ cantidad + " unidades del producto " + producto + " , para un total a pagar de $" + totalAPagar + " de pesos")



// Ejercicio 2

let frutas = ["Manzana",  "Pera", "Fresa", "Granadilla", "Papaya", "Mandarina"]

console.log (frutas [0] + " y " +frutas[5])



// Ejercicio 2 de otra forma

let frutas = ["Manzana",  "Pera", "Fresa", "Granadilla", "Papaya", "Mandarina"]

console.log (frutas [0] + " y " + frutas[frutas.length-1])

// Ejercicio 3
function generarTabla(numero){
  for (i = 1; i <= 10; i ++)
  console.log(numero + " X " + i + " = " + numero*i)
}
generarTabla (3)


// Ejercicio 4
function sumar(num1, num2){
  return console.log ( num1 + num2);
}
sumar (3,2)


// Ejercicio 4a
function sumar(num1, num2){
  return num1 + num2;
}
console.log (sumar (3,2))




// Ejercicio 5

function calificar (puntuacion){
  if (puntuacion >= 3){
    return "Aprobado";
  }
  else if (puntuacion < 3 && puntuacion >= 2) {
    return "Reprobado";
  }
  else {
    return "Reprobado, estudia más"
  }
  }
console.log(calificar(1))


// Ejercicio 5a

function calificar (puntuacion){
  if (puntuacion >= 3) return "Aprobado";
  if (puntuacion < 3 && puntuacion >= 2) return "Reprobado";
  
    return "Reprobado, estudia más"
  
  }
console.log(calificar(3))


// Ejercicio 6

let terrestres = ["perro", "gato"]
let acuaticos = ["delfín", "tiburón"]
let animales = [...terrestres, ...acuaticos]
console.log(animales)

// Ejercicio 6 a

let terrestres = ["perro", "gato"]
let acuaticos = ["delfín", "tiburón"]
let animales = terrestres.concat(acuaticos);
console.log(animales)



// Ejercicio 7

let mascota ={
  nombre : "Tony",
  tipo : "gato",
}
if (mascota.tipo == "Perro") {
  console.log ("Me regalaron un perrito")
} 
else if (mascota.tipo == "gato"){
  console.log("Me regalaron un gato")
}

// Ejercicio 7 con el operador ||

let mascota ={
  nombre : "Tony",
  tipo : "gato",
}
if (mascota.tipo == "Perro" || mascota.tipo == "perro") {
  console.log ("Me regalaron un perrito")
} 
else if (mascota.tipo == "Gato" || mascota.tipo == "gato"){
  console.log("Me regalaron un gato")
}
else{
  console.log("Mi mascota no es ni perro ni gato")
}


// Ejercicio 8

let estudiante = {
  nombre : "L",
  edad : 18,
  curso : "Programación",
  telefono : 3046678587
}

console.log (estudiante.telefono)


// Ejercicio 9

// Ejercicio 9
function generarFactura (
  nombreCliente, producto, precioProducto, cantidad){
    let totalAPagar = cantidad*precioProducto;
    console.log ("El cliente " + nombreCliente + " adquirió la cantidad de " 
  + cantidad + " unidades del producto " + producto + " , para un total a pagar de $" + totalAPagar + " de pesos")}
    generarFactura ("Jonathan", "computador", 1500000, 2)


// Ejercicio 9 lo mismo pero con return
function generarFactura (
  nombreCliente, producto, precioProducto, cantidad){
    let totalAPagar = cantidad*precioProducto;
    return ("El cliente " + nombreCliente + " adquirió la cantidad de " 
  + cantidad + " unidades del producto " + producto + " , para un total a pagar de $" + totalAPagar + " de pesos")}
    generarFactura ("Jonathan", "computador", 1500000, 2)



    // Ejercicio 10
function esFinDeSemana (dia){
  if (dia == 6 || dia == 7){
    console.log(true);
  }
  else {
    console.log(false)
  } 
}
esFinDeSemana (6)