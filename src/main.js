document.body.style.backgroundColor = "#424242";
document.body.style.margin = 0;
document.getElementsByTagName("canvas")[0].style.position = "absolute";
document.getElementsByTagName("canvas")[0].style.borderRadius = "10px";
document.getElementsByTagName("canvas")[0].style.backgroundColor = "#ffffff";
document.getElementsByTagName("canvas")[0].style.boxShadow = "0 7px 7px #000000";
new Game(document.getElementsByTagName("canvas")[0], 564, 406, 1, 1, ["../res/sprite-sheet.png"]);
