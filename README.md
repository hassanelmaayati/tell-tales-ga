# The First Of Us: Choose Your Own Adventure
##(Play Now!)[https://hassanelmaayati.github.io/tell-tales-ga/}
## Game Choice:
- Choose Your Own Adventure, a branching narrative game where the player's choices determine survival.

## Concept
- The player starts in their apartment when an emergency alarm interrupts their phone and TV, warning of a zombie outbreak and calling for immediate evacuation to shelters. The player must leave the city, make choices at each scene that leads towards survival (reaching the shelter) or death (bitten, overrun, ambushed, etc).

## Story Map
<img width="1267" height="743" alt="Screenshot 2026-08-01 231129" src="https://github.com/user-attachments/assets/d0d24d1d-b9b0-48f0-87e6-8e74efa8741a" />

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


- **Define scenes object:**

   ```scenes = {

    apartment: { text, image, choices: [ {label, nextId} x3 ] },

     street: {...},

     woods: {...},

     downtown: {...},

     endings (bitten, overrun, caughtOpen, ambushed, shelterA, shelterB)
       
   }
___

 - **Define state variable:** 
 
    get scene object from scenes[current]

   update text and image on DOM IF scene.ending is true

    THEN display win/lose message + restart button ELSE THEN generate 3 choice buttons from scene.choices
    ___
    Add delegated event listener on choices container ON click of a choice button: current = button's nextId call render()
    ___

    Add event listener on restart button
    
    ON click: current = "apartment" call render()

    Invoke render() on page load


## Stack
          HTML, CSS, JavaScript 
