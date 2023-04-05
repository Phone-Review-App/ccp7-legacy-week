const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 4000;
const { signUpWithEmailAndPassword } = require("./firebase/auth")

// routes
// const loginRoutes = require("./routes/user_auth");

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../ken-ken-pa/build')));
  app.use(express.json());

  // endpoint /users/login
  // app.use(loginRoutes);

  app.get('/hello', (req, res) => {
    res.send('world');
  });

  app.post("/users/signup", async(req, res) => {
    const { email, password } = req.body;
    // console.log(req.body)
    const newUser = await signUpWithEmailAndPassword(email, password);
    console.log(newUser);
    res.status(200).send(newUser)
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
   
  return app;
};


module.exports = setupServer;