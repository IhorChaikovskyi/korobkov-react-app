import React from "react";
import { Gallery } from "../../components/gallery/Gallery";
import './Main.scss'
import { Route, Routes } from "react-router-dom";
import { Contact } from "../contact/Contact";


export class Main extends React.Component<{},{}> {
  render(): React.ReactNode {
    return (
      <div className="container-wrap">
        <main className="main">
          <Routes>
            <Route 
              path='/'
              element={<Gallery />}
            />

            <Route 
              path='/contact' 
              element={<Contact />} 
            />
          </Routes>
        </main>
      </div>
    )
  }
}