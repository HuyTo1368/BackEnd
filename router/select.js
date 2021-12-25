const express = require('express');
const { selectProvince, selectTown, selectVillage } = require('../xuli/select');
const verifyMW = require('./verifyMW')
const router = express.Router();

router.get('/', async (req, res) => {
    const danhsach = await selectProvince(req.query.role, req.query.user);
    res.json(danhsach);
})

router.get('/town', async (req, res) => {
    const data = req.query;
    const danhsach = await selectTown(data.province, data.role, data.user);
    console.log(danhsach)
    res.json(danhsach);
})

router.get('/village', async (req, res) => {
    const data = req.query;
    const danhsach = await selectVillage(data.province, data.town, data.role, data.user);
    res.json(danhsach);
})



module.exports = router;