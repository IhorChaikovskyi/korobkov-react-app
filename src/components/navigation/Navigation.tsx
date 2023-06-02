import "./Navigation.scss"
import { Link } from 'react-router-dom';

const navigationContent = [
  {name: 'Work',to: '/'},
  {name: 'CV',to: '/cv'},
  {name: 'News',to: '/'},
  {name: 'Contact-us',to: '/contact'},
]


export const Navigation = (
  { isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void
}) =>{
  return (
    <nav 
      className={`navigation ${isOpen ? 'active' : ''}`}
      id="navigation"
    >
      <ul className="list">
        {navigationContent.map(nav => (
          <li 
            className="list__item"
            key={nav.name}
          >
            <Link 
              to={`${nav.to}`}
              className="list__item-link"
              onClick={() => setIsOpen(false)}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}