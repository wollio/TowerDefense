function Monster(first, last) {
    this.first = first;
    this.last = last;
}

Monster.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Monster.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};
