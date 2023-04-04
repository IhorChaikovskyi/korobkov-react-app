import React from "react";
import 'photoswipe/dist/photoswipe.css';
import './MyGallery.scss'

import { Gallery, Item } from 'react-photoswipe-gallery'

const imgFolder = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg', 'img/10.jpg','img/11.jpg', 'img/12.jpg']


export const MyGallery = () => (
  <Gallery withCaption>
    <div className="grid"> 
      {imgFolder.map(img => {
          return(
            <Item
              original={require(`../../${img}`)}
              width="1208"
              height="1611"
              caption="“Black flowers”, 2023, oil on canvas, 120x95 cm "
              key={img}
            >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={require(`../../${img}`)}  className="img"/>
            )}
          </Item>
          )})
        }
    </div>
  </Gallery>
)