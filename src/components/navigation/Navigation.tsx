
import "./Navigation.scss"
import { Link } from 'react-router-dom';


export const Navigation = (
  { isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void
}) =>{
  return (
    <div className="wrap-container">
      <nav 
        className={`navigation ${isOpen ? 'active' : ''}`}
        id="navigation">
        <ul className="list">
          <li className="list__item">
            <Link to="/" className="list__item-link">Work</Link>
          </li>
          <li className="list__item">
            <a href="/" className="list__item-link">SV</a>
          </li>
          <li className="list__item">
            <a href="/" className="list__item-link">News</a>
          </li>
          <li className="list__item">
            <Link 
            to="/contact"
            className="list__item-link"
            onClick={() => setIsOpen(false)}
            >
              Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}