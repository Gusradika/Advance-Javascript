// Filter, Map & Reduce

const angka = [1, 8, 9, 4, 3, 6, -2, -3, -1, 10];

const newAngka = [];

// Mencari angka >= 3

for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

console.log(newAngka);

// FILTER

const newAngka2 = angka.filter((x) => {
  x >= 3;
});
console.log(newAngka2);

// MAP
// Kalikan semua angka * 2
const newAngka3 = angka.map((x) => {
  x * 2;
});
console.log(newAngka3);

// REDUCE
// Jumlahkan seluruh element pada array
// Param 1 -> Accumulator total penjumlahan
// Param 2 -> CurrentValue index sekarang
// 1, 8, 9, 4, 3, 6, -2, -3, -1, 10
const newAngka4 = angka.reduce((accumulator, currentValue) => {
  accumulator + currentValue, 0; // 0 belakang ini adalah variable yang dapat ikut di jumlahkan
});
console.log(newAngka4);

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka
  .filter((x) => x > 5)
  .map((x) => x * 3)
  .reduce((acc, cur) => acc + cur, 0);
//
