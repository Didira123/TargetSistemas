const busca = "Meu carro está sem gasolina. Tenho que ir ao posto.";

let countA = 0;
for (let i = 0; i < busca.length; i++) {

    ["a", "A"].includes(busca[i]) ? countA++ : 0;
}
console.log(`A letra "a" (maiúscula ou minúscula, sem considerar acentuação) ocorre ${countA} vezes.`);