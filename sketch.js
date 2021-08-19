var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 0

var menu;


// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg
//Platforms --- Maaot

// To Do List: DMOG
// Better Speechboxes 


// If done with game then disable spacebar speech though


function setup() {
  
  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  menu = new MainMenu()

  // tutorial = new lvl1
  

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200); 

  menu.play()

  drawSprites();
  
}