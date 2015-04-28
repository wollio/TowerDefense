Cut({
    name : "tower",
    imagePath : "img/base.png",
    cutouts : [
        {
            name : "magic", x : 0, y : 0, width : 1, height : 1
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

// Adding a texture
Cut({
    image : 'img/standard.png',
    textures : {
        map : { x : 16, y : 1, width : 800, height : 621 }
    }
});