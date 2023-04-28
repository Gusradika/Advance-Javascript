// terdapat 2 macam function yaitu

// Function Declaration
function tampilPesan(nama) {
  console.log(`halo nama saya ${nama}`);
}

tampilPesan("Aditya");

// Function Expression
let tampilPesan2 = function (nama) {
  console.log(`halo nama saya ${nama}`);
};

tampilPesan2("Aditya Kesuma");

// ARROW FUNCTION
// Arrow Function adalah Function yang lebih singkat daripada Function Expression

// contoh 1
let tampilPesan3 = (nama) => {
  console.log(`halo nama saya ${nama}`);
};
tampilPesan3("Aditya Kesuma");

// contoh 2
let tampilNama = (nama) => {
  return `Halo, ${nama}`;
};
tampilNama("Aditya Kesuma");

// Implisit Return

let implisit = (nama) => `implisit, ${nama}`;
let implisit2 = () => "Halo, Aditya Kesuma";

//
//  Contoh penggunaan Map pada Arrow Function
//

let mhs = ["Aditya Kesuma", "Bobby Fischer", "Galendra April"];

// Function Delcaration
let jumlahHuruf = mhs.map(function (x) {
  return x.length;
});
console.log(jumlahHuruf);

// Function Arrow
let jumlahHuruf2 = mhs.map((x) => x.length);
console.table(jumlahHuruf2); // Print console, dengan tampilan Table

// Jika return Object
let jumlahHuruf3 = mhs.map((x) => ({ nama: x, jmlhHuruf: x.length }));
console.table(jumlahHuruf3); // Print console, dengan tampilan Table

//
//
// THIS pada arrow function
//
//
//

// Constructor function
// Constructor tidak dapat di deklarasikan menjadi Arrow Function

const Mahasiswa = function () {
  this.nama = "Aditya Kesuma";
  this.umur = 22;
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };
};

const mhs4 = new Mahasiswa();

// Object literal
// Arrow function tidak memiliki konsep this
const mhs5 = {
  nama: "Aditya Kesuma",
  umur: 22,
  sayHello: () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  },
};

const Mahasiswa2 = function () {
  this.nama = "Aditya Kesuma";
  this.umur = "22";
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };

  // Konsep Function memiliki this maka jika ini di jalankan maka yang di ambil adalah window
  // setInterval(function () {
  //   console.log(this.umur++);
  // }, 500);

  // kita harus menggunakan arrow function untuk mengambil constructor
  setInterval(() => {
    console.log(this.umur++);
  }, 500);
};

// Contoh Real
// Contoh Real
// Contoh Real
// Contoh Real

// SetInterval : memberikan interval waktu
// SetTimeout : memberikan timeout waktu

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  console.log(this);
  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
