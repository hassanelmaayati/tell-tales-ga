/*-------------- Constants -------------*/


/*-------------- Functions -------------*/
function startGame(){
  startScreen.classList.add("hidden")
  gameContainer.classList.remove("hidden")

}

/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/
const startScreen = document.getElementById("start-screen")
const gameContainer= document.getElementById("game-container")
const sceneImage=document.getElementById("scene-image")
const sceneText=document.getElementById("scene-text")
const choicesContainer=document.getElementById("choices-container")
/*----------- Event Listeners ----------*/
startScreen.addEventListener("click",startGame)