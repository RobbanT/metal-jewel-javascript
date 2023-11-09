"use strict";

class Vector2 {
    #x;
    #y;

    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set y(y) {
        this.#y = y;
    }
}
