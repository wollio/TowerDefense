function Bullet(x, y, target, speed, root, damage) {
    var _this = this;
    this.root = root;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = 'firebullet:firebullet';
    this.self = undefined;
    this.target = target;
    this.time = 100;
    this.xGo = undefined;
    this.yGo = undefined;
    this.damage = damage;

    this.moveToTarget = function(t, time) {

            var differenceX = _this.target.x - _this.self.pin('offsetX');
            var differenceY = _this.target.y - _this.self.pin('offsetY');

            var angle = Math.atan(Math.abs(differenceX/differenceY)) //Angle between Vx and the Velocity

            if(differenceX != undefined && differenceY != undefined && angle != undefined && angle != NaN && differenceX != NaN && differenceX != NaN){
                _this.xGo = this.speed*Math.cos(angle) //Speed of bullet on x-axis
                if (differenceX<0) _this.xGo*=-1; //Makes it the same direction

                _this.yGo = this.speed*Math.sin(angle) //Speed of bullet on y-axis
                if (differenceY<0) _this.yGo*=-1; //Makes it the same direction
                _this.time = 0;
            }


        _this.self.pin('offsetX', this.x + _this.xGo);
        _this.self.pin('offsetY', this.y + _this.yGo);
        this.x = _this.self.pin('offsetX');
        this.y = _this.self.pin('offsetY');


        if(Math.round(this.self.pin('offsetX')) <= this.target.x + 5 && Math.round(this.self.pin('offsetX')) >= this.target.x - 5
            && Math.round(this.self.pin('offsetY')) <= this.target.y + 5 && Math.round(this.self.pin('offsetY')) >= this.target.y - 5
        ){
            _this.self.pin('offsetX', Math.round(this.self.pin('offsetX')));
            _this.self.pin('offsetY', Math.round(this.self.pin('offsetY')));
            _this.self.remove();
            _this.target.health = _this.target.health - _this.damage;
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
        this.moveToTarget(t, time);
    };
}