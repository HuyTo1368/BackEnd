const express = require('express');
const {searchResume} = require('../xuli/search')
const verifyMW = require('./verifyMW')
const router = express.Router();

router.get('/',verifyMW, async (req, res) => {
    const data = req.query;
    const danhsach = await searchResume(data.province, data.town, data.village, data.fullname, data.cccd, data.hometown, data.job, data.religion, data.role, data.user);
    res.json(danhsach);
})

module.exports = router;