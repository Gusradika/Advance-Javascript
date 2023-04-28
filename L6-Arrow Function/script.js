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
