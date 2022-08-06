/*
 tsc -init = sirve para compilar un archivo de configuración
    tsc -w = sirve para ver un archivo de ts y compilarlo a js siempre que se realice 
    un cambio

    
    npm install webpack webpack-cli webpack-dev-server
    Sirve para solucionar modulos es decir para poder inicializar una aplicacion
    con varios modulos de ts que se utilizaran 

    npm install typescript ts-loader --save-dev
    Para poder cargar clases y se guarda en el ambiente de desarrollo 
    npm init -y
    crea el package.json

    "scripts": {
    "start":"webpack-dev-server --mode development"
  }
  esto se agrega en package al final es decir aca:
    "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "scripts": {
    "start":"webpack-dev-server --mode development"
  }
}

Luego se crea un archivo llamado webpack.config.js
esto sirve para crear el servidor 
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/archivo de entrada.ts'),
    output: {
        filename: 'archivo de entrada.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};

Para iniciar el servidor npm start
*/

//Definicion de Variables
//con let nombreVariable:tipo de dato a menos que se inicialice con un dato sino se puede dejar asi
//Con saludo1 no importa si no se inicializa porque infiere el tipo de dato
let saludo1="hola";
let saludo:string="Hola mundo desde TypeScript";
console.log(saludo);
//Aca nos muestra error ya que tiene tipo string y no se le puede asignar un numero
//saludo=10;
/* 
Tipos de datos:
let texto:string;
let numero:number;
let booleano:boolean;
let cualquiera:any; permite crear variables que almacenan cualquier tipo de dato

Constantes:
los nombres van con mayusculas y si son mas de 1 palabra se separan con _
const nombreConstante=valorDeLaConstante;
const PI=3.1416;
PI=3; si queremos modificar un valor a una constante da error ya que es constante!!

Definicion de Clases y objetos:
class NombreClase{
    private,public,protected nombreAtributo:tipoDeDato;
    constructor(nombreAtributo:tipoDeDato){
        this.nombreAtributo=nombreAtributo;
    }
    public metodo(parameter:tipoDeDato):tipoDeDatoQueRetorna{
        return this.nombreAtributo;
    }
    Metodos Estaticos:
    static metodoEstatico(parameter:tipoDeDato):tipoDeDatoQueRetorna{
        return this.nombreAtributo;
    }

}

objeto:
let nombreObjeto=new NombreClase(valor);

*/
class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre=nombre;
    }
    public getNombre():string{
        return this.nombre;
    }
    static metodoEstatico():number{
        return 10;
    }
}

let persona1=new Persona("Juan");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());

/*Interfaces:

Es un contrato a respetar es decir un tipo de dato que contiene atributos o metodos

Sintaxis:
interface NombreInterface{
    nombreAtributo:tipoDeDato;
    metodo(parameter:tipoDeDato):tipoDeDatoQueRetorna;
}
*/
interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;//Esto quiere decir que es opcional con el ?
}

let usuario1:Usuario={nombreUsuario:"Juan",password:"123456"};
let usuario2:Usuario={nombreUsuario:"Juan",password:"123456",confirmarPassword:"123456"};
console.log(usuario1);
console.log(usuario1.nombreUsuario);
console.log(usuario2);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar={
    abordarTransporte:function(){
        console.log("Abordando avion");
    }
}
avion.abordarTransporte();

/*Definicion de Generics
El tema de Generics basicamente es utilizar por ejemplo un array y especificar el tipo de datos 
que contendra

*/
let arregloDeNumeros:Array<Number>;
arregloDeNumeros=[1,2,3,4,5];
console.log(arregloDeNumeros);
console.log(arregloDeNumeros.length);
console.log(arregloDeNumeros[0]);

/*Uso de Modulos

Modulo persona.ts
export class Persona{
    nombre:string;
    constructor(nombre:string){
        this.nombre=nombre;
    }
}

Tratar de crear un objeto tipo persona en modulos.ts
import{Persona} from"./persona";
let persona1=new Persona("Juan");
console.log(persona1.nombre);
*/


