const XLSX = require("xlsx")

const workbook = XLSX.readFile('scores.xlsx')
const worksheet = workbook.Sheets["Sheet1"]

const arrStudents = XLSX.utils.sheet_to_json(worksheet);
const highSchoolData = {}// {highSchool: {numStudenst: 0, cumulativeScore: 0}}

//Fill
for (const student of arrStudents){
    const highSchool = student["High School"]
    const studentAverage = student["Average"]

    if (highSchool in highSchoolData === false){
        highSchoolData[highSchool] = {numStudenst: 0, cumulativeScore: 0};
    }

    highSchoolData[highSchool].numStudenst += 1;
    highSchoolData[highSchool].cumulativeScore += studentAverage;
}
//log out average score for each high school using highSchoolData
for (const highSchool of Object.keys(highSchoolData)){
    const highSchoolAvarege = highSchoolData[highSchool].cumulativeScore / highSchoolData[highSchool].numStudenst;
    console.log(`The average score for ${highSchool} is ${highSchoolAvarege}`)
}