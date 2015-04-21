

Cut(function(root, container) {

    Cut.Mouse(root, container);

    root.viewbox(200, 200);
    root.on(Cut.Mouse.CLICK, function(ev) {
        console.log(ev);
        draw(ev);
    });


    // game play view
    var playview = Cut.create().appendTo(root).on('viewport', function() {
        this.pin({
            width : root.pin('width'),
            height : root.pin('height')
        });
    });


    function draw(ev) {
        if(ev) {
            var magicTower = new MagicTower(ev.x, ev.y, playview);
            magicTower.draw();
        }
    }

    draw();

});