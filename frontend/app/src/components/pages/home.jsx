import { useEffect, useState } from 'react';

const events = [
  {
    title: 'TECH REVOLUTION',
    date: 'AUG 25',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
    gradient: 'from-blue-600 to-purple-600',
    attendees: '2.5K'
  },
  {
    title: 'MUSIC FEST',
    date: 'SEP 12',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    gradient: 'from-purple-600 to-pink-600',
    attendees: '5K'
  },
  {
    title: 'ART SHOWCASE',
    date: 'SEP 18',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    gradient: 'from-orange-600 to-red-600',
    attendees: '1.8K'
  }
];

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='min-h-screen bg-gray-900 text-white p-6'>
      <h2 className="text-4xl font-bold mb-6 text-black">Upcoming Events</h2>

    </div>
  );
}

export default Home;
