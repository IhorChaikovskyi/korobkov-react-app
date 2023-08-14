import {FC} from 'react';
import './FilterListItem.scss'


type Props = {
  itemListFilter: {
    name: string,
    type: string,
    id: number
  },
}

export const FilterListItem: FC<Props> = ({
  itemListFilter
}) => {
  return (
      <h4>{itemListFilter.name}</h4>
  )
}