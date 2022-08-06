
//Mostrar un mensaje en consola
console.log("Hola mundo");

/*
Tipos de Datos

Js tiene variables dinamicas las cuales se les puede asignar un valor y luego cambiarlo*/
var nombre = "Juan";
var apellido='Perez';
//los String pueden iniciar con comillas simples o dobles o vacios
var numero=15;
var booleano=true;
var fecha=new Date();
var objeto={};
var array=[];
var funcion=function(){};
var nulo=null;
var indefinido=undefined;

//Para ver el tipo de dato de una variable se utiliza la funcion typeof
console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof fecha);
console.log(typeof objeto);

//Concatenacion de Cadenas
var nombreCompleto=nombre+" "+apellido;
console.log(nombreCompleto);

//evalua de iz a der y como al lado iz encuentra primero una cadena el derecho lo trata como cadena
var cadenaNumero=nombre+numero;
console.log(cadenaNumero);

//Da error ya que no puede sumar numero mas cadenas
//var numeroCadena=numero+cadena;
//console.log(numeroCadena);

//se puede sumar numeros y concatenarlos pero colocando parentesis
var suma=nombre+(numero+numero);
console.log(suma);

//sintaxis de variables
var variable;//esto ya no se recomienda
variablex='prueba';//se puede declarar variables de esta manera pero no es buena practica
let variable1;//esta es la mejor practica a dia de hoy
//se puede definir la variable y luego asignar los valores despues
let variable3;
variable3='prueba';
const variable2=2;//variable constante que no se puede cambiar su valor

//mejores practicas para declarar nombres de variables
let nombresCompleto='juan';//lowerCamelCase
console.log( nombresCompleto );

let x=2,y=4;
console.log( x+y );

//JS es Case Sensitive en los nombres de variables
/*No se puede iniciar variables con numeros o usar palabras reservadas
solo :
_variable
$variable
variable*/

//Operadores Aritmeticos
/*
+   Suma
-   Resta
*   Multiplicacion
/   Division
%   Modulo
++  Incremento
--  Decremento
** Exponente
*/
//Incrementos y decrementos
let f=1,d=2;
let u;
console.log("valor inicial de u->"+u);
//en el preincremento primero incrementa y luego asigna
u=++f;
console.log("Valor en PreIncremento de f asignado en u->"+u)
//en el postincremento primero asigna y luego incrementa para el proximo uso de la variable
u=d++;
console.log("Valor en PostIncremento de d asignado en u->"+u)
console.log("Valor de d luego de el postincremento asignado en u el valor de d es->"+d);
/*!!!Funciona exactamente igual en el Decremento <- IMPORTANTE*/

/* OPERADORES DE ASIGNACION
=   Asignacion
+=  Suma y asignacion
-=  Resta y asignacion
*=  Multiplicacion y asignacion
/=  Division y asignacion
%=  Modulo y asignacion
**= Exponente y asignacion
*/

/*  OPERADORES LOGICOS
== Igual que (compara valores sin importar el tipo de dato)
=== Identico (compara valores y tipo de dato)
!= Diferente (compara valores sin importar el tipo de dato)
!== No Identico (compara valores y tipo de dato)
> Mayor que 
< Menor que
>= Mayor o igual que
<= Menor o igual que
&& Y
|| O
! Negacion
*/
let n1=3,n2=2,n3=3,v1="3",v2="3";
console.log("3==2:"+(n1==n2));
console.log("3==3:"+(n1==n3));
console.log("3=='3':"+(n1==v1));
console.log("3=='3':"+(n1==v2));
console.log("3==='3':"+(n1===v1));
console.log("3===3:"+(n1===n3));
console.log("3!=2:"+(n1!=n2));
console.log("3!=3:"+(n1!=n3));
console.log("3!='3':"+(n1!=v1));
console.log("3!='3':"+(n1!=v2));
console.log("3!==3:"+(n1!==n3));
console.log("3!=='3':"+(n1!==v1));
console.log("3!=='3':"+(n1!==v2));
console.log("3>2:"+(n1>n2));
console.log("3>3:"+(n1>n3));
console.log("3>'3':"+(n1>v1));
console.log("3>'3':"+(n1>v2));
console.log("3>=2:"+(n1>=n2));
console.log("3>=3:"+(n1>=n3));
console.log("3>='3':"+(n1>=v1));
console.log("3>='3':"+(n1>=v2));
console.log("3<2:"+(n1<n2));
console.log("3<3:"+(n1<n3));
console.log("3<'3':"+(n1<v1));
console.log("3<'3':"+(n1<v2));
console.log("3<=2:"+(n1<=n2));
console.log("3<=3:"+(n1<=n3));
console.log("3<='3':"+(n1<=v1));
console.log("3<='3':"+(n1<=v2));

