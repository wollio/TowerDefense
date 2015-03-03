function Map() {
    this.objects = [];

    this.running = false;
}

Map.prototype.addObject = function(obj) {
    obj.Map = this;
    this.objects.push(obj);
    obj.uiCreate(this);
    return obj;
};

Cut(function(root, container) {

    Cut.Mouse(root, container);

    root.viewbox(200, 200);
    root.on(Cut.Mouse.CLICK, function() {
        draw();
    });

    draw();

    function draw() {
        var magicTower = new MagicTower(5,5,root);
        magicTower.draw();

        var fireTower = new FireTower(2,2,root);
        fireTower.draw();
    }
});