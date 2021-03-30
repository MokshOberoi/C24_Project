class Iron  {
    constructor (x,y,width,height) {
        var iron_options = { 
            restitution : 0.8,
            friction : 3,
            density : 30
            }
        this.width = width;
        this.height = height;
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height, iron_options) ; // create body
          World.add (world, this.body ); // add body to myworld  
          console.log(this.body);
    }

    display () {
        var PosX, PosY;
        var angle = this.body.angle ;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        push();
        fill("green");
        translate (PosX , PosY) ;
        angleMode (RADIANS);
        rotate(angle);
        rectMode (CENTER);
        rect (0, 0,this.width, this.height) ;
        pop();
    }
}