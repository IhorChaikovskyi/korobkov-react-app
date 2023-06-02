import 'photoswipe/dist/photoswipe.css';
import './MyGallery.scss'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { galleryImg } from "../../pages/galleryImg";

export const MyGallery = () => (
  <Gallery withCaption>
    <div className="grid"> 
      {galleryImg.map(img => {
          return(
            <Item
              original={require(`../../img/${img.src}`)}
              width="1208"
              height="1611"
              caption={img.description}
              key={img.id}
            >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={require(`../../img/cropped/${img.src}`)}  className="img"/>
            )}
          </Item>
          )})
        }
          
    </div>
  </Gallery>
)