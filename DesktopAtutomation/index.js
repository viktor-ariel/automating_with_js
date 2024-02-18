// use esse comand no linux caso ele  não funcionar
// sudo apt-get install libxtst-dev libpng++-dev
//const fs = require("fs");
import fs from 'fs';
//const robot = require("robotjs");
import robot from 'robotjs';
//const clipboardy = (...args) => import('clipboardy').then(({default: clipboardy}) => clipboardy(...args));
//const clipboardy = require("clipboardy");
import clipboardy from 'clipboardy';

//import msleep from 'utility.js';
//const msleep = require("./utility.js").msleep;


function msleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
  }

const paragraph = {
    topleft: {x:373, y:365 },
    bottomRight:{x:978, y:468}
}

//color not work
const factButtom = {x:676, y:594 ,color: "135aff" }
// let n = 0
// while (robot.getPixelColor(factButtom.x, factButtom.y) !== factButtom.color){
//     console.log(`You are not fact page ${n}`)
//     msleep(500)
//     n ++
// }

msleep(3000)
let fileString = "";
function copyAndGetNewFact(numFactsToGet){
    for (let i = 0; i < numFactsToGet; i++ ){
        //copy current fact
        robot.moveMouse(paragraph.topleft.x, paragraph.topleft.y)
        robot.mouseToggle("down")
        robot.dragMouse(paragraph.bottomRight.x, paragraph.bottomRight.y)
        robot.mouseToggle("up");

        robot.keyTap("c", "control");
        fileString = fileString + clipboardy.readSync() + "\n";

        //Get new fact
        robot.moveMouse(factButtom.x, factButtom.y);
        robot.mouseClick();
    }
}

copyAndGetNewFact(10)
fs.writeFileSync("output.txt", fileString);