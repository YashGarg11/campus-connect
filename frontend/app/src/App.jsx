
// App.js
import { useState } from 'react';

const SidebarLayout = () => {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <h2 className="text-2xl font-bold">📊 Overview Page</h2>;
      case 'applications':
        return <h2 className="text-2xl font-bold">📄 Applications Page</h2>;
      case 'settings':
        return <h2 className="text-2xl font-bold">⚙️ Settings Page</h2>;
      default:
        return <h2>Page Not Found</h2>;
    }
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar (left) */}
      <div className='flex flex-col' style={{
        width: '300px',
        backgroundColor: 'grey',
        color: 'white',
        padding: '20px',
        height: '100vh',

      }}>
        <h1 className="text-4xl font-bold">🎓 Dashboard</h1>
        <div className=' flex-1 flex flex-col justify-center items-center text-center'>
          <button
            className="block w-full text-3xl font-bold text-center  px-2 py-1 mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('overview')}
          >
            Overview
          </button>
          <button
            className="block w-full text-3xl font-bold text-center px-2 py-1 mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('applications')}
          >
            Applications
          </button>
          <button
            className="block w-full text-3xl font-bold text-center px-2 py-1 mt-5 hover:bg-gray-700 rounded"
            onClick={() => setActivePage('settings')}
          >
            Settings
          </button>
        </div>
      </div>
      {/* Main Content (right) */}
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default SidebarLayout;
