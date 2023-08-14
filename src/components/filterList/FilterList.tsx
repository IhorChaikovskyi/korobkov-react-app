import {FC} from 'react';
import './FilterList.scss'
import classNames from 'classnames';


type Props = {
  filterName: string,
  setFilterName: (filterName: string) => void,
}

const itemListFilter = [
  {
    id: 0,
    name: 'Картини',
    type: 'painting'
  },
  {
    id: 1,
    name: 'Стріт-арт',
    type: 'street-art'
  },
  {
    id: 2,
    name: 'Шовкографія',
    type: 'silk-screen'
  },
  {
    id: 3,
    name: 'Скульптури',
    type: 'sculpture'
  },

]

export const FilterList: FC<Props> = ({
  filterName,
  setFilterName,
}) => {

  
  
  return (
   <>
      <ul 
        className='filter-list'
        id='filter-list'
      >
        {itemListFilter.map(item => {
          return (
            <li
              key={item.id}
              className={classNames('filter-list__item', {
                'filter-list__item--active': item.type === filterName
              })}
              onClick={() => {
                setFilterName(item.type)
              }}
            >
              <h4
                className={classNames('filter-list__item-title', {
                  'filter-list__item-title--active': item.type === filterName
                })}
              >
                {item.name}
              </h4>
            </li>
          )
        })}
      </ul>
   </>
  )
}