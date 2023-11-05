"use strict";

class Rectangle extends Vector2 {
    #width;
    #height;

    constructor(x = 0, y = 0, width, height) {
        super(x, y);
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    set width(width) {
        this.#width = width;
    }

    set height(height) {
        this.#height = height;
    }

    top() {
        return this.y();
    }

    right() {
        return this.x() + this.#width;
    }

    bottom() {
        return this.y() + this.#height;
    }

    left() {
        return this.x();
    }

    contains(vector2) {
        return vector2.x() >= this.left() && vector2.x() <= this.right && vector2.y() >= this.top && vector2.y() <= this.bottom;
    }

    intersects(rectangle) {
        return this.left <= rectangle.right && this.right >= rectangle.left && this.top <= rectangle.bottom && this.bottom >= rectangle.top;
    }
}
