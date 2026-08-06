/*---------- Variables (state) ---------*/
//the state variables/memory
let current = "apartment";
let lineIndex = 0;
let timer;
const DIALOG_DELAY = 4000;

/*-------------- Functions -------------*/
//triggered when the player clicks the start screen and calls the render
function startGame() {
  gameMusic.play();
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  render();
}
//the core engine
function render() {
  clearTimeout(timer);//clears the timer for auto dialog progress
  choicesContainer.innerHTML = "";//empties the choices container
  const scene = scenes[current];//gets the current screen
  sceneText.textContent = scene.dialog[lineIndex]; //gets the dialog for the current scene
  sceneImage.src = scene.image;

  const isLastLine = lineIndex === scene.dialog.length - 1;

  if (isLastLine) {
    if (scene.ending) {
      sceneImage.src = "images/ending.png";
      renderRestartButton();
    } else {
      renderChoices(scene.choices);
    }
  } else {
    timer = setTimeout(nextLineOfDialog, DIALOG_DELAY);
  }
}

function nextLineOfDialog(event) {
  if (event?.target?.tagName === "BUTTON")/*taken from AI to fix dialog bugs, it works like a guard to prevent going past the last line*/  {
    return;
  }
  const scene = scenes[current];
  if (lineIndex >= scene.dialog.length - 1) {
    return;
  }
  lineIndex++;
  render();
}

function renderChoices(choices)/*builds one button per choice giving each button a choice from the label*/  {
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.dataset.next = choice.nextId;
    choicesContainer.appendChild(btn);
  });
}

function handleChoiceClick(event)/* makes sure that the button was clicked and has a next scene attached (the restart again doesnt) so it jumps to the current and resets the variable line index to 0 before rerendering*/ {
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