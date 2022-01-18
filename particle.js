


function Particle(x,y, color, spark) { 

    /* um zwischen explodierenden und normalen Partikeln unterscheiden zu können könnte man Überschreiben oder Vererben */

    this.pos = createVector(x,y);
    this.lifespan = 255;
    this.spark = spark;
    this.color = color; //reinfolge der Parameter beachten
   // this.shapes = shapes;
   // this.shapes[rect(this.pos.x, this.pos.y, 50, 5), ellipse(this.pos.x, this.pos.y, 50, 5), point(this.pos.x, this.pos.y)];



    if (spark){
        this.vel = createVector(0,random(-17,-14));
    } else {
        this.vel = p5.Vector.random2D(); //nochmal anschauen was p5 macht
        this.vel.mult(random(1,6));
    }

    this.acc = createVector(0, 0);


    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.update = function() {
        if (!this.spark){
            this.vel.mult(0.9);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    /* Alle abgelaufenen  Spark Parktikel werden gelöscht
    */

    /* this.explodeSpark = function() {

        this.spark.

    } */

    this.done = function(){
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function(){

        /* let shapes = [];
        this.shapes[rect(this.pos.x, this.pos.y, 5, 5), ellipse(this.pos.x, this.pos.y, 5, 5), point(this.pos.x, this.pos.y)]; */
        
        if (!this.firework){
            strokeWeight(2)
            stroke(color, 200, 255, this.lifespan)
        } else{
        strokeWeight(4);
        stroke(color, 200, 255, );   
        }
            //this.shape().random(this.pos.x, this.pos.y,10,10);
            point(this.pos.x, this.pos.y);    
    }


}