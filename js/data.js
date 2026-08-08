const scenes = {
  apartment: {
    dialog: [
      "Your phone buzzes violently on the nightstand.",
      "The TV flickers on by itself, emergency broadcast override.",
      "'...urging all citizens to evacuate immediately. Proceed to the nearest shelter. Avoid contact with the infected.'",
      "Outside your window, you hear screaming. Then silence.",
      "You have seconds to decide what to do."
    ],
    image: "images/Apartment.png",
    altText: "A dark, cluttered apartment bedroom lit by a flickering TV screen",
    choices: [
      { label: "Grab your bag and leave now", nextId: "street" },
      { label: "Check on your neighbor first", nextId: "bittenNeighbor" },
      { label: "Stay and lock the door", nextId: "overrunHome" }
    ]
  },
  street: {
    dialog: [
      "The hallway lights flicker. The elevator is out.",
      "You reach the street, chaos everywhere, overturned cars, distant screams.",
      "Two routes stand before you: a treeline to the east, and downtown to the west.",
      "You need to choose fast."
    ],
    image: "images/Street.png",
    altText: "A chaotic street at dusk with overturned cars and a path splitting toward woods and downtown",
    choices: [
      { label: "Go through the woods", nextId: "woods" },
      { label: "Go through downtown", nextId: "downtown" },
      { label: "Wait here for rescue", nextId: "caughtOpen" }
    ]
  },
  woods: {
    dialog: [
      "The trees swallow the city noise. It's quiet. Too quiet.",
      "Something rustles behind the trees nearby.",
      "You freeze, straining to hear which direction it's coming from."
    ],
    image: "images/woods.png",
    altText: "A dense, foggy forest at dusk",
    choices: [
      { label: "Hide and wait it out", nextId: "bittenWoods" },
      { label: "Keep moving toward shelter", nextId: "shelterSafe" },
      { label: "Climb a tree to scout the path", nextId: "shelterScout" }
    ]
  },
  downtown: {
    dialog: [
      "Storefronts are shattered. Alarms wail uselessly in the distance.",
      "A pharmacy sign flickers, still stocked, maybe.",
      "You hear shuffling footsteps somewhere close."
    ],
    image: "images/downtown.png",
    altText: "A damaged downtown street with shattered storefronts and a flickering pharmacy sign",
    choices: [
      { label: "Search a store for supplies", nextId: "ambushed" },
      { label: "Keep moving, ignore it", nextId: "shelterSolo" },
      { label: "Follow a stranger moving quickly ahead", nextId: "shelterCompanion" }
    ]
  },
  bittenNeighbor: {
    dialog: [
      "You knock on your neighbor's door. No answer.",
      "You push it open, she's slumped in the corner, breathing wrong.",
      "she turns fast. Too fast.",
      "GAME OVER, You were bitten."
    ],
    image: "images/BittenNeighbor.png",
    altText: "A dim apartment hallway with a door left open, showing a shadowed figure inside",
    ending: true,
    win: false
  },
  overrunHome: {
    dialog: [
      "You bolt the door and wait, listening to the chaos outside fade.",
      "Then you hear it, scratching at the window.",
      "The glass gives way.",
      "GAME OVER, Overrun at home."
    ],
    image: "images/OverrunHome.png",
    altText: "A barricaded apartment room with a cracked window",
    ending: true,
    win: false
  },
  caughtOpen: {
    dialog: [
      "You wait, scanning the sky for helicopters that never come.",
      "The infected notice you standing still.",
      "There's nowhere left to run.",
      "GAME OVER, Caught in the open."
    ],
    image: "images/CaughtintheOpen.png",
    altText: "An empty street at dusk with distant figures approaching through the haze",
    ending: true,
    win: false
  },
  bittenWoods: {
    dialog: [
      "You crouch behind a fallen log, holding your breath.",
      "The rustling stops directly behind you.",
      "GAME OVER, You were bitten."
    ],
    image: "images/BittenWoods.png",
    altText: "A foggy forest floor near a fallen log at dusk",
    ending: true,
    win: false
  },
  ambushed: {
    dialog: [
      "You slip inside, scanning shelves for supplies.",
      "A shadow moves behind the counter, then another, and another.",
      "You're surrounded before you reach the door.",
      "GAME OVER, Ambushed."
    ],
    image: "images/Ambushed.png",
    altText: "A ransacked convenience store with dim emergency lighting",
    ending: true,
    win: false
  },
  shelterSafe: {
    dialog: [
      "You push forward, ignoring every sound behind you.",
      "Through the treeline, a fenced compound comes into view.",
      "Guards wave you through the gate.",
      "YOU SURVIVED, Welcome to the shelter."
    ],
    image: "images/ShelterSafeRoute.png",
    altText: "A fortified survivor compound at dusk with a gate opening",
    ending: true,
    win: true
  },
  shelterScout: {
    dialog: [
      "From the treetop, you spot a safer path around the horde below.",
      "You climb down and move quickly, staying off the main trail.",
      "The shelter gates open ahead.",
      "YOU SURVIVED, You found the safest way in."
    ],
    image: "images/ShelterScoutRoute.png",
    altText: "A view from a treetop looking down toward a fortified compound in the distance",
    ending: true,
    win: true
  },
  shelterSolo: {
    dialog: [
      "You keep your head down and move fast through the wreckage.",
      "Following the emergency signs, you reach the shelter perimeter.",
      "The gates close behind you.",
      "YOU SURVIVED, Welcome to the shelter."
    ],
    image: "images/ShelterSolo.png",
    altText: "A heavy shelter gate closing at dusk",
    ending: true,
    win: true
  },
  shelterCompanion: {
    dialog: [
      "You catch up to the stranger, she nods, and you move together.",
      "Two sets of eyes are better than one out here.",
      "You reach the shelter side by side.",
      "YOU SURVIVED, You made it, together."
    ],
    image: "images/ShelterCompanion.png",
    altText: "Two survivors walking together toward an open shelter gate at dusk",
    ending: true,
    win: true
  }
};