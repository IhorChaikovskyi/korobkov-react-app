import React from "react";
import { Gallery } from "../gallery/Gallery";
import './Main.scss'


export class Main extends React.Component<{},{}> {
  render(): React.ReactNode {
    return (
      <div className="container-wrap">
        <main className="main" id="main">
          <Gallery />
        </main>
      </div>
    )
  }
}