function Socket(x, y, root) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.image = 'socket:standard';
    this.root = root;
    this.draw = function() {
        Cut.image(this.image).appendTo(this.root).pin({
            scaleMode : 'in',
            offsetX : this.x,
            offsetY : this.y
        }).on(Cut.Mouse.CLICK, function(ev) {
          root.selectedSocket = _this;
            console.log(_this);
        })};

    this.buildTower = function(towertype) {
        var tower;
        switch(towertype) {
            case 'MAGIC':
                tower = new MagicTower();
                tower.draw();
                break;
            case 'FIRE':
                tower = new FireTower();
                tower.draw();
                break;
            case 'ICE':
                tower = new IceTower();
                tower.draw();
                break;
            default:
                break;
        }

    };

}


