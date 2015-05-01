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

    this.move = function() {
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

function Rabauke(x, y, root) {
    this.health = 100;
    this.speed = 0.3;
    this.root = root;
    this.image = 'rabauke';
    Monster.call(this, x, y, this.health, this.speed, this.image, this.root);
}

function Tanglin(x, y, root) {
    this.health = 150;
    this.speed = 0.2;
    this.root = root;
    this.image = 'tanglin';
    Monster.call(this, x, y, this.health, this.speed, this.image, this.root);
}

function Vasall(x, y, root) {
    this.health = 80;
    this.speed = 0.6;
    this.root = root;
    this.image = 'vasall';
    Monster.call(this, x, y, this.health, this.speed, this.image, this.root);
}


