let idade = 20;

let paisPresentes = false;

let comprouBilhete = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar ${podeViajar}`);

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos";


let n1 = 6

let n2 = 8 

let media = (n1 + n2)/2

console.log(`Média: ${media}`);


if (comprouBilhete === true){
    console.log("Sim, comprou bilhete.")

}else {
    console.log(msgMaiorIdade)
}
