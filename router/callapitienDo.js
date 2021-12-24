const express = require('express');
const {selectProvince_tien_do} = require('../xuli/callapitienDo');

const router = express.Router();

router.get('/', async (req, res) => {
    const sodan = await selectProvince_tien_do(req.query.dan1, req.query.dan11, req.query.dan111);
    res.json(sodan)
})

module.exports = router;