function Person(first, last) {
        this.first = first;
        this.last = last;
        this.fullName = function() {
            return this.first + ' ' + this.last;
        };
        this.fullNameReversed = function() {
            return this.last + ', ' + this.first;
        };

    // 'this' is returned by default if the function is invoked with 'new'
    // It is possible to return an 'object' from the constructor function, but this is usually just confusing
    // return this;
}

var pers = new Person("John", "Doe");

console.log(pers.fullName());
console.log(pers.fullNameReversed());

// Problem: For each instance there are new function objects created!
var pers2 = new Person("Jane", "Jackson");
console.log("Comparing method instances. Equal: " + (pers.fullName === pers2.fullName));