# The First Of Us: Choose Your Own Adventure

## Screenshots
<img width="1918" height="900" alt="main screen screenshot" src="https://github.com/user-attachments/assets/a887448d-f351-405a-ac26-cc3a90e2c30d" />
<img width="1918" height="902" alt="ingame SS" src="https://github.com/user-attachments/assets/96520f76-f36e-4e94-a209-89eb8809f7d6" />
<img width="1918" height="897" alt="ingame SS1" src="https://github.com/user-attachments/assets/b8c896f3-bd0b-4bd5-b95a-0ded2c388ee9" />

## Game Choice
Choose Your Own Adventure — a branching narrative game where the player's choices determine survival.

## Concept
The player starts in their apartment when an emergency alarm interrupts their phone and TV, warning of a zombie outbreak and calling for immediate evacuation to shelters. The player must leave the city, making choices at each scene that lead toward survival (reaching the shelter) or death (bitten, overrun, ambushed, etc).

## Getting Started
- [Play Now!](https://hassanelmaayati.github.io/tell-tales-ga/)
- See the Story Map and Pseudocode sections below for the game's planning materials.

## Story Map
<img width="1267" height="743" alt="Story tree" src="https://github.com/user-attachments/assets/d0d24d1d-b9b0-48f0-87e6-8e74efa8741a" />

**Scene 1: Apartment**
- A) Grab bag and leave now → Scene 2 (Street)
- B) Check on neighbor first → Ending: Bitten (LOSE)
- C) Stay and lock the door → Ending: Overrun at home (LOSE)

**Scene 2: Street**
- A) Go through the woods → Scene 3a (Woods)
- B) Go through downtown → Scene 3b (Downtown)
- C) Wait for rescue → Ending: Caught in the open (LOSE)

**Scene 3a: Woods**
- A) Hide and wait it out → Ending: Bitten (LOSE)
- B) Keep moving toward shelter → Ending: Shelter (WIN)
- C) Climb a tree to scout the path → Ending: Shelter, safer route (WIN)

**Scene 3b: Downtown**
- A) Search a store for supplies → Ending: Ambushed (LOSE)
- B) Keep moving, ignore it → Ending: Shelter (WIN)
- C) Follow another survivor → Ending: Shelter, with companion (WIN)

## Pseudocode

**Define scenes object:**
```scenes = {
apartment: { text, image, choices: [ {label, nextId} x3 ] },
street: {...},
woods: {...},
downtown: {...},
endings (bitten, overrun, caughtOpen, ambushed, shelterA, shelterB)
}
```
**Define state variable:**
- get scene object from `scenes[current]`
- update text and image on DOM
- IF `scene.ending` is true → display win/lose message + restart button
- ELSE → generate 3 choice buttons from `scene.choices`

**Add delegated event listener on choices container**
- ON click of a choice button: `current = button's nextId`, call `render()`

**Add event listener on restart button**
- ON click: `current = "apartment"`, call `render()`
- Invoke `render()` on page load

## Attributions
- Button hover effect CSS by [gagan-gv](https://getcssscan.com/css-buttons-examples) — used for the choice buttons
- Background images generated using [Google Gemini](https://gemini.google.com)
- Background music: "World War Z Theme Song" — sourced from YouTube, used for in-game background music
- Main menu background video: "The Last of Us" start screen — sourced from YouTube, used for the start screen background

## Technologies Used
HTML, CSS, JavaScript

## Next Steps
- Expand the story with more scenes, deeper branching paths, and additional endings
- Replace static background images with short video clips for each scene
- Add character sprites/portraits so the player can see who they're talking to
- Add dialog choices (not just action choices) — letting the player choose *what to say* in conversations, not just *what to do*
- Add a name input on the start screen so characters can address the player by name throughout the story
- Add a mini-game sequence (e.g. an aiming/shooting challenge or a small puzzle) triggered at key story moments
