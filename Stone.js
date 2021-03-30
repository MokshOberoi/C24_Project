class Stone  {
    constructor (x,y,width,height) {
        var stone_options = { 
            restitution : 0.8,
            friction : 0.9,
            density : 12

        }
        this.width = width;
        this.height = height;
          //Create the box
          this.body = Bodies.rectangle (x,y,this.width,this.height, stone_options) ; // create body
          World.add (world, this.body ); // add body to myworld  
          console.log(this.body);
    }

    display () {
        var PosX, PosY;
        var angle = this.body.angle ;
        PosX = this.body.position.x;
        PosY = this.body.position.y;
        push();
        translate (PosX , PosY) ;
        fill("black");
        angleMode (RADIANS);
        rotate(angle);
        rectMode (CENTER);
        rect (0, 0,this.width, this.height) ;
        pop();
    }
}