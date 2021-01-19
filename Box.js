class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      box1 = new Box(330, 235, 30, 40);
      box2 = new Box(360, 235, 30, 40);
      box3 = new Box(390, 235, 30, 40);
      box4 = new Box(420, 235, 30, 40);
      box5 = new Box(450, 235, 30, 40);
      box6 = new Box(360, 195, 30, 40);
      box7 = new Box(390, 195, 30, 40);
      box8 = new Box(420, 195, 30, 40);
      box9 = new Box(390, 195, 30, 40);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();

    }
  };