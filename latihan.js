let nilai = 81;
if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else if (nilai >= 70) {
  console.log("D");
} else {
  console.log("E");
}
function placeName() {
  let nama = prompt("Masukkan Nama Anda");
  let umur = prompt("Masukkan Umur Anda");
  document.getElementById("latihan").innerHTML = nama + umur;
}
placeName();
document.getElementById("button").addEventListener("click", placeName);
