const { checkLogin } = require("../xuli/login");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  const danhsach = await checkLogin(req.body);
  if (danhsach.length) {
    jwt.sign({ user: danhsach[0] }, "secretkey", (err, token) => {
      res.json({
        token,
        user,
      });
    });
  } else {
    res.sendStatus(403);
  }

  res.json(danhsach);
});

module.exports = router;
