const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } = require("firebase/auth"); // look up createUserWithEmailAndPassword
const firebaseConfig = require("./firebase_conf.js");
// console.log(firebaseConfig)

const enviroment = process.env.NODE_ENV === "production" ? "production" : "development";

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig[enviroment].config);

const auth = getAuth();

module.exports = {
  // signup
  signUpWithEmailAndPassword: async function (email, password) {
    try {
      let newUser = await createUserWithEmailAndPassword(auth, email, password);
      return newUser.user;
    } catch (err) {
      console.log("ERROR:🌯 ", err);
    }
  },

  // login
  loginWithEmailAndPassword: async function (email, password) {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (err) {
      console.log("ERROR:🔥 ", err);
      return undefined;
    }
  },

  // signout
  logoutUser: async function () {
    try {
      await signOut(auth).then(() => {
        console.log("User is signed out")
      })
     
    } catch (error) {
      console.log("ERROR:🤒 ", error);
    }
  }
  
}