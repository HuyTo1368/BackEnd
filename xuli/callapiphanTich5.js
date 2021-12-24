const db = require('./index')

exports.selectProvince_phan_tich5 = (dataPro, town, village) => {
    let query;
    if(town == 'checktown'){
        query = `SELECT religion, count(*) as mount from view_danso
        WHERE view_danso.province = '${dataPro}'
        group by religion 
        order by mount DESC
        limit 5
        `
    }
    else{
        if(village == 'checkvillage'){
            query = `SELECT religion, count(*) as mount from view_danso
            WHERE view_danso.town = '${town}'
            group by religion 
            order by mount DESC
            limit 5`
        }
        else{
            query = `SELECT religion, count(*) as mount from view_danso
            WHERE view_danso.village = '${village}'
            group by religion 
            order by mount DESC
            limit 5`
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

