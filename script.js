// PIN contoh. Ubah angka ini jika rapat memakai PIN lain.

const PIN_ABSENSI = "1234";

const nama = document.getElementById("nama");
const jabatan = document.getElementById("jabatan");
const tombol = document.getElementById("submitButton");
const status = document.getElementById("formStatus");
const form = document.getElementById("attendanceForm");

// Meminta PIN saat halaman dibuka
let pin = prompt("Masukkan PIN absensi:");
let pinBenar = pin === PIN_ABSENSI;

// Membuka form jika PIN benar
if (pinBenar) {
    nama.disabled = false;
    jabatan.disabled = false;
    tombol.disabled = false;

    status.textContent = "PIN benar. Silakan isi form absensi.";
} else {
    status.textContent = "PIN salah. Silakan muat ulang halaman.";
}

// Proses ketika tombol absensi diklik
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nama.value === "" || jabatan.value === "") {
        alert("Nama dan jabatan harus diisi!");
    } else {
        alert("Absensi berhasil dikirim!");

        status.textContent = "Absensi berhasil dicatat.";
        form.reset();
    }
});
