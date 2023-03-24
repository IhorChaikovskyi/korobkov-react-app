import React from "react";
import './Header.scss';

export class Header extends React.Component< {},{} >  {
  render(): React.ReactNode {
    return (
      <header className="header" id="header">
        <div className="header__wrap">
          <div className="header__img">
          </div>
          <div className="header__menu-burger"
            onClick={() => {
              const nav = document.getElementById('navigation');
              const main = document.getElementById('main')
              if(nav) {
                nav.hidden = false
              }
              if(main) {
                main.hidden = true
              }
            }
              
            }
          >
            {/* <a href="/" className="header__menu-burger-link"></a> */}
          </div>
        </div>
      </header>
    )
  }
}