/*
Sentencia if/else
if(condicion){
    sentencia1;
}else{
    sentencia2;
}
o 
if(condicion){
    sentencia1;
}
else if(condicion){
    sentencia2;
} else
{ 
    sentencia3;
}
*/

/*Ejercicio : saber si un numero es par o impar*/
let numero1=10;
if(numero1%2==0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

//Ejercicio: Saber si es mayor de edad o no
let edad=18;
if(edad>=18){
    console.log("Es mayor de edad");
} else{
    console.log("No es mayor de edad");
}


//Operadores Ternarios

let resultado1=(3>2);
resultado1?console.log("Verdadero"):console.log("Falso");

//Convertir de String a Number
let numero2="10";
console.log(Number(numero2));


//Funcion isNaN(isNotANumber) esto es para saber si es un numero o no
let numero3="10x";
let numero4=Number(numero3)
console.log("Es un numero la variable Numero4?:"+numero4,isNaN(numero4));

/*switch

sintaxis:

switch(variable){
    case valor1:
        sentencia1;
        break;
    case valor2:
        sentencia2;
        break;
    case valor3:
        sentencia3;
        break;
    default:
        sentenciaDefault;
        break;
}
se pueden agrupar los casos
case 1: case 2: case 3:'
sentencia;
break;

Las comparaciones son Estrictas quiere decir que compara los valores y Tipos de dato
*/

/*Ciclo While


sintaxis:
while(condicion){
    sentencia;
}
*/

/*Cilo do While

sintaxis:
do{
    sentencia;
}while(condicion);
*/

/*ciclo for 

sintaxis:
for(inicializacion;condicion;incremento){
    sentencia;
}

ejemplo:

*/
for(let i=0;i<10;i++){
    console.log("i->"+i);
}

/*Palabra break

funciona para romper un Ciclo
ejemplo:
este ejemplo muestra solamente el primero numero par que encuentra del ciclo
*/
for(let i=0;i<10;i++){
    if(i%2==0){
        console.log("Par [i]->"+i);
        break;
    }
}

/*Palabra continue
Funciona para ir a la siguiente iteration del ciclo 
*/
for (let i=0;i<10;i++){
    if(i%2!==0){
        continue;
    }else{
    console.log("i->"+i);
    }
}

/*Arrays

Es de tipo object

Sintaxis:
let arreglo=new Array('juan','pedro','maria'); esto es antiguo
let array=[valor1,valor2,valor3,valor4,valor5];

ahora se hace con const
*/
const arreglo=['juan','pedro','maria']; 
console.log(arreglo);

//Acceder a items
console.log("arreglo[0]->"+arreglo[0]);
arreglo.forEach(element => {
    console.log(element);
});

//Modificar elementos
arreglo[1]="Pedro";
console.log(arreglo);

//Agregar elementos a un arreglo
//Push
arreglo.push("Maria");
console.log(arreglo);

//forma 2
console.log(arreglo.length);
arreglo[arreglo.length]="Marias";
console.log(arreglo);

//forma 3 aca no es recomendable ya que quedariamos con un item vacio
console.log(arreglo);
arreglo[6]="Juana";
console.log(arreglo);

//Preguntar si es un array
console.log(Array.isArray(arreglo));
console.log(arreglo instanceof Array);

/*Funciones 

Sintaxis:
function nombreFuncion(parametro1,parametro2){
    sentencia;
}
No importa donde se defina la funcion, se va a poder utilizar en cualquier parte del codigo
siempre y cuando se declare
Ejemplo:
*/
function fncSumar(a,b){
    console.log(a+b);
}
function fncSumar2(a,b){
    return a+b;
}
fncSumar(10,20);

console.log(fncSumar2(10,20));

/*Funciones de tipo Exprecion/Anonimas

Esta termina con ;
sintaxis:
let variable=function(parametro1,parametro2){retunr parametro1+parametro2;};

*/
let s=function(parametro1,parametro2){return parametro1+parametro2;};
console.log(s(12,20));

/*Funciones de tipo Self-Invoking

(function(parametro1,parametro2){
    sentencia;
}
)(parametro1,parametro2);

!!!El detalle de esto es que no se puede reutilizar <- IMPORTANTE
*/
(function(){
    console.log("Hola");
})();

/*Funciones como Objetos

Esto es para saber la cantidad de parametros que recibe una funcion
esto debe colocarse dentro de la funcion
console.log(arguments.length);

Este metodo es para ver el codigo de la funcion
var fnc_2=fncSumar.toString();
*/
console.log(typeof(fncSumar));
var fnc_2=fncSumar.toString();
console.log(fnc_2);

/*Funciones de tipo Arrows

Sintaxis:

const variable=(parametro1,parametro2)=>{
    sentencia;
}

Ejemplo:
*/
const sumarFuncionArrow= (a,b)=>{
    return a+b;
}
let resultado=sumarFuncionArrow(3,5);
console.log(sumarFuncionArrow(10,20));
console.log(resultado);

/*Parametros
Para saber el contenido de un parametro en una funcion se debe utilizar el metodo
arguments[index]

con esto sabremos que contiene el parametro


en las funciones no es necesario que la cantidad de argumentos sea igual al numero de
parametros se pueden utilizar los extra con aguments[index]

por ejemplo sumar todos los argumentos

*/

resultado=sumarTodo(1,2,3,4,5,6,7,8,9,10);
function sumarTodo(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        suma+=arguments[i];
    }
    return suma;
}
console.log(resultado);

