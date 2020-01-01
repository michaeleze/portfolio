import React from 'react';
import img from '../../img/bg_1.jpg';
import './index.css';

const About: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <p>Image below</p>
        <img src={img} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default About;
