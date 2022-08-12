const fs = require('fs');

function create(file) {
    fs.writeFileSync(file, "", { encoding: "utf-8" })
}

module.exports = { create }