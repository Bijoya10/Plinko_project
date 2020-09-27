class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          friction:0.4
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);  
    }

    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x,pos.y, this.radius, this.radius);
      pop();
    }
  };