const fs = require('fs');
function append(text, file) {
    fs.appendFileSync(file, text, "utf-8")
}
module.exports = {append}