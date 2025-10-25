
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .05;

let img;
let btn; 

function preload() {
  img = loadImage('assets/stuff-tiny.png');
}

function setup(){
    canvas = createCanvas (windowWidth, windowHeight);
    canvas.position(0,0); //this is making the position fixed
    canvas.style("z-index", -1);
    // background (225);
}

function windowResized (){
    resizeCanvas(windowWidth, windowHeight); //everytime we change the window size the canvas will resize to match
}

function draw (){
    clear();

    //OFFSET
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);

}

function mouseClicked (){
    image(btn, mouseX, mouseY);
}
// function mouseMoved (){
//     drawThing(mouseX, mouseY);
// }


function drawThing (_x,_y){
    // strokeWeight (0);
    // fill (random(200,255),random(200,255),random(200,255));
     image(img, _x, _y);

}
