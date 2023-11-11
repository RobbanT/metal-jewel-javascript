class Canvas2D {
    #canvas;
    #context;
    #mousePosition;

    constructor(canvasId) {
        this.#canvas = document.getElementById(canvasId);
        this.#context = canvas.getContext("2d");
        this.#mousePosition = new Vector2();
        this.#canvas.onmousemove = (evt) => {
            this.#mousePosition.x = evt.pageX;
            this.#mousePosition.y = evt.pageY;
        };
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

const Keys = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    "Numpad 0": 96,
    "Numpad 1": 97,
    "Numpad 2": 98,
    "Numpad 3": 99,
    "Numpad 4": 100,
    "Numpad 5": 101,
    "Numpad 6": 102,
    "Numpad 7": 103,
    "Numpad 8": 104,
    "Numpad 9": 105,
};
