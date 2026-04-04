
const umaString = "Socorram me subi no onibus em Marrocos!";
let aoContrario = "";

for(i = umaString.length -1; i >= 0; i--){
    letra = umaString[i];
    aoContrario = aoContrario + letra;
}

console.log(umaString);
console.log(aoContrario);