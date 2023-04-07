import React, { useState, useEffect } from "react";
import UIText from "../data/locales.json";
import axios from "axios";
import "./PrefectureMemories.css"

export default function PrefectureMemories(props) {
    const { onClick, currentLocale, selectedPrefecture } = props;
    const [userMemories, setUserMemories] = useState([]);

    useEffect(() => {
      // make axios request to express `/api/memory/:prefectureId` to get the memories for that location
      // you will need to send in the selectedPrefecture as a query param
      handleUserMemories();
    }, []);

    async function handleUserMemories() {
      const fetchedMemory = await axios.get(`/api/memory/${selectedPrefecture}`);
      setUserMemories(fetchedMemory.data);
      console.log("🦾", fetchedMemory.data);
    }


   return(
    <div className="memories-container">
      <h1>{
        currentLocale === "en"
        ? UIText["memories-of"][0][currentLocale]+ UIText.prefectures[selectedPrefecture][currentLocale]
        : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["memories-of"][0][currentLocale]
      }</h1>
        
      <h2>{UIText["memories-of"][1][currentLocale]}</h2>
      <div className="photos-grid">
        {
          userMemories.map((photo) => {
            return (
              <div className="photo">
              <p>Description</p>
              </div>
            )
          })
        }
        <div className="photo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg"></img>
          <p>Description</p>
        </div>
        <div className="photo">
          <img src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000"></img>
          <p>Description</p>
        </div>
        <div className="photo">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/609ff699-cfec-4182-b2e7-1792c612605f/d7h23wf-699a6f3e-fd7b-4614-ade9-02ac8ccf75eb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwOWZmNjk5LWNmZWMtNDE4Mi1iMmU3LTE3OTJjNjEyNjA1ZlwvZDdoMjN3Zi02OTlhNmYzZS1mZDdiLTQ2MTQtYWRlOS0wMmFjOGNjZjc1ZWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qSrUlNjSLdX2HcTPAF535exg_q2in7aN4KXuev2ATfY"></img>
          <p>Description</p>
        </div>
        <div className="photo">
          <img src="https://www.news.ucsb.edu/sites/default/files/images/2014/angry%20face.jpg"></img>
          <p>Description</p>
        </div>
        <div className="photo">
          <img src="https://www.thespruceeats.com/thmb/7wC9mUcN_4s2-GS0Ya3e4wxcgwU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lollipops-521375-hero-01-867964a42c3e4f32ad48384322b69ebe.jpg"></img>
          <p>Description</p>
        </div>
        <div className="photo">
          <img src="https://i0.wp.com/richardsinverts.com/wp-content/uploads/2022/02/IMG_7101-Copy-1-scaled.jpg?resize=1229%2C1536&ssl=1"></img>
          <p>Description</p>
        </div>
      </div>
      
      <div className="side-menu">
        <button className="button" value="AddNewMemory" onClick={onClick} >
          {
            currentLocale === "en"
                ? UIText["add-memory-of"][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]
                : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["add-memory-of"][currentLocale]
          }
          </button>
      </div>
    </div>
   );
}