/*Paso por valor y paso por referencia

Esto es el paso por valor ya que solo se envia una copia del valor no cambia la variable
t su valor original
*/
let t=10;

function cambiarValor(a){
    a=20;
}
cambiarValor(t);
console.log(t);
//Paso por referencia
//Se utiliza un objeto

const persona={
    nombre:"Juan",
    apellido:"Perez"
}
function cambiarValorObjeto(p1){
    p1.nombre="Pedro";
    p1.apellido="Juarez";
}
cambiarValorObjeto(persona);
console.log(persona);

/*Objetos

sintaxis:
let objeto={
    atributo1:valor1,
    atributo2:valor2,
    atributo3:valor3,
    metodo1:function(){
        sentencia;
    }
}

o
const objeto={
    atributo1:valor1,
    atributo2:valor2,
    atributo3:valor3,
     metodo1:function(){
        sentencia;
    }
}

Ejemplo:
*/
let persona1={
    nombre:"Juan",
    apellido:"Perez",
    edad:28,
    nombreCompleto1:function(){
        return this.nombre+" "+this.apellido;
    }
}

console.log(persona1);
console.log(persona1.nombreCompleto1());

/*Forma 2 de crear un objeto con new
*/
let persona3=new Object();
persona3.nombre="Juan";
persona3.apellido="Perez";
persona3.edad=28;
persona3.nombreCompleto2=function(){
    return this.nombre+" "+this.apellido;
}
console.log(persona3);
console.log(persona3.nombreCompleto2());

//Acceder a propiedades de los objetos 

console.log(persona1.nombre);
console.log(persona1["nombre"]);

