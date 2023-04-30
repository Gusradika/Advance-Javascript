// REST parameters
// REST akan mengembalikan Array. dan hanya bisa di tulis di akhir.

function myFunc(a, b, ...myArgs) {
  return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}

console.log(myFunc(1, 2, 3, 4, 5));

// Array Destructuring
// Study case setiap nama yang muncul pertama adalah ketua
const kelompok1 = ["Aditya", "Kesuma"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota);

// OBJECT destructuring
const team = {
  pm: "Aditya",
  frontEnd1: "Doddy",
  frontEnd2: "deddy",
  backEnd: "kesuma",
  ux: "hendra",
  devOps: "ferry",
};

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam);

// Filtering
function filterBy(type, ...values) {
  return values.filter((x) => typeof x === type);
}
//param 1 di isi dan masuk ke argument type. jadi type = number
console.log(filterBy("number", 1, 2, "Aditya", false, 10, true, "doddy"));
