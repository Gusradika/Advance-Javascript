// DESTRUCTURING FUNCTION

function penjumlahanPerkalian(a,b){
    return [a + b, a * b];
}

// cara 1
const tambah = perjumlahanPerkalian(2,3)[0];
const kali = perjumlahanPerkalian(2,3)[1];

console.log(tambah);
console.log(kali);

// Cara 2
const [tambah1, kali1] =perjumlahanPerkalian(2,3);

console.log(tambah1);


// Study Case
// Urutan harus benar
function kalkulasi (a,b){
    // Tambah, Kurang, Kali, Bagi
    return [a + b, a - b, a * b, a / b];
}

const [tambah2, kurang, kali2, bagi] = kalkulasi(2,3);


// Kekurangan urutannya harus benar
// Jika ingin lebih yang spesifik maka gunakan object pada return valuenya

function kalkulasi2 (a,b){
    return {
        tambah5 : a + b,
        kurang5 : a - b,
        kali5 : a * b,
        bagi5 : a / b,
    }
}

const {tambah5, kurang5, kali5, bagi5} =kalkulasi2(2,3);
console.log(kurang5);

// DESTRUCTURING FUNCTION ARGUMENTS
const mhs = {
    nama : "Aditya Kesuma",
    umur : 22, 
    email : "ADitya@gmail.com", 
}

// CARA 1
function cetakMhs(nama, umur){
    return `Halo nama Saya ${nama}, saya ${umur} tahun.`;
}

// Kita dapat kirim melalui parameter yang sudah di set dibawah ini atau gunakan cara ke 2
console.log(cetakMhs(mhs.nama, mhs.umur));

// CARA 2
// Mengirim Object. pastikan parameter function berparameter object
function cetakMhs2(mhs){
    return `halo nama saya ${mhs.nama} dan saya berumur ${mhs.umur} tahun`;
}

console.log(cetakMhs2(mhs));

// CARA 3
// kita dapat menangkap sebuah property dari function menggunakan { } didalam sebuah parameter
// Teknik inilah yang disebut pemecahan (Destructuring)
function cetakMhs3({nama, umur}){
      return `halo nama saya ${nama} dan saya berumur ${umur} tahun`;
}

console.log(cetakMhs3(mhs));

// STUDY CASE NESTED OBJECT

const mhs1 ={
    nama : "Aditya Kesuma",
    umur : 22,
    email : "Aditya@gmail.com",
    nilai : {
        tugas : 80,
        uts : 75,
        uas : 100,
    }
};


// CARA 1 
function cetakMhs4({nama, umur, nilai}){
        return `halo nama saya ${nama} dan saya berumur ${umur} tahun. dan nilai UAS saya adalah : ${nilai.uas} `;
}
console.log(cetakMhs4(mhs1));

// CARA 2 Nested Destructuring
function cetakMhs4({nama, umur, nilai : {tugas, uts, uas}}){
        return `halo nama saya ${nama} dan saya berumur ${umur} tahun. dan nilai UAS saya adalah : ${uas} `;
}