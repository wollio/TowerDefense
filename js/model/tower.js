function Tower(xPos, yPos, image, attackspeed, range, damage, root) {
    this.attackspeed = attackspeed;
    this.damage = damage;
    this.range = range;
    this.x = xPos;
    this.y = yPos;
    this.image = image;
    this.root = root;
    this.draw = function() {
        Cut.image(this.image).appendTo(this.root).pin('handle',- 0.5);

    };
    //this.draw = function() {
    //    this.image.image(Cut.Out.drawing(20, 20, 4, function (ctx, ratio) {
    //        ctx.scale(ratio, ratio);
    //        ctx.arc(5, 5, 2.4, 0, 2 * Math.PI);
    //        ctx.lineWidth = 0.5;
    //        ctx.strokeStyle = "#000";
    //        ctx.stroke();
    //    }));
    //};
}

function MagicTower(x, y, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = 'tower:magic';
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root);
}

function FireTower(x, y, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = "tower:magic";
    Tower.call(this, x, y, this.image , this.attackspeed, this.range, this.damage, this.root);
}