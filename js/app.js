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
    var sockets = [];
    var ways = [];

    /**
     * game state
     * */
    var score = 0;
    var time = 0;
    var life = 0;
    var wave = 0;
    var money = 0;

    /**
     * buttons
     * */

    var playbtn;

    Cut.Mouse(root, container);

    root.viewbox(200, 200);

    // game play view
    var playview = Cut.create().appendTo(root).on('viewport', function() {
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
    function buildMap(){

        //Set lifepoints on map
        life = Cut.string('numbers:digit').value(LIFE).pin({
            offsetX : 40,
            offsetY : 30,
            scale : 3
        }).appendTo(map);

        //reset life
        life.value(LIFE);

        //Set score on map
        score = Cut.string('numbers:digit').value(LIFE).pin({
            offsetX : 40,
            offsetY : 55,
            scale : 3
        }).appendTo(map);

        //reset score
        score.value(0);

        //Set money on map
        map.money = Cut.string('numbers:digit').value(LIFE).pin({
            offsetX : 40,
            offsetY : 80,
            scale : 3
        }).appendTo(map);

        //reset money
        map.money.value(300);

        //show start button
        playbtn = Cut.image('playbtn').pin({
            offsetX : 740,
            offsetY : 20,
            scale : 0.1
        }).on(Cut.Mouse.CLICK, function(){
            nextWave();
            playbtn.hide();
        }).appendTo(map);

        sockets = [new Socket(100,430,map),new Socket(230,280,map),new Socket(356,235,map),
            new Socket(435,325,map), new Socket(580,385,map)];

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

        map.appendTo(playview);

    }

    //start the game
    buildMap();

    //Gameloop
    map.tick(function(t) {

        //avoid jumps
        t = Math.min(t, 100);

        // total time
        time += t;

        //TODO not so beautiful ;-)
        monsters.forEach(function(monster){
           result = monster.tick(t, time);
            if(result){
               life.value(life.value() - 1);
               var index = monsters.indexOf(monster);
               if (index > -1) {
                   monsters.splice(index, 1);
               }
           } else if (result == false){
                score.value(score.value() + 1);
                map.money.value(map.money.value() - monster.health);
                var index = monsters.indexOf(monster);
                if (index > -1) {
                    monsters.splice(index, 1);
                }
            }
        });

        if(life.value() <= 0){
            gameover();
        }

        sockets.forEach(function(socket){
            if(socket.tower) {
                var bullet = socket.tower.tick(t, time, monsters)
                if(bullet != undefined){
                    var bullet = new Bullet(bullet.x, bullet.y, bullet.target, 2.5, map, bullet.damage, socket.tower.bullettype);
                    bullet.draw();
                    bullets.push(bullet);
                }
            }
        });

        bullets.forEach(function(bullet){
           if(bullet.tick(t, time)){
               var index = bullets.indexOf(bullet);
               if(index > -1){
                   bullets.splice(index, 1);
               }
           }
        });

        if(monsters.length <= 0){
            playbtn.show();
        }

        return true;
    });

    function nextWave(){
        wave = wave+1;

        if (wave % 10 == 0){
            monsters.push(new Tanglin(60, 360, map, ways[10], wave * 250));
        } else {
            for(i = 0; i < wave; i++){
                monsters.push(new Tanglin(2-i*40, 360, map, ways[10], 135 + wave * 25));
                monsters.push(new Vasall(2-i*60, 360, map, ways[10], 45 + wave * 25));
                monsters.push(new Rabauke(2-i*30, 360, map, ways[10], 85 + wave * 25));
            }
        }

        monsters.forEach(function(monster){
            monster.draw();
        });

    }

    function draw(ev) {
        sockets.forEach(function(socket){
            socket.draw();
        });

        ways.forEach(function(way){
            way.draw();
        });

    }

    function gameover(){
        alert("looser!");
        Cut.pause();
    }

    draw();

});