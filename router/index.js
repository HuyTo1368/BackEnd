const express = require('express')
const showlist = require('./showlist')
const selectAddress = require('./select')
const EnterData = require('./EnterData')
const member = require('./member')
const router = express.Router();

router.use('/show', showlist);
router.use('/select', selectAddress)
router.use('/Nhaplieu', EnterData)
router.use('/member', member )
module.exports = router;