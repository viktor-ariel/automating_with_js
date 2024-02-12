const fs = require("fs");
const parse = require("csv-parse/lib/sync");
//const stringify = require("csv-stringify/lib/sync");

const CSV = fs.readFileSync('./csvFiles/USERS.csv');
generateDomainCountCSV(CSV);


function generateDomainCountCSV(usersCSV) {
    const usersArray = parse(usersCSV, {
        columns: true,
        skip_empty_lines: true
    });
    console.log(usersArray)
}

