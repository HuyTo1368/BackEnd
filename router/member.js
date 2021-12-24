const express = require("express");
const {getMember, getAllUser} = require("../xuli/member")
const jwt = require('jsonwebtoken')
const router = express.Router();
const verifyMW = require('./verifyMW');
const res = require("express/lib/response");

router.get('/',verifyMW, async (req, res) =>{
    const result = await getMember();
    console.log(result)
    res.json(result);
})

router.post('/add',verifyMW, async (req, res) =>{

    res.json("Ok");
})
router.get('/user',verifyMW, async (req, res) =>{

    const temp = await getAllUser();
    res.setHeader('content-type', 'application/json');
    res.json(temp);
})
module.exports = router;