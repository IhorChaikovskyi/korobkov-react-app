import React from 'react';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Navigation } from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
