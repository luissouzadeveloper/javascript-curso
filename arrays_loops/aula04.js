// do while
let i = 10

do {
    console.log(`Valor: ${i}`);
    i--;
} while (i >= 0);

// for
for(let j = 0; j < 5; j++) {
    console.log(j);
}

let mochila = ['Água', 'Corda', 'Faca', 'Lanterna', 'Pederneira'];

// for(let a = 0; a < mochila.length; a++) {
//     console.log(`Item ${a}: ${mochila[a]}`);
// }

// for in
for (a in mochila) {    
    console.log(`Item ${a}: ${mochila[a]}`);
}