class Canvas2D {
    #canvas;
    #context;

    constructor(canvasId) {
        this.#canvas = document.getElementById(canvasId);
        this.#context = canvas.getContext("2d");
    }

    get canvas() {
        return this.#canvas;
    }

    get context() {
        return this.#context;
    }

    clearCanvas() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
}
