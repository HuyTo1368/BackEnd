const express = require("express");
const { send } = require("express/lib/response");
const {
  setEnterData,
  getPer,
  getPerParent,
  getParent,
  getPermiss,
} = require("../xuli/EnterData");

const router = express.Router();

router.post("/", async (req, res) => {
  const t = await setEnterData(req.body);
  res.send("Ok");
});
router.get("/check", async (req, res) => {
  var accept = true;
  if (req.query.user) {
    try {
      var user = req.query.user;
      while (user != "admin") {
        var data = await getPermiss(user);

        if (data[0].per == "no") {
          accept = false;
          console.log("ko co quyen");
          break;
        }
        var temp = await getParent(user);
        user = temp[0].parent_user;
        console.log("temp: " + temp[0].parent_user);

        console.log("user: " + user);
      }

      if (accept == true) {
        res.json("ok");
      } else res.json("no");
    } catch (error) {
      res.json("no");
    }
  }
  console.log("accept: " + accept);
  // var user1 = req.query.user;
  // const temp = await getParent(user1);
  //       user1 = temp[0].parent_user;
  //       console.log('temp: ' +temp[0].parent_user);
  //       res.json('no')
});

module.exports = router;
