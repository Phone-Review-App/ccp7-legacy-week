import { React } from "react";
import UIText from "../data/locales.json";
import "./Memories.css";

export default function Memories(props) {
    const { currentLocale } = props;

   return(
    <div className="memories-container">
        <h1>{UIText["my-memories"][0][currentLocale]}</h1>
        <h2>{UIText["my-memories"][1][currentLocale]}</h2>
        <p>{UIText["photo-zone"][currentLocale]}</p>
    </div>
   );
}