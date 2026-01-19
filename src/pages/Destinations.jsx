import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import DestinationCard from '../components/ui/DestinationCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import { destinationsData, destinationTypes } from '../data/destinationsData';

const Destinations = () => {
    const [activeType, setActiveType] = useState('All');

    const filteredDestinations = activeType === 'All'
        ? destinationsData
        : destinationsData.filter(dest => dest.type === activeType);

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle
                        title="Destinations"
                        subtitle="Explore by Region"
                    />
                </AnimatedSection>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {destinationTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeType === type
                                    ? 'bg-saffron-500 text-white shadow-button'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredDestinations.map((dest, index) => (
                        <AnimatedSection key={dest.id} delay={index * 0.05}>
                            <DestinationCard destination={dest} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
