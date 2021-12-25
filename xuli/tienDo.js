const db = require('./index')

exports.selectProvince_tien_do = (dataPro, town, village,role) => {
    let query;
    if(town == 'all_province'){
        query = `select count(*) as tong, province.total from view_danso INNER JOIN province on province.province = view_danso.province where view_danso.province = '${dataPro}'`
    }
    else{
        if(village == 'all_town'){
            query = `select count(*) as tong, town.total from view_danso INNER JOIN town on town.town_name = view_danso.town where view_danso.town = "${town}"`
        }
        else{
            query = `select count(*) as tong, village.total from view_danso INNER JOIN village on village.village_name = view_danso.village where view_danso.village = "${village}"`
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
};

