function Dialog(x, y, root) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.image = 'dialog:standard';
    this.root = root;
    this.selected;
    this.cutobj = undefined;
    this.isVisible = false;
    this.toggle = function () {
        if(!this.cutobj){
           this.initializeCutOb();
        }
        if (!_this.isVisible) {
            _this.isVisible = true;
            this.cutobj.show();
            console.log(_this.isVisible);
        }
        else {
            _this.isVisible = false;
            this.cutobj.hide();
            console.log(_this.isVisible);
        }


    };

/*
    this.hide = function () {

            _this.root.remove(_this);
    };
*/
    this.initializeCutOb = function () {
       _this.cutobj = Cut.image(this.image).appendTo(this.root).pin({
            scaleMode: 'in',
            offsetX: this.x,
            offsetY: this.y
        }).on(Cut.Mouse.CLICK, function (ev) {
        })
};


}


