/*-------------- Constants -------------*/


/*-------------- Functions -------------*/
function startGame(){
  startScreen.classList.add("hidden")
  gameContainer.classList.remove("hidden")
  render()

}

function render(){
  choicesContainer.innerHTML=""
  const scene= scenes[current]
  sceneText.textContent=scene.dialog[lineIndex]
  sceneImage.src=scene.image
  if(lineIndex<scene.dialog.length-1){
  }
  else{
    renderChoices(scene.choices)
  }
}
function nextLineOfDialog(){
  lineIndex++;
  render()
}

function renderChoices(choices){
    choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    choicesContainer.appendChild(btn);
    
  });

}

/*---------- Variables (state) ---------*/
// let, not const, because these values change as the game progresses

let current="apartment"
let lineIndex=0



/*----- Cached Element References  -----*/
const startScreen = document.getElementById("start-screen")
const gameContainer= document.getElementById("game-container")
const sceneImage=document.getElementById("scene-image")
const sceneText=document.getElementById("scene-text")
const choicesContainer=document.getElementById("choices-container")
/*----------- Event Listeners ----------*/
startScreen.addEventListener("click",startGame)
gameContainer.addEventListener("click",nextLineOfDialog)