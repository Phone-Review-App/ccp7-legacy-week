import React, {useState, useEffect} from "react";
import SubmitBtn from "./SubmitBtn";
import UIText from "../data/locales.json";
import axios from "axios";
import "./Login.css";
// import Signup from './Signup';
// import Navbar from './Navbar';

// import { Routes, Route, Link } from 'react-router-dom';


export default function Login(props) {
  const { currentLocale, setCurrentUser, setCurrentView } = props;
  const [changeState, triggerChangeState] = useState(false);

  // Experiemental
  // if user try to add memories from prefecture
  // const [ isFromAddMemPage, toggleIsFromAddMemPage] = useState(false)
  
  useEffect(()=>{
    console.log("🦊",changeState)
  }, [changeState])

  const handleSingup = () =>{
    //event.preventDefault();
    setCurrentView("Signup");
    triggerChangeState(!changeState);
  }

  // Check if user is from AddNewMemory Page, should direct user login if !loggedIn before add memory
  //  const userFromAddMemPage =() => {
  //   if(currentView !== "AddNewMemory"){
  //     toggleIsFromAddMemPage(true);
  //   }
  // }
  

  // login Success or error
  const [isloginUnsuccess, setLoginUnsuccess] = useState(false);
  
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // inputs user email and password
    const userLoginInfo = {
      email: event.target[0].value,
      password: event.target[1].value
     }

     // (async) to send email and password to express endpoint /login
    const loginResult  = await tryLogin(userLoginInfo);
    setCurrentUser(loginResult);
    // when user login is unsuccessful
    if (loginResult === false || loginResult === undefined) {
      setLoginUnsuccess(true);
      // console.error("😈", "loginUnsuccess(true)");
      // React popup error required other packages to run, alert('') does not work
      // alert('Login unsuccessful');
    // user login is successful
    } else { 
      setLoginUnsuccess(false);
      // console.error("😠", "loginUnsuccess(false)")
      setCurrentView('');
    }
    // if(isFromAddMemPage){
    //   setCurrentView('AddNewMemory');
    //   // Fixme: prefecture code should passed to Add New Memory Page
    // } else {
      // setCurrentView('');
    // }
    
  };

  const tryLogin = async (userLoginInfo) => {
    try { 
      const isEnableToLogin = await axios.post("/users/login", userLoginInfo);
      console.log("🧬", isEnableToLogin.data);
      return isEnableToLogin.data; // = UID
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className='container'>
    <div className='login-from'>
      <div className='login-form-top'>
           <h1>{UIText.login[currentLocale]}</h1>
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
          <p id="sign-up">{UIText["signup-prompt"][currentLocale]}</p>
          
          {/* sign up button */}
          <button 
          value="Signup" 
          onClick={handleSingup}
          >
            {UIText.signup[currentLocale]
            }</button><br />
          

          { isloginUnsuccess ? null :
            <p id="err">{UIText["login-fail"][currentLocale]}</p> 
          }
         <SubmitBtn type="login" currentLocale={currentLocale}/>
    </form>
    </div>
   </div>
   </div>
  );
}

