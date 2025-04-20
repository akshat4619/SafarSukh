import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, RefreshCcw, Inbox, Bell } from 'lucide-react';

const SeatSwapPortal = () => {
  return (
    <div className="text-center">
      {/* Welcome Header */}
      <h2 className="text-3xl font-bold mb-2 text-indigo-700">Welcome to SeatSwap Portal</h2>
      <p className="text-gray-600 mb-8">
        Get started by choosing any of the options below or from the sidebar.
      </p>

      {/* Quick Link Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {/* Enter PNR */}
        <Link
          to="/seat-swap/enter-pnr"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center"
        >
          <MapPin className="w-10 h-10 text-indigo-600 mb-4" />
          <span className="font-semibold text-lg">Enter PNR</span>
        </Link>

        {/* My Offers */}
        <Link
          to="/seat-swap/my-offers"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center"
        >
          <RefreshCcw className="w-10 h-10 text-indigo-600 mb-4" />
          <span className="font-semibold text-lg">My Offers</span>
        </Link>

        {/* Incoming Requests */}
        <Link
          to="/seat-swap/requests"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center"
        >
          <Inbox className="w-10 h-10 text-indigo-600 mb-4" />
          <span className="font-semibold text-lg">Swap Requests</span>
        </Link>

        {/* Notifications */}
        <Link
          to="/seat-swap/notifications"
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center"
        >
          <Bell className="w-10 h-10 text-indigo-600 mb-4" />
          <span className="font-semibold text-lg">Notifications</span>
        </Link>
      </div>
    </div>
  );
};

export default SeatSwapPortal;
