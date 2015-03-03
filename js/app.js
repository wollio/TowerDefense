

Cut(function(root, container) {

    Cut.Mouse(root, container);

    root.viewbox(200, 200);
    root.on(Cut.Mouse.CLICK, function() {
        draw();
    });


    // game play view
    var playview = Cut.create().appendTo(root).on('viewport', function() {
        this.pin({
            width : root.pin('width'),
            height : root.pin('height')
        });
    });


    function draw() {
        var magicTower = new MagicTower(50,100,playview);
        magicTower.draw();
    }

    draw();

});