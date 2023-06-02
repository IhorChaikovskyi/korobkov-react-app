import './Header.scss';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}


export const Header =  ({ setIsOpen, isOpen }: Props) =>  {
  const scrollWidth = window.innerWidth - (document.querySelector('.app')?.clientWidth || 0);

  return (
    <header className="header" id="header" 
    style={{paddingRight: isOpen ? scrollWidth : '0'}}
    >
      <div className="header__wrap">
        <a href="/">
          <div className="header__img">
          
          </div>
        </a>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`}>
          <div 
            id="iconMenu"
            className="menu-icon__cheeckbox"
            onClick={() => setIsOpen(!isOpen)}
          >

          </div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}
