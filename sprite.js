"use strict";

function Sprite(image, srcRect, position){
    this.image = image;
    this.srcRect = srcRect;
    this.position = position;
    this.width = srcRect.width;
    this.height = srcRect.height;
}

Object.defineProperties(Sprite.prototype, {
    _center: {
        enumerable: true,
        get: function() {
            return new Vector2(this.position.x + this.width / 2, this.position.y + this.height / 2);
        }
    },
    draw: {
        enumerable: true,
        value: function(context, scaleWidth, scaleHeight) {
            context.drawImage(this.image, this.srcRect.x, this.srcRect.y, this.srcRect.width, this.srcRect.height,
                this.position.x, this.position.y, this.width, this.height
            );
        }
    }
});

function Button(image, srcRect, position, text, textScale){
    Sprite.call(this, image, srcRect, position);
    this._text = text;
    this._textScale = textScale;
}

Button.prototype = Object.create(Sprite.prototype, {
    constructor: {
        value: Button
    },
    collisionRectangle: {
        enumerable: true,
        get: function() {
            return new Rectangle(this.position, this.width, this.height);
        }
    },
    handleInput: {
        enumerable: true,
        value: function(mouse){
            if(mouse.containsClickedMouse(this.collisionRectangle, mouse._leftButton)) {
                console.log("da");
                //buttonShade.Color = Color.White;
                //color = Color.White;
            }else if (mouse.containsPressedMouse(this.collisionRectangle, mouse._leftButton)){
                console.log("Pruto");
                //buttonShade.Color = Color.Transparent;
                //color = Color.White;
            }else if (mouse.containsMouse(this.collisionRectangle)){
                console.log("Dolan");
                //buttonShade.Color = Color.White;
                //color = Color.LightBlue;
            }else {
                //console.log("NOOOOOOO");
                //buttonShade.Color = Color.White;
                //color = Color.White;
            }
        }
    },
    update: {
        enumerable: true,
        value: function(delta){}
    },
    draw: {
        enumerable: true,
        value: function(context, scaleWidth, scaleHeight){
            Sprite.prototype.draw.call(this, context, scaleWidth, scaleHeight);
        }
    }
});