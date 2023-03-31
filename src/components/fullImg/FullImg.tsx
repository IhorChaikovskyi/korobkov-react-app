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
          if(fullBox){
            fullBox.style.display = "none"
          }
        }}
      >
        {/* <img src={require(`../../img/1.jpg`)} alt="" className="full-img__item" id="fullImg"/> */}
        <div className="full-img__item" id="fullImg"></div>
        <p className="full-img__description">“Black flowers”, 2023, oil on canvas, 120x95 cm </p>
      </div>
    </>
  )
}