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

var count = urls.reduce(function (values, v) {
    if (!values.set[v]) {
        values.set[v] = 1;
        values.count++;
    }
    return values;
}, { set: {}, count: 0 }).count;
console.log("Total URLs: " + urls.length + "\nDistinct URLs: " + count)