const express = require('express');
const mysql = require('mysql');
const db = require('./index')

exports.showlist = (tinh, huyen, xa) => {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT fullname, CCCD,  gender, address, religion, job FROM view_danso WHERE province ="${tinh}" AND town = "${huyen}" AND village = "${xa}" `, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};

exports.showlist = (tinh, huyen) => {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT fullname, CCCD,  gender, address, religion, job FROM view_danso WHERE province ="${tinh}" AND town = "${huyen}" `, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};