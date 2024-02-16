const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const dateFormat = (...args) => import('dateformat').then(({default: dateformat}) => dateformat(...args));

async function main(){
    const dates = fs.readFileSync('input.txt').toString().split("\n");
    
    for (const date of dates){
        const wikiCopmpatibleDate = await dateFormat(date, "yyyy-mm-dd");
        //console.log(wikiCopmpatibleDate)

        const res = await axios.get(`https://en.wikipedia.org/wiki/Template:POTD/${wikiCopmpatibleDate}`);

        const $ = cheerio.load(res.data)
        const imageSrc = $("div span a img").attr("src");
        //console.log(imageSrc)
        const imageUrl = `https:${imageSrc}`;
        //console.log(imageUrl)
        //same in documentation
        const image = await axios ({
            method: 'get',
            url: imageUrl,
            responseType:'stream'
        })

        const brDateFormat = await dateFormat(date , "dd-mm-yyyy");
        image.data.pipe(fs.createWriteStream(`${brDateFormat}.jpg`))
    }
}
main()