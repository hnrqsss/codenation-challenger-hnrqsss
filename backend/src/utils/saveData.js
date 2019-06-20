const fs = require('fs')
module.exports = {
    saveData(path, data) {
        fs.writeFile(path, JSON.stringify(data), { flag: 'w' }, function (err) {
            if (err) throw error
        })
    }
}