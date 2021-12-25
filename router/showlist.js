const express = require('express');
const { showlist } = require('../xuli/showlist');
const verifyMW = require('./verifyMW')

const router = express.Router();

router.get('/', verifyMW, async (req, res) => {
    const danhsach = await showlist(req.query.tinh, req.query.huyen, req.query.xa, req.query.role);
    res.json(danhsach);
})


module.exports = router;
