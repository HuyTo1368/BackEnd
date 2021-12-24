const express = require("express");
const {getMember, getAllUser} = require("../xuli/member")

const router = express.Router();


router.get('/', async (req, res) =>{
    const result = await getMember();
    console.log(result)
    res.json(result);
})

router.post('/add', async (req, res) =>{

    res.json("Ok");
})
router.get('/user', async (req, res) =>{
    const temp = await getAllUser();
    res.json(temp);
})
module.exports = router;