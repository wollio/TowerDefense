function Monster(x, y, health, speed) {
    this.x = x;
    this.y = y;
    this.health = health;
    this.speed = speed;
    this.move = function() {
        this.x = this.x + this.speed;
    };
    this.draw = function() {
        var x = this.x;
        var y = this.y;
        this.image.image(Cut.Out.drawing(this.width, this.height, 4, function (ctx, ratio) {
            ctx.scale(ratio, ratio);
            ctx.arc(x, y, 2.4, 0, 2 * Math.PI);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#FF3870";
            ctx.stroke();
        }));
    };
}


