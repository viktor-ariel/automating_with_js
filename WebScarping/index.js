const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://en.wikipedia.org/wiki/List_of_countries_by_literacy_rate";


//vai pegar todo conteudo da page
async function fetchLiteracyRates(){
    const res = await axios.get(url)
    const $ = cheerio.load(res.data);
    let fileString = "";
    //console.log(res) vaimostrar todo HTML NA PAGINA
    const table = $('tr:contains("Gender Gap")').parent()
    table.find("tbody tr").slice(2).each((i, element)=>{
        const $row = $(element);

        const countryName = $row.find("a").first().text();
        const literacyRate = $row.find("td").slice(1, 2).text();

        fileString += `${countryName}, ${literacyRate}`;
        
    })
    fs.writeFileSync("output.txt",fileString)
}
fetchLiteracyRates()