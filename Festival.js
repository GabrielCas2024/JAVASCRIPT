/*Programa Sobre Festival mechas*/
//1- Creacion de los mechas
const mechas = [
{ nombre: 'ZX-01', categoria: 'Retro', poder: 120, piloto: 'Akira' },
{ nombre: 'ByteBastion', categoria: 'Cyber', poder: 200, piloto: 'Maya' },
{ nombre: 'PixelRaptor', categoria: 'Retro', poder: 95, piloto: 'Leo' },
{ nombre: 'NullPointer', categoria: 'Buggy', poder: 75, piloto: 'Rita' }
];
/*Creacion del spread y suma de un nuevo mecha (Esto sirve de copia
para los Mechas)*/
const spreadMechas = [
    ...mechas,
    {nombre:'zords',categoria:'Cyber',poder:280,piloto:'Power Ranger Rojo'}
];

/*2- destructuring obtener el nombre y la categoría del primer 
mecha y mostrar por consola un mensaje con template strings.*/
const {nombre,categoria,...otros} = spreadMechas[0]
let mensaje = `Nombre Mecha: ${nombre}, categoria del mecha: ${categoria}`;
console.log(mensaje);


/*3- Arrow function: Recibe un arrary y una categoria y devuelve los mechas de esa categoria*/
/*variables:
cat= categorias 
array= arrays que contienes los datos de los mechas*/
const filtrarCategoria= (array,cat) =>{
    return array.filter(mecha => mecha.categoria == cat);
};


/*4- Arrow function: AumentarPoder que reciba un mecha y devuelva una copia sin mutar con su poder incrementado en un 15%*/
/*Variables:
 ATQ = Se refiere al % de danio que se aumenta
*/
const ATQ=1.15;
let array_mechas_potenciados = [];
const aumentarPoder = mecha=> {
    return {
        ...mecha,
        poder: mecha.poder * ATQ
    };
};
array_mechas_potenciados = spreadMechas.map(mecha=> aumentarPoder(mecha));

/*5- Crear un array nuevo mechasPotenciados donde se apliquen aumentarPoder a todos los mechas de la copia (usar map)*/

const mechasPotenciados = array_mechas_potenciados.map(mecha => {
    aumentarPoder(mecha);
    let mensaje = `Mecha: ${mecha.nombre} poder nuevo: ${mecha.poder}`;
    return mensaje;
});
//console.log(mechasPotenciados);

/*6- Usando rest en destructuring, separar los 3 primeros pilotos (propiedad piloto) del array
mechasPotenciados y generar un mensaje que liste los 3 pilotos con template strings

(si hay menos de 3, listar los que haya).*/
//Esta funcion muestra los primeros 3 pilotos
//Creamos un nuevo array donde se guardaran los pilotos para el mensaje
const [mecha1, mecha2, mecha3, ...restoMechas] = spreadMechas;
const arrayPilotos = [mecha1, mecha2, mecha3];

let contador=0;//Contador para mensaje personalizado.
const mostrarPilotos = arrayPilotos.map(mechas =>{
    const{piloto}=mechas;
    contador++;
    let mensaje = `El Piloto Nro ${contador} es : ${piloto}`;
    return mensaje;
})
// console.log(mostrarPilotos);// Apartado Nro 6;

//7- Mostrar en consola los resultador 
console.log("1- Array originales: ")
console.log(mechas);//Array original de mechas
console.log("\n")
console.log("2- Copia con los nuevos mechas");
console.log(spreadMechas)// Copia con los nuevos mechas
console.log("\n")

//Resultados de la FUNCION: filtrarCAtegoria
let cat="Retro"//Variable para probar
console.log(`3- Funcion Filtrar por Categorias, categoria de prueba: ${cat}`);
console.log(filtrarCategoria(spreadMechas,cat));
console.log("\n")
console.log("4- Mostrar los mechas potenciados: ");
console.log(mechasPotenciados);// muestra los mechas potenciados
console.log("\n")
console.log("5- Mostrar los primeros 3 pilotos")
console.log(mostrarPilotos);//Muestra los 3 pilotos

