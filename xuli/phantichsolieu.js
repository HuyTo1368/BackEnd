const db = require('./index')

exports.phantichgioitinh = (dataPro, town, village, role) => {
    let query = '';

    if (town == 'all_province') {
        query = `SELECT count(*) as nam, COUNT(*) as nu from view_danso WHERE gender = 'Nam' AND view_danso.province = '${dataPro}' UNION SELECT COUNT(*) as nam,count(*) as nu from view_danso WHERE gender = 'Nữ' AND view_danso.province = '${dataPro}'`
    }
    else {
        if (village == 'all_town'){
            query = `SELECT count(*) as nam, COUNT(*) as nu from view_danso WHERE gender = 'Nam' AND view_danso.town = '${town}' UNION SELECT COUNT(*) as nam,count(*) as nu from view_danso WHERE gender = 'Nữ' AND view_danso.town = '${town}'`
        }
        else {
            query = `SELECT count(*) as nam, COUNT(*) as nu from view_danso WHERE gender = 'Nam' AND view_danso.village = '${village}' UNION SELECT COUNT(*) as nam,count(*) as nu from view_danso WHERE gender = 'Nữ' AND view_danso.village = '${village}'`
        }
    }

    if ((role == 'A3' && town == 'all_province') || (role == 'B1' && village == 'all_town')) {
        query =`Select * From view_danso WHERE province = "0"`;
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

exports.phantichtruongthanh = (dataPro, town, village, role) => {
    let query = '';
    if (town == 'all_province') {
        query = `SELECT COUNT(*) as u18, COUNT(*) as over18 from view_danso where datebirth > '1987-12-24' AND view_danso.province = '${dataPro}' UNION SELECT COUNT(*) as u18, COUNT(*) as over18 from view_danso where datebirth < '1987-12-24' AND view_danso.province = '${dataPro}'`
    }
    else {
        if (village == 'all_town') {
            query = `SELECT COUNT(*) as u18, COUNT(*) as over18 from view_danso where datebirth > '1987-12-24' AND view_danso.town = '${town}' UNION SELECT COUNT(*) as u18, COUNT(*) as over18 from view_danso where datebirth < '1987-12-24' AND view_danso.town = '${town}'`
        }
        else {
            query = `SELECT COUNT(*) as u18, COUNT(*) as over18 from view_danso where datebirth > '1987-12-24' AND view_danso.village = '${village}' UNION SELECT COUNT(*) as u18, COUNT(*) as over18 from view_danso where datebirth < '1987-12-24' AND view_danso.village = '${village}'`
        }
    }

    if ((role == 'A3' && town == 'all_province') || (role == 'B1' && village == 'all_town')) {
        query =`Select * From view_danso WHERE province = "0"`;
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
}

exports.phantichdantoc = (dataPro, town, village, role) => {
    let query;
    if (town == 'all_province') {
        query = `SELECT religion, count(*) as mount from view_danso
        WHERE view_danso.province = '${dataPro}'
        group by religion 
        order by mount DESC
        limit 5
        `
    }
    else {
        if (village == 'all_town') {
            query = `SELECT religion, count(*) as mount from view_danso
            WHERE view_danso.town = '${town}'
            group by religion 
            order by mount DESC
            limit 5`
        }
        else {
            query = `SELECT religion, count(*) as mount from view_danso
            WHERE view_danso.village = '${village}'
            group by religion 
            order by mount DESC
            limit 5`
        }
    }

    if ((role == 'A3' && town == 'all_province') || (role == 'B1' && village == 'all_town')) {
        query =`Select * From view_danso WHERE province = "0" `;
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
}