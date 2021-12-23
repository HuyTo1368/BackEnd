const express = require("express");
const { send } = require("express/lib/response");
const setEnterData = require("../xuli/EnterData");
const router = express.Router();

router.post("/", async (req, res) => {
  const t = await setEnterData(req.body);
  res.send("Oke");
});
module.exports = router;
