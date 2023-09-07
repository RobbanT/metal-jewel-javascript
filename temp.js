
function Help(){}

Object.defineProperty(Help, "clamp", {
    enumerable: true,
    value: function(num, minNum, maxNum){
        var clampNum = undefined;
        if(num < minNum){
            clampNum = minNum;
        }else if(num > maxNum){
            clampNum = maxNum;
        }else{
            clampNum = num;
        }
        return clampNum;
    }
});

/*
function FontData(image, position){
    SpriteSheetData.call(image);
    this._position = position;
    this._srcRects = {
        " ": new Rectangle(new Vector2(this._position.x + 8, this._position.y), 10, 23),
        "!": new Rectangle(new Vector2(this._position.x + 26, this._position.y + 8), 10, 23),
        "0": new Rectangle(new Vector2(this._position.x + 8, this._position.y + 1051), 27, 23)
    };
}

FontData.prototype = Object.create(SpriteSheetData.prototype, {
    getSrcRect: {
        enumerable: true,
        value: function(char){
            return this._srcRects[char];
        }
    }
});

asciiTable: {
    enumerable: true,
    value: {
        " ": 32, "!": 33, "-": 45,
        "0": 48, "1": 49, "2": 50, "3": 51, "4": 52,
        "5": 53, "6": 54, "7": 55, "8": 56, "9": 57,
        ":": 58, "?": 63,
        A: 65, B: 66, C: 67, D: 68, E: 69, F: 70,
        G: 71, H: 72, I: 73, J: 74, K: 75, L: 76,
        M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82,
        S: 83, T: 84, U: 85, V: 86, W: 87, X: 88,
        Y: 89, Z: 90,
        a: 97, b: 98, c: 99, d: 100, e: 101, f: 102,
        g: 103, h: 104, i: 105, j: 106, k: 107, l: 108,
        m: 109, n: 110, o: 111, p: 112, q: 113, r: 114,
        s: 115, t: 116, u: 117, v: 118, w: 119, x: 120,
        y: 121, z: 122,
    }
}
*/