const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } = require("firebase/auth"); // look up createUserWithEmailAndPassword
const firebaseConfig = require("./firebase_conf.js");
console.log(firebaseConfig)

const enviroment = process.env.NODE_ENV === "production" ? "production" : "development";

// Initialize Firebase
firebase.initializeApp(firebaseConfig[enviroment].config);

const auth = getAuth();

module.exports = {
  // signup
  signUpWithEmailAndPassword: async function (email, password) {
    try {
      let newUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log(newUser);
      return newUser.user;
    } catch (err) {
      console.log("ERROR:🌯", err);
    }
  },
  // login
  loginWithEmailAndPassword: async function (email, password) {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      return user.user;
    } catch (err) {
      console.log("ERROR🔥", err);
      return undefined;
    }
  },

  // signout
  logoutUser: signOut()
  .then(() => {
    console.log("User is signed out")
  })
  .catch(err => {
    console.log("ERROR: ", err);
  })
}