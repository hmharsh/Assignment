var fs = require("fs");
var urls = [];
let counts = {};

var text = fs.readFileSync("cc_logs").toString('utf-8');
var textByLine = text.split("\n")
for (var i = 0; i <= textByLine.length; i++) {
    if (textByLine[i]) {
        url = textByLine[i].match(/\bhttp?:\/\/\S+/gi)
        if (url) {
            urls.push(url)
        }

    }
}

urls.forEach(el => counts[el] = 1 + (counts[el] || 0))
console.log("URL count")
console.log(counts)