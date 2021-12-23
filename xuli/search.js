const db = require('./index')

exports.searchResume = (province, town, village, fullname, cccd, hometown, job, religion) => {
    let huy = `Select * From view_danso WHERE`;
    let = 0;
    if (town == 'all_province') {
        huy = huy + ' town IS NOT null ';
    } else {
        huy = huy +  ` town = "${town}" `;
    }

    if (province == "1") {
        huy = huy + `AND province IS NOT null `;
    } else {
        huy = huy + `AND province = "${province}" `;
    }

    if (village == 'all_town') {
        huy = huy + `AND village IS NOT null `;
    } else {
        huy = huy + `AND village = "${village}" `;
    }

    if (fullname == "") {
        huy = huy + 'AND fullname IS NOT null ';
    } else {
        huy = huy + `AND fullname = "${fullname}" `;
    }

    if (cccd == "") {
        huy = huy + 'AND CCCD IS NOT null ';
    } else {
        huy = huy + `AND CCCD = "${cccd}" `;
    }


    if (hometown == "") {
        huy = huy + 'AND hometown IS NOT null ';
    } else {
        huy = huy + `AND hometown = "${hometown}" `;
    }

    if (job == "") {
        huy = huy + 'AND job IS NOT null ';
    } else {
        huy = huy + `AND job = "${job}" `;
    }

    if (religion == "") {
        huy = huy + 'AND religion IS NOT null ';
    } else {
        huy = huy + `AND religion = "${religion}" `;
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
