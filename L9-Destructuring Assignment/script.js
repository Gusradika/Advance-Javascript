// Destructuring Assignment

// Destructuring Array
const perkenalan = ['halo', 'nama', 'saya', 'aditya'];

// semua array diatas akan masuk kedalam. variable dibawah ini dengan urutan yang sama persis.
const [satu, dua, tiga, empat] = perkenalan;

// SKIPPING ITEMS
// Contoh untuk Skip beberapa array. akan melompati beberapa value yang ada di atas.
const [satu1,,,empat1] = perkenalan;

// SWAP ITEMS
let a = 1;
let b = 2;

[a,b] = [b,a];

// return value pada function
function coba(){
    return [1,2];
}

// Tipe dibawah ini akan menjadi array
const x = coba();

// Kita juga bisa memetakan return value diatas dengan cara
const [y,z] = coba();


// REST PARAMETERS
const [xx, ...values] = [1,2,3,4,5,6];

console.log(xx);
console.log(values);



// 
// 
// DESTRUCTURING OBJECTS
// 
// 

// untuk dapat mendestructuring object maka variable harus sama dengan property object
const mhs = {
    nama : "Aditya",
    umur : 22
};
// gunakan {} untuk object. dan nama variable harus sama dengan property object
const {nama , umur} = mhs;

// ASSIGNMENT WITHOUT DECLARATION

({nama1, umur1} = {
    nama1 : "Aditya Kesuma",
    umur : 22, 
})

// ASSIGN TO NEW VARIABLE
// Kita dapat mengganti variable dengan cara dibawah ini. lalu selanjutnya kita dapat memanggilnya dengan
//console log n, (bukan console log nama lagi)
const {nama : n, umur : u } = mhs;
console.log(n);


// ASSIGN DEFAULT VALUE
// Cara memberikan nilai default adalah dengan cara memberikan = setelah declarasi variable. dikarenakan tidak ada 
// email maka kita dapat assign nilai default menjadi null atau ''
// Jika ada email di atas maka yg ataslah yang dituliskan
const {nama1, umur1, email = ''} = mhs;


// MENGAMBIL FIELD PADA OBJECT, SETELAH DIKIRIM SEBAGAI PARAMETER FUNCTION
const obj = {
    nama : "Aditya kesuma",
    id : 214,
    umur : 22,
    email : "AdityaKesuma@gmail.com"
}

// Kita bisa tangkap salah satunya saat melempar paramter dengan cara dibawah ini
// dikernakan id sudah ada di object obj
function getIdObj({id}){
    return id;
}

console.log(getIdObj(obj));
