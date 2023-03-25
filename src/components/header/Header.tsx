import React from "react";
import './Header.scss';

export class Header extends React.Component< {},{} >  {
  render(): React.ReactNode {
    return (
      <header className="header" id="header">
        <div className="header__wrap">
          <div className="header__img">
          </div>
          <div className="menu-icon"   >
            <input 
              className="menu-icon__cheeckbox"
              id="iconMenu"
              type="checkbox" 

              onChange={(e) => {
                const nav = document.getElementById('navigation');
                const main = document.getElementById('main');
              
                if(e.target.checked === true){
                  if(nav) {
                    nav.style.display = 'block'
                  }
                  if(main) {
                    main.style.display = 'none'
                  }
                }
                if(e.target.checked === false){
                  if(nav) {
                    nav.style.display = 'none'
                  }
                  if(main) {
                    main.style.display = 'block'
                  }
            
                }
                
              }}
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
