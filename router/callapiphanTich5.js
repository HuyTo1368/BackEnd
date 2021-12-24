const express = require('express');
const {selectProvince_phan_tich5} = require('../xuli/callapiphanTich5');

const router = express.Router();

router.get('/', async (req, res) => {
    const sodan = await selectProvince_phan_tich5(req.query.dan1, req.query.dan11, req.query.dan111);
    res.json(sodan)
})

module.exports = router;