import React, {useState} from 'react'
import Nav from './components/Navigation'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <About />
        </p>
        
      </header>
    </div>
  );
}

export default App;
