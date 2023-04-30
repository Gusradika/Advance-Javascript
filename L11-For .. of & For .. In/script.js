// FOR OF & FOR IN
// NEW LOOP
// Creates a loop iterating over ITERABLE OBJECTS

// ITERABLE OBJECTS is such as :
// String
// Array
// Arguments / Nodelist
// TypedArray
// Map
// Set
// UserDefined Iterables

// FOR .. OF

const mhs = ["Aditya", "Kesuma", "Ngurah"];

for (var i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

mhs.forEach((x) => console.log(x));

for (const m of mhs) {
  console.log(m);
}

// For of Dapat looping STRINGS

const nama = "Aditya";

for (const x of nama) {
  console.log(x);
}

// for of tidak bisa beri index. maka harus di akalin

for (const [i, x] of mhs.entries()) {
  console.log(x);
}

// NODELIST

const liNama = document.querySelectorAll("ul li");

// liNama.forEach((x) => console.log(x.textContent));

for (x of liNama) {
  console.log(x.innerHTML);
}

// Arguments
function jumlahAngka() {
  console.log(arguments);
}

jumlahAngka(1, 2, 3, 4, 5);

// arguments reduce
function jumlahAngka2() {
  let x = 0;
  for (x of arguments) {
    jumlah += x;
  }
}

console.log(jumlahAngka2(1, 23, 45, 6));

// FOR IN
// CREATES A LOOP ONLY ITERATING OVER ENURABLE (PROPERTY OF OBJECT)

const mhs2 = {
  nama: "Aditya Kesuma",
  umur: 22,
  email: "aditya@gmail.com",
};

for (x in mhs2) {
  console.log(x);
  console.log(mhs2[x]); // cara mendapatkan isinya. wajib menuliskan nama objectnya terlebih dahulu
}
