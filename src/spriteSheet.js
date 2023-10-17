"use strict";

function SpriteSheet(imagePath){
    this._image = new Image();
    this._isLoaded = false;
    this._image.onload = this._loadImage.bind(this);
    this._image.src = imagePath;
    this._srcRects = {}
}

Object.defineProperties(SpriteSheet.prototype, {
    _loadImage: {
        enumerable: true,
        value: function(){
            this._isLoaded = true;
        }
    },
    image: {
        enumerable: true,
        get: function(){
            return this._image;
        }
    },
    isLoaded: {
        enumerable: true,
        get: function(){
            return this._isLoaded;
        }
    },
    addSrcRect: {
        enumerable: true,
        value: function(id, position, width, height){
            this._srcRects[id] = new Rectangle(position, width, height);
        }
    },
    getSrcRect: {
        enumerable: true,
        value: function(id){
            return this._srcRects[id].copy();
        }
    }
});
