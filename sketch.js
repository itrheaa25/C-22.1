var cat, catsat,catWalk,catstop;
var rat, rateat,ratrun,ratsat;
var garden , gardenImage;

function preload() {
    //load the images here
    catsat = loadAnimation("images/cat1.png");
    catWalk = loadAnimation("images/cat2.png","images/cat3.png");
    catstop = loadAnimation("images/cat4.png")

    rateat = loadAnimation("images/mouse1.png");
    ratsat = loadAnimation("images/mouse2.png","images/mouse3.png")
    ratrun = loadAnimation("images/mouse4.png");
    
    gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImage);
    garden.scale = 1.5;


    cat = createSprite(690,630,10,10);
    cat.addAnimation("resting",catsat);
    cat.addAnimation("moving",catWalk);
    cat.addAnimation("stopping",catstop);
    cat.scale = 0.2;
    cat.debug = true;
    cat.setCollider("circle",0,0,190);

    rat = createSprite(150,630,10,10);
    rat.addAnimation("moving", rateat);
    rat.addAnimation("walking", ratrun);
    rat.addAnimation("sitting",ratsat);
    rat.scale = 0.1;
    rat.debug = true;
    rat.setCollider("circle",0,0,120);

}

function draw() {

    background(255);

    if(cat.isTouching(rat)){
   cat.changeAnimation("stopping",catstop);
   rat.changeAnimation("walking",ratrun);
   cat.velocityX=0;
    }
    
    drawSprites();
}


function keyPressed(){

    if(keyCode===32){
        cat.changeAnimation("moving",catWalk);
        rat.changeAnimation("sitting",ratsat);
        cat.velocityX = -3;
          }

}
