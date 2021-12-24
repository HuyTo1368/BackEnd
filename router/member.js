const express = require("express");
const {getMember, getAllUser} = require("../xuli/member")
const jwt = require('jsonwebtoken')
const router = express.Router();
const verifyMW = require('./verifyMW');

router.get('/',verifyMW, async (req, res) =>{
    const result = await getMember();
    console.log(result)
    res.json(result);
})

router.post('/add',verifyMW, async (req, res) =>{

    res.json("Ok");
})
router.get('/user',verifyMW, async (req, res) =>{
    const role = req.query.role
    const user = req.query.user;
    var roleDown;
    if(role==='A1'){
        roleDown = 'A2';
    }
    else if(role==='A2'){
        roleDown = 'A3';
    }
    else if(role==='A3'){
        roleDown = 'B1';
    }
    else if(role==='B1'){
        roleDown = 'B2';
    }
    console.log(roleDown + 'user la '+ user);
    const temp = await getAllUser(roleDown, user);
    console.log(temp);
    res.json(temp);
})
module.exports = router;