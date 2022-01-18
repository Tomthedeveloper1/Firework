var fireworks = []; // Fireworks
let gravity;


function setup(){
    createCanvas(1200, 800);
    gravity = createVector(0, 0.2);
     // mit push wird ein Element erstellt kann mit .pop verwendet werden Fireworks da ein Array
     colorMode( p5.Color); /*  anscheinend kein HSB Mode mit alpha möglich 
     was ist der Unterschied zwischen HSB Mode und p5.Color?*/
    stroke(255);
    strokeWeight(4);
    background(250); // erzeugt den Schweif effekt // warum schweif bei (0)?
   
}

function draw(){

   background(0, 0, 0, 25); // alpha
    if (random(1) < 0.09 ) {

        fireworks.push(new Firework());
    } 

    for (var i = fireworks.length-1; i >= 0 ; i-- ) { // loop throuhg fireworks.length
        fireworks[i].update();
        fireworks[i].show();
     //   fireworks[i].explodePart();
    

        //fireworks[i].liftime();
        if (fireworks[i].done()){
            fireworks.splice(i,1); //warum (i,1)
        }
    }


/* function mouseIsPressed() {


} */
   
}