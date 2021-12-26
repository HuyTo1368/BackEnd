const db = require('./index')

exports.searchResume = (province, town, village, fullname, cccd, hometown, job, religion, role, user) => {
    let check;
    let huy = `Select fullname, CCCD, DATE_FORMAT(datebirth, '%m/%d/%Y') as datebirth, hometown, gender, address, job, religion, village, town, province From view_danso WHERE`;
    let s = 0;
    
    if (town == "all_province") {
        huy = huy + ' town IS NOT null ';
    } else {
        huy = huy +  ` town = "${town}" `;
        s = s+1;
    }

    if (province == "1") {
        huy = huy + `AND province IS NOT null `;
    } else {
        huy = huy + `AND province = "${province}" `;
        s = s+1;
    }

    if (village == 'all_town') {
        huy = huy + `AND village IS NOT null `;
    } else {
        huy = huy + `AND village = "${village}" `;
        s = s+1;
    }

    if (fullname == "") {
        huy = huy + 'AND fullname IS NOT null ';
    } else {
        huy = huy + `AND fullname = "${fullname}" `;
        s = s+1;
    }

    if (cccd == "") {
        huy = huy + 'AND CCCD IS NOT null ';
    } else {
        huy = huy + `AND CCCD = "${cccd}" `;
        s = s+1;
    }


    if (hometown == "") {
        huy = huy + 'AND hometown IS NOT null ';
    } else {
        huy = huy + `AND hometown = "${hometown}" `;
        s = s+1;
    }

    if (job == "") {
        huy = huy + 'AND job IS NOT null ';
    } else {
        huy = huy + `AND job = "${job}" `;
        s = s+1;
    }

    if (religion == "") {
        huy = huy + 'AND religion IS NOT null ';
    } else {
        huy = huy + `AND religion = "${religion}" `;
        s = s+1;
    }

   
    if (role == 'A2') {
        check = user.slice(0,2);
        huy = huy +  `AND province in (SELECT province FROM province WHERE province_id = "${check}")`
    }
    else if (role == 'A3') {
        check = user.slice(0,4);
        huy = huy +  `AND town in (SELECT town_name FROM town WHERE town_id = "${check}")`
    }
    else if (role == 'B1') {
        check = user.slice(0,6);
        huy = huy +  `AND village in (SELECT village_name FROM village WHERE village_id = "${check}")`
    }

    if (s == 0) {
        huy = `Select * From view_danso WHERE province = "0"`
    }

    return new Promise((resolve, reject) => {
        db.query(huy, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};


exports.deleteResume = (cccd) => {
    let huy= `DELETE FROM resume_btl WHERE CCCD = "${cccd}"`

    return new Promise((resolve, reject) => {
        db.query(huy, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}