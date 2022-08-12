const fs = require('fs');
function rename(oldPath, newPath) {
    fs.renameSync(oldPath, newPath)
}

module.exports = {rename}