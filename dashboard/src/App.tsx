import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="">
      <body>
        <div className="">
          <Topbar/>
        </div>
        <div>
          <MainBody />
        </div>
      </body>
    </div>
  );
}

export default App;
