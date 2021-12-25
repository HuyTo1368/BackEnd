const db = require('./index')

exports.selectProvince = (role, user) => {
    let query;
    if(role == 'A1') {
        query = ' SELECT province FROM `province` ';
    }
    else {
        let id_province = user.slice(0,2);
        query = `SELECT province FROM province WHERE province_id = "${id_province}"`;
    }
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

exports.selectTown = (province, role, user) => {
    let query;
    if(role == 'A2' || role == 'A1') {
        query = `SELECT town.town_name FROM town INNER JOIN province ON province.province_id = town.province_id WHERE province.province = "${province}"; `;
    }
    else{
        let id_town = user.slice(0,4);
        query = `SELECT town.town_name FROM town INNER JOIN province ON province.province_id = town.province_id WHERE province.province = "${province}" AND town.town_id = "${id_town}"`;
    }
   
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

exports.selectVillage = (province, town,  role, user) => {
    let query;
    if(role == 'A2' || role == 'A1' || role == 'A3') {
        query = ` SELECT village.village_name FROM village INNER JOIN town ON village.town_id = town.town_id INNER JOIN province ON province.province_id = town.province_id WHERE province.province = "${province}" AND town.town_name = "${town}"; `;
    }
    else {
        let id_village = user.slice(0,6);
        query = ` SELECT village.village_name FROM village INNER JOIN town ON village.town_id = town.town_id INNER JOIN province ON province.province_id = town.province_id WHERE province.province = "${province}" AND town.town_name = "${town}" AND village.village_id = '${id_village}'; `;
    }
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