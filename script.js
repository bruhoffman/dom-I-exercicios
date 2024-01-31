const frutas = ["laranja", "limão", "uva"]

/* Exercício 1 */
document.getElementById("fruta-1").innerHTML = frutas[0];

document.getElementById("fruta-2").innerHTML = frutas[1];

document.getElementById("fruta-3").innerHTML = frutas[2];


/* Exercício 2 */
console.log(document.getElementById("fruta").value)


/* Exercício 3 */
const inserirFruta = () => {
    document.getElementById("fruta-4").innerHTML = document.getElementById("fruta").value;
}