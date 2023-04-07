const express = require("express");
const router = express.Router();
const { loginWithEmailAndPassword, signUpWithEmailAndPassword, logoutUser } = require("../firebase/auth");
const usersModel = require("../model/users.model");
const knex = require("../../db/knex");


router.post("/login", async(req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginWithEmailAndPassword(email, password);

    const uid = user.user.uid;
    // from postgresql
    // const userData = await usersModel.getUserData(uid);

    res.status(200).send(uid)
  } catch (error) {
    res.status(401).send(false);
    
  }

});

router.post("/signup", async(req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await signUpWithEmailAndPassword(email, password);
 
    const uid = newUser.uid;

    await knex("users").insert({'email': email, 'UID': uid});

  
    res.status(200).send(uid);
    
  } catch (error) {
    res.status(400).send(false)
  }
});

router.post('signout', async(req, res) => {
  await logoutUser();

  res.send('');
})

module.exports = router;