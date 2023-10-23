let marver_herros = ["thor","spiderman","Ironman"];
let dc_heros = ["superman","flash","batman"];

// marver_herros.push(dc_heros);

// console.log(marver_herros);

//spread operator

const all_herros = [...marver_herros, ...dc_heros];
console.log(all_herros);