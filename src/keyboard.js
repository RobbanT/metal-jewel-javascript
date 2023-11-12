"use strict";

class Keyboard {
    #keyDown;

    constrcutor() {
        this.#keyDown = -1;
        document.onkeydown = (evt) => {
            this.#keyDown = evt.key;
        };
        document.onkeyup = (evt) => {
            this.#keyDown = -1;
        };
    }
}
