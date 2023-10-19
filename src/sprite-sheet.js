class SpriteSheet {
    #image;
    #isLoaded;
    #srcRects;
    constructor(imagePath) {
        this.#image = new Image();
        this.#isLoaded = false;
        this.#image.onload = (() => (this.#isLoaded = true)).bind(this);
        this.#image.src = imagePath;
        this.#srcRects = {};
    }
    get image() {
        return this.#image;
    }
    get isLoaded() {
        return this.#isLoaded;
    }
    getSrcRect(id) {
        return this.#srcRects[id].copy();
    }
    addSrcRect(id, position, width, height) {
        this.#srcRects[id] = new Rectangle(position, width, height);
    }
}
