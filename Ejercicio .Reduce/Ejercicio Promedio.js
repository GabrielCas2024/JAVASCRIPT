/*Programa para calcular y simplificar el promedio de notas*/
//Array simulacion devolver promedio
let notas = [5, 6, 8, 1, 2, 0.5, 9, 10]

const avg = array => (array.reduce((acc, n) =>  acc + n, 0)) / array.length

console.log(avg(notas));
