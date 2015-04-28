function Socket(x, y, root) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.image = 'socket:standard';
    this.root = root;
    this.dialog = undefined;
    this.tower = undefined;
    this.draw = function() {
        Cut.image(this.image).appendTo(this.root).pin({
            scaleMode : 'in',
            offsetX : this.x,
            offsetY : this.y
        }).on(Cut.Mouse.CLICK, function(ev) {
          root.selectedSocket = _this;
            _this.showDialog();
        })};

    this.showDialog = function() {
        if(!_this.dialog){
        _this.dialog = new Dialog(_this.x - 48, _this.y - 48, _this.root);
        }
        _this.dialog.toggle();
        switch(_this.dialog.selected) {
            case 'MAGIC':
                _this.tower = new MagicTower();
                _this.tower.draw();
                break;
            case 'FIRE':
                _this.tower = new FireTower();
                _this.tower.draw();
                break;
            case 'ICE':
                _this.tower = new IceTower();
                _this.tower.draw();
                break;
            default:
                break;
        }

    };

    this.removeDialog = function(towertype) {


    };


    this.initializeCutOb = function () {


    }

}


