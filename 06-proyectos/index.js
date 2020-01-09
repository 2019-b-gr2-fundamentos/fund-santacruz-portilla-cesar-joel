//"use strict";

//exports.__esModule = true

var sumaLibrerias = require('libreria-cssu/lib/suma');
var resultado = sumaLibrerias(1, 2);
console.log(resultado);

var restaLibrerias = require('libreria-cssu/lib/resta');
var resultado = restaLibrerias(1, 2);
console.log(resultado);

var multiplicacionLibrerias = require('libreria-cssu/lib/multiplicacion');
var resultado = multiplicacionLibrerias(1, 2);
console.log(resultado);

var PI = require('libreria-cssu/lib/pi')
console.log('la constante pi es', PI);