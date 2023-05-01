// Spread Operator

//  Memecah iterables menjadi single elements

const mhs = ["Aditya", "Kesuma", "Ngurah"];

console.log(...mhs);
console.log(...mhs[0]); //Memecah mhs[0] (array ke 0)

// Study Case
// Bisa digunakan untuk menggabung 2 atau lebih Array

const dosen = ["A", "B", "C"];
// Mirip dengan concat

const orang = [...mhs, ...dosen];
const orang2 = [...mhs, "hello", ...dosen];

console.log(orang);
console.log(orang2);

// Dapat mengcopy Array
// Jika menggunakan contoh dibawah itu hanyalah refrensi maka bukan sesungguhnya meng-copy
const mhs1 = ["Aditya", "Kesuma", "Ngurah"];
const mhs2 = mhs1; // SALAH

// CARA MENGCOPY SESUNGGUHNYA
const mhs3 = [...mhs1];

const liMhs = document.querySelectorAll("li");

// SPREAD operator juga berguna sebagai mengkonversi suatu variable menjadi array

const mhs4 = [...mhs1].map((x) => x.textContent);
console.log(mhs4);

// SPREAD operator memungkinkan untuk membuat animasi seperti Hover setiap huruf untuk di berikan attribute css
// dengan cara memecahnya lalu lakukan mapping, isi dengan span
// lalu tambahkan class nya
