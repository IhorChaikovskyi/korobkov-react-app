import React, { useRef, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './pages/main/Main';
import { Navigation } from './components/navigation/Navigation';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const app = useRef<HTMLDivElement>(null);


  const handleScrollToTop = () => (
    app.current?.scrollTo({ top: 0, behavior: 'smooth' })
  )
  const handleScroll = (event: any) => {
    if (app && app.current) {
      if (app.current.scrollTop > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  }

  return (
    <div className="app"
      style={{ overflow: isOpen ? 'hidden' : 'scroll' }}
      onScroll={handleScroll}
      ref={app}
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

        <Main />

        <button
          className={`scrollToTop ${showButton && "active"}`}
          onClick={handleScrollToTop}
        >
        </button>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
