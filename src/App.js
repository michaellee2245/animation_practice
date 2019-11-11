import React from 'react';

import './App.css';
import Loader from './components/Loader/Loader';
import About from './views/About/About';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
        {/* <Loader /> */}
        {/* <About /> */}
        <Home />
    </div>
  );
}

export default App;
