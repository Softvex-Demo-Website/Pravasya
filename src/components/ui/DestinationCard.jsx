import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const DestinationCard = ({ destination }) => {
    return (
        <Link to={`/tours?destination=${destination.slug}`} className="block group">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-1 text-saffron-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <MapPin size={12} />
                        <span>{destination.type}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-saffron-400 transition-colors">
                        {destination.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 font-body">{destination.marathiName}</p>

                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <span className="text-white text-sm">{destination.tourCount} Tours Available</span>
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                            <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DestinationCard;
