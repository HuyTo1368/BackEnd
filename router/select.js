const express = require('express');
const {selectProvince, selectTown, selectVillage} = require('../xuli/select');

const router = express.Router();

router.get('/', async (req, res) => {
    const danhsach = await selectProvince();
    res.json(danhsach);
})

router.get('/town', async (req, res) => {
    const danhsach = await selectTown(req.query.province);
    res.json(danhsach);
})

router.get('/village', async (req, res) => {
    const danhsach = await selectVillage(req.query.province, req.query.town);
    res.json(danhsach);
})



module.exports = router;