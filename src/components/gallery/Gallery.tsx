import React from 'react';
import './Gallery.scss';

const imgFolder = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']

export class Gallery extends React.Component<{},{}> {
  render() {
    return(
      <div className="grid">
        {imgFolder.map(img => {
          return(
            <div className="grid__item" key={img}>
              <img src={require(`../../${img}`)} alt="" className='img'/>
            </div>
          )})
        }
      </div>
    )
}
}