function Tower(xPos, yPos, image, attackspeed, range, damage, root, bullettype) {
    this.attackspeed = attackspeed;
    this.damage = damage;
    this.range = range;
    this.x = xPos;
    this.y = yPos;
    this.image = image;
    this.root = root;
    this.time = 0;
    this.bullettype = bullettype;
    this.self = undefined;
    var _this = this;
    this.target = undefined;

    this.draw = function () {
    _this.self = Cut.image(this.image).appendTo(this.root).pin({
            offsetX: this.x,
            offsetY: this.y
        });
    };

    this.upgrade = function () {
        this.damage += 50;
    };

    this.checkRangeCollision = function (monsters) {
        monsters.forEach(function (monster) {
            if (_this.isInRange(monster)) {
                _this.target = monster;
            }
        });
    };

    this.isInRange = function (monster) {
        var dx = _this.x - monster.x;
        var dy = _this.y - monster.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return (distance < _this.range);
    };

    this.tick = function (t, time, monsters) {
        if (_this.time > _this.attackspeed) {
            _this.time = 0;
            this.checkRangeCollision(monsters);
            if(_this.target != undefined){
              var bullet = new Bullet(_this.x, _this.y, _this.target, 3, _this.root, _this.damage);
                _this.target = undefined;
                return bullet;
            };
        } else {
            _this.time += t;
        }
    }

}

function MagicTower(x, y, root) {
    this.attackspeed = 300;
    this.damage = 26;
    this.range = 100;
    this.root = root;
    this.image = 'mtower:magic';
    this.bullettype ="magicbullet:magicbullet";
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root, this.bullettype);
}

function FireTower(x, y, root) {
    this.attackspeed = 888;
    this.damage = 88;
    this.range = 100;
    this.root = root;
    this.image = "ftower:fire";
    this.bullettype ="firebullet:firebullet";
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root, this.bullettype);
}

function IceTower(x, y, root) {
    this.attackspeed = 650;
    this.damage = 50;
    this.range = 100;
    this.root = root;
    this.image = "itower:ice";
    this.bullettype ="icebullet:icebullet";
    Tower.call(this, x, y, this.image, this.attackspeed, this.range, this.damage, this.root, this.bullettype);
}