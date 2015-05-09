/**
 * Ein Wegelement, welches dazu dient Richtungsänderungen auf dem Weg zu markieren.
 * */
function Way(x, y, target, end, root) {
    this.x = x;
    this.y = y;
    this.target = target;
    this.end = end;
    this.root = root;

    this.tick = function(t, time) {

    };

    this.isEnd = function() {
        return this.end;
    };

    this.draw = function () {
        if(this.end){
            this.image = 'castle';
            Cut.image(this.image).appendTo(this.root).pin({
                scale : 0.15,
                offsetX: this.x,
                offsetY: this.y
            });
            this.y = this.y + 80;
        }
    };
}
