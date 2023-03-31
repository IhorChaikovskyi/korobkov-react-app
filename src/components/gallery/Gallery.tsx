import React from 'react';
import './Gallery.scss';
import { FullImg } from '../fullImg/FullImg';

const imgFolder = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg', 'img/10.jpg','img/11.jpg', 'img/12.jpg']

export class Gallery extends React.Component<{},{}> {
  openFullImg = (src: any) => {
    const fullBox = document.getElementById('fullImgBox')
    const fullImg = document.getElementById('fullImg')
    const bodyElement = document.getElementsByTagName('body')
    if(fullBox) {
      fullBox.style.display = "flex"
      fullBox.style.opacity = "1"
    }

    if(fullImg) {
      fullImg.style.backgroundImage = `url(${src})`
    }

    if(bodyElement) {
      bodyElement[0].style.overflow = 'hidden';
    }

  }
  
  render() {
    return(
      <>
      <FullImg />
      <div className="grid">
        {imgFolder.map(img => {
          return(
            <div className="grid__item" key={img}>
              <img 
                src={require(`../../${img}`)}
                alt=""
                className='img'
                onClick={() => this.openFullImg(require(`../../${img}`))}
              />
            </div>
          )})
        }
      </div>
      </>
    )
}
}