//Recorrer cada una de las propiedades de un objeto con for in
for(let atributo in persona1){
    console.log(atributo);
    console.log(persona1[atributo]);
}

//Agregar o eliminar atributos de un objeto 
persona1.telefono='123456789';
console.log(persona1);

persona1.telefon0='12345678';
console.log(persona1);

delete persona1.telefon0;
console.log(persona1);

//Distintas formas de imprimir un objeto 
console.log(persona1);
//concantenar atributos
console.log(persona1.nombre+","+persona1.apellido+","+persona1.telefono);
//iterar con for in
for(let atributo in persona1){
    console.log(persona1[atributo]);
}

//con Object.values
console.log(Object.values(persona1));

//con JSON.stringify 
console.log(JSON.stringify(persona1));


//Metodo Get y Set en Objetos
//solo con poner get se aclara que sera un metodo y no es necesario la palabra function
let persona4={
    nombre:"Juan",
    apellido:"Perez",
    edad:28,
    idioma:'es',
    get lang(){
        return this.idioma.toLocaleUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toLocaleUpperCase();
    },
    get nombreCompleto1(){
        return this.nombre+" "+this.apellido;
    }
}
console.log(persona4.nombreCompleto1);
console.log(persona4.lang);
persona4.lang='en';
console.log(persona4.lang);

/*Metodo constructor
sintaxis:
El nombre del objeto debe iniciar en mayusculas
function NombreObjeto(parametro1,parametro2){
    sentencia;
}
*/
function Persona5(nombre,apellido,edad,idioma){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.idioma=idioma.toLocaleUpperCase();
    this.nombreCompleto=function(){
        return this.nombre+" "+this.apellido;
    }
}
let persona5=new Persona5('Juan','Perez',28,'es');
console.log(persona5);
let persona6=new Persona5('Pedro','Juarez',28,'en');
console.log(persona6.nombreCompleto());
//Formas de crear Objetos
//Forma 1
let miObjeto=new Object();
//Forma 2
let miObjeto2={};
//Forma 3
let miCadena1=new String("hola");

//Uso de Prototype Esto sirve para agregar un atributo a todos los objetos creados de ese Constructor
Persona5.prototype.telCasa='443322';
console.log(persona5.telCasa);
persona5.telCasa='11223344';
console.log(persona5.telCasa);

/*Metodo Call

Permite llamar a un metodo que esta en un objeto desde otro metodo
*/
let carro1={
    marca:'Toyota',
    modelo:'Corolla',
    marcaModelo:function(titulo,peso){
        return titulo+" "+this.marca+" "+this.modelo+" "+peso;
    },
    marcaModelo2:function(){
        return this.marca+" "+this.modelo;
    }
}
let carro2={
    marca:'Ford',
    modelo:'Fiesta',
}
//uso de call para usar MarcaModelo que pertenece a carro1 con los datos de carro2
console.log(carro1.marcaModelo());
console.log(carro1.marcaModelo.call(carro2));

//paso de argumentos con Call
console.log(carro1.marcaModelo.call(carro2,"carro2","75Kg"));

//Metodo Apply
//Permite llamar a un metodo que esta en un objeto desde otro metodo
//Con la diferencia que se tiene que pasar los datos de los argumentos en un arreglo
console.log(carro1.marcaModelo2.apply(carro2));
let arreglox=["carro2","75Kg"];
console.log(carro1.marcaModelo.apply(carro2,arreglox));
console.log(carro1.marcaModelo.apply(carro2,["carro2","75Kg"]));

