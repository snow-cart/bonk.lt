import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

/**Components */
import Header from './components/Header';
import Footer from './components/Footer'; 
import Site from './sites/index';


function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Header />
      <Router><Site /></Router>
      <Footer className='mt-auto'/>
    </div>
  );
}

export default App;
