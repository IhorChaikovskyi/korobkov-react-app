import React from 'react';
import './Gallery.scss';
import { MyGallery } from '../myGallery/MyGallery';


export class Gallery extends React.Component<{},{}> {  
  render() {
    return(
      <MyGallery />
    )
}
}