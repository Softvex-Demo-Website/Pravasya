import React from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../utils/formValidators';
import { Send } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const Newsletter = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // console.log(data);
        reset();
        alert("Thank you for subscribing!");
    };

    return (
        <section className="py-20 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <div className="bg-gradient-to-r from-deepGreen-800 to-deepGreen-900 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        {/* Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-saffron-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                                Join Our Travel Community
                            </h2>
                            <p className="text-gray-300 mb-10 text-lg">
                                Get exclusive offers, travel tips, and hidden gems of Maharashtra delivered straight to your inbox. No spam, we promise!
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                                <div className="flex-grow text-left">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className={`w-full px-6 py-4 rounded-full bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} text-white placeholder-gray-400 focus:outline-none focus:border-saffron-500 focus:bg-white/20 transition-all`}
                                        {...register("email", {
                                            required: "Email is required",
                                            validate: value => validateEmail(value) || "Invalid email address"
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-red-300 text-sm mt-2 ml-4">{errors.email.message}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="whitespace-nowrap shadow-xl"
                                    isLoading={isSubmitting}
                                    icon={Send}
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Newsletter;
