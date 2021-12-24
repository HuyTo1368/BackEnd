const db = require('./index')

exports.searchResume = (province, town, village, fullname, cccd, hometown, job, religion) => {
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
