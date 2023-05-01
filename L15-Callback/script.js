// CALLBACK SYNCHRONOUS
// Synchronously Callbacks

function halo(nama) {
  alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback) {
  const nama = prompt("Masukan Nama : ");
  callback(nama);
}

tampilkanPesan(halo);

// ALUR
// masuk function tampilkanPesan -> jalankan sintax. masuk ke variable callback.
// ingat variable callback berisi value = halo (atau sebuah fungsi).
// lalu variable nama di kirimkan

// CALLBACK ASYNCHRONOUS

const mhs = [
  {
    nama: "Aditya",
    nim: "21410100039",
    email: "Aditya@gmail.com",
    jurusan: "S1 Sistem Informasi",
    doswal: 1,
  },
  {
    nama: "Aditya2",
    nim: "21410100039",
    email: "Aditya@gmail.com",
    jurusan: "S1 Sistem Informasi",
    doswal: 2,
  },
  {
    nama: "Aditya3",
    nim: "21410100039",
    email: "Aditya@gmail.com",
    jurusan: "S1 Sistem Informasi",
    doswal: 2,
  },
];

// Contoh synchronous tetapi lama
// mhs.forEach((x) => {
//   for (let i = 0; i < 100000000; i++) {
//     let date = new Date();
//   }
//   console.log(x.nama);
// });
// console.log("Selesai");

// Contoh asynchronous JS
// Param 1 -> Url atau nantinya bisa di ganti API
// Param 2 -> on success
// Param 3 -> on failure

// CARA BEKERJA DENGAN JSON
// 1.  gunakan library XMLHttpRequest
// 2.  atur ready state.
// 3. generate Respond
// 4. Parse JSON

// VANILLA ASYNCHRONOUS CALLBACK
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       // 4 aritnya ready
//       if (xhr.status === 200) {
//         // 200 artinya ok
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// function success(result) {
//   const data = JSON.parse(result);
//   data.forEach((x) => console.log(x));
// }

// function error() {
//   alert("Error");
// }

// getDataMahasiswa("data/mahasiswa.json", success, error);

// JQUERY AJAX ASYNCHRONOUS
// jika ingin menggunakan asynchronous secara singkat anda dapat menggunakan Jquery (AJAX)
// Jquery sudah otomatis parse ke object

$.ajax({
  url: "data/mahasiswa.json",
  success: (result) => {
    // console.log(result);
    result.forEach((x) => console.log(x.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
