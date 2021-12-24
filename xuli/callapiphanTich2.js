const db = require('./index')

exports.selectProvince_phan_tich2 = (dataPro, town, village) => {
    let query;
    if(town == 'checktown'){
        query = `SELECT count(*) as Nu from view_danso
        WHERE gender = 'Nữ' and view_danso.province = '${dataPro}'`
    }
    else{
        if(village == 'checkvillage'){
            query = `SELECT count(*) as Nu from view_danso
            WHERE gender = 'Nữ' and view_danso.town = '${town}'`
        }
        else{
            query = `SELECT count(*) as Nu from view_danso
            WHERE gender = 'Nữ' and view_danso.village = '${village}'`
        }

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

