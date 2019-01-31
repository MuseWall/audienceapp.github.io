

var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;


function preload() {

 sound1 = new Audio('assets/Sound1.mp3');
 sound2 = new Audio('assets/Sound2.mp3');
 sound3 = new Audio('assets/Sound3.mp3');
 sound4 = new Audio('assets/Sound4.mp3');
 sound5 = new Audio('assets/Sound5.mp3');
 sound6 = new Audio('assets/Sound6.mp3');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
/*
	sound1.setVolume(0.1);
	sound2.setVolume(0.1);
	sound3.setVolume(0.1);
	sound4.setVolume(0.1);
	sound5.setVolume(0.1);
	sound6.setVolume(0.1);
*/
}

function draw() {

	noStroke();  // FIRST COLUMN
	fill(200,100,0);
	rect( width/4 -75 ,height/4 -50, 150, 100 );
	fill(200,100,100);
	rect( width/4 -75 ,2*height/4 -50, 150, 100 );
	fill(200,100,200);
	rect( width/4 -75 ,3*height/4 -50, 150, 100 );

	fill(200,100,0); // SECOND COLUMN
	rect( 3*width/4 -77 ,height/4 -50, 150, 100 );
	fill(200,100,100);
	rect( 3*width/4 -75 ,2*height/4 -50, 150, 100 );
	fill(200,100,200);
	rect( 3*width/4 -75 ,3*height/4-50, 150, 100 );

}

function mousePressed(){
	// FIRST COLUMN
	if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
		if(mouseY>height/4 -50 && mouseY< height/4 +50){
			sound1.play();
			print("ENTRA1");
		}
	}
	if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
		if(mouseY>2*height/4 -50 && mouseY< 2*height/4 +50){
			sound2.play();
			print("ENTRA2");
		}
	}
	if(mouseX>width/4 -75 &&  mouseX< width/4 +75 ){
		if(mouseY>3*height/4 -50 && mouseY< 3*height/4 +50){
			sound3.play();
			print("ENTRA3");
		}
	}
	// SECOND COLUMN
	if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
		if(mouseY>height/4 -50 && mouseY< height/4 +50){
			sound4.play();
			print("ENTRA4");
		}
	}
	if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
		if(mouseY>2*height/4 -50 && mouseY< 2*height/4 +50){
			sound5.play();
			print("ENTRA5");
		}
	}
	if(mouseX>3*width/4 -75 &&  mouseX< 3*width/4 +75 ){
		if(mouseY>3*height/4 -50 && mouseY< 3*height/4 +50){
			sound6.play();
			print("ENTRA6");
		}
	}
}

function mouseReleased(){

  sound1.stop();
	sound2.stop();
	sound3.stop();
	sound4.stop();
	sound5.stop();
	sound6.stop();
  
}
