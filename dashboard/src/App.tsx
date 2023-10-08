import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import MainBody from './components/MainBody';
import Bottombar from './components/Bottombar';
import Sidebar from './components/sidebar';
import LeafletMap from './components/LeafletMap';

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
        <div className='h-25%'>
          <LeafletMap />
        </div>
        <div>
          <Bottombar />
        </div>
      </body>
    </div>
  );
}

export default App;
