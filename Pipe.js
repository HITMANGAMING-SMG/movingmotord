class Pipe {
  constructor(x, y, w, h) {
    var x = CannonMain.r / 2;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h);

    this.show = function () {
      var pos = this.body.position;
      var angle = this.body.angle;
      rect(x, y, w, h);
    };
  }
}
