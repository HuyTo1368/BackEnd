const db = require('./index')

exports.checkLogin = (login) => {
    const query = `SELECT * FROM user_btl WHERE user = '${login.user}' AND PASSWORD = '${login.password}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
