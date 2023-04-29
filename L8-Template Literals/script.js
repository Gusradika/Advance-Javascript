const mhs = [
  {
    nama: "Aditya Kesuma",
    email: "Aditya@gmail.com",
  },
  {
    nama: "ADitya 2",
    email: "Aditya2@gmail.com",
  },
  {
    nama: "Aditya3",
    email: "Aditya3@gmail.com",
  },
];

const el = `<div class='mhs'>
    ${mhs
      .map(
        (x) => `<ul>
        <li>${x.nama}</li>
        <li>${x.email}</li>
    </ul>`
      )
      .join("")}
</div>`;

// 3. Conditional
// Ternary

const lagu = {
  judul: "tetap dalam jiwa",
  penyanyi: "Eminem",
  feat: "Dr.dre",
};

const el2 = `<div class='lagu'>
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.penyanyi} ${lagu.feat ? `(feat ${lagu.feat})` : ""}</li>
    </ul>
</div>`;

// 4. Nested with functions
// HTML Fragments Nested

const mhs2 = {
  nama: "Aditya1",
  sem: 5,
  matkul: [
    "Web Dasar",
    "Analisis dan perancangan Sistem Informasi",
    "Pemrograman sistem interaktif",
  ],
};

function cetakMatakuliah(x) {
  return `<ol>${x.map((mk) => `<li>${mk}</li>`).join("")}</ol>`;
}

const el3 = `<div class='mhs2'> 
    <h2>${mhs2.nama}</h2>
    <span class="semester">${mhs2.sem}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMatakuliah(mhs2.matkul)}
</div>`;

document.querySelector(".frame").innerHTML = el3;

// TAGGED TEMPLATE LITTERAL
// TAGGED TEMPLATE LITTERAL
// TAGGED TEMPLATE LITTERAL
// TAGGED TEMPLATE LITTERAL
// TAGGED TEMPLATE LITTERAL

const nama = "Aditya Kesuma";
const umur = 22;

function coba() {
  return "coba";
}

// Template literal dapat di berikan function yang penulisannya seperti di bawah ini. hasil dari clog berikut akan mereturn coba. dan menghiraukan isinya
const str = coba`Halo, nama saya ${nama}, Saya ${umur} Tahun`;
console.log(str);

// Hasil dari yang berikut ini adalah pemecahan antara String dan template literal dan menjadikannya sebuah array
// terdapat 2 parameter untuk fungsi ini
// Param1 -> String
// Param2 to N -> Template Literal
function coba2(strings, nama, umur) {
  return nama;
}
const str2 = coba2`Halo, nama saya ${nama}, Saya ${umur} Tahun`;
console.log(str2);

// Modern Javascript dapat menampung seluruh Template literal hal ini dinamakan REST
// pada Param2 kita dapat menuliskan ...VARIABLES untuk memberikan tanda
function coba3(strings, ...values) {
  return values;
}
const str3 = coba`Halo, nama saya ${nama}, Saya ${umur} Tahun`;
console.log(str3);

// Penggabungan
function coba4(strings, ...values) {
  //   let str = "";
  //   strings.forEach((x, i) => {
  //     str += `${str}${values[i] || ""}`; // Jika values ada isinya maka values[i], jika tidak ada maka "" (null)
  //   });

  //   Param 1 this satuan
  //  Param 2 Str Index Mulai
  //  Param 3 Index real
  //   console.log(values);
  return strings.reduce((result, str, i) => {
    `${result}${str}${values[i]}`;
  });
}
const str4 = coba4`Halo, nama saya ${nama}, Saya ${umur} Tahun`;
console.log(str4);

// Implementasi kasus : HIGHLIGHT

const nama1 = "Aditya Kesuma";
const umur1 = 22;
const email = "Adit@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    `${result}${str}<span class="hl">${values[i] || ""}</span>, ''`; // '' diterakhir adalah penambahan di awal. jika yang lalu adalah angka untuk sum. sekarang untuk string kita menggunakan ''
  });
}

const str5 = highlight`Halo, Nama saya ${nama1}, Saya Berumur ${umur1} Tahun, dan email saya adalah ${email}`;

// console.log(str5);
// document.body.innerHTML = str5;

// Ini semua di gunakan untuk :
// ESCAPING HTML TAGS
// TRANSLATION & INTERNATIONALIZATION
// STYLED COMPONENTS
