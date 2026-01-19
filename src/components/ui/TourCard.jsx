import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Heart, Star } from 'lucide-react';
import { formatPrice, calculateDiscount } from '../../utils/priceFormatter';
import { useEnquiryContext } from '../../context/EnquiryContext';
import Card from './Card';

const TourCard = ({ tour }) => {
    const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useEnquiryContext();
    const isWishlisted = isInWishlist(tour.id);

    const toggleWishlist = (e) => {
        e.preventDefault();
        if (isWishlisted) {
            removeFromWishlist(tour.id);
        } else {
            addToWishlist(tour);
        }
    };

    return (
        <Card className="h-full flex flex-col group">
            <div className="relative overflow-hidden h-64">
                <img
                    src={tour.images[0]}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={toggleWishlist}
                        className={`p-2 rounded-full transition-colors shadow-sm ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-500'}`}
                    >
                        <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-deepGreen-800 uppercase tracking-wide">
                        {tour.category}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-heading font-bold text-deepGreen-800 line-clamp-1 group-hover:text-saffron-600 transition-colors">
                            <Link to={`/tours/${tour.slug}`}>{tour.title}</Link>
                        </h3>
                        <p className="text-sm text-saffron-600 font-medium">{tour.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-xs font-bold text-yellow-700">
                        <Star size={12} fill="currentColor" />
                        <span>{tour.rating}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{tour.destinations.length} Stops</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-6 flex-grow">
                    {tour.description}
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-end justify-between">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Starting from</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-deepGreen-800">{formatPrice(tour.price)}</span>
                            {tour.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">{formatPrice(tour.originalPrice)}</span>
                            )}
                        </div>
                    </div>
                    <Link
                        to={`/tours/${tour.slug}`}
                        className="px-4 py-2 bg-saffron-50 text-saffron-600 font-medium rounded-full text-sm hover:bg-saffron-500 hover:text-white transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </Card>
    );
};

export default TourCard;
