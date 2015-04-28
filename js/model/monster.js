function Monster(x, y, health, speed, image, root) {
    this.x = x;
    this.y = y;
    this.health = health;
    this.speed = speed;
    this.image = image;

    this.move = function() {
        this.x = this.x + this.speed;
    };
    this.draw = function() {
        Cut.image(this.image).appendTo(this.root).pin({
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


