const express = require('express');
const {selectProvince_phan_tich4} = require('../xuli/callapiphanTich4');

const router = express.Router();

router.get('/', async (req, res) => {
    const sodan = await selectProvince_phan_tich4(req.query.dan1, req.query.dan11, req.query.dan111);
    res.json(sodan)
})

module.exports = router;