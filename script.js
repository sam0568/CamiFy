// 🎵 Lista de canciones
const songs = [
  {
    title: "YOUR WAY'S BETTER",
    artist: "Forrest Frank.",
    src: "music/your ways better.mp3",
    cover: "img/your ways better.jpg"
  },
  {
    title: "Sunrise",
    artist: "Forrest Frank",
    src: "music/Sunrise.mp3",
    cover: "img/Sunrise.jpg"
  },
  {
    title: "Como David",
    artist: "Montesanto",
    src: "music/Como David.mp3",
    cover: "img/Como david.jpg"
  },
  {
    title: "Guardo memorias 😝",
    artist: "Un corazón",
    src: "music/Guardo memoriasjaja.mp3",
    cover: "img/Regrésanos.jpg"
  }
];

let current = 0;

// 🧩 Elementos del DOM
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const songList = document.getElementById("songList");

// 🔊 Cargar canción
function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

// ▶️ / ⏸️ Play & Pause
function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = lucide.icons["pause"].toSvg();
  } else {
    audio.pause();
    playBtn.innerHTML = lucide.icons["play"].toSvg();
  }
}

// ⏭️ Siguiente
function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  audio.play();
  playBtn.innerHTML = lucide.icons["pause"].toSvg();
}

// ⏮️ Anterior
function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  audio.play();
  playBtn.innerHTML = lucide.icons["pause"].toSvg();
}

// 🧱 Renderizar lista de canciones
function renderSongs() {
  songList.innerHTML = "";
  songs.forEach((song, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    `;
    card.addEventListener("click", () => {
      current = i;
      loadSong(i);
      audio.play();
      playBtn.innerHTML = lucide.icons["pause"].toSvg();
    });
    songList.appendChild(card);
  });
}

// 💬 Cartel de bienvenida
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const modal = document.getElementById("welcomeModal");
  const btn = document.getElementById("closeWelcome");

  if (!localStorage.getItem("welcomeShown")) {
    modal.classList.add("show");
  }

  btn.addEventListener("click", () => {
    modal.classList.remove("show");
    localStorage.setItem("welcomeShown", "true");
  });

  loadSong(current);
  renderSongs();

  playBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);
});

// 🧭 Navegación entre secciones
const navItems = document.querySelectorAll(".sidebar nav li");
const sections = document.querySelectorAll(".section");

navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // quitar activo anterior
    navItems.forEach(li => li.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    // activar el nuevo
    item.classList.add("active");
    sections[index].classList.add("active");
  });
});

// 💖 Playlist especial
const specialSongs = [
  {
    title: "Alegre",
    artist: "Siempre que la veo está riendose de algo(puede perjudicar en trabajos escolares de a 2) ",
    cover: "fotosporlan/nose.jpeg",
    src: "music/morat.mp3"
  },
  {
    title: "Matera",
    artist: "(a la cami le encanta tomar mates, en especial si son del porlan, los mejores mates)",
    cover: "fotosporlan/cami matera.jpeg",
    src: "music/perfect.mp3"
  },
  {
    title: "Random",
    artist: "A veces siento que tiene los mismos problemitas que yo.",
    cover: "fotosporlan/cami random.jpeg",
    src: "music/perfect.mp3"
  },
  {
    title: "Compañera",
    artist: "Supo estar en los momentos necesarios y ayudar cuando se necesitaba.",
    cover: "fotosporlan/cami tapada.jpeg",
    src: "music/perfect.mp3"
  },
  {
    title: "Graciosa",
    artist: "La cami es una persona OCURRENTE!, siempre tiene algún comentario inesperado, pero gracioso para mi.",
    cover: "fotosporlan/cami tierna.jpeg",
    src: "music/perfect.mp3"
  },
  {
    title: "Llena del amor de Dios",
    artist: "Ama al señor, por lo que puede amar y soportar como muchos quisieran, conoce el valor de la sencillez, y el de saber ceder y ayudar a otros.",
    cover: "fotosporlan/cami linda.jpeg",
    src: "music/perfect.mp3"
  }
];

const specialList = document.getElementById("specialList");
specialSongs.forEach((song, i) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${song.cover}" alt="${song.title}">
    <h3>${song.title}</h3>
    <p>${song.artist}</p>
  `;
  card.addEventListener("click", () => {
    current = i;
    audio.src = song.src;
    cover.src = song.cover;
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.play();
    playBtn.innerHTML = lucide.icons["pause"].toSvg();
  });
  specialList.appendChild(card);
});
