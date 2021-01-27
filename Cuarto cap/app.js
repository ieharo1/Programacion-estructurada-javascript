"use strict"
//Operadores aritmeticos
var datum1=2;
var datum2=20;
//SUMA
var suma= datum1+datum2;
console.log('La suma de '+datum1+'+'+datum2+' es igual a: ', suma);

//RESTA
var resta=datum1-datum2;
console.log('La resta de '+datum1+'-'+datum2+' es igual a:', resta);

//MULTIPLICACION
var multipicacion=datum1*datum2;
console.log('La multiplicacion de '+datum1+'*'+datum2+' es igual a:', multipicacion );

//DIVISION
var division= datum1/datum2;
console.log('La division de '+datum1+'/'+datum2+' es igual a:', division);

//MODULO O RESIDUO
var residuo= datum2%datum1;
console.log('La division de '+datum2+'%'+datum1+' es igual a:', residuo);

//INCREMENTO
var incremento= datum2;
incremento++;
console.log('El incremento de en uno es '+datum2 +' es: '+incremento);

//DECREMENTO
var decremento= datum2;
decremento--;
console.log('El decremento de en uno es '+datum2+' es: '+decremento);

//Operadores relacionales

//MAYOR QUE
if(datum2>datum1)
{
console.log(datum2 +' es mayor que '+datum1);
}
//MENOR QUE
if(datum1<datum2)
{
console.log(datum1 +' es menor que '+datum2);
}

//IGUAL QUE
if(datum2==datum1)
{
console.log(datum2 +' es igual que '+datum1);
}
else
{
console.log(datum2 +' no es igual '+datum1);
}

//MAYOR O IGUAL QUE
if(datum2>=datum1)
{
console.log(datum2 +' es mayor o igual que '+datum1);
}

//MENOR O IGUAL QUE
if(datum1<=datum2)
{
console.log(datum1 +' es menor o igual que '+datum2);
}

//DIFERENTE QUE
if(datum2!=datum1)
{
console.log(datum2 +' es diferente que '+datum1);
}

//Operadores Logicos

//Y
if(datum1==2&&datum2==20)
{
console.log('Entro al Y')
}

var bool1=(datum1==2&&datum2==20)
console.log(bool1);
//O
if(datum1==2||datum2==20)
{
console.log('Entro al O')
}

var bool2=(datum1==2||datum2==20)
console.log(bool2);
//NO
if(datum1!=10)
{
console.log('no es igual')
}
var bool3=!(datum1==datum2)
console.log('El resultado es: '+bool3);

//Operadores de asignacion
var operadorasignacion =8;

//asignacion ordinaria

var ordinaria = operadorasignacion;
console.log("El resultado de la asignacion simple es: "+ordinaria);
//SUMAR Y ASIGNAR
var suma =10;
suma+= operadorasignacion;
console.log("El resultado de la asignacion suma es: "+suma);

//RESTA Y ASIGNAR
var resta=12;
resta-=operadorasignacion;
console.log("El resultado de la asignacion resta es: "+resta);

//MULTIPLICACION Y ASIGNAR
var multipli=10;
multipli*=operadorasignacion;
console.log("El resultado de la asignacion multiplicacion es: "+multipli);

//DIVIDIR Y ASIGNAR
var divi=8;
divi/=operadorasignacion;
console.log("El resultado de la asignacion division es: "+divi);

//Operador negativo
var dato1=10;
var dato2=-dato1;
console.log("El valor de dato1 es: "+dato1+" y el valor de dato2 es: "+dato2);

//Operador de concatenacion
var dat1=10
var dat2=20;

var nombre="Juan";
var apellido="Cordero";

//CONCATENACION DE NUMEROS
var concatenarnnum=dat1+dat2;
console.log("Los numeros concatenados son: "+concatenarnnum);

//CONCATENACION DE CADENAS DE TEXTO
var concatenaciontxt=nombre+" "+apellido;
console.log("Los textos concatenados son: "+concatenaciontxt);

//CONCATENACION DE NUMEROS COMO TEXTO
var concatena="9"+"10";
console.log("Los numeros como texto concatenados son: "+concatena);

//CONCATENACION DE TEXTO CON NUMEROS
var concatenando=dat1+nombre;
console.log("El texto concatenado con numeros es: "+concatenando);

//Operador ternario o condicional
var datoA=10;
var datoB=20;

//Condicion ? TRUE:FALSE
var resultado = datoA>datoB?"Si es mayor":"No es mayor";
console.log(resultado);

var resultado2=datoA<datoB?"Si es menor":"No es menor";
console.log(resultado2);


//Operador de tipo de datos
var datumA=10;
var name="Sol";
var boool=true;

var persona={edad1:24,deporte:'Natacion'}

console.log(typeof datumA);
console.log(typeof name);
console.log(typeof boool);
console.log(typeof persona);
console.log(typeof persona.edad1);
console.log(typeof persona.deporte);

