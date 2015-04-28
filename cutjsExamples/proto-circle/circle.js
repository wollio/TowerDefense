/**
 * Created by vmadmin on 24.02.2015.
 */
Cut(function(root, container) {

    Cut.Mouse(root, container);

    root.viewbox(200, 200);

    var width = 50, height = 50;

    var image = Cut.image().appendTo(root).pin("align", 0.5);

    root.on(Cut.Mouse.CLICK, function() {
        move(image);
    });
    draw();

    function draw() {
        image.image(Cut.Out.drawing(width, height, 2, function(ctx, ratio) {
            ctx.scale(ratio, ratio);

            // draw circle
            ctx.arc(5, 5, 2.4, 0, 2 * Math.PI);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#000";
            ctx.stroke();

        }));
    }

    function move(image) {

        image.x = image.x +10
        image.y = image.y + 10;
        draw();
    }
});