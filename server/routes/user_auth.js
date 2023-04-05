const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword, signUpWithEmailAndPassword } = require("../firebase/auth");
const usersModel = require("../model/users.model");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../jwt_conf"); 

router.post("/login", async(req, res) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);

  if (user === undefined) {
    // login unsuccess status 401 Unauthorized
    res.status(401).send(false);
  } else {
    // login success
    // uid from firebase

    // res.send(user);

    const uid = user.user.uid;
    // from postgresql
    const userData = await usersModel.getUserData(uid);
    // to make a token to a client
    // the payload is the user's identity and permissions
    const payload = { 
      id: userData[0].id,
    }
    // secretKey is a value containing the HMAC algorithms (hashed message authentication code) 
    // or PEM encoded private key for RSA and ECDSA
    const secretKey = jwtConfig.jwt.secret;

    // options includes extra info like expiration or issuer
    const options = jwtConfig.jwt.options;

    const token = await jwt.sign(payload, secretKey, options);
    
    console.log("this is token bro", token);

    const body = {
      token: token
    }
    // token is sent back to user
    res.status(200).send(body);
  }
});

// router.post("/users/signup", async(req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body)
//   const newUser = signUpWithEmailAndPassword(email, password);

//   console.log(newUser);

// });

// export 
module.exports = router;