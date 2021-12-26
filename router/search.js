const express = require('express');
const { searchResume, deleteResume } = require('../xuli/search')
const verifyMW = require('./verifyMW')
const router = express.Router();

router.get('/delete', verifyMW, async (req, res) => {
    const data = req.query;
    const danhsach = await deleteResume(data.cccd);
    res.send('ok');
})

router.get('/', verifyMW, async (req, res) => {
    const data = req.query;
    const danhsach = await searchResume(data.province, data.town, data.village, data.fullname, data.cccd, data.hometown, data.job, data.religion, data.role, data.user);
    res.json(danhsach);
})



module.exports = router;