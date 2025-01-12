const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //spread operator
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ naame: "Hitesh" })); // intresting ise pehle bolna padega ki key ko array me convert karana hai ke value ko otherwise vo sirf empty array hi dega answer

let score_1 = 100;
let score_2 = 200;
let score_3 = 300;

console.log(Array.of(score_1, score_2, score_3));
