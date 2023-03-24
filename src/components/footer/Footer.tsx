import React from "react";
import './Footer.scss';

export class Footer extends React.Component<{},{}> {
  render() {
    return(
      <footer className="footer">
        <div className="footer__wrap">
        Copyright © Korobkov Art-studio
        </div>
      </footer>
    )
  }
}