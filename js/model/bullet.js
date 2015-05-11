function Bullet(x, y, target, speed, root, damage, image) {
    var _this = this;
    this.root = root;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = image;
    this.self = undefined;
    this.target = target;
    this.xGo = undefined;
    this.yGo = undefined;
    this.damage = damage;

    this.moveToTarget = function(t, time) {

        _this.xGo = _this.target.x - _this.self.pin('offsetX');
        _this.yGo = _this.target.y - _this.self.pin('offsetY');

        var distance = Math.sqrt(Math.pow(differenceX, 2) + Math.pow(differenceY, 2));
        if(distance > 1) {
            _this.self.pin('offsetX', this.x + _this.xGo * 0.15);
            _this.self.pin('offsetY', this.y + _this.yGo * 0.15);
            this.x = _this.self.pin('offsetX');
            this.y = _this.self.pin('offsetY');
        }

        if(Math.round(this.self.pin('offsetX')) <= this.target.x + 5 && Math.round(this.self.pin('offsetX')) >= this.target.x - 5
            && Math.round(this.self.pin('offsetY')) <= this.target.y + 5 && Math.round(this.self.pin('offsetY')) >= this.target.y - 5
        ){
            _this.self.pin('offsetX', Math.round(this.self.pin('offsetX')));
            _this.self.pin('offsetY', Math.round(this.self.pin('offsetY')));
            _this.self.remove();
            _this.target.health = _this.target.health - _this.damage;
            return true;
        }
    };

    this.draw = function () {
        _this.self = Cut.image(this.image).appendTo(_this.root).pin({
            scale: 0.5,
            offsetX: this.x,
            offsetY: this.y
        })
    };
    this.tick = function (t, time) {
        return this.moveToTarget(t, time);
    };
}