import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, XCircle, Calendar, Users, Phone, Share2 } from 'lucide-react';
import { getTourById, getTourBySlug } from '../data/toursData';
import { useEnquiryContext } from '../context/EnquiryContext';
import { formatPrice } from '../utils/priceFormatter';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Modal from '../components/ui/Modal';
import Loader from '../components/ui/Loader';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from 'react-hook-form';

const TourDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('itinerary');
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const { startEnquiry } = useEnquiryContext();

    const { control, register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setLoading(true);
        let foundTour = getTourBySlug(id);
        if (!foundTour) {
            foundTour = getTourById(id);
        }
        setTour(foundTour);
        setLoading(false);
    }, [id]);

    const handleEnquiry = () => {
        startEnquiry(tour);
        setIsEnquiryOpen(true);
    };

    const onSubmitEnquiry = (data) => {
        // console.log(data);
        alert('Enquiry Submitted! We will contact you shortly.');
        setIsEnquiryOpen(false);
    };

    if (loading) return <Loader />;
    if (!tour) return <div className="text-center py-40">Tour not found</div>;

    return (
        <div className="pt-20 bg-white min-h-screen">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                    <div className="container mx-auto">
                        <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                            {tour.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-2 text-white drop-shadow-lg">{tour.title}</h1>
                        <p className="text-xl md:text-2xl font-body text-gray-200 mb-6">{tour.subtitle}</p>

                        <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
                            <div className="flex items-center gap-2">
                                <Clock className="text-saffron-400" /> {tour.duration}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="text-saffron-400" /> {tour.destinations.join(" • ")}
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="text-saffron-400" /> Group Size: {tour.groupSize}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-heading font-bold text-deepGreen-800 mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{tour.longDescription}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {tour.images.map((img, idx) => (
                                    <div key={idx} className="rounded-xl overflow-hidden h-24 md:h-32 cursor-pointer hover:opacity-80 transition-opacity">
                                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Highlights */}
                        <section className="bg-saffron-50 p-8 rounded-2xl">
                            <h2 className="text-2xl font-heading font-bold text-deepGreen-800 mb-6">Highlights</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {tour.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-saffron-500 flex-shrink-0 mt-1" size={18} />
                                        <span className="text-gray-700">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Tabs (Itinerary / Inclusions) */}
                        <section>
                            <div className="flex border-b border-gray-200 mb-8">
                                {['itinerary', 'inclusions', 'reviews'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-8 py-4 font-bold text-sm md:text-base uppercase tracking-wide transition-colors relative ${activeTab === tab
                                            ? 'text-saffron-600'
                                            : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 w-full h-1 bg-saffron-500 rounded-t-lg"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {activeTab === 'itinerary' && (
                                <div className="space-y-8 animate-fade-in">
                                    {tour.itinerary.map((day) => (
                                        <div key={day.day} className="relative pl-8 border-l-2 border-saffron-200 pb-8 last:pb-0">
                                            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-saffron-500 border-4 border-white"></div>
                                            <h3 className="text-xl font-bold text-deepGreen-800 mb-2">Day {day.day}: {day.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{day.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'inclusions' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                                    <div>
                                        <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                                            <CheckCircle size={20} /> What's Included
                                        </h3>
                                        <ul className="space-y-3">
                                            {tour.inclusions.map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                                            <XCircle size={20} /> What's Excluded
                                        </h3>
                                        <ul className="space-y-3">
                                            {tour.exclusions.map((item, idx) => (
                                                <li key={idx} className="flex gap-3 text-gray-600 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="animate-fade-in">
                                    <p className="text-center text-gray-500 italic py-10">Reviews coming soon...</p>
                                </div>
                            )}
                        </section>

                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white rounded-2xl shadow-card border border-gray-100 p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <p className="text-sm text-gray-400 line-through">{formatPrice(tour.originalPrice)}</p>
                                    <p className="text-3xl font-bold text-deepGreen-800">{formatPrice(tour.price)}</p>
                                </div>
                                <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded text-sm">
                                    {tour.discount}% OFF
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <Button variant="primary" className="w-full" onClick={handleEnquiry}>
                                    Book Now / Enquiry
                                </Button>
                                <Button variant="outline" className="w-full" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                                    WhatsApp Us
                                </Button>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-3">
                                <div className="flex justify-between text-gray-600">
                                    <span>Duration:</span>
                                    <span className="font-semibold">{tour.duration}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Best Time:</span>
                                    <span className="font-semibold">{tour.bestTime}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Difficulty:</span>
                                    <span className={`font-semibold ${tour.difficulty === 'Easy' ? 'text-green-600' :
                                        tour.difficulty === 'Moderate' ? 'text-yellow-600' : 'text-red-600'
                                        }`}>{tour.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Enquiry Modal */}
            <Modal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} title={`Enquiry for ${tour.title}`}>
                <form onSubmit={handleSubmit(onSubmitEnquiry)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                {...register('name', { required: true })}
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron-500"
                                placeholder="Your Name"
                            />
                            {errors.name && <span className="text-xs text-red-500">Required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                {...register('phone', { required: true })}
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron-500"
                                placeholder="Mobile Number"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron-500"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                            <Controller
                                control={control}
                                name="date"
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value}
                                        onChange={(date) => field.onChange(date)}
                                        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron-500"
                                        placeholderText="Select Date"
                                        minDate={new Date()}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                            <input
                                type="number"
                                min="1"
                                {...register('guests')}
                                defaultValue={2}
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                        <textarea
                            {...register('message')}
                            rows="3"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-saffron-500"
                            placeholder="Any specific requirements?"
                        ></textarea>
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                        Submit Enquiry
                    </Button>
                </form>
            </Modal>
        </div>
    );
};

export default TourDetails;
