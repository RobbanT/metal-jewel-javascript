class Game {
    #canvas;
    #context;
    #delta;

    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = canvas.getContext("2d");
        this.#delta = 1000 / 60;
        this.#runGameLoop;
    }

    #clearCanvas() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    #update() {}

    #draw() {}

    #runGameLoop() {
        this.#clearCanvas();
        this.#update();
        this.#draw();
        window.setTimeout(runGameLoop, this.#delta);
    }
}

/* new Game(document.getElementsByTagName("canvas").item(0), 564, 406, 1, 1, "../res/sprite-sheet.png");*/
/* constructor(canvas, nativeWidth, nativeHeight, minScale, maxScale, imagePath) {
        this.#canvas = canvas;
        this.#context = canvas.getContext("2d");
        this.#delta = 1 / 60;
}*/

/*this.#nativeWidth = nativeWidth;
        this.#nativeHeight = nativeHeight;
        this.#minScale = minScale;
        this.#maxScale = maxScale;
        this.#scaleWidth = undefined;
        this.#scaleHeight = undefined;
        this.#mouse = new Mouse();
        this.#keyboard = new Keyboard();
        this.#spriteSheet = new SpriteSheet(imagePath);
        window.onresize = this.#handleResize.bind(this);
        this.#initSpriteSheet(this._spriteSheet);
        this.#handleResize();*/
/* #nativeWidth;
    #nativeHeight;
    #minScale;
    #maxScale;
    #scaleWidth;
    #scaleHeight;
    #mouse;
    #keyboard;
    #delta;
    #spriteSheet;
    */

