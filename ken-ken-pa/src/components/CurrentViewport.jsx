import React, { useState, useEffect } from "react";

import AddNewMemory from "./AddNewMemory";
import Login from "./Login";
import Map from "./Map";
import Memories from "./Memories";
import PopupMenu from "./PopupMenu";
import PrefectureMemories from "./PrefectureMemories";
// import UIText from "../data/locales.json";
// import Navbar from "./Navbar";
import Signup from "./Signup";

import './CurrentViewport.css'

// If - else statement 

export const CurrentViewPortTrigger = ({ currentLocale, currentView, HandleViewChange, loggedIn,setCurrentUser, setLoggedIn, setCurrentView, currentUser }) => {
  // const [isShown, setPopupMenu] = useState(false);
  // const [currentView, setCurrentView] = useState("");
  // const [currentLocale, setCurrentLocale] = useState("en");
  // const [selectedPrefecture, setSelectedPrefecture] = useState("");

  // const [loggedIn, setLoggedIn] = useState(false);
  // set current user to uid
  // const [currentUser, setCurrentUser] = useState("");
  
  useEffect(() => {
    console.log("🥶",currentUser, "😃", currentView, "🤡", isShown);
  
    CurrentViewPortTrigger(currentView);
    if (currentUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [currentUser, currentView, isShown])

  const handlePopupMenu = (event) => {
    event.preventDefault();
    setPopupMenu(true);
  }
  const handleViewChange = (event) => {
    // When user clicks button, currentView changes to value of button
    event.preventDefault();
    if (currentView === "Memories") {
      setSelectedPrefecture("");
    }
    setCurrentView(event.target.value);
  }

 

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








 module.export=CurrentViewPortTrigger;