const fs = require('fs');

function Delete(dir) {
    console.log(`./${dir}`)
    fs.unlinkSync(`./${dir}`)
}

module.exports = {Delete}