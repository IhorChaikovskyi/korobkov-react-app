import React from "react";
import './FullImg.scss'

export const FullImg = () => {
  return (
    <>
      <div 
        className="full-img"
        id="fullImgBox"
        onClick={() =>{
          const fullBox = document.getElementById('fullImgBox')
          const bodyElement = document.getElementsByTagName('body')

          if(fullBox){
            fullBox.style.display = "none"
          }
          if(bodyElement) {
            bodyElement[0].style.overflow = 'scroll';
          }
        }}
      >
        <div className="full-img__item" id="fullImg"></div>
        <p className="full-img__description">“Black flowers”, 2023, oil on canvas, 120x95 cm </p>
      </div>
    </>
  )
}