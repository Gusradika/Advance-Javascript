// Single Thread adalah pekerjaan yang dilakukan pada 1 waktu yang sama.
// Multithread adalah pekerjaan yang dilakukan pada 1 waktu yang sama oleh thread yang berbeda
// blocking adalah task yang dilakukan berurutan tanpa menjalankan task yang lain
// non-blocking adalah task yang dilakukan berurutan dengan menjalankan task yang lain.
// Asynchronous adalah task yang dilakukan secara bersamaan, dan selesai dalam waktu yang ber-variable
// Asnychronous + multithread memungkinkan untuk menjalankan task secara bersamaan dalam satu waktu (Parallel)
// ASynchronous + single thread tidak memungkinkan untuk menjalankan task secara bersamaan dalam satu waktu (Concurrent)

// Single vs Multi Thread
// Lingkungan Eksekusi TASK

// Blocking vs Non Blocking
// Teknik Ngoding (IO Related)

// Synchronous vs Asynchronous
// Teknik ngoding (HTTP request related)

// Concurretn vs parallel
// Lingkungan Eksekusi Task (Hardware)

// ENGINE javascript adalah V8 yang terdiri dari 2 bagian HEAP dan STACK.
// HEAP digunakan untuk allocation memory
// STACK digunakan untuk function CALL dan Eksekusi context

// Contoh penggunaan setTimeout

console.log("satu");
setTimeout(() => console.log("dua"));
console.log("tiga");
