
class Animal {
    name              //propiedades no definidas  
    type = "Dog"      //propiedad definida
    sexo = "Macho"
    edad = 10

    // Propiedades
    constructor(name, type, sexo, edad){
        this.name = name
        this.type = type
        this.sexo = sexo
        this.edad = edad

        /*console.log(this.name)
        console.log(this.type)
        console.log(this.sexo)
        const aux = this.edad
        return aux*/

    }
  
    // Métodos
    hablar(num1, num2) {
      //return "Odio los lunes."
      const suma = num1 + num2
      return suma
    }
}




//HERENDANDO PROPIEDADES DE CLASS ANIMAL
class Personita extends Animal {
    constructor(name, type, sexo, edad, apellido, test){
        super(name, type, sexo, edad)
        this.apellido = apellido
        this.test = test

        this.res = `${this.apellido} yyy ${this.test}`

        console.log(this.res)
        console.log (this.test)
        console.log (this.apellido)
        console.log (this.type)

    }
}


const personita1 = new Personita("Juan", "boxer", "Hembra" ,5 , "Coque", "Blanco")



 /* const perrito = new Animal("Peludito", "Cat", "Hembra", 20)
  console.log(perrito)

  //console.log(perrito.name)
  //console.log(perrito.type)

  const { name, sexo} = perrito
  console.log(`Tu nombre es: ${name} y sexo es: ${sexo}`)
*/

















////////////////EJEMPLO 4
class Suma{
    constructor(dato_a, dato_b){
        //this.dato11 = dato11
        //this.dato12 = dato12
        this.sum = dato_a + dato_b
    }
    
    //PODEMOS INTRODUCIR FUNCIONES DENTRO DE LA CLASE
    mostrarSaludo(f1, f2){
        //let resultado = f1 + f2     //TAMBIEN ES VALIDO
        //return resultado            //TAMBIEN ES VALIDO
        this.resultado = f1 + f2
        return this.resultado
    }

}

const yema = new Suma(5000, 1000)
//console.log(yema)       //me resulta un objeto
//console.log(yema.sum)  //me resulta el dato  
//console.log(yema.mostrarSaludo(50, 100))







//////////////////////EJEMPLO 2
//LAS FUNCIONES DENTRO DE CLASES SE LLAMAN METODOS
class Sumar{
    constructor( dato1, dato2){
        //this.dato1 = dato1
        //this.dato2 = dato2
        this.res = dato1 + dato2 
    }
}

const Sumando = new Sumar(100, 500)
//console.log(Sumando.res)




/////////////////EJEMPLO 3
class Resta{
    constructor(dato11, dato12){
        //this.dato11 = dato11
        //this.dato12 = dato12
        this.rest = dato11 - dato12
        //console.log(this.rest)
    }
}
const x = new Resta(5000, 1000)







//////////EJEMPLO 5

class mostrarTemplate{
    constructor(nombre, edad, sexo){
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo
    }

    //UTILIZANDO METODO (FUNCION) DENTRO DE CLASE
    mostrarInfo(num1, num2){
        let suma = num1 + num2
        return suma
    }
} 



//AMBOS ELEMENTOS UTIOLIZAN REUTILIAN EL MISMO CONSTRUCTOR
//Y PARA ELLO NOS SIRVE LAS CLASES
const mostrar = new mostrarTemplate()
//console.log(mostrar.mostrarInfo(23,50))





//////////////////EJEMPLO 7 UTILIZANDO HERENCIA
//HERENCIA AGREGANDO LA PROPIEDAD CARRERA
class Estudiantes extends mostrarTemplate {
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo)
        this.carrera = carrera
    }
    //UTILIZANDO METODO (FUNCION) DENTRO DE CLASE
    mostrarInfo(){
        return `
         nombre: ${this.nombre} <br/>
         edad: ${this.edad} <br/>
         sexo: ${this.sexo} <br/>
         carrera: ${this.carrera} 
        `
    }
}


const estudiante_1 = new Estudiantes("Richard Ponce", 37, "Hombre", "desarrollo")
//console.log(estudiante_1.mostrarInfo())


//////////////EJHEMPLO 8

class Automoviles{
    constructor(color, motor, modelo ){
       this.color = color
       this.motor = motor
       this.modelo = modelo 
    }
}    


const Auto1 = new Automoviles("red", "B8-512", "Mazda")


class Motocicletas extends Automoviles{
    constructor(color, motor, modelo, ruedas){
        super(color, motor, modelo)
        this.ruedas = ruedas
    }
    mostrarMotos(da1, da2){
         this.reeee = da1 * da2
         return this.reeee
    }
}
     
const Moto1 = new Motocicletas("amarillo", "sepa", "buyrt", "godyear")
//console.log(Moto1)





/////////////////EJEMPLO 9
//EJEMPLO DE OBJETO LITERAL


//ESTE ES UN OBJETO NO LITERAL

class Motos{
    constructor(marca, modelo,color){
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }

    mostrarEmblema(){
        console.log("EMBLEMA MOSTRADO")
    }
}

class Autos extends Motos{
    constructor(ruedas, velocidad, marca, modelo,color){
        super(marca, modelo,color)
        this.ruedas = ruedas
        this.velocidad = velocidad
    }
}

class Barcos extends Motos{
    constructor(bandera, motor, marca, modelo,color){
        super(marca, modelo,color)
        this.bandera = bandera
        this.motor = motor
    }
}




class Perros{
    constructor( nombre, edad, raza){
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }

    mostrarMensaje(){
        return ("Esta clase es de perritos")
    }
}

class Gatos extends Perros{
    constructor(nombre, edad, raza, tamaño){
        super(nombre, edad, raza)
        this.tamaño = tamaño
    }

    mostrarGatitos(){
        console.log(" mostrar a los Gatitos ")
    }
}

let gatito__1 = new Gatos("Blanca", 2, "Angora", "1m")
console.log(gatito__1)






/*
Contenido bluuweb:
* Curso JavaScript 2022 (GRATIS) - Parte #01 *
https://youtu.be/sYqn4lhcMZE
* Curso JavaScript 2022 (GRATIS) - Parte #02 *
https://youtu.be/w_bM1l1UGnY
* Curso JavaScript 2022 (GRATIS) - Parte #03 y Final *
https://youtu.be/EYmNfsp1aPE


*/

////////////////////////////////////
//OBJETOS EN JAVASCRIPT

const Persona = {
    nombre:"Juan",
    apellido:"Romulo",
    edad: 25,
    test:"Blanco",
    redes_sociales:{
        instagram:"@romulo_en_instagram",
        facebook:"@romulo_en_facebook",
    },
    sitios_web:{
        web1:"www.romulo1.net",
        web2:"www.romulo2.com"
    },
    correo:{
        mail:"romulo@gmail.com",
        mail_alternativo:{
            mail_alt:"romulo_alt@hotmail.com"
        }
    }

}








