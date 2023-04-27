// Membuat Object

var mhs = {
    nama : 'Aditya',
    umur : 22,
    ips : [3.00, 2.50 , 3.20],
    alamat : {
        jalan : 'jl. abc no.123',
        kota : 'surabaya',
        provinsi : 'Jawa Barat',
    }
};

// Kita bisa menampilkan Object diatas menggunakan 
// mhs.nama -> untuk nama
// mhs.ips[INDEX] -> untuk ips dengan index N
// mhs.alamat.jalan -> untuk Jalan dari alamat ATAU
// mhs["alamat"]["jalan"] -> untuk mendapatkan Jalan


// Object literal
var amhs1 = {
    nama : 'Aditya',
    nimm : '21410100039',
    email : 'aditya@gmail.com',
    jurusan : 'S1 Sistem Informasi'
};

var amhs2 = {
    nama : 'Adityas',
    nimm : '21410100039',
    email : 'aditya@gmail.com',
    jurusan : 'S1 Sistem Informasi'
};
// Function Declaration

function buatObjectMahasiswa(nama, nim, email, jurusan){
    var bmhs ={};
    bmhs.nama = nama;
    bmhs.nim = nim;
    bmhs.email = email;
    bmhs.jurusan = jurusan;
    return bmhs;
}

var amhs3 = buatObjectMahasiswa('Aditya3', "21410100039", 'aditya@gmmail.com', 'S1 Sistem Informasi');

// Constructor Function

function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var amhs4 = new Mahasiswa('aditya4', "21410100039", 'aditya@gmail.com', 'S1 Sistem Informasi');

// object.create()