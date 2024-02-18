const fs = require("fs");
const robot = require("robotjs");
const clipboardy = (...args) => import('clipboardy').then(({default: clipboardy}) => clipboardy(...args));
const msleep = require("./utility.js").msleep;

const paragraph = {
    topleft: {x:113, y:209}
}
robot.moveMouse( 113, 209)