// Ambil Semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

// Pilih hanya yang JS (Filtering)
var jsFiltered = videos
  .filter((video) => video.textContent.includes("JS"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(":");
    return parts[0] * 60 + +parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsFiltered / 3600);
jsFiltered = jsFiltered - jam * 3600;
const menit = Math.floor(jsFiltered / 60);
const detik = jsFiltered - menit * 60;

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// Jumlah Video
const jmlhVideo = videos.filter((video) =>
  video.textContent.includes("JS")
).length;

const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = `${jmlhVideo} Video`;

// simpan di DOM

console.log(jam);
