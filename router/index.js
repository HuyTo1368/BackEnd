const express = require('express')
const showlist = require('./showlist')
const selectAddress = require('./select')
const EnterData = require('./EnterData')
const member = require('./member')
const tracuuThongtin = require('./search')
const router = express.Router();
const login = require('./login')

router.use('/show', showlist);
router.use('/select', selectAddress)
router.use('/Nhaplieu', EnterData)
router.use('/member', member )
router.use('/search', tracuuThongtin);
router.use('/login', login)

module.exports = router;