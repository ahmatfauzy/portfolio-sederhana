const tombol = document.getElementById("hamburger-menu");
const menu = document.querySelector(".menu");

tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    // Menampilkan popup alert dengan pesan
    alert("Terima kasih " + name + ", pesan sudah terkirim.");

    // Reset form
    document.getElementById("contactForm").reset();
  });
