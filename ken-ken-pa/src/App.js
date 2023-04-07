import React, { useState, useEffect, Component } from "react";
import './App.css';
import AddNewMemory from "./components/AddNewMemory";
import Login from "./components/Login";
import Map from "./components/Map";
import Memories from "./components/Memories";
import PopupMenu from "./components/PopupMenu";
import PrefectureMemories from "./components/PrefectureMemories";
import UIText from "./data/locales.json";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
// import CurrentViewPortTrigger from "./components/CurrentViewport";

export default function App() {
  const [isShown, setPopupMenu] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [currentLocale, setCurrentLocale] = useState("en");
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // set current user to uid
  const [currentUser, setCurrentUser] = useState("");

  const handlePopupMenu = (event) => {
    event.preventDefault();
    setPopupMenu(true);
  }

  useEffect(() => {
    console.log("🥶",currentUser, "😃", currentView, "🤡", isShown);
  
    CurrentViewPortTrigger(currentView);
    if (currentUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    // console.log(currentUser)
  }, [currentUser, currentView, isShown])

  const handleViewChange = (event) => {
    // When user clicks button, currentView changes to value of button
    event.preventDefault();
    if (currentView === "Memories") {
      setSelectedPrefecture("");
    }
    setCurrentView(event.target.value);
  }

  const changeLangToJa = (event) => {
    event.preventDefault();
    setCurrentLocale("ja");
  }

  const changeLangToEn = (event) => {
    event.preventDefault();
    setCurrentLocale("en");
  }

  const goToHome = (event) => {
    event.preventDefault();
    setCurrentView("");
    setPopupMenu(false);
  }

  const gradientStyle = {
   background: 'linear-gradient(to bottom, #8AB4F8, lightblue)',
  }
  
const CurrentViewPortTrigger = () => {
  if (currentView === "Signup"){
    setCurrentView("Signup");
    return (
    <Signup currentLocale={currentLocale} setCurrentUser={setCurrentUser} setCurrentView={setCurrentView} />
    );
  } 
  if (currentView === "Login"){
    setCurrentView("Login");
    return (
      <Login currentLocale={currentLocale} setCurrentUser={setCurrentUser} setCurrentView={setCurrentView} />
      );
  } 
  if (currentView === "AddNewMemory"){
    setCurrentView("AddNewMemory");
    return ( 
      <AddNewMemory currentLocale={currentLocale} selectedPrefecture={selectedPrefecture}/>
    );
  }  
  if (currentView === "PrefectureMemories"){
    setCurrentView("PrefectureMemories")
    return ( 
      <PrefectureMemories currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange} />
    );
  } 
  if (currentView === "Memories"){
    setCurrentView("Memories");
    setSelectedPrefecture("");
    return ( 
      <Memories currentLocale={currentLocale} onClick={handleViewChange} />);
  } 
  if(currentView === ""){
    setCurrentView("");
    return (
      <div>
        <Map handlePopupMenu={handlePopupMenu} setSelectedPrefecture={setSelectedPrefecture} />
        {isShown ? <PopupMenu currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange} /> : <div></div>};
      </div>
    )
  }
    return null;
  }



  return (
    <div className="App" style={gradientStyle}>
      <div className="main-area">
      <h1>{UIText.appName[currentLocale]}</h1>
      
      <CurrentViewPortTrigger />
      </div>

      { /* Navbar */}
      <div className="navbar-container">
          <Navbar
          currentLocale={currentLocale}
          changeLangToJa={changeLangToJa}
          changeLangToEn={changeLangToEn}
          goToHome={goToHome}
          currentView={currentView}
          handleViewChange={handleViewChange}
          loggedIn={loggedIn}
          setCurrentUser={setCurrentUser}
          setLoggedIn={setLoggedIn}
          setCurrentView={setCurrentView}
          >
          </Navbar>
      </div>
    </div>
  );
}