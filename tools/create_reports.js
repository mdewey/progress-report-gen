const fs = require('fs');
const format = require("date-fns/format");

const students = [
    "Alexis Grisham",
    "Chris Packett",
    "Daniel Somoano",
    "Dino Ribeiro",
    "Gustavo Kemenyfy",
    "Jason Rocha",
    "Jeff Webb",
    "Manuel Solis",
    "Michael Solone",
    "Vidal Moreno",
]

const dir = format(new Date(), "YYYY-MM-DD");
if (!fs.existsSync("./students/" + dir)){
    fs.mkdirSync("./students/" + dir);
}

students.forEach((student) => {
    let _file = fs.readFileSync("./template/Week-11-12.report.md", "utf8")
    _file = _file.replace("[Student Name]", student);
    _file = _file.replace("[Date]", format(new Date(), "M/D/YYYY"));

    console.log("--------")
    console.log(_file);
    const fileName = student.replace(" ", "_");
    fs.writeFileSync(`./students/${dir}/${format(new Date(), "YYYY-MM-DD")}-${fileName}.md`, _file)
})