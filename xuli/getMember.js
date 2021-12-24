const db = require("./index")

function getMember() {
    const query = `SELECT * FROM people WHERE id = 1`;
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    })
}

module.exports = getMember;