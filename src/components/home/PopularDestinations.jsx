import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import DestinationCard from '../ui/DestinationCard';
import AnimatedSection from '../ui/AnimatedSection';
import { destinationsData, getDestinationsByType } from '../../data/destinationsData';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const PopularDestinations = () => {
    // Get a mix of popular destinations
    const popularDestinations = [
        ...getDestinationsByType('Coastal').slice(0, 1),
        ...getDestinationsByType('Hill Station').slice(0, 1),
        ...getDestinationsByType('Heritage').slice(0, 1),
        ...getDestinationsByType('Wildlife').slice(0, 1),
    ];

    return (
        <section className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle
                        title="Explore Maharashtra"
                        subtitle="Popular Destinations"
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {popularDestinations.map((dest, index) => (
                        <AnimatedSection key={dest.id} delay={index * 0.1}>
                            <DestinationCard destination={dest} />
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.4} className="text-center">
                    <Link to="/destinations">
                        <Button variant="outline">
                            View All Destinations
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default PopularDestinations;
