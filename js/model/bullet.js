function Bullet(x, y, target, speed, image, root) {
    var _this = this;
    this.root = root;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = '';
    this.self = undefined;
    this.target = target;

    this.moveToTarget = function() {
        _this.self.pin('offsetX', _this.self.pin('offsetX') + this.speed);
    };

    this.draw = function() {
        _this.self = Cut.image(this.image).appendTo(this.root).pin({
            scale : 0.5,
            offsetX : this.x,
            offsetY : this.y
        })
    };
    this.tick = function(t, time) {
        this.move();
    }
}