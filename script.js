/*/Ejercicio 01
let metros= parseFloat (prompt ("Ingrese una medida en metros"))
if (isNaN(metros)){
    alert ("El dato no es válido")
}else{
    let pies= metros * 3.28084
    console.log ("Los metros ingresados son " + pies + " pies" )
    let centimetros= metros*100
    console.log ("Los metros ingresados son " + centimetros + " centímetros" )
    let pulgadas= metros*39.3701
    console.log ("Los metros ingresados son " + pulgadas + " pulgadas" )
}*/
 
/*/EJERCICIO 02
let edad=parseInt(prompt("Ingrese su edad"))
if (edad<18){
    alert("Usted es menor de edad")
}else{
    alert("Usted es mayor")
}*/

/*/EJERCICIO 03
let sabores= prompt("Ingrese dos sabores")
let cobertura= prompt("Desea cobertura? Si o No")
if (cobertura== "SI" || cobertura== "NO"){
    if(cobertura=="SI"){
        alert("Su helado sabor "+ sabores+ " con cobertura de chocolate cuesta $180")
    }else{
        alert("Su helado sabor "+ sabores+ " sin cobertura de chocolate cuesta $150")
    }   
}else alert("Error")*/


/*/EJERCICIO 04
let numero1= parseFloat( prompt ("Ingrese un número"))
let numero2= parseFloat (prompt ("Ingrese otro número"))
let suma=numero1+numero2
console.log(suma)
let resto= suma%2
console.log(resto)
if (resto===0){
    alert("El número es par")
}else{
    alert("Enúmero es impar")  
}*/

/*/EJERCICO 05
let numero= parseFloat(prompt("Ingrese un número"))
if (numero !=0){
    if (numero > 0){
        alert ("El número ingresado es positivo")
    }else 
    alert("El número ingresado es negativo")
}else alert("El valor es 0")*/

/*/ EJERCICO 06
let monto= parseFloat(prompt("Ingrese un monto"))
let descuento = monto-((monto*10)/100)
if (monto > 2000){
  alert("El monto a pagar con descuento es de "+ descuento)
}else{
    alert ("El monto a pagar es de " + monto)
}*/

/*/EJERCICIO 07
let texto=prompt ("Ingrese un texto")
let posicion=prompt("Ingrese una posicion")
let digito=texto.charAt(posicion)
let resultado = "";
switch(digito){
case "a":
resultado = " Es vocal";
break;
case "e":
resultado = "Es vocal";
break;
case "i":
resultado = "Es vocal";
break;
case "o":
resultado = " Es vocal";
break;
case "u":
resultado="Es vocal"
break;
default:
resultado = "No es vocal";
}
alert(resultado);/*/

/*/EJERCICO 08 

let nota= parseInt(prompt("Ingrese una nota del 1 al 10"))
if(nota  <= 3){
    alert("Aplazado")
} else { 
       if (nota<=5){
        alert("Reprobado")
    }else{
        alert("Aprobado")           
        }
}/*/

/*/EJERCICIO 09
let numero1=parseInt(prompt("Ingrese un numero"))
let numero2=parseInt(prompt("Ingrese otro numero"))
if(numero1>numero2){
    alert("El numero mayor es "+ numero1)
}else if (numero2>numero1){
    alert("El numero mayor es "+numero2)
}else{ 
    alert("Son iguales")
}*/

/*/EJERCICIO 10
let mes=parseInt (prompt("Ingrese un mes del 1 al 12"))
let resultado=""
switch(mes){
    case 1:
    resultado = " tiene 31 días";
    break;
    case 2:
    resultado = "tiene 28 días";
    break;
    case 3:
    resultado = "tiene 31 días";
    break;
    case 4:
    resultado = " tiene 30 días";
    break;
    case 5:
    resultado="tiene 31 días";
    break;
    case 6:
    resultado = " tiene 30 días";
    break;
    case 7:
    resultado = "tiene 31 días";
    break;
    case 8:
    resultado = "tiene 31 días";
    break;
    case 9:
    resultado = " tiene 30 días";
    case 10:
    resultado = " tiene 31 días";
    break;
    case 11:
    resultado = "tiene 30 días";
    break;
    case 12:
    resultado = "tiene 31 días";
    break;    
    default:
    resultado = "No es un mes";
    }
    alert(resultado);*/

    /*/EJERCICIO 11
    let numero1=parseInt(prompt("Ingrese un numero"))
    let numero2=parseInt(prompt("Ingrese otro numero"))
    let numero3=parseInt(prompt("Ingrese otro numero"))
    if(numero1>numero2 && numero1>numero3){
        alert("El numero mayor es "+ numero1)
    }else if (numero2>numero1 && numero2>numero3){
        alert("El numero mayor es "+numero2)    
    }else if (numero3>numero1 && numero3>numero2){
        alert("El numero mayor es "+numero3)         
    } else{ 
        alert("Son inguales ")
    }/*/
    
