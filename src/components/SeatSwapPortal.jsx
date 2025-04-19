import React from 'react'

const SeatSwapPortal = () => {
  return (
    <div className='min-h screen bg-white text-gray-800 p-8'>
        <h2 className='text-3xl font-bold mb-6 text-indigo-700'>Seat Swap Portal</h2>

        <div className='bg-sky-50 p-6 rounded-lg shadow-lg max-w-xl mx-auto'>
            <label className='block mb-2 text-lg font-semibold'>Enter your PNR Number</label>
            <input type="text" placeholder='e.g. 1234567890'
            className='w-full p-3 border rounded mb-4' />
            <button className='bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition'>
                View Seats
            </button>
        </div>
      
    </div>
  )
}

export default SeatSwapPortal
