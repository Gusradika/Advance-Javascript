// Prototype (Inheritance)
// tidak memakai Class maka Prototype menjadi pengganti konsep Class untuk Inheritance.

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return console.log("Halo ${this.nama} selamat Makan!");
};

Mahasiswa.prototype.main = function () {
  this.energi -= jam;
  return console.log("Halo ${this.nama} selamat Makan!");
};

Mahasiswa.prototype.tidur = function () {
  this.energi += jam * 2;
  return console.log("Halo ${this.nama} selamat Makan!");
};

let mhs1 = new Mahasiswa("Aditya1", 10);

// Versi class dalam Javascript
// Class

class MahasiswaClass {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return console.log("Halo ${this.nama} selamat Makan!");
  }

  main(jam) {
    this.energi -= jam;
    return console.log("Halo ${this.nama} selamat Makan!");
  }

  tidur(jam) {
    this.energi += jam * 2;
    return console.log("Halo ${this.nama} selamat Makan!");
  }
}

let mhs2 = new MahasiswaClass("Aditya Class", 4);
