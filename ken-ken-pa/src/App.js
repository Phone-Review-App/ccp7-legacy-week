import React, { useState } from "react";
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

class TestingApp extends React.Component {
  constructor (props) {
    super(props);
  this.state = {
    component: "",
    currentLocale:"",
    currentView: () => {},
    SelectedPrefecture: ()=>{},
    onClick:() => {}
  }

  }
  
}

const Views = [
  {scene:"", },
  {scene:"Memories", component:{Memories}},
  {scene:"PrefectureMemories", component:{PrefectureMemories}},
  {scene:"AddNewMemory", component:{AddNewMemory}},
  {scene:"Login", component:{Login}},
  {scene:"Signup", component:{Signup}}
]


export default function App() {
  const [isShown, setPopupMenu] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [currentLocale, setCurrentLocale] = useState("en");
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCurrentView = () =>{
    Views.filter((view) => {
      // return (
      //   {component currentLocale={currentLocale} onClick
      // )
    })
  }


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
  

  return (
    <div className="App" style={gradientStyle}>
      <div className="main-area">
      <h1>{UIText.appName[currentLocale]}</h1>
      {
        (currentView === "Memories") ? (
          <Memories currentLocale={currentLocale} onClick={handleViewChange}></Memories>
         ) : (
          currentView === "PrefectureMemories" ? (
            <PrefectureMemories currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange}></PrefectureMemories>
          ) : (
            currentView === "AddNewMemory" ? (
              <AddNewMemory currentLocale={currentLocale} selectedPrefecture={selectedPrefecture}></AddNewMemory>
            ) : (
              currentView === "Login" ? (
                <Login currentLocale={currentLocale} onClick={handleViewChange}/>
              ) : (
                ( currentView === "Signup" ? (
                  <Signup currentLocale={currentLocale} onClick={handleCurrentView}/>
                ) : (

                
                <div>
                  <Map 
                  handlePopupMenu={handlePopupMenu}
                  setSelectedPrefecture={setSelectedPrefecture}></Map>

                  {isShown ? (
                    <PopupMenu currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange} ></PopupMenu>
                  ) : (
                    <div></div>
                  )}
                </div>
                )
                )
                )
                )
                )
        )
                  }
      </div>

      <div className="navbar-container">
          <Navbar
          currentLocale={currentLocale}
          changeLangToJa={changeLangToJa}
          changeLangToEn={changeLangToEn}
          goToHome={goToHome}
          currentView={currentView}
          handleViewChange={handleViewChange}
          loggedIn={loggedIn}
          >
          </Navbar>
      </div>
    </div>
  );
}