function Tower(xPos, yPos,image, attackspeed, range, damage) {
    this.attackspeed = attackspeed;
    this.damage = damage;
    this.range = range;
    this.x = xPos;
    this.y = yPos;
    this.image = image;
    this.draw = function() {
        var x = this.x;
        var y = this.y;
        this.image.image(Cut.Out.drawing(this.width, this.height, 4, function (ctx, ratio) {
            ctx.scale(ratio, ratio);
            ctx.arc(x, y, 2.4, 0, 2 * Math.PI);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#000";
            ctx.stroke();
        }));
    };
}



function MagicTower(xPos, yPos, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = Cut.image().appendTo(root).pin("align", 0.5);
Tower.call(this,xPos,yPos,this.image,this.attackspeed, this.range,this.damage);
}

function FireTower(xPos, yPos, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = Cut.image().appendTo(root).pin("align", 0.5);
    Tower.call(this,xPos,yPos,this.image,this.attackspeed, this.range,this.damage);
}