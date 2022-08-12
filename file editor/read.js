const fs = require('fs');

function read(path) {
   console.log(fs.readFileSync(path, {encoding:"utf-8"}))
}

module.exports = {read}