/*#initSpriteSheet(spriteSheet) {
        spriteSheet.addSrcRect("gameBackground", Vector2.zero, 564, 406);
        spriteSheet.addSrcRect("highScoreBackground", new Vector2(564, 0), 564, 406);
        spriteSheet.addSrcRect("mainMenuBackground", new Vector2(0, 406), 564, 406);
        spriteSheet.addSrcRect("pauseBackground", new Vector2(564, 406), 430, 203);
        spriteSheet.addSrcRect("gameOverBackground", new Vector2(564, 609), 430, 203);
        spriteSheet.addSrcRect("blueJewels", new Vector2(0, 812), 800, 40);
        spriteSheet.addSrcRect("greenJewels", new Vector2(0, 852), 800, 40);
        spriteSheet.addSrcRect("purpleJewels", new Vector2(0, 892), 800, 40);
        spriteSheet.addSrcRect("redJewels", new Vector2(0, 932), 800, 40);
        spriteSheet.addSrcRect("yellowJewels", new Vector2(0, 972), 800, 40);
        spriteSheet.addSrcRect("bigButton", new Vector2(800, 812), 230, 45);
        spriteSheet.addSrcRect("smallButton", new Vector2(800, 857), 112, 30);
        spriteSheet.addSrcRect("blueJewel", new Vector2(912, 857), 30, 30);
        spriteSheet.addSrcRect("greenJewel", new Vector2(942, 857), 30, 30);
        spriteSheet.addSrcRect("purpleJewel", new Vector2(972, 857), 30, 30);
        spriteSheet.addSrcRect("redJewel", new Vector2(1002, 857), 30, 30);
        spriteSheet.addSrcRect("yellowJewel", new Vector2(1032, 857), 30, 30);
        spriteSheet.addSrcRect(" ", new Vector2(8, 1020), 10, 23);
        spriteSheet.addSrcRect("!", new Vector2(26, 1020), 10, 23);
        spriteSheet.addSrcRect("-", new Vector2(242, 1020), 13, 23);
        spriteSheet.addSrcRect("0", new Vector2(8, 1051), 27, 23);
        spriteSheet.addSrcRect("1", new Vector2(43, 1051), 15, 23);
        spriteSheet.addSrcRect("2", new Vector2(66, 1051), 27, 23);
        spriteSheet.addSrcRect("3", new Vector2(101, 1051), 27, 23);
        spriteSheet.addSrcRect("4", new Vector2(136, 1051), 27, 23);
        spriteSheet.addSrcRect("5", new Vector2(171, 1051), 27, 23);
        spriteSheet.addSrcRect("6", new Vector2(206, 1051), 27, 23);
        spriteSheet.addSrcRect("7", new Vector2(241, 1051), 27, 23);
        spriteSheet.addSrcRect("8", new Vector2(276, 1051), 27, 23);
        spriteSheet.addSrcRect("9", new Vector2(311, 1051), 27, 23);
        spriteSheet.addSrcRect(":", new Vector2(319, 1051), 9, 23);
        spriteSheet.addSrcRect("?", new Vector2(434, 1051), 27, 23);
        spriteSheet.addSrcRect("A", new Vector2(26, 1082), 27, 23);
        spriteSheet.addSrcRect("B", new Vector2(61, 1082), 27, 23);
        spriteSheet.addSrcRect("C", new Vector2(96, 1082), 27, 23);
        spriteSheet.addSrcRect("D", new Vector2(131, 1082), 27, 23);
        spriteSheet.addSrcRect("E", new Vector2(166, 1082), 27, 23);
        spriteSheet.addSrcRect("F", new Vector2(201, 1082), 27, 23);
        spriteSheet.addSrcRect("G", new Vector2(236, 1082), 27, 23);
        spriteSheet.addSrcRect("H", new Vector2(271, 1082), 27, 23);
        spriteSheet.addSrcRect("I", new Vector2(306, 1082), 9, 23);
        spriteSheet.addSrcRect("J", new Vector2(323, 1082), 27, 23);
        spriteSheet.addSrcRect("K", new Vector2(358, 1082), 27, 23);
        spriteSheet.addSrcRect("L", new Vector2(393, 1082), 27, 23);
        spriteSheet.addSrcRect("M", new Vector2(428, 1082), 27, 23);
        spriteSheet.addSrcRect("N", new Vector2(463, 1082), 27, 23);
        spriteSheet.addSrcRect("O", new Vector2(498, 1082), 27, 23);
        spriteSheet.addSrcRect("P", new Vector2(8, 1113), 27, 23);
        spriteSheet.addSrcRect("Q", new Vector2(43, 1113), 27, 23);
        spriteSheet.addSrcRect("R", new Vector2(78, 1113), 27, 23);
        spriteSheet.addSrcRect("S", new Vector2(113, 1113), 27, 23);
        spriteSheet.addSrcRect("T", new Vector2(148, 1113), 27, 23);
        spriteSheet.addSrcRect("U", new Vector2(183, 1113), 27, 23);
        spriteSheet.addSrcRect("V", new Vector2(218, 1113), 27, 23);
        spriteSheet.addSrcRect("W", new Vector2(253, 1113), 27, 23);
        spriteSheet.addSrcRect("X", new Vector2(288, 1113), 27, 23);
        spriteSheet.addSrcRect("Y", new Vector2(323, 1113), 27, 23);
        spriteSheet.addSrcRect("Z", new Vector2(358, 1113), 27, 23);
        spriteSheet.addSrcRect("a", new Vector2(26, 1144), 27, 23);
        spriteSheet.addSrcRect("b", new Vector2(61, 1144), 27, 23);
        spriteSheet.addSrcRect("c", new Vector2(96, 1144), 27, 23);
        spriteSheet.addSrcRect("d", new Vector2(131, 1144), 27, 23);
        spriteSheet.addSrcRect("e", new Vector2(166, 1144), 27, 23);
        spriteSheet.addSrcRect("f", new Vector2(201, 1144), 27, 23);
        spriteSheet.addSrcRect("g", new Vector2(236, 1144), 27, 23);
        spriteSheet.addSrcRect("h", new Vector2(271, 1144), 27, 23);
        spriteSheet.addSrcRect("i", new Vector2(306, 1144), 9, 23);
        spriteSheet.addSrcRect("j", new Vector2(323, 1144), 27, 23);
        spriteSheet.addSrcRect("k", new Vector2(358, 1144), 27, 23);
        spriteSheet.addSrcRect("l", new Vector2(393, 1144), 27, 23);
        spriteSheet.addSrcRect("m", new Vector2(428, 1144), 27, 23);
        spriteSheet.addSrcRect("n", new Vector2(463, 1144), 27, 23);
        spriteSheet.addSrcRect("o", new Vector2(498, 1144), 27, 23);
        spriteSheet.addSrcRect("p", new Vector2(8, 1175), 27, 23);
        spriteSheet.addSrcRect("q", new Vector2(43, 1175), 27, 23);
        spriteSheet.addSrcRect("r", new Vector2(78, 1175), 27, 23);
        spriteSheet.addSrcRect("s", new Vector2(113, 1175), 27, 23);
        spriteSheet.addSrcRect("t", new Vector2(148, 1175), 27, 23);
        spriteSheet.addSrcRect("u", new Vector2(183, 1175), 27, 23);
        spriteSheet.addSrcRect("v", new Vector2(218, 1175), 27, 23);
        spriteSheet.addSrcRect("w", new Vector2(253, 1175), 27, 23);
        spriteSheet.addSrcRect("x", new Vector2(288, 1175), 27, 23);
        spriteSheet.addSrcRect("y", new Vector2(323, 1175), 27, 23);
        spriteSheet.addSrcRect("z", new Vector2(358, 1175), 27, 23);
    }
    #handleResize() {
        let minWidth = this.#nativeWidth * this.#minScale;
        let minHeight = this.#nativeHeight * this.#minScale;
        let maxWidth = this.#nativeWidth * this.#maxScale;
        let maxHeight = this.#nativeHeight * this.#maxScale;
        let nativeAspectRatio = this.#nativeWidth / this.#nativeHeight; //Spelets ursprungliga aspectratio.
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;
        let newAspectRatio = newWidth / newHeight; //Webbläsarens aspectratio.

        if (newAspectRatio > nativeAspectRatio) {
            //Webbläsaren är för bred (webbläsarens aspectratio är större).
            newWidth = Help.clamp(newHeight * nativeAspectRatio, minWidth, maxWidth);
            newHeight = Help.clamp(newHeight, minHeight, maxHeight);
        } else {
            //Webbläsaren är för hög (webbläsarens aspectratio är mindre).
            newWidth = Help.clamp(newWidth, minWidth, maxWidth);
            newHeight = Help.clamp(newWidth / nativeAspectRatio, minHeight, maxHeight);
        }

        this.#canvas.style.width = newWidth + "px"; //Ny höjd och bredd uträknad.
        this.#canvas.style.height = newHeight + "px";
        this.#canvas.style.marginTop = Help.clampMin((window.innerHeight - newHeight) / 2, 0) + "px";
        this.#canvas.style.marginLeft = Help.clampMin((window.innerWidth - newWidth) / 2, 0) + "px";
        this.#canvas.style.marginBottom = (window.innerHeight - newHeight) / 2 + "px";
        this.#canvas.style.marginRight = (window.innerWidth - newWidth) / 2 + "px";
        this.#canvas.width = newWidth;
        this.#canvas.height = newHeight;
        this.#scaleWidth = this.#canvas.width / this.#nativeWidth;
        this.#scaleHeight = this.#canvas.height / this.#nativeHeight;
    }
}*/

/*function Game(canvas, nativeWidth, nativeHeight, minScale, maxScale, imagePath) {
    this.sprite = new Button(this._spriteSheet.image, this._spriteSheet.getSrcRect("mainMenuBackground"), new Vector2(0, 0));
    this.gameLoop();
}
Object.defineProperties(Game.prototype, {
    update: {
        enumerable: true,
        value: function () {
            this._mouse.update(this._scaleWidth, this._scaleHeight);
            this.sprite.handleInput(this._mouse);
        },
    },
    draw: {
        enumerable: true,
        value: function () {
            this._context.save();
            this._context.scale(this._scaleWidth, this._scaleHeight);
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this.sprite.draw(this._context, this._scaleWidth, this._scaleHeight);
            this._context.restore();
        },
    },
    gameLoop: {
        enumerable: true,
        value: function () {
            this.update();
            this.draw();
            window.requestAnimationFrame(this.gameLoop.bind(this));
        },
    },
    start: {
        enumerable: true,
        value: function () {
            if (this._spriteSheet.isLoaded) {
                this.gameLoop();
            } else {
                window.setTimeout(this.start.bind(this), 1000 / 60);
            }
        },
    },
});
*/
