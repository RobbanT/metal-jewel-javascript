

/*
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
for (i = 0; i < imageData.data.length; i += 4) {
    if (imageData.data[i + 3] > 0) {
        imageData.data[i] = 255;
        imageData.data[i + 1] = 255;
        imageData.data[i + 2] = 255;
        imageData.data[i + 3] = 255;

    }
}
context.clearRect(0, 0, canvas.width, canvas.height);
context.putImageData(imageData, 0, 0);
context.drawImage(canvas, 0, 0);
*/

/*

    var tilesheet = new Tilesheet("spriteSheet.png");

    var tileImage = new TileImage(tilesheet, 0, 0, 564, 406, 0, 0);
    var button = new Button(tilesheet, 800, 812, 230, 45, 250, 250);
    if (tilesheet.isLoaded()) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        tileImage.draw(context);
        button.draw(context);
    }

 */