const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  //menambahkan dan menghapus kelas otomatis ketika di klik
  navLinks.classList.toggle("open");
});

const listRestoran = document.querySelector(".list-restoran");

for (let index = 0; index < 10; index++) {
  // isi 10 kali
  const restoran = document.createElement("div");
  restoran.classList.add("restoran");

  restoran.innerHTML = `
  <div class="img-content">
    <img src="hero.jpeg" alt="Gambar Restoran" />
    <div class="kota">
      <p>Bangkalan</p>
    </div>
  </div>

  <div class="info-content">
    <h2>Rating: 4.5</h2>
    <h1>Bebek Sinjay</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Accusamus, laudantium.
    </p>
  </div>`;
  
  listRestoran.appendChild(restoran);
}
