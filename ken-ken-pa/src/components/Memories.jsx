import React, { useState, useEffect } from "react";
import UIText from "../data/locales.json";
import axios from "axios";
import "./Memories.css";

export default function Memories(props) {
  const { currentLocale, currentUser } = props;
  const [userMemories, setUserMemories] = useState([]);

  useEffect(() => {
    handleUserMemories();
  }, []);

  async function handleUserMemories() {
    try {
      const fetchedMemory = await axios.get(`/api/mymemories/${currentUser}`);
      setUserMemories(fetchedMemory.data);

    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
  

   return(
    <div className="memories-container">
        <h1>{UIText["my-memories"][0][currentLocale]}</h1>
        <h2>{UIText["my-memories"][1][currentLocale]}</h2>
        <p>{UIText["photo-zone"][currentLocale]}</p>
        <div className="photos-grid">
        {
          userMemories.map((photo, index) => {
            return (
              <div className="photo" key={index}>
              <img></img>
              <p>{photo.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
   );
}