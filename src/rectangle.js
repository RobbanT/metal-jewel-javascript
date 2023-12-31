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

    set width(width) {
        this.#width = width;
    }

    get height() {
        return this.#height;
    }

    set height(height) {
        this.#height = height;
    }

    get top() {
        return this.y;
    }

    get right() {
        return this.x + this.#width;
    }

    get bottom() {
        return this.y + this.#height;
    }

    get left() {
        return this.x;
    }

    get origin() {
        return new Vector2(this.#width / 2, this.#height / 2);
    }

    contains(vector2) {
        return vector2.x >= this.left && vector2.x <= this.right && vector2.y >= this.top && vector2.y <= this.bottom;
    }

    intersects(rectangle) {
        return this.left <= rectangle.right && this.right >= rectangle.left && this.top <= rectangle.bottom && this.bottom >= rectangle.top;
    }
}
