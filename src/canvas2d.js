"use strict";

class Canvas2D {
    #canvas;
    #context;

    constructor(canvasId) {
        this.#canvas = document.getElementById(canvasId);
        this.#context = this.#canvas.getContext("2d");
    }

    get context() {
        return this.#context;
    }

    clear() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    drawImage(sprite, position, rotation, origin) {
        this.#context.save();
        this.#context.translate();
        this.#context.rotation(rotation);
        this.#context.drawImage(sprite, 0, 0, sprite.width, sprite.height, -origin.x, -origin.y, sprite.width, sprite.height);
        this.#context.restore();
    }
}
