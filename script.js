document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const music = document.getElementById("bg-music");

  // 🎵 Playlist
  const playlist = [
    "music/Die-4-You.mp3",
    "music/futile-devices.mp3",
    "music/Love-My-Way.mp3"
  ];
  let currentTrack = 0;

  // Mostrar botón también en PC
  startBtn.style.display = "inline-block";

  startBtn.addEventListener("click", () => {
    music.src = playlist[currentTrack];
    music.volume = 0.6;
    music.play().catch(err => console.log("Error al reproducir música:", err));
    startBtn.style.display = "none";
  });

  music.addEventListener("ended", () => {
    currentTrack++;
    if (currentTrack >= playlist.length) currentTrack = 0;
    music.src = playlist[currentTrack];
    music.play();
  });

  // 🎡 Distribuir imágenes en círculo
  document.querySelectorAll(".wheel").forEach(wheel => {
    const imgs = wheel.querySelectorAll("img");
    const total = imgs.length;
    const angleStep = 360 / total;
    const radius = 120; // distancia al centro (ajústala según tu gusto)

    imgs.forEach((img, i) => {
      const angle = i * angleStep;
      img.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
  });
});
