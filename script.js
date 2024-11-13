const tombol = document.getElementById("hamburger-menu");
const menu = document.querySelector(".menu");

tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    alert("Terima kasih " + name + ", pesan sudah terkirim.");

    // Reset form
    document.getElementById("contactForm").reset();
  });
