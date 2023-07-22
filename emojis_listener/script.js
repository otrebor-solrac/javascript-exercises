/* ************ keypress ************ */
const emojiInput = document.getElementsByClassName("emoji-input");
const emojisResult = [
  document.getElementById("emoji-result-1"),
  document.getElementById("emoji-result-2"),
  document.getElementById("emoji-result-3"),
  document.getElementById("emoji-result-4"),
  document.getElementById("emoji-result-5"),
  document.getElementById("emoji-result-6"),
  document.getElementById("emoji-result-7"),
  document.getElementById("emoji-result-8"),
  document.getElementById("emoji-result-9"),
];

emojiInput[0].addEventListener("keypress", changeEmoji, true);

function changeEmoji() {
  for (var emoji of emojisResult) {
    emojiPick = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.innerHTML = emojiPick;
  }
}

/* ************ mouseover ************ */
const resetBtn = document.getElementsByClassName("mouseover--btn-reset");
const pipesHitBox = document.querySelectorAll(".pipe");
const message = document.getElementById("message");
const dieCount = document.getElementsByClassName("game-counter-die");

// Agregar addEventListener a los tubos
pipesHitBox.forEach(function (pipeHitBox) {
  pipeHitBox.addEventListener("mouseover", youCrashed);
});

let i = 1;
function youCrashed() {
    console.log("Hola")
  // Habilitar botón y mostrar mensaje "PERDISTE"
  resetBtn[0].disabled = false;
  message.style.display = "flex";

  // Aumentar contador
  dieCount[0].innerText = "MUERTES: " + i++;
}

resetBtn[0].addEventListener("click", function () {
  // Deshabilitar botón y ocultar mensaje
  resetBtn.disabled = true;
  message.style.display = "none";
});

// -----------------------------------------------------------------------------

// Lista de emojis: https://gist.github.com/ikr7/c72843556ef3a12014c3
const emojis = [
  "😄",
  "😃",
  "😀",
  "😊",
  "☺",
  "😉",
  "😍",
  "🎩",
  "👑",
  "👒",
  "👟",
  "👞",
  "👡",
  "👠",
  "👢",
  "👕",
  "👔",
  "👚",
  "👗",
  "🎽",
  "👖",
  "👘",
];
