const nodePandoc = require('node-pandoc');

var src,
    args,
    callback;

src = '../students/2018-03-16/Aaron_Wasserman.md';

// Arguments can be either a single string:
args = '-f markdown -t latex  -o ./test.pdf';

// Set your callback function
callback = function (err, result) {

    if (err) {
        console.error('Oh Nos: ', err);
    }

    // For output to files, the 'result' will be a boolean 'true'. Otherwise, the
    // converted value will be returned.
    console.log(result);
    return result;
};

// Call pandoc
nodePandoc(src, args, callback);

// const markdownpdf = require("markdown-pdf"); const fs = require('fs'); const
// format = require("date-fns/format"); const dirname = "../students/" +
// format(new Date(), "YYYY-MM-DD/"); fs.readdir(dirname, function (err,
// filenames) {     if (err) {         console.log(err)         return;     }
//  filenames         .forEach(function (filename) {
// console.log("reading", filename)             const _file = dirname +
// filename;             const _pdfFile = "../reports/" +
// filename.replace(".md", ".pdf")             fs
// .createReadStream(_file)                 .pipe(markdownpdf())
// .pipe(fs.createWriteStream(_pdfFile));         }); });