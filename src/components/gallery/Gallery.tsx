import React from 'react';
import './Gallery.scss';
import { MyGallery } from '../myGallery/MyGallery';


// const imgFolder = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg', 'img/10.jpg','img/11.jpg', 'img/12.jpg']

export class Gallery extends React.Component<{},{}> {  
  render() {
    return(
      <MyGallery />
    )
}
}