/*/EJERCICIO 12
let edad= parseInt(prompt ("Ingrese su edad")) 
let bebida= prompt("Ingrese una bebida. Puede ser cerveza, jugo o agua")
const Cerveza= 200
const Agua=100
const Jugo=120
let costo=0
if(edad<18 && bebida=="cerveza"){
    alert("usted es menor")
}else if (bebida=="cerveza"){
    alert("El costo es de $"+ Cerveza)
    costo=Cerveza 
}else if (bebida=="agua"){
    alert("El costo es de $"+ Agua)  
    costo=Agua
}else if (bebida=="jugo"){
    alert("El costo es de $"+ Jugo)
    costo= Jugo
}
let pago=parseInt(prompt("Ingrese con cuanto abona"))
let vuelto=pago-costo
if(pago<costo){
    alert("Pago insuficiente")
}else{
      alert("Su vuelto es de $" + vuelto +"."+"\n Muchas gracias por su compra.")
} /*/
       

/*/EJERCICIO 13

let mes=parseInt (prompt("Ingrese un mes del 1 al 12"))
let resultado=""
switch(mes){
    case 1:
    resultado = " ENERO";
    break;
    case 2:
    resultado = "FEBRERO";
    break;
    case 3:
    resultado = "MARZO";
    break;
    case 4:
    resultado = " ABRIL";
    break;
    case 5:
    resultado="MAYO";
    break;
    case 6:
    resultado = " JUNIO";
    break;
    case 7:
    resultado = "JULIO";
    break;
    case 8:
    resultado = "AGOSTO";
    break;
    case 9:
    resultado = " SEPTIEMBRE";
    case 10:
    resultado = " OCTUBRE";
    break;
    case 11:
    resultado = "NOVIEMBRE";
    break;
    case 12:
    resultado = "DICIEMBRE";
    break;    
    default:
    resultado = "No es un mes";
    }
    alert(resultado);*/
/*/BONUS 01

let clave=1234
let saldo=20000
let claveusuario=parseInt (prompt("Ingrese su clave"))  
 
 if (claveusuario === clave){
    let monto = parseFloat(prompt("Ingrese el monto a retirar: "));
    if ( saldo >= monto){
        alert("Puede retirar los $"+monto);
        } else if ( saldo < monto){
            alert("Saldo insuficiente!!!")
                    }     
 } else if (claveusuario !== clave){
               alert("Error en la clave")            
}*/

/*/BONUS 02
let dia= parseInt (prompt ("Ingrese dia de nacimiento"))
let mes=parseInt (prompt ("Ingrese mes de nacimiento")) 
if((dia>=22&&mes==12)||(dia<=20&&mes==1)){
    alert('Capricornio');
}else if ((dia>=21&&mes==1)||(dia<=19&&mes==2)){
    alert('Acuario');
}  else if((dia>=20&&mes==2)||(dia<=20&&mes==3)){
    alert('Piscis');
}else if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
    alert('Aries');
} else if((dia>=21&&mes==4)||(dia<=21&&mes==5)){
    alert('Tauro');
}else if((dia>=22&&mes==5)||(dia<=21&&mes==6)){
    alert('Geminis');
}if((dia>=21&&mes==6)||(dia<=23&&mes==7)){
    alert('Cancer');
}else if((dia>=24&&mes==7)||(dia<=23&&mes==8)){
    alert('Leo');
}else if((dia>=24&&mes==8)||(dia<=23&&mes==9)){
    alert('Virgo');
}else if((dia>=24&&mes==9)||(dia<=23&&mes==10)){
    alert('Libra');
}else if ((dia>=24&&mes==10)||(dia<=22&&mes==11)){
    alert('Escorpio');
}else if((dia>=23&&mes==11)||(dia<=21&&mes==12)){
    alert('Sagitario');
}*/

/*/BONUS 03
let nombre= prompt("Ingrese su nombre")
let hora=prompt ("Ingrese la hora")
if (hora >= 12 && hora < 19){
    alert("Buenas tardes "+nombre);
}
if ((hora >= 19 && hora <= 23 )||(hora >=0 && hora < 5)){
    alert("Buenas noches "+nombre);
}
if (hora >= 5 && hora < 12){
    alert("Buenas dias "+nombre);
}*/




   










        







 
    
      
 
     
      

    

    




