import React from "react";
import "./Navigation.scss"

export class Navigation extends React.Component {
  render() {
    return (
      <div className="wrap-container">
        <nav className="navigation" id="navigation">
          <ul className="list">
            <li className="list__item">
              <a href="/" className="list__item-link">Work</a>
            </li>
            <li className="list__item">
              <a href="/" className="list__item-link">SV</a>
            </li>
            <li className="list__item">
              <a href="/" className="list__item-link">News</a>
            </li>
            <li className="list__item">
              <a href="/" className="list__item-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}