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


// Adding a texture
Cut({
    image : 'img/standard.png',
    textures : {
        map : { x : 18, y : 1, width : 800, height : 621 }
    }
});