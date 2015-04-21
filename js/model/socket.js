function Monster(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function() {
        Cut.image(this.image).appendTo(this.root).pin({
            offsetX : this.x,
            offsetY : this.y
        }).on(Cut.Mouse.CLICK, function(ev) {
            this.build();
        })};

    this.build = function() {


    };

}


