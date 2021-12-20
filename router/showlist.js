const express = require('express');
const {showlist} = require('../xuli/showlist');

const router = express.Router();

router.get('/', async (req, res) => {
    const danhsach = await showlist();
    res.json(danhsach);
})

module.exports = router;