/*Clases
Sintaxis:
class NombreClase{
    constructor(parametro1,parametro2){
        sentencia;
    }
    metodo1(){
        sentencia;
    }
    metodo2(){
        sentencia;
    }
}
Ejemplo:
Este contendra get y set
se acostumbre que los atributos lleven _ ya que no se pueden llamar igual los set y get que el atributo
*/
class Persona{
    constructor(nombre,apellido,edad,idioma){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idioma=idioma.toLocaleUpperCase();
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    nombreCompleto(){
        return this._nombre+" "+this._apellido;
    }
    datosCompletos(){
        return this._nombre+" "+this._apellido+" "+this._edad+" "+this._idioma;
    }
}
let personaJuan=new Persona('Juan','Perez',28,'es');
console.log(personaJuan.datosCompletos());
console.log(personaJuan.nombre);
personaJuan.nombre='Pedro';
console.log(personaJuan.nombre);

//Hoisting y Clases
/*Hoisting no se aplica ya que siempre debemos declarar la clase antes de usarla
 */

/*Herencia

sintaxis:
class NombreClase extends NombreClasePadre{
    constructor(Parametros del padre,parametro1,parametro2...){
        super.constructor(Parametros del padre...);
        sentencia;
    }
    metodo1(){
        sentencia;
    }
    metodo2(){
        sentencia;
        si se llama un metodo del padre es super.metodo();
    }
}

*/
class Empleado extends Persona{
    constructor(nombre,apellido,edad,idioma,puesto){
        super(nombre,apellido,edad,idioma);
        this._puesto=puesto;
    }
    get puesto(){
        return this._puesto;
    }
    set puesto(puesto){
        this._puesto=puesto;
    }
    /*Sobre escritura de metodos
    seria modificar el metodo con el mismo nombre o como se realizo aca
    */
    datosCompletos(){
        return super.datosCompletos()+" "+this._puesto;
    }
    toString(){
        return super.datosCompletos()+" "+this._puesto;
    }
}
let empleado1=new Empleado('Juan','Perez',28,'es','Programador');
console.log(empleado1.datosCompletos());
console.log(empleado1.toString());

/*Palabra static 
se asocia con la clase no con los objetos que se crean de esa clase

*/
class carro3{
    //atributo static
    static contadorObjetosCarro3=0;
    //atributo static de solo lectura
    /*se coloca asi ya que no se puede colocar una constante de tipo static
    entonces se coloca un metodo get static que sera solo de lectura*/
    static get MAX_OBJ(){return 5;}
    constructor(marca,modelo){
        this._marca=marca;
        this._modelo=modelo;
        //esto es para aumentar el numero de objetos de tipo carro y este
        //se aumenta en 1 cada vez que se crea un objeto esto afecta a todos los objetos
        //como de la clase padre asi como las clases hijas
        carro3.contadorObjetosCarro3++;
    }
    static bienvenida(){
        return  "Este es un mensaje de bienvendida";
    }
    static bienvenida2(Persona){
        return  "Este es un mensaje de bienvendida "+Persona.nombreCompleto();
    }
}
let carro3_1=new carro3('Toyota','Corolla');

console.log(carro3.contadorObjetosCarro3);
let carro4=new carro3('Ford','Fiesta');

//da error si colocamos carro carro3_1.bienvenida('Ford','Fiesta');
//Pero no da error si colocamos 
console.log(carro3.bienvenida());
console.log(carro3.bienvenida2(personaJuan));
console.log(carro3.contadorObjetosCarro3);
console.log(carro3.MAX_OBJ);

//!!!IMPORTANTE: si deseamos trabajar las clases en archivos distintos podemos hacerlo 

/*Modo Strict 

sirve para evitar crear variables sin declarar

es bueno agregar 
"use strict"
al inicio de nuestro codigo

*/

/*Excepciones try-catch-finally

Sintaxis:
try{
    sentencia;
}
catch(error){
    sentencia;
}
finally{
    sentencia;
}
Ejemplo:

*/
try{
   
    let prueba='a';
    if(!isNaN(prueba)){
    console.log("numero->"+prueba);
    } else{
        throw new Error("No es un numero");
    }
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Fin del programa");
}


/*Arrow Function

Sintaxis:
let/const arrowFunction=()=>{
    sentencia;
}

let arrowFunction=(a+b)=>a+b;
esto si es solo 1 linea
!!!IMPORTANTE no aplica hoisting es decir se tiene que declarar para luego llamarla


si se desea regresar un objeto:
const resultado=()=>({nombre:'Juan',apellido:'Perez'});


*/
// let arrowFunction=(a,b)=>{
//     return a+b;
// }
// console.log(arrowFunction(1,2));

// let arrowFunction=(a,b)=> a+b;
// console.log(arrowFunction(1,2));
// const returnObject=()=>({nombre:"juan"});
// console.log(returnObject());


/*Funciones Callback 

es una funcion que se pasa como parametro a otra funcion
y dentro de una funcion se puede llamar a otra funcion 

Sintaxis:

*/

function imprimir(mensaje){
    console.log(mensaje);
}

function suma1(op1,op2,funcionCallback){
    let resultado=op1+op2;
    funcionCallback(`La suma es ${resultado}`);
}
suma1(1,2,imprimir);

/*Funcion setTimeout 
Llamadas asincronas

*/

// function miFuncionCallback(){
//     console.log("Hola mundo despues de 3segundos");
// }
// setTimeout(miFuncionCallback,3000);
// console.log("Este mensaje se muestra mientras se espera a que se ejecute la funcion callback");
// setTimeout(function(){console.log("Hola mundo despues de 4segundos");},4000);
// setTimeout(()=>console.log("Hola mundo despues de 5segundos"),5000);

/*Funcion setInterval

recibe una funcion de tipo callback y la llama cada x milisegundos

*/
// let reloj=()=>{
//     let fecha=new Date();
//     console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
// }

// setInterval(reloj,1000);

/*Promesas

una promesa es codigo que tiene varios estados, se puede lanzar una peticion para procesar un codigo en 
dado caso que la promesa se resuelva correctamente, si se tuvo problemas se llama a rejected
es decir tenemos 2 caminos uno para cuando el codigo se ejecuta correctamente, y uno donde da error 
y mientras la promesa no ha terminado de ejecutar su codigo esta en pendiente y una vez termina pasa a 
resuelto o rechazado.

Para procesar el codigo cuando se ha resuelto una promesa seusa la funcion .then
y en caso de error con la funcion .catch()

Sintaxis:
let miPromesa=new Promise(resuelta,error(estas son funciones de tipo callback));

Ejemplo:
*/
// let miPromesa=new Promise((resolved,rejected)=>{
//     let expresion=true;
//     if(expresion){
//         resolved("El codigo se ejecuto correctamente");
//     }
//     else{
//         rejected("El codigo se ejecuto con error");
//     }
// });

// miPromesa
// .then(valor=>console.log(valor),
// error=>console.log(error)
// );
// miPromesa
// .then(valor=>console.log(valor))
// .catch(error=>console.log(error));



// let miPromesa=new Promise((resolved)=>{
//     console.log("Ejecutando codigo");
//     setTimeout(()=>resolved("Codigo con promesa y timeout"),3000);
//     console.log("Codigo terminado");
// });

// miPromesa.then(valor=>console.log(valor));

/*Async antes de un metodo es decir que un metodo devuelve si o si una promesa */


// async function miFuncionConPromesa(){
//     return 'Codigo con promesa y async';
// }
//se usan parentesis ya que es una funcion normal
// miFuncionConPromesa().then(value=>console.log(value));

//await y async
//await con async facilitan el uso de promesas, ya que await espera el resultado de una promesa
//!!!!IMPORTANTE AWAIT SOLO SE PUEDE USAR DENTRO DE FUNCIONES ASYNC 

//async con await
// async function funcionConPromesaAwait(){
//     let miPromesa=new Promise(resolver=>{
//         resolver('Promesa con await');
//     });

//     console.log(await miPromesa);
// }
// funcionConPromesaAwait();

//Promesas await,async y setTimeout

// async function funcionConPromesaAwaitTimeOut(){

//     let miPromesa=new Promise(resolved=>{
//         setTimeout(()=>resolved('Promesa con await y timeout'),3000);
//     });
//     console.log(await miPromesa);
// }
// funcionConPromesaAwaitTimeOut();


//Para acceder a elementos del documento html se utiliza document.getElementById('id') esto devuelve todo el elemento
//para el texto es con .innerHTML
//ejemplo 

//con innerHTML no solo se lee sino se modifica
let cabecero=document.getElementById('cabecero').innerHTML;
let parrafo=document.getElementById('parrafo').innerHTML;
document.getElementById('cabecero').innerHTML="Esto es una prueba";

//Metodo getElementbyTagName
/*
esto es para obtener segun el tipo de elemento
*/
let parrafos= document.getElementsByTagName('p');//si se coloca una etiqueta no existente se devuelve un array vacio
console.log(parrafos);//esto puede devolver un array
for(let i=0;i<parrafos.length;i++){
    console.log(parrafos[i].innerHTML);
}

//Metodo getElementByClassName esto es para los que tengan algun tipo de style css

let azul=document.getElementsByClassName('azul');
console.log(azul);
for(let elementos of azul){
    console.log(elementos.innerHTML);
}

//Metodo querySelectorAll esto se puede usar al aplicar una serie de estilos
//ejemplo querySelectorAll('tipoEtiqueta.Clase');
let elementos=document.querySelectorAll('p.azul');

//Manejo de Formularios con JS
//un boton envia los elementos a travez de una funcion de Js con el evento onClick='mostrarValores()
function mostrarValores(){
    let formulario=document.forms['fomulario'];
    let texto ='';
    for(let elemento of fomulario){
        texto+=elemento.value+'<br/>';
    }
    //ahora agregaremos este texto a un div
    document.getElementById('resultado').innerHTML=texto;
}

//Manejo de elementos individuales de un Formularios
function mostrarValores(){
    let formulario=document.forms['fomulario'];
    let texto ='';
    //esto recupera todo el objeto
    let nombre=formulario['nombre'];
    let apellido=formulario['apellido'];
    //esto es para recuperar el valor
    texto=nombre.value+'<br>'+apellido.value;
    //ahora agregaremos este texto a un div
    document.getElementById('resultado').innerHTML=texto;
}

//uso de document.write()
//Enviar informacion a la salida de html 
document.write('saludos desde JS');
//si ya se uso el document.write() y se
//vuelve a usar se sobreescribe lo que tengamos previamente en el html

//Cambio de atributos en html 
//imagen de inicio, luego clic en boton y cambia de valor la fuente de la imagen 
function Mostrar1(){
    document.getElementById('imagen').src='img/imagen2.jpg';
}

//Cambio de Estilos CSS con Js
//cambiar el color del titulo
function Mostrar2(){
    document.getElementById('titulo').style.color='red';
}

//Manejo de Eventos con Dom HTML y JS
//Evento click trabajando en HTML es onclick
//<h1 onclick="alert('Hola')">Hola</h1>
//<h1 onclick="this.innerHTML='Nuevo titulo'">Hola</h1>
//<h1 onclick="cambiarTexto(this)">Hola</h1>
function cambiarTexto(id){
    id.innerHTML='Nuevo titulo';
}

//Asociar eventos desde Js
//<h1 id="titulo">Hola</h1>
//solo se pasa la referencia no se llama la funcion por eso no se coloca parentesis
document.getElementById('titulo').onclick=cambiarTexto;
function cambiarTexto(){
    document.getElementById('titulo').innerHTML='Nuevo titulo';
}


//Manejo del evento onload
//Se ejecuta cuando se carga la pagina web
//<body onload="entrar()">
function entrar(){
    alert('Hola');
}

//Revision de idioma o cookies
//<body onload="entrar()">
function entrar(){
    texto="";
    if(navigator.language=='es-ES'){
        texto='Espaniol';
    }
    if (navigator.cookieEnabled){
        texto+='Cookies activadas';
    }
    document.getElementById('resultado').innerHTML=texto;
}

//Evento onchange con Js
//<input type="text" onchange="convertirMayusculas(this)">
function convertirMayusculas(nombreInput){
    nombreInput.value=nombreInput.value.toUpperCase();
}

//Eventos onmouseover y onmouseout
//<h1 onmouseover="tituloActivo(this)" onmouseout="tituloDesactivado(this)">Hola</h1>
function tituloActivo(id){
    id.style.color='red';
}
function tituloDesactivado(id){
    id.style.color='black';
}

//eventos onmousedown(click) y onmouseup(soltamos click)
//<h1 onmousedown="tituloActivo(this)" onmouseup="tituloDesactivado(this)">Hola</h1>
function tituloActivo(id){
    id.style.color='red';
}
function tituloDesactivado(id){
    id.style.color='black';
}


//eventos onfocus y onblur
//cambiar backgound de un input a azul cuando esta en foco y cuando pierde el foco a blanco
//<input type="text" onfocus="cambiarColorAzul(this)" onblur="cambiarColorBlanco(this)">
function cambiarColorAzul(id){
    id.style.background='blue';
}
function cambiarColorBlanco(id){
    id.style.background='white';
}


//Metodo addEventListener(Agrega uno o mas eventos)
//Nombre:<input type="text" id="Nombre">
//Apellido:<input type="text" id="Apellido">
//se asocia el evento y la funcion en este caso al ser de tipo callBack solo se asocia la funcion mas no se llama
document.getElementById('Nombre').addEventListener('focus',cambiarColorAzul);
document.getElementById('Apellido').addEventListener('blur',cambiarColorBlanco);
function cambiarColorAzul(evento){
    //target hace referencia al objeto que lanzo el evento
    let componente =evento.target;
    componente.style.background='blue';
}
function cambiarColorBlanco(evento){
    let componente =evento.target;
    componente.style.background='white';
}

//Funciones Arrow en addEventListener
//<input type="text" id="Nombre">
//<input type="text" id="Apellido">
//El detalle con las arrow Function es que no se puede reutilizar el codigo de la funcion
document.getElementById('Nombre').addEventListener('focus',(evento)=>{
    let componente =evento.target;
    componente.style.background='blue';
});
document.getElementById('Apellido').addEventListener('blur',(evento)=>{
    let componente =evento.target;
    componente.style.background='white';
});

//Delegacion de Eventos o useCapture

//Aplicar eventos de cambio de color a todos los elementos de tipo input del form

//<form id="formulario">
//    <input type="text" id="Nombre">
//    <input type="text" id="Apellido">
//</form>
//se agrega un true al final para decir que lo que asignamos al formulario se aplique a los
//elementos internos del mismo
const formulario=document.getElementById('formulario');
formulario.addEventListener('focus',(evento)=>{
    let componente =evento.target;
    componente.style.background='blue';
},true);
formulario.addEventListener('blur',(evento)=>{
    let componente =evento.target;
    componente.style.background='white';
},true);

//Agregar elementos a html desde Js

const personas=[
    new Persona('Juan','Perez'),
    new Persona('Pedro','Perez'),
]
function mostrarPersonas(){
    let texto="";
    for(let persona of Personas){
        texto+=`<li>${persona.nombre} ${persona.apellido}</li>`;
    }
}
document.getElementById('personas').innerHTML=texto;

//Formato moneda y porcentaje
const formatoMoneda=(valor)=>{
    //Idioma,Estilo de moneda="currency" seguido del tipo de moneda y tambien el simbolo asi como el min de 
    //digitos para los centavos
    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:'2',currencyDisplay:'symbol'});
    
}

const formatoPorcentaje=(valor)=>{
    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:'2',currencyDisplay:'symbol'});
}



//Conversion simplificada a numero
let numeroo1=5;
let numeroo2='5';
let numeroo=+numeroo2;
//esto convierte con el mas si es una cadena correspondiente a un valor numerico y si es de tipo Number
//no afecta en nada


