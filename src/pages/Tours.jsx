import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import TourCard from '../components/ui/TourCard';
import FilterSidebar from '../components/ui/FilterSidebar';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import toursData, { searchTours } from '../data/toursData';
import { useLocation } from 'react-router-dom';

const Tours = () => {
    const location = useLocation();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        category: 'All',
        duration: 'All',
        maxPrice: 50000,
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTours, setFilteredTours] = useState(toursData);

    // Parse query params for initial filters
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const destination = searchParams.get('destination');
        if (destination) {
            // Smart mapping for better search results
            const searchMapping = {
                'konkan-coast': 'Konkan',
                'lonavala-khandala': 'Lonavala',
                'ajanta-ellora': 'Ajanta',
                'nashik-wine-capital': 'Nashik',
                'western-ghats': 'Sahyadri',
                'mumbai-city': 'Mumbai'
            };

            const searchTerm = searchMapping[destination] || destination.replace(/-/g, ' ');
            setSearchQuery(searchTerm);
        } else {
            setSearchQuery('');
        }
    }, [location]);

    const resultsRef = useRef(null);

    // Scroll to results when filters change
    useEffect(() => {
        if (resultsRef.current) {
            const yOffset = -100; // Offset for navbar
            const element = resultsRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [filters]);

    useEffect(() => {
        let result = toursData;

        // Search filter
        if (searchQuery) {
            result = searchTours(searchQuery);
        }

        // Category filter
        if (filters.category !== 'All') {
            result = result.filter(tour => tour.category === filters.category);
        }

        // Duration filter
        if (filters.duration !== 'All') {
            if (filters.duration === '1-3 Days') {
                result = result.filter(tour => parseInt(tour.duration) <= 3);
            } else if (filters.duration === '4-6 Days') {
                result = result.filter(tour => parseInt(tour.duration) >= 4 && parseInt(tour.duration) <= 6);
            } else if (filters.duration === '7+ Days') {
                result = result.filter(tour => parseInt(tour.duration) >= 7);
            }
        }

        // Price filter
        result = result.filter(tour => tour.price <= filters.maxPrice);

        setFilteredTours(result);
    }, [filters, searchQuery]);

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle
                        title="Our Tour Packages"
                        subtitle="Explore Maharashtra"
                    />
                </AnimatedSection>

                {/* Search and Mobile Filter Toggle */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 bg-gray-50/95 p-4 rounded-xl border border-gray-100">
                    <input
                        type="text"
                        placeholder="Search destinations or tours..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-96 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-saffron-500"
                    />
                    <Button
                        variant="outline"
                        onClick={() => setIsFilterOpen(true)}
                        className="lg:hidden flex items-center justify-center gap-2"
                    >
                        <Filter size={18} /> Filters
                    </Button>
                </div>

                <div ref={resultsRef} className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
                        <div className="bg-white p-6 rounded-2xl shadow-card sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
                            <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                                <Filter size={20} className="text-saffron-500" /> Filters
                            </h3>
                            <FilterSidebar
                                filters={filters}
                                setFilters={setFilters}
                                setSearchQuery={setSearchQuery}
                                isOpen={false} // Always visible on desktop
                                onClose={() => { }}
                            />
                        </div>
                    </div>

                    {/* Mobile Sidebar */}
                    <div className="lg:hidden">
                        <FilterSidebar
                            filters={filters}
                            setFilters={setFilters}
                            setSearchQuery={setSearchQuery}
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                        />
                    </div>

                    {/* Grid */}
                    <div className="flex-grow">
                        <div className="mb-4 text-gray-500 text-sm">
                            Showing {filteredTours.length} packages
                        </div>

                        {filteredTours.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredTours.map((tour, index) => (
                                    <AnimatedSection key={tour.id} delay={index * 0.05}>
                                        <TourCard tour={tour} />
                                    </AnimatedSection>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                                <p className="text-xl text-gray-600 mb-4">No tours found matching your criteria.</p>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        setFilters({ category: 'All', duration: 'All', maxPrice: 50000 });
                                        setSearchQuery('');
                                    }}
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tours;
