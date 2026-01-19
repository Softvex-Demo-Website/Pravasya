import React from 'react';
import { X } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters, setSearchQuery, isOpen, onClose }) => {
    const categories = ["All", "Beach", "Hill Station", "Heritage", "Wildlife", "Adventure", "Leisure", "Urban"];
    const durations = ["All", "1-3 Days", "4-6 Days", "7+ Days"];

    const handleCategoryChange = (category) => {
        setFilters({ ...filters, category });
        if (setSearchQuery) setSearchQuery('');
    };

    const handleDurationChange = (duration) => {
        setFilters({ ...filters, duration });
        if (setSearchQuery) setSearchQuery('');
    };

    const handlePriceChange = (e) => {
        setFilters({ ...filters, maxPrice: parseInt(e.target.value) });
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            <aside
                className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 lg:relative lg:transform-none lg:w-full lg:z-0 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="p-6 border-b lg:border-none border-gray-100 flex justify-between items-center lg:hidden">
                    <h2 className="text-xl font-heading font-bold text-deepGreen-800">Filters</h2>
                    <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-8">
                    {/* Price Range */}
                    <div>
                        <h3 className="font-bold text-deepGreen-800 mb-4">Price Range</h3>
                        <input
                            type="range"
                            min="5000"
                            max="50000"
                            step="1000"
                            value={filters.maxPrice}
                            onChange={handlePriceChange}
                            className="w-full accent-saffron-500 mb-2"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>₹5,000</span>
                            <span className="font-bold text-saffron-600">Up to ₹{filters.maxPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-bold text-deepGreen-800 mb-4">Travel Style</h3>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.category === cat ? 'bg-saffron-500 border-saffron-500' : 'border-gray-300 group-hover:border-saffron-400'}`}>
                                        {filters.category === cat && <span className="text-white text-xs">✓</span>}
                                    </div>
                                    <input
                                        type="radio"
                                        name="category"
                                        className="hidden"
                                        checked={filters.category === cat}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                    <span className={`text-sm ${filters.category === cat ? 'text-deepGreen-800 font-medium' : 'text-gray-600'}`}>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Duration */}
                    <div>
                        <h3 className="font-bold text-deepGreen-800 mb-4">Duration</h3>
                        <div className="space-y-2">
                            {durations.map(dur => (
                                <label key={dur} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${filters.duration === dur ? 'border-saffron-500' : 'border-gray-300 group-hover:border-saffron-400'}`}>
                                        {filters.duration === dur && <div className="w-2.5 h-2.5 rounded-full bg-saffron-500"></div>}
                                    </div>
                                    <input
                                        type="radio"
                                        name="duration"
                                        className="hidden"
                                        checked={filters.duration === dur}
                                        onChange={() => handleDurationChange(dur)}
                                    />
                                    <span className={`text-sm ${filters.duration === dur ? 'text-deepGreen-800 font-medium' : 'text-gray-600'}`}>{dur}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setFilters({ category: 'All', duration: 'All', maxPrice: 50000 });
                            onClose();
                        }}
                        className="w-full py-2 text-sm text-saffron-600 border border-saffron-200 rounded-full hover:bg-saffron-50 transition-colors"
                    >
                        Reset Filters
                    </button>
                </div>
            </aside>
        </>
    );
};

export default FilterSidebar;
