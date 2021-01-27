"use strict"
var edad= 19;
var cantidad="100";
var nuevacantidad=Number(cantidad);
parseInt();
parseFloat();

//Segundo episodio
var bebida="agua";

var comida='ceviche';

var instruccion="El platillo se llama 'ceviche'";

var edad=22;
var edadtxt= String(edad);

//Tercer episodio
var activo= true;

var desactivo= false;

var estado=Boolean(10>9);
var estado2=Boolean(9>10);

//Cuarto episodio
var fecha = new Date();
//fecha.get
//fecha.set

//Quinto episodio
var simbolo1= Symbol();
var simbolo2=Symbol();
//valor unico en los symbol
var ambiente= Symbol('dev');

//Sexto episodio
//JSON -> JavaScript Object Notation

var person={nombre:'Lucas',twitter:'lucastwit'};

var personas=[
    {nombre:'Camila'   ,twitter:'cmatwit'},
    {nombre:'Juan'     ,twitter:'jnstwit'},
    {nombre:'Fernando' ,twitter:'fernantwit'},
    person
]
var personJSON= JSON.stringify(person);

var nuevapersona= JSON.parse(personJSON);