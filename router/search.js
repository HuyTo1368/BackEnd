const express = require('express');
const {searchResume} = require('../xuli/search')

const router = express.Router();

router.get('/', async (req, res) => {
    const data = req.query;
    const danhsach = await searchResume(data.province, data.town, data.village, data.fullname, data.cccd, data.hometown, data.job, data.religion);
    res.json(danhsach);
})

module.exports = router;