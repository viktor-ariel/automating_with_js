const fs = require("fs");
const pdf = require("pdf-parse");
const hummus = require ("hummus")

async function main(){
    const pdfFiles = fs.readdirSync('./pdfs/input')

    for (const pdfFile of pdfFiles){
        const pathToCurrentPDF = `./pdfs/input/${pdfFile}`

        //Grab the serial number from first page
        const data = await pdf(fs.readFileSync(pathToCurrentPDF), { max: 1 } )
        const serial = data.text.trim();
        //console.log(serial)

        //create a new PDF by grabbing the first page of each input pdf
        const pdfwrite = hummus.createWrite(`./pdfs/output/${serial}.pdf`) 
        pdfwrite.appendPDFPagesFromPDF(pathToCurrentPDF,{ type: hummus.eRangeTypeSpecifc, 
            specificRanges: [[0,0]]
        });
        pdfwrite.end();

    }
}
main()