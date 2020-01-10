var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color); // "Blue"
        console.log("In logColor - self.color: " + self.color); // "Blue"
        (function() {
            console.log("In IIFE - this.color: " + this.color); // undefined - loses scope as it is nested in a function, refers now to the global object
            console.log("In IIFE - self.color: " + self.color); // "Blue"
        })();
    }
};

myCar.logColor();