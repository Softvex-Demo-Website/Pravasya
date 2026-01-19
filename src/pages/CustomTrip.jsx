import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Send, MapPin, Calendar, User } from 'lucide-react';

const CustomTrip = () => {
    const { register, control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        // Simulate API call
        // console.log(data);
        await new Promise(resolve => setTimeout(resolve, 2000));
        reset();
        alert('Custom trip request received! Our experts will start planning.');
    };

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen relative overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-deepGreen-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <SectionTitle
                        title="Plan Your Custom Trip"
                        subtitle="Tailor Made Experiences"
                    />
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 -mt-8">
                        Tell us your preferences, and let our local experts design the perfect Maharashtra itinerary for you.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                        {/* Left Image Side */}
                        <div className="w-full md:w-1/3 bg-deepGreen-900 relative hidden md:block">
                            <img
                                src="/images/hero-sahyadri_fort.png"
                                alt="Plan Trip"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deepGreen-900 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-heading font-bold mb-2">Expert Planning</h3>
                                <p className="text-gray-300 text-sm">We craft every detail to ensure your journey is seamless and unforgettable.</p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="w-full md:w-2/3 p-8 md:p-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                {/* Personal Info */}
                                <div>
                                    <h4 className="text-deepGreen-800 font-bold mb-4 flex items-center gap-2">
                                        <User size={18} /> Personal Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                                            <input
                                                {...register("name", { required: "Name is required" })}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            />
                                            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Email</label>
                                            <input
                                                type="email"
                                                {...register("email", { required: "Email is required" })}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            />
                                            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Phone</label>
                                            <input
                                                {...register("phone", { required: "Phone is required" })}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">City of Residence</label>
                                            <input
                                                {...register("city")}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Trip Details */}
                                <div>
                                    <h4 className="text-deepGreen-800 font-bold mb-4 flex items-center gap-2">
                                        <MapPin size={18} /> Trip Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Preferred Destinations</label>
                                            <input
                                                {...register("destinations")}
                                                placeholder="e.g. Konkan, Nashik"
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Duration (Days)</label>
                                            <select
                                                {...register("duration")}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            >
                                                <option value="3-4 Days">3-4 Days</option>
                                                <option value="5-7 Days">5-7 Days</option>
                                                <option value="8-10 Days">8-10 Days</option>
                                                <option value="10+ Days">10+ Days</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Budget Per Person</label>
                                            <select
                                                {...register("budget")}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                            >
                                                <option value="Standard">Standard (₹10k - ₹20k)</option>
                                                <option value="Premium">Premium (₹20k - ₹40k)</option>
                                                <option value="Luxury">Luxury (₹40k+)</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-600 mb-1">Departure Date</label>
                                            <Controller
                                                control={control}
                                                name="date"
                                                render={({ field }) => (
                                                    <DatePicker
                                                        selected={field.value}
                                                        onChange={(date) => field.onChange(date)}
                                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors !w-full"
                                                        placeholderText="Select Date"
                                                        minDate={new Date()}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Special Requirements</label>
                                    <textarea
                                        {...register("message")}
                                        rows="3"
                                        placeholder="Tell us about your interests, group size (adults/kids), or specific needs..."
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-saffron-500 transition-colors"
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    isLoading={isSubmitting}
                                    icon={Send}
                                >
                                    Request My Trip Plan
                                </Button>

                            </form>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default CustomTrip;
