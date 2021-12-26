const express = require("express");
const {getMember, getAllUser, getUser, setUser, setTimeOpen, setTimeClose,setPer} = require("../xuli/member")
const jwt = require('jsonwebtoken')
const router = express.Router();

router.get('/', async (req, res) =>{
    const result = await getMember();
    console.log(result)
    res.json(result);
})

router.post('/add', async (req, res) =>{

    if(req.body.user){
        try {
            const t = await getUser(req.body.user)
            if(t.length == 0){
                const nhap = await setUser(req.body);
                res.json('ok')
            }
            else res.json("no")
        } catch (error) {
            res.json('no')
        }
        
    }
    else res.json('no')

})
router.get('/user', async (req, res) =>{
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

    const temp = await getAllUser(roleDown, user);
//    console.log(temp[0].role);

    res.json(temp);
})

router.get('/timeOpen', async(req,res)=>{
    const xuli = await setTimeOpen(req.query.data, req.query.user)
    res.json("set Time Open Done")
})
router.get('/timeClose', async(req,res)=>{
    const xuli = await setTimeClose(req.query.data, req.query.user)
    res.json("set Time Close Done")
})

router.get('/setPer', async(req,res)=>{
    const xuli = await setPer(req.query.per, req.query.user)
    res.json("set Per Done")
})
module.exports = router;



