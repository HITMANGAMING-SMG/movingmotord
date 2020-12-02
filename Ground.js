class Ground {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };

    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(width / 2, height, width, 20, options);
    World.add(world, this.body);

    this.show = function () {
      push();
      noStroke();
      fill(0);
      var pos = this.body.position;
      rect(pos.x, pos.y, w, h);

      pop();
    };
  }
}
