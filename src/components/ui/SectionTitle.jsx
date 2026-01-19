import React from 'react';

const SectionTitle = ({ title, subtitle, center = true, light = false }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'} max-w-3xl mx-auto`}>
            {subtitle && (
                <span className={`block text-sm font-bold tracking-widest uppercase mb-3 ${light ? 'text-gray-300' : 'text-saffron-600'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-5xl font-heading font-bold mb-6 ${light ? 'text-white' : 'text-deepGreen-800'}`}>
                {title}
            </h2>
            <div className={`w-24 h-1.5 rounded-full ${center ? 'mx-auto' : ''} ${light ? 'bg-white/30' : 'bg-gradient-to-r from-saffron-400 to-saffron-600'}`}></div>
        </div>
    );
};

export default SectionTitle;
