/*Funciones que capitaliza una palabra */
export const capitaliza= stg=>{
    let charM = stg.charAt(0).toUpperCase();
    let div = stg.slice(1);
    let Frase= charM + div;
    return Frase;
}