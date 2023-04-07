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
        <div className="header__img">
        </div>
        <div className={`menu-icon ${isOpen ? 'active' : ''}`}>
          <div 
            id="iconMenu"
            className="menu-icon__cheeckbox"
            onClick={() => setIsOpen(!isOpen)}
          >

          </div>
          {/* <input 
            className="menu-icon__cheeckbox"
            id="iconMenu"
            type="checkbox" 

            // onChange={(e) => {
            //   const nav = document.getElementById('navigation');
            //   const main = document.getElementById('main');
            
            //   if(e.target.checked === true){
            //     if(nav) {
            //       nav.style.display = 'block'

            //     }
            //     if(main) {
            //       main.style.display = 'none'
            //     }
            //   }
            //   if(e.target.checked === false){
            //     if(nav) {
            //       nav.style.display = 'none'
            //     }
            //     if(main) {
            //       main.style.display = 'block'
            //     }
          
            //   }
              
            // }}
          /> */}
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}
