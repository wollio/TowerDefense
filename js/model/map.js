
function Map(root) {

    this.image = 'map:standard';
    this.root = root;
    this.add = function(parent) {
        img.appendTo(parent);
        return this;
    };

    this.draw = function() {
        Cut.image(this.image).appendTo(this.root).pin({
            align : 0.5
        })};

    this.remove = function() {
        img.remove();
        return this;
    };


}