//CONDICIONALES
//SWITCH CASE 

/*En este video te explico las estructuras de control condicionales en #JavaScript: #if - #else, ifs anidados y #switch - #case.*/

  const fruta = "poroto"
  let fruttas = fruta.toUpperCase()

  switch(fruttas){
    case "MANZANA":
        //console.log("Esta es Manzana")
        break;

    case "PLATANO":
        //console.log("Este es platano")
        break;
    case "PERA":
        //console.log("Esta es una pera")
        break;
    case "POROTO":
        //console.log("Este es un poroto")
        break;
    default:
        //console.log("No esta en la lista")
  }


  /*LUNES = 0
  MARTES = 1
  MIERCOLES = 2
  JUEVES= 3
  VIERNES = 4
  SABADO = 5
  DOMINGO = 6*/

  const dia = "lunes"

  switch (dia){
    case "lunes":
        console.log("dia Lunes")
        break;
    case "martes":
        console.log("dia martes")
        break;
    case "miercoles":
        console.log("dia miercoles")
        break;
    case "jueves":
        console.log("dia jueves")
        break;
    case "viernes":
        console.log("dia viernes")
        break;
    case "sabado":
        console.log("dia Sabado")
        break;
    case "domingo":
        console.log("dia Domingo")
        break;
    default:
        console.log("Ninguno de los otros")
  }





/*CONDICIONALES
ESTRUCTURAS DE CONTROL SWITCH - CASE*/
  //Declaración de variable
  let coche = "Toyota"

  //Análisis de variable
  switch (coche){
    case "Toyota":
        console.log("Carro Toyota")
        break;
    case "Mazda":
        console.log("Carro Mazda")
        break;
    case "Mitsubishi":
        console.log("Carro Mitsubishi")
        break;
    default:
        console.log("Ninguno de los anteriores")
  }

  /////*DigitizingCode*///// 



/*CONDICIONALES
ESTRUCTURAS DE CONTROL IF - ELSE IF ANIDADO*/
  //Declaración de variable
  //let coche = "Toyota"

  if(coche === "Toyota"){
    console.log(" Carro Toyota ")
  }else if(coche === "Mazda"){
    console.log(" Carro Mazda ")
  }else if(coche === "Mitsubishi"){
    console.log(" Carro Mitzu" )
  }else{
    console.log("Ninguno de los anteriores")
  }

  /////*DigitizingCode*///// 