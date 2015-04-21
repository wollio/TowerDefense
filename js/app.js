

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
    Cut.image('map').pin('align', 0.5).on('viewport', function() {
        // on viewport change scale it to fill root
        this.pin({
            scaleMode : 'out',
            scaleWidth : root.pin('width'),
            scaleHeight : root.pin('height')
        });
    }).appendTo(playview);

    var sockets = [new Socket(10,20,playview),new Socket(20,20,playview),new Socket(30,20,playview),
        new Socket(40,20,playview), new Socket(50,20,playview), new Socket(60,20,playview),
        new Socket(70,20,playview)
    ]


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