let altura =  1.94;
let peso = 74.5;
let IMC = calcularIMC(altura, peso);
console.log(IMC);
function calcularIMC(altura, peso){
   IMC = peso/(altura*altura);
   return IMC;     
}