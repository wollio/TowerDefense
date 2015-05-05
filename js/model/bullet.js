function Bullet(x, y, target, tower, speed, root) {
    var _this = this;
    this.root = root;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = 'firebullet:firebullet';
    this.self = undefined;
    this.target = target;
    this.tower = tower;

    this.moveToTarget = function () {
        var differenceX = _this.target.x - Math.round(_this.self.pin('offsetX'));
        var differenceY = _this.target.y - Math.round(_this.self.pin('offsetY'));
        var way = Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
        var stepsize = way / _this.speed;
        var xGo = differenceX / stepsize;
        var yGo = differenceY / stepsize;
        _this.self.pin('offsetX', this.x + xGo);
        _this.self.pin('offsetY', this.y + yGo);
        this.x = _this.self.pin('offsetX');
        this.y = _this.self.pin('offsetY');


        if (Math.round(this.self.pin('offsetX')) == this.target.x && Math.round(this.self.pin('offsetY')) == this.target.y) {
            _this.self.pin('offsetX', Math.round(this.self.pin('offsetX')));
            _this.self.pin('offsetY', Math.round(this.self.pin('offsetY')));
            _this.self.remove();
            _this.tower.firedBullet = undefined;
        }
    };

    this.draw = function () {
        _this.self = Cut.image(this.image).appendTo(this.root).pin({
            scale: 0.5,
            offsetX: this.x,
            offsetY: this.y
        })
    };
    this.tick = function (t, time) {
        this.moveToTarget();

    };
}