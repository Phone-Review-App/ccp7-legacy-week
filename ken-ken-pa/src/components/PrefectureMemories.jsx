import { React } from "react";
import UIText from "../data/locales.json";

export default function PrefectureMemories(props) {
    const { onClick, currentLocale, selectedPrefecture } = props;

   return(
    <div className="memories-container">
        <h1>{
            currentLocale === "en"
            ? UIText["memories-of"][0][currentLocale]+ UIText.prefectures[selectedPrefecture][currentLocale]
            : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["memories-of"][0][currentLocale]
        }</h1>
        
        <h2>{UIText["memories-of"][1][currentLocale]}</h2>
        <p>{UIText["photo-zone"][currentLocale]}</p>
        
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