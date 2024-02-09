const fs = require('fs')
let fileString = fs.readFileSync('input.txt').toString()
console.log(fileString)

// editing if "/Olá,/g" everybory in text will modify
fileString = fileString.replace(/Olá,/,'Hello,')


//add line number
const characterArray = fileString.split("")
let lineNumber = 1
for (let i = 0; i < characterArray.length; i++){
    const prevChar = characterArray[i - 1];
    if(prevChar === "\n" || !prevChar){
        characterArray[i]= String(lineNumber) + ". " + characterArray[i]
        lineNumber++
    }
}
fileString = characterArray.join("")


fs.writeFileSync("output.txt", fileString);

