class CannonMain {
  constructor(x, y, r, options) {
    var options = {
      restitution: 0,
      density: 100,
    };
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);

    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      ellipseMode(CENTER);
      translate(pos.x, pos.y);
      ellipse(0, 0, this.r * 2);
      pop();
    };
  }
  move() {
    var pos = this.body.position;
    if (keyCode === 39 || keyCode === 68) {
      this.body.position.x = this.body.position.x + 0.1;
      console.log(this.body.position.y);
    }
  }
}
