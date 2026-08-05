/*---------- Variables (state) ---------*/
// let, not const, because these values change as the game progresses
let current = "apartment";
let lineIndex = 0;
let timer;
const DIALOG_DELAY = 4000;

/*-------------- Functions -------------*/
function startGame() {
  gameMusic.play();
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  render();
}

function render() {
  clearTimeout(timer);
  choicesContainer.innerHTML = "";
  const scene = scenes[current];
  sceneText.textContent = scene.dialog[lineIndex];
  sceneImage.src = scene.image;

  if (lineIndex < scene.dialog.length - 1) {
    // still mid-dialog, nothing extra to do
  } else {
    if (scene.win === true) {
      sceneImage.src = "images/win.png";
      renderRestartButton();
    } else if (scene.win === false) {
      sceneImage.src = "images/loss.png";
      renderRestartButton();
    } else {
      renderChoices(scene.choices);
    }
  }

  if (!scene.ending && lineIndex < scene.dialog.length - 1) {
    timer = setTimeout(nextLineOfDialog, DIALOG_DELAY);
  }
}

function nextLineOfDialog(event) {
  if (event?.target?.tagName === "BUTTON") {
    return;
  }
  const scene = scenes[current];
  if (lineIndex >= scene.dialog.length - 1) {
    return;
  }
  lineIndex++;
  render();
}

function renderChoices(choices) {
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.dataset.next = choice.nextId;
    choicesContainer.appendChild(btn);
  });
}

function handleChoiceClick(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  if (!event.target.dataset.next) {
    return;
  }
  current = event.target.dataset.next;
  lineIndex = 0;
  render();
}

function renderRestartButton() {
  const btn = document.createElement('button');
  btn.textContent = "Play Again";
  choicesContainer.appendChild(btn);
  btn.addEventListener('click', returnToStart);
}

function returnToStart() {
  startScreen.classList.remove("hidden");
  gameContainer.classList.add("hidden");
  current = "apartment";
  lineIndex = 0;
}

/*----- Cached Element References  -----*/
const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");
const sceneImage = document.getElementById("scene-image");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices-container");
const gameMusic = document.getElementById("game-music");

/*----------- Event Listeners ----------*/
startScreen.addEventListener("click", startGame);
gameContainer.addEventListener("click", nextLineOfDialog);
choicesContainer.addEventListener("click", handleChoiceClick);