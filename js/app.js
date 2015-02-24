Cut(function(root, container) {

    Cut.Mouse(root, container);

    root.viewbox(200, 200);

    var width = 50, height = 50, r1 = 10, r2 = 20;

    var image = Cut.image().appendTo(root).pin("align", 0.5);

    root.on(Cut.Mouse.CLICK, function() {
        draw();
    });

    var p = 4;
    draw();

    function draw() {
        var tower = new MagicTower(5,5,10,10,root);
        tower.draw();
    }
});