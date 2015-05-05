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
    var ways = [];

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

        //Der Weg muss rückwärts initialisiert werden.
        ways.push(new Way(690, 330, null, true, map));
        ways.push(new Way(610, 400, ways[0], false, map));
        ways.push(new Way(610, 350, ways[1], false, map));
        ways.push(new Way(400, 350, ways[2], false, map));
        ways.push(new Way(400, 210, ways[3], false, map));
        ways.push(new Way(300, 210, ways[4], false, map));
        ways.push(new Way(300, 315, ways[5], false, map));
        ways.push(new Way(150, 315, ways[6], false, map));
        ways.push(new Way(150, 465, ways[7], false, map));
        ways.push(new Way(50, 465, ways[8], false, map));
        ways.push(new Way(50, 360, ways[9], false, map));

        //monsters.push(new Tanglin(15, 360, map, ways[10]));
        for(i = 0; i < 1; i++) {
            //monsters.push(new Rabauke(2-i*50, 360, map, ways[10]));
            //monsters.push(new Tanglin(2-i*70, 360, map, ways[10]));
            monsters.push(new Vasall(2-i*60, 360, map, ways[10]));
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

        //TODO not so beautiful ;-)
        monsters.forEach(function(monster){
           if(monster.tick(t, time)){
               life -= 1;
               console.log(life);
               var index = monsters.indexOf(monster);
               if (index > -1) {
                   monsters.splice(index, 1);
               }
           }
        });

        if(life <= 0){
            gameover();
        }

        sockets.forEach(function(socket){
            if(socket.tower) {
                socket.tower.tick(t, time, monsters);
            }
        });

        return true;
    });

    var sockets = [new Socket(100,430,map),new Socket(230,280,map),new Socket(356,235,map),
        new Socket(435,325,map), new Socket(580,385,map)];


    function draw(ev) {

        sockets.forEach(function(socket){
            socket.draw();
        });

        ways.forEach(function(way){
            way.draw();
        });

        monsters.forEach(function(monster){
            monster.draw();
        });


    }

    function gameover(){
        alert("looser!");
        Cut.pause();
    }

    draw();

});