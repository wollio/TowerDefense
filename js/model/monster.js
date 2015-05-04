function Monster(x, y, health, speed, image, root, target) {
    var _this = this;
    this.root = root;
    this.x = x;
    this.y = y;
    this.health = health;
    this.speed = speed;
    this.image = image;
    this.self = undefined;
    this.target = target;
    this.xGo = undefined;
    this.yGo = undefined;

    this.move = function() {

        //Weg berechnen
        if(this.xGo == undefined || this.yGo == undefined && this.target != undefined){
            differenceX = this.target.x - Math.round(this.self.pin('offsetX'));
            differenceY = this.target.y - Math.round(this.self.pin('offsetY'));
            way = Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));
            stepsize = way/this.speed;
            this.xGo = differenceX/stepsize;
            this.yGo = differenceY/stepsize
        }
        _this.self.pin('offsetX', _this.self.pin('offsetX') + this.xGo);
        this.self.pin('offsetY', _this.self.pin('offsetY') + this.yGo);

        if(Math.round(this.self.pin('offsetX')) == this.target.x && Math.round(this.self.pin('offsetY')) == this.target.y){
            _this.self.pin('offsetX', Math.round(this.self.pin('offsetX')));
            _this.self.pin('offsetY', Math.round(this.self.pin('offsetY')));
            this.target = this.target.target;
            this.xGo = undefined;
            this.yGo = undefined;
        }

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

function Rabauke(x, y, root, target) {
    this.health = 100;
    this.speed = 0.3;
    this.root = root;
    this.target = target;
    this.image = 'rabauke';
    Monster.call(this, x, y, this.health, this.speed, this.image, this.root, this.target);
}

function Tanglin(x, y, root, target) {
    this.health = 150;
    this.speed = 0.2;
    this.root = root;
    this.target = target;
    this.image = 'tanglin';
    Monster.call(this, x, y, this.health, this.speed, this.image, this.root, this.target);
}

function Vasall(x, y, root, target) {
    this.health = 80;
    this.speed = 0.6;
    this.root = root;
    this.target = target;
    this.image = 'vasall';
    Monster.call(this, x, y, this.health, this.speed, this.image, this.root, this.target);
}


