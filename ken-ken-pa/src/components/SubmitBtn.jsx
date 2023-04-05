import React from 'react';
import UIText from "../data/locales.json";
import "./SubmitBtn.css"

// submit btn component
export default function SubmitBtn(props) {
  const { type, currentLocale } = props;
  var labelText;
  switch (type) {
    case "signup":
      labelText = UIText['signup'][currentLocale];
      break;
    case "login":
      labelText = UIText['login-submit'][currentLocale];
      break;
    case "memory":
      labelText = UIText['submit-memory'][currentLocale];
      break;
    
    default:
      labelText = UIText['signup-submit'][currentLocale];
      break;
  }

  return (<button className='btn' type='submit' value="Submit">{labelText}</button>);
}
