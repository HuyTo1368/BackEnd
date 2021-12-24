const express = require('express');
const {selectProvince_phan_tich2} = require('../xuli/callapiphanTich2');

const router = express.Router();

router.get('/', async (req, res) => {
    const sodan = await selectProvince_phan_tich2(req.query.dan1, req.query.dan11, req.query.dan111);
    res.json(sodan)
})

module.exports = router;