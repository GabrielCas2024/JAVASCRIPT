//Crear funciones de sumar, restar, multiplicar,dividir.
export const sumar = (a,b) => a+b;
export const restar =(a,b)=>a-b;
export const multiplicar = (a,b)=> a*b;
export const dividir= (a,b) => {
    if(a!=0){
        return a/b
    }else{
        return console.log("Escribe un numero diferente de a 0")
    }
}