import { useEffect, useState } from 'react';

const Applied = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className='flex text-center justify-center font-bold text-ellipsis text-4xl'>
        Applied Events
      </h1>
      <div className="ml-20 mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gradient-to-r from-blue-950 to-purple-950 text-white rounded-3xl">
        {/* Placeholder for applied events */}
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-lg">No events applied yet.</p>
        </div>
      </div>
    </div>
  );

}
export default Applied;