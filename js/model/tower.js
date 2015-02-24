function Tower(xPos, yPos, width, height, image) {
    this.x = xPos;
    this.y = yPos;
    this.width = width;
    this.height = height;
    this.image = image;
}

Tower.prototype.draw = function() {
    var x = this.x;
    var y = this.y;
    this.image.image(Cut.Out.drawing(this.width, this.height, 4, function(ctx, ratio) {
        ctx.scale(ratio, ratio);
        ctx.arc(x, y, 2.4, 0, 2 * Math.PI);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#000";
        ctx.stroke();
    }));
};
