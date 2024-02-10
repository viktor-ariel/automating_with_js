const fs = require("fs")
const Jimp = require('jimp')

const squareSize = 500

async function addLogoToImage(){
    const logoImage = await Jimp.read('./images/png_image.png')
    logoImage.opacity(0.5)

    const arrFileNames = fs.readdirSync('./images/non')
    for (const fileName of arrFileNames){
        const image = await Jimp.read(`./images/non/${fileName}`)
        
        image.resize(squareSize, squareSize)
        console.log("Resizing "+ fileName)

        image.composite(logoImage, squareSize/2, squareSize/2)
        console.log("Adding water mark to " + fileName)

        image.greyscale()
        console.log('grey scaling '+ fileName)

        //Save our newly watermarked  image
        const imageFileName = "watermarked_"+fileName
        image.write('./image/watermarked/' + imageFileName)
    }
}

addLogoToImage();