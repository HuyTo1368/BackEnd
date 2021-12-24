const express = require('express');
const mysql = require('mysql');
const db = require('./index')

exports.showlist = (tinh, huyen, xa) => {
    let kq ='';
    if (huyen == 'all_province') {
        kq = `SELECT fullname, CCCD, DATE_FORMAT(datebirth, '%m/%d/%Y') as datebirth, gender,  address, religion, job FROM view_danso WHERE province ="${tinh}" `
    }
    else {
        if (xa == 'all_town') {
            kq = `SELECT fullname, CCCD,  DATE_FORMAT(datebirth, '%m/%d/%Y') as datebirth, gender, address, religion, job FROM view_danso WHERE province ="${tinh}" AND town = "${huyen}" `
        }
        else {
            kq = `SELECT fullname, CCCD, DATE_FORMAT(datebirth, '%m/%d/%Y') as datebirth, gender, address, religion, job FROM view_danso WHERE province ="${tinh}" AND town = "${huyen}" AND village = "${xa}" `
        }
    }
    
    return new Promise ((resolve, reject) => {
        db.query(kq, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};
