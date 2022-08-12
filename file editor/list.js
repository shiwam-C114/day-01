const fs = require('fs');
function list(path) {
    console.log(fs.readdirSync(path))
}

module.exports ={list}