// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Maybe, it's the way you say my name", time: 15 },
  { text: "Maybe, it's the way you play your game", time: 18 },
  { text: "But it's so good, I've never known anybody like you", time: 27 },
  { text: "But it's so good, I've never dreamed of nobody like you", time: 32 },
  { text: "And I've heard of a love that comes once in a lifetime", time: 33 },
  { text: "And I'm pretty sure that you are that love of mine", time: 41 },
  { text: "'Cause I'm in a field of dandelions", time: 47 },
  { text: "Wishing on every one that you'd be mine, mine", time: 54 },
  { text: "And I see forever in your eyes", time: 59 },
  { text: "I feel okay when I see you smile, smile", time: 67 },
  { text: "Wishing on dandelions all of the time", time: 72 },
  { text: "Praying to God that one day you'll be mine", time: 78 },
  { text: "Wishing on dandelions all of the time, all of the time", time: 83 },
  { text: "I think that you are the one for me", time: 91 },
  { text: "'Cause it gets so hard to breathe", time: 97 },
  { text: "When you're looking at me, I've never felt so alive and free", time: 104 },
  { text: "When you're looking at me, I've never felt so happy", time: 108 },
  { text: "And I've heard of a love that comes once in a lifetime", time: 144 },
  { text: "And I'm pretty sure that you are that love of mine", time: 148 },
  { text: "'Cause I'm in a field of dandelions", time: 153 },
  { text: "Wishing on every one that you'd be mine, mine", time: 158 },
  { text: "And I see forever in your eyes", time: 164 },
  { text: "I feel okay, when I see you smile, smile", time: 169 },
  { text: "Wishing on dandelions all of the time", time: 176 },
  { text: "Praying to God that one day you'll be mine", time: 183 },
  { text: "Wishing on dandelions all of the time, all of the time", time: 188 },
  { text: "Dandelion, into the wind you go", time: 140 },
  { text: "Won't you let my darling know?", time: 140 },
  { text: "Dandelion, into the wind you go", time: 140 },
  { text: "Won't you let my darling know that?", time: 140 },
  { text: "I'm in a field of dandelions", time: 140 },
  { text: "Wishing on every one that you'd be mine, mine", time: 140 },
  { text: "And I see forever in your eyes", time: 140 },
  { text: "I feel okay when I see you smile, smile", time: 140 },
  { text: "Wishing on dandelions all of the time", time: 140 },
  { text: "Praying to God that one day you'll be mine", time: 140 },
  { text: "Wishing on dandelions all of the time, all of the time", time: 140 },
  { text: "I'm in a field of dandelions", time: 140 },
  { text: "Wishing on every one that you'd be mine, mine", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);