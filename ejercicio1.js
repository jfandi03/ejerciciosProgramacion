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




