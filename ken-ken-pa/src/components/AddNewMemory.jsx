import React, { useState, useRef, useEffect } from "react";
import UIText from "../data/locales.json"
import SubmitBtn from "./SubmitBtn";
import "./AddNewMemory.css";
import axios from "axios";

export default function AddNewMemory(props) {
    const { currentLocale, selectedPrefecture, setSelectedPrefecture, currentUser } = props;
    //const [photoIsSelected, setPhotoIsSelected] = useState(false);
    //const [currentImage, setCurrentImage] = useState(null);
    const [currentText, setCurrentText] = useState("");
    
    // Test
    const [currentPrefecture, setCurrentPrefecture] = useState('01');

    const inputRef = useRef();

    useEffect(() => {
      if (selectedPrefecture) { // if selectedPrefecture = ''
        setSelectedPrefecture('01');
      }
    },[])
    

    // const updateImageDisplay = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         setPhotoIsSelected(true);
    //         setCurrentImage(URL.createObjectURL(event.target.files[0]));
    //     } else {
    //         setPhotoIsSelected(false);
    //         inputRef.current.value = null;
    //     }
    // }

    /*
{
    uid: currentUser,
    prefecture_id: (prefecture of the memory integer),
    photo_key: "", // This would be the link to the image, but for now just use an empty array
    description: (the users entered memory test)
}
*/
    const handleSubmit = async (event) => {
      event.preventDefault();

      //setCurrentText(event.target.value)
      console.log(currentText);
      console.log('currentPrefecture', currentPrefecture);

      const submissionBody = {
          // collect textarea value;
          // create submission object for express server;
          // send axios request to express server
          // send user to my memories
          //return; // Send to server here
          uid: currentUser,
          prefecture_id: Number(currentPrefecture),
          photo_key: "",
          description: currentText,
      }

      console.log(submissionBody);

      const response = await axios.post('/api/memory', submissionBody)
      console.log('😍',response.data)
        
    }

    // const handleCurrentText = (event) => {
    //     setCurrentText(event.target.value);
    //     console.log('🍟', currentText);
    //     console.log('🍔', selectedPrefecture);
    // }

    // const handlePrefectureDropdown = (event) => {
    //   console.log('🍔',event.target.value)
    //   setCurrentPrefecture(event.target.value);
    //   console.log('😀',currentPrefecture);
    // }

    return (
        <form className="memory-form" method="post" onSubmit={handleSubmit}>
            <h1>{UIText["add-memory"][currentLocale]}</h1>
            <div>
                <label>
                    {UIText["select-prefecture"][currentLocale]}
                    <select 
                      name="prefecture" 
                      id="select-prefecture" 
                      // defaultValue={selectedPrefecture} 
                      onChange={(event) => setCurrentPrefecture(event.target.value)}
                      required>
                        {
                            Object.keys(UIText.prefectures).sort((a, b) => Number(a) - Number(b)).map((id) => {
                                return <option  value={id} key={id}>{UIText.prefectures[id][currentLocale]}</option>;
                            })
                        } 
                    </select>
                </label>
            </div>
            <div className="memory-content-container">
                {/* <div className="photo-selector">
                    <label>
                        {UIText["select-photo"][currentLocale]}
                        <input name="photo" id="photo-fileselect" ref={inputRef} type="file" style={{display: "none"}} onChange={updateImageDisplay} required/>
                    </label>
                    { photoIsSelected
                        ? (
                            <>
                                <img src={currentImage} alt="User selection."/>
                                <button type="button" onClick={updateImageDisplay}>
                                    × {UIText["remove-photo"][currentLocale]}
                                </button>
                            </>
                        )
                        : (
                            <>
                                <button type="button" onClick={() => { inputRef.current.click() }} >
                                    {UIText["choose-photo"][currentLocale]}
                                </button>
                            </>
                        )
                    }
                </div> */}
                <div className="text-editor">
                    <label htmlFor="memory-textarea">
                        {UIText["explain-memory"][currentLocale]}
                    
                    <textarea onChange={(event) => setCurrentText(event.target.value)} name="memoryText" id="memory-textarea" type="text" rows="5"/>
                    </label>
                </div>
            </div>
            <div>
                <SubmitBtn type="memory" currentLocale={currentLocale}/>
            </div>
        </form>
    );
};