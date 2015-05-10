function Socket(x, y, root, game) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.image = 'socket:standard';
    this.root = root;
    this.dialog = undefined;
    this.tower = undefined;
    this.cutobj = undefined;
    this.game = game;
    this.draw = function () {
        if (!_this.cutobj) {
            _this.initializeCutOb();
        }
    }
    this.showDialog = function () {
        if (!_this.dialog) {
            _this.dialog = new Dialog(_this.x - 48, _this.y - 48, _this.root);
        }
        if(_this.tower){
            _this.dialog.toggle(_this,'EDIT');
        }else {
            _this.dialog.toggle(_this, 'BUILD');
        }
    };


    this.buildTower = function (optionValue) {
    if(_this.root.money.value() >= 250)
        {
            switch (optionValue) {
                case 'MAGIC':
                    _this.tower = new MagicTower(this.x, this.y, this.root);
                    _this.tower.draw();
                    _this.dialog.toggle();
                    break;
                case 'FIRE':
                    _this.tower = new FireTower(this.x, this.y, this.root);
                    _this.tower.draw();
                    _this.dialog.toggle();
                    break;
                case 'ICE':
                    _this.tower = new IceTower(this.x, this.y, this.root);
                    _this.tower.draw();
                    _this.dialog.toggle();
                    break;
                default:
                    break;
            }
            _this.root.money.value(_this.root.money.value()-250);
        }
    };

    this.sellTower = function () {
        _this.dialog.toggle();
        _this.root.money.value(_this.root.money.value() + 200);
        _this.tower.self.remove();
        _this.tower = undefined;
    };

    this.upgradeTower = function () {
        if(_this.root.money.value() -500 >= 0) {
            _this.root.money.value(_this.root.money.value() - 500);
            _this.tower.damage += 5;
            _this.dialog.toggle();
        }
    };





    this.initializeCutOb = function () {
      _this.cutobj =  Cut.image(this.image).appendTo(this.root).pin({
            scaleMode: 'in',
            offsetX: this.x,
            offsetY: this.y
        }).on(Cut.Mouse.CLICK, function (ev) {
            _this.showDialog();
        });
    };

}


