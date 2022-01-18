
function Firework(){
   /*  this.mouse = new Particle(width/2, height, this.color, true) */
    this.color = random(255); // muss vor firework deklariert werden
    this.firework = new Particle(random(width), height, this.color, true);
  /*   this.firework = new Particle(random(width), height, this.color, true).!spark; */
    this.exploded = false; // boolen um zu checken ob es die Raketen gibt
    this.particles = [];
  //  this.lifespan = lifespan; // Warum?? 
    

    this.done = function() {
// stellt sicher das alle nicht sichtbaren Parktikel gelöscht werden

        if(this.exploded && this.particles.length == 0){
            return true;
        } else {
            return false;
        }
    }

    this.update = function() { // only apply force if it exists
        if (!this.exploded){
            

            this.firework.explodePart();
            this.firework.applyForce(gravity);
            this.firework.update();

          


            // this.particles.explodePart(); // Uncaught TypeError: this.particles.explodePart is not a function
         //   this.firework.lifetime(255);

           /*  if (ranodm(1) < 0.10 ) {

             particles.explode();
            } */

         /*    if (random(1) < 0.15 ) { // die Wahrscheinlichkeit der dopptelt exlpodierenden Raketen

               //  ich könnte auch ein Array Bauen mit verschiedenen exlposionstypen und wahrscheinlichkeiten

                if(this.firework.vel.y >= -4 && this.firework.vel.y <= -3) { // Die Raketen dürfen nicht auf der selben Stelle explodieren
                    this.explode();  
                }    
            }  */

            if(this.firework.vel.y >= 0) { // wenn die Rakete nicht mehr beschleunigt, dann explode
                this.exploded = true;
                this.explode();
             }
         }
        for(let i = this.particles.length-1; i >= 0; i--){ // 
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
           // this.particles[i].explodePart();

           /*  if (this.exploded && this.particles[i].done(false)){
 
                this.particles[i].explode();
            } */

            if (this.particles[i].done()){ // die function done zeigt welche Particle gelöscht werden können

               
                this.particles.splice(i, 1); //alte nicht sichbare sparks müssen gelöscht werden
            }
        }
    }   

    this.explode = function() {

        for(let i = 0; i < 100 ; i++){ // explosion hängt an der Beschleunigung
            let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.color, false); // False kann man auch weg lassen
            this.particles.push(p); //p könnte ein Array sein
            /* let c = new Particle(this.firework.pos.x, this.firework.pos.y, this.color, false).!spark;
            this.particles.push(c).spark; //p könnte ein Array sein */
        }
    }


/* Idee: explode zu überladen und diese dann zweimal explodieren zu lassen */
    this.show = function() {
        if(!this.exploded){ // only if exist show  
            this.firework.show();
        }    
        for(let i = 0; i <this.particles.length; ++i){
            this.particles[i].show();
        }
    }


    this.explodePart = function() {

        //this.firework.explodePart();
        this.particles.explodepart();
        if (this.exploded) {
            if(this.firework.show(this.lifespan < 0)){

                this.particles.explode();

            }

        
    }
      //  this.particles.explode(this.p);

        
      /*   if(this.exploded){ // 
            if (this.particles[i](true)) {

                print("hello");
                //this.particles[i].spark.explode();
            }
        }     */
    }

  /*   this.lifetime = function(life) {

    if(!this.done) {
        this.acc.add(life);

        //this.x = x;
        // this.lifespan = 255;

        //print("it works");
       
     
        }
    } */



     /*  this.launch = function() {

        if (this.mouseIsPressed){
            this.firework.applyForce(gravity);
            this.firework.update();

            if(this.firework.vel.y >= 0) { // wenn die Rackete nicht mehr Beschleunigt, dann explode
                this.exploded = true;
                this.explode();
                
            }
    }
 */



}
