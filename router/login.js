const {checkLogin} = require ('../xuli/login')
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    const danhsach = await checkLogin(req.body);
    res.json(danhsach);
});

module.exports = router;