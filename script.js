const PIN_ABSENSI = "1234";

const nama = document.getElementById("nama");
const jabatan = document.getElementById("jabatan");
const tombol = document.getElementById("submitButton");
const status = document.getElementById("formStatus");
const form = document.getElementById("attendanceForm");

let pin = prompt("Masukkan PIN absensi:");

if (pin === PIN_ABSENSI) {
    nama.disabled = false;
    jabatan.disabled = false;
    tombol.disabled = false;
    status.textContent = "PIN benar. Silakan isi form absensi.";
} else {
    nama.disabled = true;
    jabatan.disabled = true;
    tombol.disabled = true;
    status.textContent = "PIN salah. Muat ulang halaman untuk mencoba lagi.";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (pin !== PIN_ABSENSI) {
        alert("PIN salah! Absensi tidak bisa dilakukan.");
        return;
    }

    if (nama.value.trim() === "" || jabatan.value === "") {
        alert("Nama dan jabatan harus diisi!");
        return;
    }

    alert("Absensi berhasil dikirim!");
    status.textContent = "Absensi berhasil dicatat.";
    form.reset();
});
