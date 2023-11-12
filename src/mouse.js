"use strict";

class Mouse {
    #position;
    #leftDown;
    #middleDown;
    #rightDown;
    #buttons;
    #leftPressed;

    constructor() {
        this.#position = new Vector2();
        this.#leftDown = false;
        this.#rightDown = false;
        this.#leftPressed = false;
        this.#buttons = {
            Left: 0,
            Middle: 1,
            Right: 2,
        };
        document.onmousemove = (evt) => {
            this.#position.x = evt.pageX;
            this.#position.y = evt.pageY;
        };
        document.onmousedown = (evt) => {
            switch (evt.button) {
                case this.#buttons.Left:
                    this.#leftDown = true;
                    break;
                case this.#buttons.Middle:
                    this.#middleDown = true;
                    break;
                case this.#buttons.Right:
                    this.#rightDown = true;
                    break;
            }
        };
        document.onmouseup = (evt) => {
            switch (evt.button) {
                case this.#buttons.Left:
                    this.#leftDown = false;
                    break;
                case this.#buttons.Middle:
                    this.#middleDown = false;
                    break;
                case this.#buttons.Right:
                    this.#rightDown = false;
                    break;
            }
        };
    }
}
