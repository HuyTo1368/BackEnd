const express = require('express')
const showlist = require('./showlist')
const selectAddress = require('./select')
const tiendo = require('./tienDo')
const EnterData = require('./EnterData')
const member = require('./member')
const tracuuThongtin = require('./search')
const login = require('./login')
const currentUser = require('./currentUser')
const phantich = require('./phantichsolieu')

const router = express.Router();

router.use('/tiendo', tiendo)
router.use('/show', showlist);
router.use('/select', selectAddress);
router.use('/Nhaplieu', EnterData)
router.use('/member', member)
router.use('/search', tracuuThongtin);
router.use('/login', login)
router.use('/current-user', currentUser)
router.use('/phantich', phantich)

module.exports = router;
