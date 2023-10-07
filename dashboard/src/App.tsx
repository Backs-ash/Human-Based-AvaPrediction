import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import MainBody from './components/MainBody';
import Bottombar from './components/Bottombar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="">
      <body>
        <div className="">
          <Topbar/>
        </div>
        <div>
          <Sidebar />
        </div>
        <div>
          <MainBody />
        </div>
        <div>
          <Bottombar />
        </div>
      </body>
    </div>
  );
}

export default App;
