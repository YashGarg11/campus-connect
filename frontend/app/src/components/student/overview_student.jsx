import { Clock, MapPin } from 'lucide-react';
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
      {events.map((event, index) => (
        <div
          key={index}
          className="group cursor-pointer"
          style={{
            transform: `translateY(${scrollY * (0.03 + index * 0.01)}px) rotateY(${Math.sin(scrollY * 0.01 + index) * 5}deg)`
          }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-black border border-white/10 hover:border-white/30 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-2 shadow-lg">

            {/* Event Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Floating Date */}
              <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded-full font-black text-sm transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                {event.date}
              </div>

              {/* Attendees */}
              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm border border-white/20">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {event.location}
                </div>
                {event.attendees} attending
              </div>
            </div>

            {/* Event Title and Button */}
            <div className="p-8 relative">
              <h3 className="text-3xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {event.title}
              </h3>
              <button className={`w-full bg-gradient-to-r ${event.gradient} py-4 rounded-2xl font-black text-white hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105`}>
                JOIN THE HYPE
              </button>
            </div>

            {/* Background Glow */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
