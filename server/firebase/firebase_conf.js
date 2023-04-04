
require("dotenv").config({
  path: "./.env",
});

module.exports = {
  development: {
    config: {
      apiKey: process.env.FB_API_KEY,
      authDomain: process.env.FB_AUTHDOMAIN,
      projectId: process.env.FB_PROJECTID,
      storageBucket: process.env.FB_STORAGEBUCK,
      messagingSenderId: process.env.FB_MESSAGINGSENDERID,
      appId: process.env.FB_APPID,
      measurementId: process.env.FB_MEASUREMENTID
    }
  },
  production: { 
    config: process.env.FIREBASE
  }
}