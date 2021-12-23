const express = require("express");
const getMember = require("../xuli/getMember")
const router = express.Router();


router.get('/', async (req, res) =>{
    const result = await getMember();
    console.log(result)
    res.json(result);
})

router.post('/add', async (req, res) =>{
    res.json("okeeee");
})
module.exports = router;