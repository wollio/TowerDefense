function Bullet(x, y, target,tower, speed, root) {
    var _this = this;
    this.root = root;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = 'firebullet:firebullet';
    this.self = undefined;
    this.target = target;
    this.tower = tower;

    this.moveToTarget = function() {
            var differenceX = this.target.x - Math.round(this.self.pin('offsetX'));
            var differenceY = this.target.y - Math.round(this.self.pin('offsetY'));
            var way = Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
            var stepsize = way/_this.speed;
            var xGo = differenceX/stepsize;
            var yGo = differenceY/stepsize;
        _this.self.pin('offsetX', _this.self.pin('offsetX') + xGo);
        _this.self.pin('offsetY', _this.self.pin('offsetY') + yGo);
        this.x = _this.self.pin('offsetX');
        this.y = _this.self.pin('offsetY');
    };

    this.draw = function() {
        _this.self = Cut.image(this.image).appendTo(this.root).pin({
            scale : 0.5,
            offsetX : this.x,
            offsetY : this.y
        })
    };
    this.tick = function(t, time) {
        this.moveToTarget();
    }
}