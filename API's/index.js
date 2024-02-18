const fs = require("fs");
const axios = require("axios");
const numeral = require("numeral");

async function main() {
    const countries = fs.readFileSync('input.txt').toString().split("\n");
    //console.log(countries)
    for (const country of countries){
        const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
        const response = await axios.get(url);
        //console.log(response.data)

        const data = response.data[0];
        const name = data.name.common
        const nameofficial = data.name.official;
        const subregion = data.subregion;
        const population = numeral(data.population).format("0,0");

        console.log(`The name common is ${name} and the offical is ${nameofficial} is located in ${subregion}, and has a poputalion of ${population}\n`)
    }
}
main()