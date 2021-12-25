const express = require("express");
const { phantichgioitinh, phantichtruongthanh, phantichdantoc } = require("../xuli/phantichsolieu");
const router = express.Router();
const verifyMW = require('./verifyMW');

router.get('/namnu', verifyMW, async (req, res) => {
    const data = req.query;
    const result = await phantichgioitinh(data.province, data.town, data.village, data.role);
    res.json(result);
})

router.get('/truongthanh', verifyMW, async (req, res) => {
    const data = req.query;
    const result = await phantichtruongthanh(data.province, data.town, data.village, data.role);
    res.json(result);
})

router.get('/dantoc', verifyMW, async (req, res) => {
    const data = req.query;
    const result = await phantichdantoc(data.province, data.town, data.village, data.role);
    res.json(result);
})

module.exports = router;