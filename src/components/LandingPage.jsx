import React, { useState, useEffect } from 'react';
import { Lock, SearchCheck, RefreshCcw, Users, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const [issignedin, setissignedin] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        if (loading) {
            const prevTitle = document.title;
            document.title = 'SeatSwap'; 

            const timer = setTimeout(() => {
                document.title = prevTitle; 
            }, 1500); 

            return () => clearTimeout(timer);
        }
    }, [loading]);

    const handlegetstarted = () => {
        if (!issignedin) {
            alert('Please sign in first to continue');
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate("/seat-swap");
            }, 1500);
        }
    };

    const handlesignin = () => {
        setissignedin(true);
        alert("Signed in successfully! Click 'Get Started' to continue.");
    };

    return (
        <div className="font-inter text-gray-800">

            {/* Navbar */}
            <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">SafarSukh</h1>
                <button onClick={handlesignin}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-105 transition transform shadow-sm hover:shadow-md">
                    Sign in with Google
                </button>
            </header>

            {/* Hero Section */}
            <section className="text-center py-24 px-6 bg-gradient-to-br from-sky-100 to-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 drop-shadow-md">
                    Swap Your Train Seat. Travel Smarter.
                </h2>
                <p className="text-lg md:text-xl max-w-lg mx-auto mb-8 text-gray-700 font-medium leading-relaxed">
                    Effortlessly swap your seat, sit next to friends, and access travel essentials — all at your fingertips.
                </p>
                {loading ? (
                    <button
                        disabled
                        className="bg-indigo-400 text-white px-8 py-3 rounded-lg text-lg cursor-not-allowed"
                    >
                        Loading...
                    </button>
                ) : (
                    <button onClick={handlegetstarted}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 hover:scale-105 transition transform shadow-sm hover:shadow-md">
                        Get Started
                    </button>
                )}
            </section>

            {/* Features */}
            <section className="py-20 px-6 bg-white border-t border-gray-200">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                    What You Can Do?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center px-4">
                        <RefreshCcw className="w-12 h-12 text-indigo-600 mb-4 transition-transform hover:-translate-y-1 hover:scale-105 duration-300" />
                        <h4 className="text-xl font-semibold mb-3 hover:text-indigo-600 transition">
                            Smart Seat Exchange
                        </h4>
                        <p className="text-gray-600 max-w-xs font-medium leading-relaxed">
                            Want a window seat or a lower berth? Swap your seat with ease inside the same coach category.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-col items-center px-4">
                        <Users className="w-12 h-12 text-indigo-600 mb-4 transition-transform hover:-translate-y-1 hover:scale-105 duration-300" />
                        <h4 className="text-xl font-semibold mb-3 hover:text-indigo-600 transition">
                            Stay with Friends
                        </h4>
                        <p className="text-gray-600 max-w-xs font-medium leading-relaxed">
                            Easily move closer to your companions during long journeys without hassle.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center px-4">
                        <Package className="w-12 h-12 text-indigo-600 mb-4 transition-transform hover:-translate-y-1 hover:scale-105 duration-300" />
                        <h4 className="text-xl font-semibold mb-3 hover:text-indigo-600 transition">
                            Access Travel Essentials
                        </h4>
                        <p className="text-gray-600 max-w-xs font-medium leading-relaxed">
                            Request or offer items like water, snacks, chargers, and more during the journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-6 bg-sky-50 border-t border-gray-200">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                    How It Works?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center px-4">
                        <Lock className="w-12 h-12 text-indigo-600 mb-4 transition-transform hover:-translate-y-1 hover:scale-105 duration-300" />
                        <h4 className="text-xl font-semibold mb-3 hover:text-indigo-600 transition">
                            Login Securely
                        </h4>
                        <p className="text-gray-700 max-w-xs font-medium leading-relaxed text-base">
                            Sign in using Google to verify your seat & connect with co‑travelers.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center px-4">
                        <SearchCheck className="w-12 h-12 text-indigo-600 mb-4 transition-transform hover:-translate-y-1 hover:scale-105 duration-300" />
                        <h4 className="text-xl font-semibold mb-3 hover:text-indigo-600 transition">
                            Enter PNR & View Seats
                        </h4>
                        <p className="text-gray-700 max-w-xs font-medium leading-relaxed text-base">
                            Use your PNR number to fetch your current seat and see who else is in your coach.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center px-4">
                        <RefreshCcw className="w-12 h-12 text-indigo-600 mb-4 transition-transform hover:-translate-y-1 hover:scale-105 duration-300" />
                        <h4 className="text-xl font-semibold mb-3 hover:text-indigo-600 transition">
                            Swap or Request
                        </h4>
                        <p className="text-gray-700 max-w-xs font-medium leading-relaxed text-base">
                            Easily initiate seat swap requests or connect with co‑passengers for essentials like snacks, water, chargers, and more.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
