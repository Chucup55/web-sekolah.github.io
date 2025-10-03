// Mendefinisikan lebar menu (misalnya 250px)
const menuWidth = '250px';

// Fungsi untuk membuka menu slide
function openNav() {
    document.getElementById("sidebar-menu").style.width = menuWidth;
    // Opsional: Geser konten utama ke kiri (memberi ruang untuk menu)
    document.getElementById("main-content").style.marginRight = menuWidth;
}

// Fungsi untuk menutup menu slide
function closeNav() {
    document.getElementById("sidebar-menu").style.width = "0";
    // Opsional: Kembalikan konten utama ke posisi semula
    document.getElementById("main-content").style.marginRight = "0";
}

// Menghubungkan fungsi ke tombol di HTML setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Tombol Buka Menu (Hamburger)
    const toggleButton = document.getElementById('menu-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', openNav);
    }

    // Tombol Tutup Menu (X)
    const closeButton = document.getElementById('close-menu');
    if (closeButton) {
        closeButton.addEventListener('click', closeNav);
    }
  });
  // Dapatkan semua elemen yang diperlukan untuk LightBox
var modal = document.getElementById("myModal");
var imgLink = document.getElementById("ppdb-thumb"); // Ini adalah tautan pengumuman yang diklik
var modalImg = document.getElementById("img-enlarged");
var captionText = document.getElementById("caption");
var closeModal = document.getElementById("close-lightbox"); // Tombol tutup LightBox

// --- Logika untuk membuka LightBox ---
if (imgLink) { // Pastikan elemen imgLink ada di halaman
    imgLink.onclick = function(event) {
        event.preventDefault(); // Hentikan aksi default tautan (navigasi)
        
        // Tampilkan Modal
        modal.style.display = "block";
        
        // Atur sumber gambar modal dan keterangan
        modalImg.src = this.getAttribute('data-full-src'); // Ambil dari data-full-src
        captionText.innerHTML = this.getAttribute('data-caption'); // Ambil dari data-caption
    }
}

// --- Logika untuk menutup LightBox ---
if (closeModal) { // Pastikan tombol tutup ada
    closeModal.onclick = function() { 
        modal.style.display = "none";
    }
}

// --- Logika menutup LightBox saat mengklik di luar gambar ---
window.onclick = function(event) {
    if (event.target == modal) { // Jika target klik adalah area gelap modal
        modal.style.display = "none";
    }
}