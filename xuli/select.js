const db = require('./index')

exports.selectProvince = () => {
    const query = ' SELECT province FROM `province` ';
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
};

exports.selectTown = (province) => {
    const query = ` SELECT town.town_name FROM town INNER JOIN province ON province.province_id = town.province_id WHERE province.province = "${province}"; `;
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
};

exports.selectVillage = (province, town) => {
    const query = ` SELECT village.village_name FROM village INNER JOIN town ON village.town_id = town.town_id INNER JOIN province ON province.province_id = town.province_id WHERE province.province = "${province}" AND town.town_name = "${town}"; `;
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
};