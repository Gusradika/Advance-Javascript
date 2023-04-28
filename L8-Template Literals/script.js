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
