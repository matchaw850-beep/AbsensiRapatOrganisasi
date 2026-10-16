// PIN contoh untuk absensi rapat.
const PIN_ABSENSI = "1234";

const pin = prompt("Masukkan kode PIN absensi:");
const pinBenar = pin === PIN_ABSENSI;

const nama = document.getElementById("nama");
const jabatan = document.getElementById("jabatan");
const tombol = document.getElementById("submitButton");
const pesan = document.getElementById("message");

if (!pinBenar) {
  nama.disabled = true;
  jabatan.disabled = true;
  tombol.disabled = true;
  pesan.textContent = "PIN salah. Form absensi dikunci.";
}

document.getElementById("attendanceForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (!pinBenar) {
    alert("PIN salah. Form tidak dapat digunakan.");
    return;
  }

  if (nama.value.trim() === "") {
    alert("Silakan isi nama terlebih dahulu.");
    return;
  }

  if (confirm("Apakah kamu yakin ingin mengirim absensi?")) {
    alert("Absensi berhasil dikirim. Terima kasih, " + nama.value.trim() + "!");
    pesan.textContent = "Absensi berhasil dicatat.";
  }
});
