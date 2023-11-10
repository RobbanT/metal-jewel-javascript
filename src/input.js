"use strict";

function ButtonState() {
    this.released = true;
    this.pressed = false;
    this.clicked = false;
}

function Mouse() {
    this._position = Vector2.zero;
    this._moved = false;
    this._leftButton = new ButtonState();
    this._middleButton = new ButtonState();
    this._rightButton = new ButtonState();
    window.document.onmousemove = this.mousemoveHandler.bind(this);
    window.document.onmouseup = this.mouseupHandler.bind(this);
    window.document.onmousedown = this.mousedownHandler.bind(this);
    window.document.onclick = this.clickHandler.bind(this);
}

Object.defineProperties(Mouse.prototype, {
    _buttonCodes: {
        enumerable: true,
        value: {
            left: 0,
            middle: 1,
            right: 2,
        },
    },
    mousemoveHandler: {
        enumerable: true,
        value: function (e) {
            this._position.x = e.pageX;
            this._position.y = e.pageY;
            this._moved = true;
        },
    },
    mouseupHandler: {
        enumerable: true,
        value: function (e) {
            var buttonState = this["_" + Object.keys(this._buttonCodes)[e.button] + "Button"];
            buttonState.released = true;
            buttonState.pressed = false;
            buttonState.clicked = false;
        },
    },
    mousedownHandler: {
        enumerable: true,
        value: function (e) {
            var buttonState = this["_" + Object.keys(this._buttonCodes)[e.button] + "Button"];
            buttonState.released = false;
            buttonState.pressed = true;
            buttonState.clicked = false;
        },
    },
    clickHandler: {
        enumerable: true,
        value: function (e) {
            var buttonState = this["_" + Object.keys(this._buttonCodes)[e.button] + "Button"];
            buttonState.released = false;
            buttonState.pressed = false;
            buttonState.clicked = true;
        },
    },
    leftButton: {
        enumerable: true,
        get: function () {
            return this._leftButton;
        },
    },
    middleButton: {
        enumerable: true,
        get: function () {
            return this._middleButton;
        },
    },
    rightButton: {
        enumerable: true,
        get: function () {
            return this._rightButton;
        },
    },
    containsMouse: {
        enumerable: true,
        value: function (rect) {
            return rect.contains(this._position);
        },
    },
    containsPressedMouse: {
        enumerable: true,
        value: function (rect, mouseButton) {
            return this.containsMouse(rect) && mouseButton.pressed;
        },
    },
    containsClickedMouse: {
        enumerable: true,
        value: function (rect, mouseButton) {
            return this.containsMouse(rect) && mouseButton.clicked;
        },
    },
    update: {
        enumerable: true,
        value: function (divContainer, scaleWidth, scaleHeight) {
            if (this._moved) {
                this._position.x = (this._position.x - divContainer.offsetLeft) / scaleWidth;
                this._position.y = (this._position.y - divContainer.offsetTop) / scaleHeight;
                this._moved = false;
            }
        },
    },
});

function KeyState() {
    this.up = true;
    this.down = false;
}

function Keyboard() {
    this._keyStates = [];
    for (var i = 0; i < 256; ++i) this._keyStates.push(new KeyState());
    window.document.onkeydown = this.keydownHandler.bind(this);
    window.document.onkeyup = this.keydownHandler.bind(this);
}

Object.defineProperties(Keyboard.prototype, {
    keyCodes: {
        enumerable: true,
        value: {
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
        },
    },
    keyupHandler: {
        enumerable: true,
        value: function (e) {
            this._keyStates[e.keyCode].down = false;
            this._keyStates[e.keyCode].up = true;
        },
    },
    keydownHandler: {
        enumerable: true,
        value: function (e) {
            this._keyStates[e.keyCode].up = false;
            this._keyStates[e.keyCode].down = true;
        },
    },
    isKeyUp: {
        enumerable: true,
        get: function (key) {
            return this._keyStates[key].up;
        },
    },
    isKeyDown: {
        enumerable: true,
        get: function (key) {
            return this._keyStates[key].down;
        },
    },
});

/* 
function handleMouseMove(evt) {
    Game.mousePosition = { x : evt.pageX, y : evt.pageY };
}
    document.onmousemove = handleMouseMove;

*/
