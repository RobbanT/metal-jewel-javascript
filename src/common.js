"use strict";

function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

Object.defineProperty(Vector2, "zero", {
    enumerable: true,
    get: function(){
        return new Vector2(0, 0);
    }
});
Object.defineProperties(Vector2.prototype, {
    copy: {
        enumerable: true,
        value: function() {
            return new Vector2(this.x, this.y);
        }
    }
});

function Rectangle(position, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
}

Object.defineProperties(Rectangle.prototype, {
    copy: {
        enumerable: true,
        value: function() {
            return new Rectangle(this.position.copy(), this.width, this.height);
        }
    },
    x: {
        enumerable: true,
        get: function(){
            return this.position.x;
        },
        set: function(x){
            this.position.x = x;
        }
    },
    y: {
        enumerable: true,
        get: function() {
            return this.position.y;
        },
        set: function(y) {
            this.position.y = y;
        }
    },
    left: {
        enumerable: true,
        get: function() {
            return this.x;
        }
    },
    right: {
        enumerable: true,
        get: function() {
            return this.x + this.width;
        }
    },
    top: {
        enumerable: true,
        get: function() {
            return this.y;
        }
    },
    bottom: {
        enumerable: true,
        get: function() {
            return this.y + this.height;
        }
    },
    contains: {
        enumerable: true,
        value: function (position) {
            return position.x >= this.left && position.x <= this.right &&
                position.y >= this.top && position.y <= this.bottom;
        }
    },
    intersects: {
        enumerable: true,
        value: function(rect){
            return (this.left <= rect.right && this.right >= rect.left &&
                this.top <= rect.bottom && this.bottom >= rect.top);
        }
    }
});

function Help(){}

Object.defineProperties(Help, {
    clampMin: {
        enumerable: true,
        value: function(num, minNum){
            return num < minNum ? minNum : num;
        }
    },
    clampMax: {
        enumerable: true,
        value: function(num, maxNum){
            return num > maxNum ? maxNum : num;
        }
    },
    clamp: {
        enumerable: true,
        value: function(num, minNum, maxNum) {
            var clampNum = undefined;
            if (num < minNum) {
                clampNum = minNum;
            } else if (num > maxNum) {
                clampNum = maxNum;
            } else {
                clampNum = num;
            }
            return clampNum;
        }
    }
});