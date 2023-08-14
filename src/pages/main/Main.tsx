import React from "react";
import { Gallery } from "../../components/gallery/Gallery";
import './Main.scss'
import { Route, Routes } from "react-router-dom";
import { Contact } from "../contact/Contact";
import { Cv } from "../cv/Cv";
import { WorksList } from "../wokrsList/WorksList";


export const Main = () => {
  return (
    <div className="container-wrap">
      <main className="main">
        <Routes>
          <Route 
            path='/'
            element={<Gallery />}
          />
          <Route 
            path='works-list'
            element={<WorksList/>}
          />

          <Route 
            path='/contact' 
            element={<Contact />} 
          />
          <Route 
            path='/cv' 
            element={<Cv />} 
          />
        </Routes>
      </main>
    </div>
  )
}