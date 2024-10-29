const busca = 33;

if (busca < 0) {
    console.log(`O número "${busca}" não pertence a sequência de Fibonnaci.`);
} else if (busca === 0 || busca === 1) {
    console.log(`O número "${busca}" pertence a sequência de Fibonnaci.`);
} else {
    let a = 0;
    let b = 1;
    let encontrado = false;
    // console.log(0);
    // console.log(1);
    for (let y = 1; y <= busca; y = a + b) {
        // console.log(y);
        if (y === busca) { encontrado = true; break; }
        a = b;
        b = y;
    }
    console.log(`O número "${busca}"${!encontrado?" não":""} pertence a sequência de Fibonnaci.`);
}