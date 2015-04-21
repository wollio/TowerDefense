
function Way() {
    this.x = 0;
    this.y = 0;

    var img = Cut.image('base:planet').pin('handle', 0.5);

    this.add = function(parent) {
        img.appendTo(parent);
        return this;
    };

    this.remove = function() {
        img.remove();
        return this;
    };

    this.tick = function(t, time) {
        img.pin('alpha', Math.min(1, Math.max(0, Math.pow(life / LIFE, 2))));
    };
}/**
 * Created by vmadmin on 03.03.2015.
 */
