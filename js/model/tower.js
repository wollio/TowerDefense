function Tower(xPos, yPos, image, attackspeed, range, damage, panel) {
    this.attackspeed = attackspeed;
    this.damage = damage;
    this.range = range;
    this.x = xPos;
    this.y = yPos;
    this.image = image;
    this.panel = panel;
    this.draw = function() {
        Cut.image(this.image).appendTo(this.panel).pin({
            offsetX : this.x,
            offsetY : this.y
        });

    };
}

function MagicTower(x, y, panel) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.panel = panel;
    this.image = 'tower:magic';
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.panel);
}

function FireTower(x, y, panel) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.panel = panel;
    this.image = "tower:magic";
    Tower.call(this, x, y, this.image , this.attackspeed, this.range, this.damage, this.panel);
}