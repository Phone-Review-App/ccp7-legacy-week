import React, { Component } from "react";

import AddNewMemory from "./AddNewMemory";
import Login from "./Login";
import Map from "./Map";
import Memories from "./Memories";
import PopupMenu from "./PopupMenu";
import PrefectureMemories from "./PrefectureMemories";
import UIText from "../data/locales.json";
import Navbar from "./Navbar";
import Signup from "./Signup";

// If - else statement 
class CurrentViewport extends Component {
    constructor(props) {
      super(props);
     
      this.state = {
        isAddNewMemory:false,
        isLogin:false,
        isMemories:false,
        isPopupMenu:false,
        isPrefectureMemories:false,
        isNavbar:false,
        isSignup:false,
        isNull:true,
      };
      this.func ={
        onClick: ()=> {},
        selectPrefecture:()=>{},
      }
      this.locale = {
        currentLocale:"en"
      }
      this.style = {
        gradientStyle: {
            background: 'linear-gradient(to bottom, #8AB4F8, lightblue)',
        }
      }
    }
      render(){
        const { isAddNewMemory, isLogin, isMemories, isPopupMenu, isPrefectureMemories, isNavbar, isSignup, isNull,} = this.state

        const { gradientStyle } = this.style;

        const { currentLocale } = this.locale;



        let viewport,component;
        let template = <div className style={gradientStyle}></div>
        if(isSignup){
            viewport = <Signup ></Signup>;
        } 
        if(isLogin){
          viewport = <Login ></Login>;
        }
        return (
            <>
            <div className style={gradientStyle}></div>
            <div className="main-area">
                <h1></h1>
            </div>
            </>
            
        )
      }
        
        
      }   

    