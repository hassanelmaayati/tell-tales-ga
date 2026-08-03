/*---------- Variables (state) ---------*/
// let, not const, because these values change as the game progresses

let current="apartment"
let lineIndex=0

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
    if(scene.win===true){
      sceneImage.src="images/win.png"
    }
    else if(scene.win===false){
      sceneImage.src="images/loss.png"
    }
    else{
    renderChoices(scene.choices)
    }
  }
}
function nextLineOfDialog(event){
  if(event.target.tagName === "BUTTON"){
    return;
  }
  const scene = scenes[current];

  if(scene.ending && lineIndex === scene.dialog.length - 1) {
    current="apartment"
    lineIndex=0
    render()
    return
  }
  lineIndex++;
  render()
}

function renderChoices(choices){
    choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.dataset.next = choice.nextId
    choicesContainer.appendChild(btn);
    
  });
}

function handleChoiceClick(event){
  if(event.target.tagName !== "BUTTON"){
  return;
  }
  current = event.target.dataset.next
  lineIndex = 0
  render()

}

/*----- Cached Element References  -----*/
const startScreen = document.getElementById("start-screen")
const gameContainer= document.getElementById("game-container")
const sceneImage=document.getElementById("scene-image")
const sceneText=document.getElementById("scene-text")
const choicesContainer=document.getElementById("choices-container")


/*----------- Event Listeners ----------*/
startScreen.addEventListener("click",startGame)
gameContainer.addEventListener("click",nextLineOfDialog)
choicesContainer.addEventListener("click",handleChoiceClick)