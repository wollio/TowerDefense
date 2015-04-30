Cut(function(root, container) {

    /**
     * static variables
     * */
    var LIFE = 100;

    /**
     * game objects
     * */
    var monsters = [];
    var towers = [];
    var bullets = [];
    var sockels = [];

    /**
     * game state
     * */
    var life = 0;
    var score = 0;
    var time = 0;

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
    });

    //Startgamefunction
    function play(){

        life = LIFE;
        score = 0;

        for(i = 0; i < 300; i++) {
            monsters.push(new Rabauke(2-i*15, 360, map));
        }

        map.appendTo(playview);
    }

    //start the game
    play();

    //Gameloop
    map.tick(function(t) {

        //avoid jumps
        t = Math.min(t, 100);

        // total time
        time += t;

        updateUi();

        monsters.forEach(function(monster){
           monster.tick(t, time);
        });

        return true;
    });

    var sockets = [new Socket(100,430,map),new Socket(230,280,map),new Socket(356,235,map),
        new Socket(435,325,map), new Socket(580,385,map)];


    function draw(ev) {

        sockets.forEach(function(socket){
            socket.draw();
        });

        monsters.forEach(function(monster){
            monster.draw();
        })

    }

    function updateUi(){

    }

    draw();

});