function ScreenManager() {
    this._screens = [];
    this._tempScreens = [];
}

ScreenManager.prototype = {
    constructor: ScreenManager,
    addScreen: function(screen){
        screen.initialize();
        this._screens.push(screen);
    },
    removeScreen: function(screen){
        this._screens.splice(this.screenArray.lastIndexOf(screen), 1);
    },
    changeScreen: function(newScreen, oldScreen) {
        removeScreen(oldScreen);
        addScreen(newScreen);
    },
    addPopup: function(popupScreen, backgroundScreen){
        addScreen(popupScreen);
        backgroundScreen.cover();
    },
    removePopup: function(popupScreen) {
        removeScreen(popupScreen);
        this.screenArray.forEach()(function(screen){
            if (screen.isCovered) {
                screen.unCover();
            }
        });
    },
    removeAllScreens: function() {
        screenArray = [];
    }
};

function Screen(screenManager, tileImage) {
    this.screenManager = screenManager;
    this.covered = false;
    this.background = tileImage;
}

Screen.prototype = {
    constructor: screen,
    isCovered: function () {
        return this.covered;
    },
    cover: function () {
        this.covered = true;
    },
    unCover: function () {
        this.covered = false;
    },
    draw: function(context) {
        this.background.draw(context);
    }
};

function MenuScreen() {
    this.buttonArray = [];
}

MenuScreen.prototype = {
    update: function(){
        /*buttonArray.foreach()
        foreach (Button button in buttonList)
        button.Update(gameTime);
        */
    },
    draw: function(context){

    }
{
    //Bakgrunden målas upp först.
    base.Draw(spriteBatch);
    //Knapparna målas sedan upp.
    foreach (Button button in buttonList)
    button.Draw(spriteBatch);
}
};