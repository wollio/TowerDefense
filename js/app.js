

Cut(function(root, container) {

    /**
     * static variables
     * */
    var LIFE = 100;

    /**
     * game objects
     * */
    var monsters = [];
    var bullets = [];
    var sockels = [];

    /**
     * game state
     * */
    var life = 0;
    var score = 0;

    Cut.Mouse(root, container);

    root.viewbox(200, 200);
    root.on(Cut.Mouse.CLICK, function(ev) {
        console.log(ev);
    });

    // game play view
    var playview = Cut.create().appendTo(root).on('viewport', function() {
        this.selectedSocket = {};
        this.pin({
            width : root.pin('width'),
            height : root.pin('height')
        });
    });

    //Background
    var map = Cut.image('map').pin('align', 0.5).on('viewport', function() {
        // on viewport change scale it to fill root
        this.pin({
            scaleMode : 'in',
            scaleWidth : root.pin('width'),
            scaleHeight : root.pin('height')
        });
    }).appendTo(playview);

    var sockets = [new Socket(100,430,map),new Socket(230,280,map),new Socket(356,235,map),
        new Socket(435,325,map), new Socket(580,385,map)]


    function draw(ev) {
        sockets.forEach(function(socket){
        socket.draw();
        });

    }
    draw();

    function play(){
        life = LIFE;
        score = 0;

    }


});