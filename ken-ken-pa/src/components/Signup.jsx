import React, {useState} from "react";
import SubmitBtn from "./SubmitBtn";
import UIText from "../data/locales.json";
import axios from "axios";

import "./Signup.css"

const Signup = ( props ) => {
    const {currentLocale} = props;
  // login Success or error
  const [isloginUnsuccess, setLoginUnsuccess] = useState();

  const [isSignUp, setSignUp] = useState();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // inputs user email and password
    const userLoginInfo = { // 
      email: event.target[0].value,
      password: event.target[1].value
     }

     // (async) to send email and password to express endpoint /login
    const loginResult  = await tryLogin(userLoginInfo);
    // when user login is unsuccessful
    if (loginResult === false || loginResult === undefined) {
      setLoginUnsuccess(true);
    // user login is successful
    } else { 

      setLoginUnsuccess(false);
    }
  };

  const tryLogin = async (userLoginInfo) => {
    try { 
      const isEnableToLogin = await axios.post("/users/login", userLoginInfo);
      return isEnableToLogin.data;
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div className='container'>
        <div className='login-from'>
          <div className='login-form-top'>
               <h1>{UIText.signup[currentLocale]}</h1>
          </div>
        <div className='login-from-inputs'>
         <form onSubmit={handleSubmit}>
              <p>{UIText.email[currentLocale]}</p>
              <div className="inputs">
                <label>
                 <input type="email" name="email" defaultValue="" placeholder={UIText.email[currentLocale]} required/>
              </label>
              </div>  
              <div className="inputs">
                <p>{UIText.password[currentLocale]}</p>
                <label>
                  <input type="password" name="lastName" defaultValue="" placeholder={UIText.password[currentLocale]} required/>
                </label>
              </div>
    
              { isloginUnsuccess
                && (<p id="err">{UIText["login-fail"][currentLocale]}</p>)
              }
             <SubmitBtn type="signup" currentLocale={currentLocale}/>
        </form>
        </div>
       </div>
       </div>
      );



};

Signup.defaultProps = {
    currentLocale:""
}

export default Signup;