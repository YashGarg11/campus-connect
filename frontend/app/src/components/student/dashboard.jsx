
// App.js
import { Home, LogOut, Play, Settings } from 'lucide-react';
import { useState } from 'react';
import Applied from './Applied';
import Home1 from './home';
import Overview from './overview_student';

const SidebarLayout = () => {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <h2 className="text-2xl font-bold">{<Home1 />}</h2>;
      case 'overview':
        return <h2 className="text-2xl font-bold">{<Overview />}</h2>;
      case 'applications':
        return <h2 className="text-2xl font-bold">📄 Applications Page</h2>;
      case 'settings':

        return <h2 className="text-2xl font-bold">⚙️ Settings Page</h2>;
      case 'applied':
        return <h2 className="text-2xl font-bold">{<Applied></Applied>}</h2>;
      default:
        return <h2>Page Not Found</h2>;
    }
  };

  return (
    <div className="flex  h-screen font-sans">
      {/* Sidebar (left) */}
      <div className='flex flex-col' style={{
        width: '70px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        color: 'white',
        padding: '25px',
        margin: '10px',
        minHeight: '60vh',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'fixed',
        zIndex: 1,
        borderRadius: '70px',
        top: '25%',


      }}>

        <div className=''>
          <button
            className="block w-full text-3xl font-bold text-center mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('home')}
          >
            <Home size={24} className="inline mr-2" />


          </button>
          <button
            className="block w-full text-3xl font-bold text-center  px-2 py-1 mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('overview')}
          >
            <Home size={24} className="inline mr-2" />
          </button>
          <button
            className="block w-full text-3xl font-bold text-center px-2 py-1 mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('applications')}
          >
            <Play size={24} className="inline mr-2" />

          </button>
          <button
            className="block w-full text-3xl font-bold text-center px-2 py-1 mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('settings')}
          >
            <Settings size={24} className="inline mr-2" />
          </button>
          <button className=' className="block w-full text-3xl font-bold text-center px-2 py-1 mt-5 hover:bg-gray-700 rounded"' onClick={() => {
            setActivePage('applied')
          }}>
            <LogOut size={24} className="inline mr-2" />

          </button>
        </div>
      </div>
      {/* Main Content (right) */}
      <div className="flex-1 bg-gray-100  overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default SidebarLayout;
