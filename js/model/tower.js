function Tower(xPos, yPos, image, attackspeed, range, damage, root) {
    this.attackspeed = attackspeed;
    this.damage = damage;
    this.range = range;
    this.x = xPos;
    this.y = yPos;
    this.image = image;
    this.root = root;
    this.draw = function () {
        Cut.image(this.image).appendTo(this.root).pin({
            offsetX: this.x,
            offsetY: this.y
        });
    };

    this.upgrade = function () {
        this.damage += 50;
    };

}

function MagicTower(x, y, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = 'mtower:magic';
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root);
}

function FireTower(x, y, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = "ftower:fire";
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root);
}

function IceTower(x, y, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = "itower:ice";
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root);
}