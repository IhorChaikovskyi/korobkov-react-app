import { useState } from "react"
import { FilterList } from "../../components/filterList/FilterList"
import './WorksList.scss'
import { WorksGallery } from "../../components/worksGallery/WorksGallery"


export const WorksList = () => {
  const [filterName, setFilterName] = useState('painting')

  return (
    <>
      <div className="works-list">
        <div className="works-list__wrap">
          <div className="works-list__filter">
            <FilterList
              filterName={filterName}
              setFilterName={setFilterName}
            />
          </div>
          <div className="works-list__main">
            <WorksGallery
              filterName={filterName}
            />
          </div>
        </div>
      </div>
    </>
  )
}