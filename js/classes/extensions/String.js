String.prototype.padLeft = function(char, length) {
    return char.repeat(Math.max(0, length - this.length)) + this;
}

String.prototype.repeat = String.prototype.repeat || function(n){
        return n<=1 ? this : (this + this.repeat(n-1));
    }