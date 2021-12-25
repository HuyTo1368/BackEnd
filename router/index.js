const express = require('express')
const showlist = require('./showlist')
const selectAddress = require('./select')
const select_tien_do = require('./callapitienDo')
const select_phan_tich = require('./callapiphanTich')
const select_phan_tich2 = require('./callapiphanTich2')
const select_phan_tich3 = require('./callapiphanTich3')
const select_phan_tich4 = require('./callapiphanTich4')
const select_phan_tich5 = require('./callapiphanTich5')
const EnterData = require('./EnterData')
const member = require('./member')
const tracuuThongtin = require('./search')
const router = express.Router();
const login = require('./login')
const currentUser = require('./currentUser')
const verifyMW = require('./verifyMW')
router.use('/show',verifyMW, showlist);
router.use('/select',verifyMW, selectAddress)
//tien do
router.use('/show1',verifyMW, select_tien_do)
//gioi tinh nam
router.use('/show2',verifyMW, select_phan_tich)
//gioi tinh nu
router.use('/show3',verifyMW, select_phan_tich2)
//tren 18 tuoi
router.use('/show4',verifyMW, select_phan_tich3)
//dưới 18 tủi
router.use('/show5',verifyMW, select_phan_tich4)
//thống kê về dân tộc
router.use('/show6',verifyMW, select_phan_tich5)
module.exports = router;
router.use('/Nhaplieu',verifyMW, EnterData)
router.use('/member',verifyMW, member )
router.use('/search',verifyMW, tracuuThongtin);
router.use('/login', login)
router.use('/current-user',verifyMW, currentUser)

module.exports = router;
