const express = require('express');
const mysql = require('mysql');
const db = require('./index')

exports.showlist = (tinh, huyen, xa, role) => {
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

    if ((role == 'A3' && huyen == 'all_province') || (role == 'B1' && xa == 'all_town')) {
        kq =`Select * From view_danso WHERE province = "0"`;
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
