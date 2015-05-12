Cut({
        name : "ftower",
        imagePath : "img/firetower.png",
        imageRatio : 8,
        ratio : 26,
        filter : function(cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts : [
            {
                name : "fire", x : 0, y : 0, width : 1, height : 1
            }
        ]
    }
);
Cut({
        name : "mtower",
        imagePath : "img/magictower.png",
        imageRatio : 8,
        ratio : 26,
        filter : function(cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts : [
            {
                name : "magic", x : 0, y : 0, width : 1, height : 1
            }
        ]
    }
);
Cut({
        name : "itower",
        imagePath : "img/icetower.png",
        imageRatio : 8,
        ratio : 26,
        filter : function(cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts : [
            {
                name : "ice", x : 0, y : 0, width : 1, height : 1
            }
        ]
    }
);



Cut({
        name : "socket",
        imagePath : "img/socket.png",
        imageRatio : 8,
        ratio : 32,
        filter : function(cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts : [
            {
                name : "standard", x : 0, y : 0, width : 1, height : 1
            }
        ]
    }
);


Cut({
        name : "dialog",
        imagePath : "img/dialog.png",
        imageRatio : 8,
        ratio : 128,
        filter : function(cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts : [
            {
                name : "standard", x : 0, y : 0, width : 1, height : 1
            }
        ]
    }
);

Cut({
    image: 'img/vasall.png',
    textures : {
        vasall : {x : 0, y : 0, width: 41, height: 40 }
    }
});

Cut({
    image: 'img/tanglin.png',
    textures : {
        tanglin : {x : 0, y : 0, width: 47, height: 64 }
    }
});

Cut({
    image: 'img/rabauke.png',
    textures : {
        rabauke : {x : 0, y : 0, width: 36, height: 56 }
    }
});

Cut({
        name: "upgrade",
        imagePath: "img/upgrade.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "upgrade", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);

Cut({
        name: "cash",
        imagePath: "img/cash.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "cash", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);
Cut({
        name: "score",
        imagePath: "img/score.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "score", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);

Cut({
        name: "live",
        imagePath: "img/live.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "live", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);


Cut({
        name: "firebullet",
        imagePath: "img/firebullet.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "firebullet", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);
Cut({
        name: "magicbullet",
        imagePath: "img/magicbullet.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "magicbullet", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);
Cut({
        name: "icebullet",
        imagePath: "img/icebullet.png",
        imageRatio : 8,
        ratio : 26,
        filter: function (cut) {
            cut.y = 1 - (cut.y + cut.height);
            return cut;
        },
        cutouts: [
            {
                name: "icebullet", x: 0, y: 0, width: 1, height: 1
            }
        ]
    }
);

// Adding a texture
Cut({
    image : 'img/castle.png',
    textures : {
        castle : { x : 0, y : 0, width : 800, height : 786 }
    }
});

Cut({
    name : "numbers",
    image : {
        url : "img/utils.png",
        ratio : 4
    },
    trim : 0.2,
    textures : {
        digit : {
            '0' : { x : 0*8,  y : 20, width : 8,  height : 8 },
            '1' : { x : 1*8,  y : 20, width : 8,  height : 8 },
            '2' : { x : 2*8,  y : 20, width : 8,  height : 8 },
            '3' : { x : 3*8,  y : 20, width : 8,  height : 8 },
            '4' : { x : 4*8,  y : 20, width : 8,  height : 8 },
            '5' : { x : 5*8,  y : 20, width : 8,  height : 8 },
            '6' : { x : 6*8,  y : 20, width : 8,  height : 8 },
            '7' : { x : 7*8,  y : 20, width : 8,  height : 8 },
            '8' : { x : 8*8,  y : 20, width : 8,  height : 8 },
            '9' : { x : 9*8,  y : 20, width : 8,  height : 8 }
        }
    }
});

// Adding a texture
Cut({
    image : 'img/play.png',
    textures : {
        playbtn : { x : 0, y : 0, width : 321, height : 321 }
    }
});


// Adding a texture
Cut({
    image : 'img/standard.png',
    textures : {
        map : { x : 18, y : 1, width : 800, height : 621 }
    }
});