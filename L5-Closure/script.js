// Exectuion context, Hoisting & Scope

console.log(nama);
var nama = "Aditya";

// ALUR
// CREATION PHASE -> EXECUTION PHASE

// Creation phase terjadi pada awalan Javascript dijalankan. maka jika kita mendeklarasikan tidak mengikuti algoritma
// maka Variable tidak akan error dan dijalankan, tetapi hasilnya akan menjadi Undefined.
// nama = undefined;
// var nama = "Aditya";

// ini adalah konsep Hoisting. atau bisa dianalogikan seperti kita mengerek bendera keatas. maka variable yang bawah akan
// dinaikan ke atas.

// window = global object
// this = window

// setelah creating phase maka selanjutnya adalah execution phase.

console.log(sayHello());

var nama2 = "Aditya1";
var umur = 23;

function sayHello() {
  return console.log(`Halo, Nama saya adalah ${nama2}, saya ${umur} tahun.`);
}

// Kita dapat melihat cara eksekusinya melalui JAVASCRIPT VISUALIZER anda dapat mencarinya melalui Google

// LEXICAL SCOPE
function init() {
  let nama = "aditya"; //Local Variable untuk function Init (Parent)
  function tampilNama() {
    //Inner Functions
    console.log(nama); //Akses ke parent variables
    // hoisting Terjadi (pengambilan terjadi)
  }
  console.dir(tampilNama); // dir menampilkan property dari function. dalam property tersebut akan diambilkan sebuah closure, melalui hoisting
  tampilNama();
}
init();
