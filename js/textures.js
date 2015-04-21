Cut({
    name : "tower",
    imagePath : "img/base.png",
    imageRatio : 4,
    ratio : 16,
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
        name : "map",
        imagePath : "img/standart.png",
        ratio : 12,
        cutouts : [
            {
                name : "background", x : 0, y : 50, width : 30, height : 30
            }
        ]
    }
);