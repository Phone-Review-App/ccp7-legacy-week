import { React, useState } from "react";
import UIText from "../data/locales.json";
import "./Navbar.css"

export default function Navbar(props) {
    const { setCurrentUser, setLoggedIn, setCurrentView, currentLocale, changeLangToJa, changeLangToEn, goToHome, currentView, handleViewChange, loggedIn } = props;

    const [previousPage, setPreviousPage ] = useState("");
    const [goBack, setGoBackValue ] = useState("");
    const [addNewMemStatus, setNewMemStatus ] = useState(""); // When !LoggedIn, user add newMem, Login / Signup carry this status;

    const handleLogout = (event) => {
      event.preventDefault();
      setCurrentUser("");
      setLoggedIn(false);
      setCurrentView("");
    }

    const handleGoBackValue = () => {
      setPreviousPage("");
      setGoBackValue("");
    }

    const handleNewMemStatus = () => {
      setNewMemStatus("");
    }

    // Button Components
    const AddNewMemory = () =>{
      return (
        <div>
          <button className="newMem-button" value="AddNewMemory" onClick={handleViewChange} >{ UIText["add-memory"][currentLocale] }</button>
        </div>
      )
    };
    const Logout = () => {
      return (
        <button value="Logout" onClick={ handleLogout } className="logout-button">{UIText.logout[currentLocale]}</button>
      )
    };
    const Memories = () => {
      return (
        <button className="my-memories-button" value="Memories" onClick={handleViewChange}>{ UIText["my-memories"][0][currentLocale] }</button>
      )
    };
    const Login = () => {
      return (
        <button className="login-button" value="Login" onClick={handleViewChange}>{UIText.login[currentLocale]}</button>
      )
    };
    const SignUp = () => {
      return (
        <button className="signup-button" value="Signup" onClick={handleViewChange}>{UIText.signup[currentLocale]}</button>
        // <button className="login-button" value="Signup" onClick={handleViewChange}>{UIText.signup[currentLocale]}</button>
      )
      
    };
    const Home = () => {
      return(
        <button className="home-button" onClick={goToHome}>{UIText.home[currentLocale]}</button>
      )
    };
    const Locale = () => {
      return (
      <div className="language-button-container">
        <button className="language-button" onClick={changeLangToJa}>日本語</button>
        { " " }
        <button className="language-button" onClick={changeLangToEn}>English</button>
      </div>
      )
    };
    const Back = () => {
      return (
        <button className="back-button" value={previousPage} onClick={goBack}>{UIText.back[currentLocale]}</button>
      )
    };
    // Refactor logic
    let loginCredential;
    let homeContorl;
    let localePannel;
    if(loggedIn){
      loginCredential= (<div><Logout /></div>);
      if(currentView === ""){

      }
    } else {
      loginCredential= (<><div>{currentView !== "Signup" ? <Login />: null }</div><div> {currentView !== "Login" ? <SignUp /> : null }</div></>);
    }


    // NavBar Replacement
    // const NavBarPannel = () => {
      // PartA
      // const PartA = () => {
        let A1 = currentView !== "Login";
        let B1 = loggedIn === true;
        let value1;
        
        if(!A1 && B1){
          value1 =(
            <>
            <button className="button" value="AddNewMemory" onClick={handleViewChange} >{ UIText["add-memory"][currentLocale] }</button>
            <button value="Logout" onClick={ handleLogout } className="logout-button">{UIText.logout[currentLocale]}</button>
            <button className="my-memories-button" value="Memories" onClick={handleViewChange}>{ UIText["my-memories"][0][currentLocale] }</button>
          </>
                   
          )
        } else {
          value1 = (
            <>
              <button className="login-button" value="Login" onClick={handleViewChange}>{UIText.login[currentLocale]}</button>
              <button className="signup-button" value="Signup" onClick={handleViewChange}>{UIText.signup[currentLocale]}</button>
              </>
        )}
      
      // }
      

      // PartB
      // const PartB = () => {
        let value2;
        let A2 = currentView === "Memories";
        let B2 = currentView === "PrefectureMemories";
        let C2 = currentView === "AddNewMemory";
        let D2 = (!loggedIn && currentView !== "");

        if(!A2 && !B2 && !C2 && !D2){
           value2 = null;
        } else {
          value2 = (
            <>
            {currentView === "Login" ? 
            // <button className="login-button" value="Signup" onClick={handleViewChange}>{UIText.signup[currentLocale]}</button> 
            <SignUp />
            : null}
            {/* <button className="home-button" onClick={goToHome}>{UIText.home[currentLocale]}</button> */}
            <Home />
            </>
          )
        }
      // }

      // LocalePannel
      let LocalePannel = (
          
          <div className="language-button-container">
            <button className="language-button" onClick={changeLangToJa}>日本語</button>
            { " " }
            <button className="language-button" onClick={changeLangToEn}>English</button>
        </div>
        
      )
      
      return (
        <>
        <div className="navbar">
        { value1 }
        { value2 }
        { LocalePannel }
        
        </div>
        </>
      )
    // }


    // return ( <NavBarPannel /> )

    // return (
    // <div className="navbar">
    //   { 
    //     currentView !== "Login"
    //       && (loggedIn
    //         ? (
    //           <>
    //             <button className="button" value="AddNewMemory" onClick={handleViewChange} >
    //               { UIText["add-memory"][currentLocale] }
    //             </button>
    //             <button value="Logout" 
    //               onClick={ handleLogout } className="logout-button">{UIText.logout[currentLocale]}
    //             </button>
    //             <button 
    //               className="my-memories-button"
    //               value="Memories"
    //               onClick={handleViewChange}>
    //               { UIText["my-memories"][0][currentLocale] }
    //             </button>
    //           </>
    //         ) : <>
    //         <button className="login-button" value="Login" onClick={handleViewChange}>{UIText.login[currentLocale]}</button>
    //      <><button className="login-button" value="Signup" onClick={handleViewChange}>{UIText.signup[currentLocale]}</button> </>
            
    //         </>
    //   )}

    //     { currentView === "Memories" || 
    //       currentView === "PrefectureMemories" || 
    //       currentView === "AddNewMemory" ||
    //       (!loggedIn && currentView !== "")
    //       ? (
    //         <>
            
    //        {currentView === "Login" ? <button className="login-button" value="Signup" onClick={handleViewChange}>{UIText.signup[currentLocale]}</button> : <div></div>}
    //         <button 
    //         className="home-button"
    //         onClick={goToHome}>{UIText.home[currentLocale]}
    //         </button>
    //         </>
            
    //     ) : ("")}

    //     <div className="language-button-container">
    //         <button
    //         className="language-button"
    //         onClick={changeLangToJa}
    //         >日本語
    //         </button>
    //         { " " }
    //         <button
    //         className="language-button"
    //         onClick={changeLangToEn}
    //         >English</button>
    //     </div>
    // </div>
    // ) 
}
