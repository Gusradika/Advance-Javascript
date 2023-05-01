// Promise menyelesaikan masalah callback hell atau callback yang banyak

// API with AJAX
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=83be496c&s=Avenger",
//   success: (movies) => {
//     console.log(movies);
//   },
//   error: () => {},
// });

// Modern JS bisa menggunakan Fetch untuk menangani API
// return value type promise
const moviesFetch = fetch("http://www.omdbapi.com/?apikey=83be496c&s=Avenger")
  .then((response) => response.json())
  .then((response) => console.log(response));
// Promise adalah object yang merepresentasikan keberhasila / kegagalan sebuah event yang asynchronous di masa yang akan datang
// Janji bisa menjadi dua (terpenuhi / Ingkar).
// atau

// ALUR Lengkap

// States (fullfilled / rejected / pending)
// Callback (resolve / reject / finally)
// Aksi (then / catch)

//  contoh 1 : Janji langsung ditepati
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah di tepati");
  } else {
    reject("ingkar janji");
  }
});

janji1
  .then((response) => console.log("Oke : " + response))
  .catch((response) => console.log("Not Oke" + response));

// contoh 2 : Di tepati dalam beberapa waktu
let ditepati1 = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati1) {
    setTimeout(() => {
      resolve("ditepati setelah beberapa waktu!");
    }, 2000); //milisecond
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati setelah beberapa waktu!");
    }, 2000);
  }
});

console.log("Mulai contoh 2");
// bisa melihat proses
console.log(janji2.then(() => console.log(janji2)));
// Langsung
janji2
  .then((response) => console.log("Oke " + response))
  .catch((response) => console.log("not oke " + response));
console.log("Selesai");

// Contoh 3
let ditepati2 = true;
const janji3 = new Promise((resolve, reject) => {
  if (ditepati1) {
    setTimeout(() => {
      resolve("ditepati setelah beberapa waktu!");
    }, 2000); //milisecond
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati setelah beberapa waktu!");
    }, 2000);
  }
});

// FINALLY
// Biasanya digunakan untuk animasi loading. atau menunggu waktu selesai dulu baru dijalankan.

console.log("Mulai contoh 3");
janji3
  .finally(() => console.log("selesai menunggu")) // Finally setelah animasi loadingnya selesai maka jalankan line ini
  .then((response) => console.log("Oke : " + response))
  .catch((response) => console.log("Not Oke : " + response));

// PROMISE.all()
// Jalankan semua promise
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avenger",
        sutradara: "Aditya",
        pemeran: "doddy",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Surabaya",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// cara menulis Promise all satu2
// film.then((response) => {
//   console.log(response);
// });

// cuaca.then((response) => {
//   console.log(response);
// });

// gunakan promise ALL

Promise.all([film.cuaca]).then((response) => {
  console.log(response); // ini digabungkan
});

// Satu-satu
Promise.all([film.cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
