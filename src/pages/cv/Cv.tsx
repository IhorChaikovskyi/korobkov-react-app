import { InEnglish } from "./InEnglish";
import { InUkrainian } from "./InUkrainian";
import "./cv.scss";
import { useState } from 'react';
export const Cv = () => {
  const [language, setLanguage] = useState('eng')
  return (
    <div className="cv">
      <div className="cv__language">
        <span 
          className={`cv__language-item ${(language === 'eng') && 'active'}`}
          onClick={() => {
            setLanguage('eng')
          }}
        >
          eng 
        </span>
        /
        <span 
          className={`cv__language-item ${(language === 'ukr') && 'active'}`}
          onClick={() => {
            setLanguage('ukr')
          }}
        > 
          укр
        </span>
        {language === 'eng' ? (<InEnglish/>) : (<InUkrainian />)}
      </div>
    </div>
  )
}