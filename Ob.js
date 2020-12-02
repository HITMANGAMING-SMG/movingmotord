class Ob {
  constructor(y, w, h, options) {
    var options = {
      isStatic: true,
      density: 100,
    };

    this.w = w;
    this.h = h;
    // var x = random(300, 5000);
    this.body = Bodies.rectangle(random(300, 5000), y, w, h, options);

    World.add(world, this.body);

    this.show = function () {
      rect(this.body.position.x, this.body.position.y, w, h);
    };
  }
}
