import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-saffron-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-deepGreen-600 rounded-full"></div>
                </div>
            </div>
            <p className="mt-4 text-gray-500 font-medium animate-pulse">Loading Pravasya...</p>
        </div>
    );
};

export default Loader;
