const express = require('express');
const mysql = require('mysql');
const db = require('./index')

exports.showlist = () => {
    return new Promise ((resolve, reject) => {
        db.query('SELECT fullname, CCCD,  gender, address, religion, job FROM `resume_btl` ', (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};