import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { Navigation } from './components/navigation/Navigation';
import { Contact } from './pages/Contact'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app"
      style={{overflow: isOpen ? 'hidden' : 'scroll'}}
    >
        <BrowserRouter>
        <Header 
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <Navigation 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;
