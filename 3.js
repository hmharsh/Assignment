var fs = require("fs");
var ips = [];
let counts = {};

var text = fs.readFileSync("cc_logs").toString('utf-8');
var textByLine = text.split("\n")
for (var i = 0; i <= textByLine.length; i++) {
    if (textByLine[i]) {
        ip = textByLine[i].match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)
        if (ip[0]) {
            ips.push(ip[0])
        }

    }
}
ips.forEach(el => counts[el] = 1 + (counts[el] || 0))
for (var prop in counts) {
    console.log(prop + "total count of url accessed by this ip is: " + counts[prop]);
}