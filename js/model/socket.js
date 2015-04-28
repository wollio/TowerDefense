function Socket(x, y, root) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.image = 'socket:standard';
    this.root = root;
    this.dialog = undefined;
    this.tower = undefined;
    this.cutobj = undefined;
    this.draw = function () {
        if (!_this.cutobj) {
            _this.initializeCutOb();
        }
    }
    this.showDialog = function () {
        if (!_this.dialog) {
            _this.dialog = new Dialog(_this.x - 48, _this.y - 48, _this.root);
        }
        _this.dialog.toggle(_this);
    };

    this.buildTower = function (option) {
        switch (option) {
            case 'MAGIC':
                _this.tower = new MagicTower(this.x,this.y,this.root);
                _this.tower.draw();
                _this.dialog.toggle();
                break;
            case 'FIRE':
                _this.tower = new FireTower(this.x,this.y,this.root);
                _this.tower.draw();
                _this.dialog.toggle();
                break;
            case 'ICE':
                _this.tower = new IceTower(this.x,this.y,this.root);
                _this.tower.draw();
                _this.dialog.toggle();
                break;
            default:
                break;
        }
    };


    this.initializeCutOb = function () {
      _this.cutobj =  Cut.image(this.image).appendTo(this.root).pin({
            scaleMode: 'in',
            offsetX: this.x,
            offsetY: this.y
        }).on(Cut.Mouse.CLICK, function (ev) {
            root.selectedSocket = _this;
            _this.showDialog();
        })
    };

}


