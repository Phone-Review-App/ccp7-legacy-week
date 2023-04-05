const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword, signUpWithEmailAndPassword } = require("../firebase/auth");
const usersModel = require("../model/users.model");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../jwt_conf"); 

router.post("/users/login", async(req, res) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);

  if (user === undefined) {
    // login unsuccess status 401 Unauthorized
    res.status(401).send(false);
  } else {
    // login success
    // uuid from firebase
    const uuid = user.user.reloadUserInfo.localId;
    // from postgresql
    const userData = await usersModel.getUserData(uuid);
    // to make a token to a client
    const payload = { 
      id: userData[0].id,
    }
    const token = await jwt.sign(payload, jwtConfig.jwt.secret, jwtConfig.jwt.options);
    
    console.log("this is token bro", token);

    const body = {
      token: token
    }
    res.status(200).send(body);
  }
});

router.post("/users/signup", async(req, res) => {
  const { email, password } = req.body;
  const newUser = signUpWithEmailAndPassword(email, password);

  console.log(newUser);

})

// export 
module.exports = router;