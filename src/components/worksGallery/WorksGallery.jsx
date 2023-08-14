import 'photoswipe/dist/photoswipe.css';
import './WorksGallery.scss'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { galleryImg } from "../../pages/galleryImg";

export const WorksGallery = ({
  filterName
}) => {
  const filteringGallery = galleryImg.filter(item => item.type === filterName)

  return (
    <Gallery withCaption>
      <div className="worksGallery-grid"> 
        {filteringGallery.map(img => {
            return(
              <Item
                original={require(`../../img/${img.src}`)}
                width="1208"
                height="1611"
                caption={img.description}
                key={img.id}
              >
              {({ ref, open }) => (
                <img 
                ref={ref} 
                onClick={open} 
                src={require(`../../img/cropped/${img.src}`)}
                className="worksGallery-img"/>
              )}
            </Item>
            )})
          }
            
      </div>
    </Gallery>
  )
}