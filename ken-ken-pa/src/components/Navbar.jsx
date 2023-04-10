import { React } from "react";
import UIText from "../data/locales.json";
import "./Navbar.css"

export default function Navbar(props) {
    const { setCurrentUser, setLoggedIn, setCurrentView, currentLocale, changeLangToJa, changeLangToEn, goToHome, currentView, handleViewChange, loggedIn } = props;

    // const [previousPage, setPreviousPage ] = useState("");
    // const [goBack, setGoBackValue ] = useState("");
    // const [addNewMemStatus, setNewMemStatus ] = useState(""); // When !LoggedIn, user add newMem, Login / Signup carry this status;

    

    const handleLogout = (event) => {
      event.preventDefault();
      setCurrentUser("");
      setLoggedIn(false);
      setCurrentView("");
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
        
      )
      
    };
    const Home = () => {
      return(
        <button className="home-button" onClick={goToHome}>{UIText.home[currentLocale]}</button>
      )
    };
    
    // const Back = () => {
    //   return (
    //     <button className="back-button" value={previousPage} onClick={goBack}>{UIText.back[currentLocale]}</button>
    //   )
    // };

   
    let loginCredential;
    let showHomeButton;
    let showAddNewMemButton;
    let showMyMemoryButton;
    
    // let backButton = (<><Back /></>);
    
    if(loggedIn){
      loginCredential= (<div><Logout /></div>);
      showMyMemoryButton = (<div><Memories/></div>);
    } else {
      loginCredential= (<><div>{currentView !== "Login" ? <Login />: null }</div><div> {currentView !== "Signup" ? <SignUp /> : null }</div></>);
      showMyMemoryButton = null;
    }
    
    if(currentView !== ""){
      // homeControl['home'] = true;
      showHomeButton = (<><Home /></>)
      showAddNewMemButton= null;
    } else {
      // homeControl['home'] = false;
      showHomeButton = null;
      showAddNewMemButton= (<div><AddNewMemory/></div>);
    }
    
    
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
          { loginCredential }
          <hr/>
        { showHomeButton }
        {showAddNewMemButton}
        {showMyMemoryButton}
        {/* {showAllMemoriesButton} */}
        {/* {showAllMemoriesButton} */}
       {/* {backButton} */}
    < br/>
    < hr/>
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
