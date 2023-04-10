import { React } from "react";
import UIText from "../data/locales.json";
import Signup from "../components/Signup"

export default function PopupMenu(props) {
    const {onClick, currentLocale, selectedPrefecture} = props;

    return (
        <div className="popup-menu-container">
            <button className="button" onClick={onClick} value="AddNewMemory">
                {
                    currentLocale === "en"
                        ? UIText["add-memory-of"][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]
                        : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["add-memory-of"][currentLocale]
                }
            </button>
            { " " }
            <button className="button" onClick={onClick} value="PrefectureMemories">
                {
                    currentLocale === "en"
                        ? UIText["see-memories-of"][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]
                        : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["see-memories-of"][currentLocale] 
                }
            </button>
            
            { /* <Signup /> */}
        </div>
    )
}