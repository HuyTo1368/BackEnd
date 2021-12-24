const db = require('./index')

exports.selectProvince_phan_tich3 = (dataPro, town, village) => {
    let query;
    if(town == 'checktown'){
        query = `SELECT COUNT(*) as older from view_danso
        where datebirth < '1997-12-24' and view_danso.province = '${dataPro}'`
    }
    else{
        if(village == 'checkvillage'){
            query = `SELECT COUNT(*) as older from view_danso
            where datebirth < '1997-12-24' and view_danso.town = '${town}'`
        }
        else{
            query = `SELECT COUNT(*) as older from view_danso
            where datebirth < '1997-12-24' and view_danso.village = '${village}'`
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

