const express = require('express')
const showlist = require('./showlist')
const selectAddress = require('./select')
const tracuuThongtin = require('./search')

const router = express.Router();

router.use('/show', showlist);
router.use('/select', selectAddress);
router.use('/search', tracuuThongtin);

module.exports = router;