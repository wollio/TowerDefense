function Tower(xPos, yPos, image, attackspeed, range, damage) {
    this.attackspeed = attackspeed;
    this.damage = damage;
    this.range = range;
    this.x = xPos;
    this.y = yPos;
    this.image = image;
    this.draw = function() {
        this.image.image(Cut.Out.drawing(20, 20, 4, function (ctx, ratio) {
            ctx.scale(ratio, ratio);
            ctx.arc(5, 5, 2.4, 0, 2 * Math.PI);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#000";
            ctx.stroke();
        }));
    };
}



function MagicTower(x, y, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = Cut.image().appendTo(this.root).pin("align", 0.5);
    Tower.call(this,x,y,this.image,this.attackspeed, this.range,this.damage);
}

function FireTower(xPos, yPos, root) {
    this.attackspeed = 0.5;
    this.damage = 10;
    this.range = 5;
    this.root = root;
    this.image = Cut.image().appendTo(root).pin("align", 0.5);
    Tower.call(this,xPos,yPos,this.image,this.attackspeed, this.range,this.damage);
}