// dikarenakan cara sebelumnya kurang efektif maka ada cara yang lebih efektif untuk membuat object
var nama = "aditya";

const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log('Halo ${this.nama}, selamat makan!');
    },
    
    main : function(jam){
        this.energi -= jam;
        console.log('Halo ${this.nama}, selamat bermain!');
    },
    
    tidur : function(jam){
        this.energi += jam * 2;
        console.log('Halo ${this.nama}, selamat tidur!');
    }
}

function Mahasiswa(nama, energi){
    let mahasiswa1 = {};
    // let mahasiswa2 = Object.create(methodMahasiswa); // sama dengan mahasiswa = {}; tetapi jika menggunakan method Object.create kita dapat memberikan parameter (Inheritance)
    mahasiswa1.nama = nama;
    mahasiswa1.energi = energi;
    mahasiswa1.makan = methodMahasiswa.makan;
    mahasiswa1.main = methodMahasiswa.main;
    mahasiswa1.tidur = methodMahasiswa.tidur;

    return mahasiswa;
}

function Mahasiswa2(nama, energi){
    let mahasiswa2 = Object.create(methodMahasiswa); // sama dengan mahasiswa = {}; tetapi jika menggunakan method Object.create kita dapat memberikan parameter (Inheritance)

    return mahasiswa2;
}

let mhs1 = new Mahasiswa("Aditya", 2);
let mhs2 = new Mahasiswa2("Aditya2", 3);