import './App.css';
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 min-h-screen">
      <div className="flex col-span-3 row-span-1 row-start-1 row-end-2">
        <Topbar />
      </div>
      <div className='flex col-span-1 row-span-2 row-start-2 row-end-4'>
        <Sidebar />
      </div>
      <div className='flex col-span-2 row-span-1 row-start-2 row-end-3 items-center text-center pt-10 '>
        <p>This is the body element</p>
      </div>
      <div className='row-span-1 col-span-3 row-start-3  w-full'>
        <Bottombar />
      </div>
    </div>
  )
}

export default App;
