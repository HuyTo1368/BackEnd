const express = require('express');
const { selectProvince_tien_do } = require('../xuli/tienDo');
const verifyMW = require('./verifyMW')

const router = express.Router();

router.get('/', verifyMW, async (req, res) => {
    const sodan = await selectProvince_tien_do(req.query.province, req.query.town, req.query.village, req.query.role);
    res.json(sodan)
})

module.exports = router;