import React, { useState } from 'react';
import { Home, MapPin, RefreshCcw, Bell, Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const SideBar = () => {
 
  const [isMinimized, setIsMinimized] = useState(false);

 
  const toggleSidebar = () => setIsMinimized(prevState => !prevState);

  return (
    <div className={`h-full ${isMinimized ? 'w-20' : 'w-64'} bg-indigo-700 text-white fixed top-0 left-0 p-6 transition-width duration-300`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className={`${isMinimized ? 'hidden' : 'block'} text-2xl font-bold`}>SeatSwap</h1>
        
        {/* Toggle button */}
        <button onClick={toggleSidebar} className="text-white">
          {isMinimized ? <Menu size={24} /> : <X size={24} />} 
        </button>
      </div>

      {/* Sidebar links */}
      <nav className="flex flex-col gap-5">
        <Link to="/seat-swap" className={`hover:text-yellow-300 flex items-center gap-2 ${isMinimized ? 'justify-center' : ''}`}>
          <Home size={18} />
          <span className={`${isMinimized ? 'hidden' : 'block'}`}>DashBoard</span>
        </Link>
        
        <Link to="/seat-swap/enter-pnr" className={`hover:text-yellow-300 flex items-center gap-2 ${isMinimized ? 'justify-center' : ''}`}>
          <MapPin size={18} />
          <span className={`${isMinimized ? 'hidden' : 'block'}`}>Enter PNR</span>
        </Link>
        
        <Link to="/seat-swap/my-offers" className={`hover:text-yellow-300 flex items-center gap-2 ${isMinimized ? 'justify-center' : ''}`}>
          <RefreshCcw size={18} />
          <span className={`${isMinimized ? 'hidden' : 'block'}`}>My Offers</span>
        </Link>
        
        <Link to="/seat-swap/notifications" className={`hover:text-yellow-300 flex items-center gap-2 ${isMinimized ? 'justify-center' : ''}`}>
          <Bell size={18} />
          <span className={`${isMinimized ? 'hidden' : 'block'}`}>Notifications</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
