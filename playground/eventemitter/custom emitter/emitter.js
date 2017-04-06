function Emitter() {
    this.events = {};
}

// objects created from this contructor will include the following properties / methods
// emitter contains array of functions
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// if filename is a property on the object, loop through array and run listening functions
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type] .forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;
