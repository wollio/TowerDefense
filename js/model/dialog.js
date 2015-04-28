function Dialog(x, y, root) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.image = 'dialog:standard';
    this.root = root;
    this.selected;
    this.cutobj = undefined;
    this.isVisible = false;
    this.options = [];
    this.toggle = function (socket,option) {
        if (!this.cutobj) {
            this.initializeCutOb(socket);
        }
        if (!_this.isVisible) {
            _this.isVisible = true;
            this.cutobj.show();
            _this.setOptions(socket, option);
            _this.options.forEach(function (entry) {
                entry.show();
            });
            console.log(_this.isVisible);
        }
        else {
            _this.isVisible = false;
            this.cutobj.hide();
            _this.options.forEach(function (entry) {
                entry.hide();
            });
            _this.options = [];
            console.log(_this.isVisible);
        }


    };


    this.setOptions = function (socket, option) {
        switch (option) {
            case 'EDIT':
                var fire = Cut.image('upgrade:upgrade').appendTo(_this.root).pin({
                    scaleMode: 'in',
                    offsetX: this.x + 50,
                    offsetY: this.y + 9
                }).on(Cut.Mouse.CLICK, function (ev) {

                });
                var magic = Cut.image('cash:cash').appendTo(_this.root).pin({
                    scaleMode: 'in',
                    offsetX: this.x + 50,
                    offsetY: this.y + 92
                }).on(Cut.Mouse.CLICK, function (ev) {

                });
                _this.options.push(fire);
                _this.options.push(magic);

                break;
            case 'BUILD':
                var fire = Cut.image('ftower:fire').appendTo(_this.root).pin({
                    scaleMode: 'in',
                    offsetX: this.x + 50,
                    offsetY: this.y + 9
                }).on(Cut.Mouse.CLICK, function (ev) {
                    socket.buildTower('FIRE');
                });
                var magic = Cut.image('mtower:magic').appendTo(_this.root).pin({
                    scaleMode: 'in',
                    offsetX: this.x + 87,
                    offsetY: this.y + 70
                }).on(Cut.Mouse.CLICK, function (ev) {
                    socket.buildTower('MAGIC');
                });
                var ice = Cut.image('itower:ice').appendTo(_this.root).pin({
                    scaleMode: 'in',
                    offsetX: this.x + 15,
                    offsetY: this.y + 70
                }).on(Cut.Mouse.CLICK, function (ev) {
                    socket.buildTower('ICE');
                });
                _this.options.push(fire);
                _this.options.push(magic);
                _this.options.push(ice);
                break;
            default:
                break;
        }

    }


    this.initializeCutOb = function () {
        _this.cutobj = Cut.image(this.image).appendTo(this.root).pin({
            scaleMode: 'in',
            offsetX: this.x,
            offsetY: this.y
        });
    };


}


