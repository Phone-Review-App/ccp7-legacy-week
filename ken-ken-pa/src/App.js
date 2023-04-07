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
import CurrentViewport from "./components/CurrentViewport";

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
    console.log("🥶",currentUser, "😃", currentView);
    // if (currentView === "Memories") {
    //   setSelectedPrefecture("");
    // }
  
    if (currentUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    // console.log(currentUser)
  }, [currentUser, currentView])

  const handleViewChange = (event) => {
    // When user clicks button, currentView changes to value of button
    event.preventDefault();
    // if (currentView === "Memories") {
    //   setSelectedPrefecture("");
    // }
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
  
 // const CurrentViewPortTrigger = () => {
    let viewport = null;
    if(currentView === ""){
      viewport = <><Map handlePopupMenu={handlePopupMenu}
      setSelectedPrefecture={setSelectedPrefecture} /></>;
      if(isShown){
        viewport += <><PopupMenu currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange} /></>;
      } else {
        <><div></div></>
      }
    } else if (currentView === "Signup"){
        viewport = <><Signup currentLocale={currentLocale} setCurrentUser={setCurrentUser} setCurrentView={setCurrentView} /></>;
    } else if (currentView === "Login"){
        viewport = <><Login currentLocale={currentLocale} setCurrentUser={setCurrentUser} setCurrentView={setCurrentView} /></>;
    } else if (currentView === "AddNewMemory"){
        viewport = <><AddNewMemory currentLocale={currentLocale} selectedPrefecture={selectedPrefecture}/></>;
    } else if (currentView === "PrefectureMemories"){
        viewport = <><PrefectureMemories currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange} /></>;
    } else if (currentView === "Memories"){
      setSelectedPrefecture("");
      viewport = <><Memories currentLocale={currentLocale} onClick={handleViewChange} /></>;
    } else {
      viewport = <><div></div></>;
    } 
    console.log("🙂",viewport);
    //return ();
  //}


  return (
    <div className="App" style={gradientStyle}>
      <div className="main-area">
      <h1>{UIText.appName[currentLocale]}</h1>
      <>{viewport}</>
      
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