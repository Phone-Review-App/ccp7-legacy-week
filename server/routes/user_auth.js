const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword } = require("../firebase/auth");
const usersModel = require("../model/users.model");


router.post("/users/login", async(req, res) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);

  if (user === undefined) {
    // login unsuccess status 401 Unauthorized
    res.status(401).send(false);
  } else {
    // login success
    // uuid from firebase
    const uid = user.user.uid;
    // from postgresql
    const userData = await usersModel.getUserData(uid);
  }
});

// export 
module.exports = router;