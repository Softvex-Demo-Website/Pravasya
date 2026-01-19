import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CulturalHighlight = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Warli Art Pattern */}
            <div className="absolute inset-0 bg-earthBrown-900"></div>
            <div className="absolute inset-0 warli-pattern opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <AnimatedSection direction="right">
                        <div className="relative">
                            <div className="aspect-[4/5] md:aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1000"
                                    alt="Maharashtra Culture"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-saffron-500/30 rounded-full -z-0 animate-spin-slow" style={{ animationDuration: '30s' }}></div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-saffron-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left">
                        <div className="text-white">
                            <span className="text-saffron-400 font-bold tracking-widest uppercase mb-4 block">Cultural Heritage</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                Experience the <span className="text-saffron-500 font-marathi">संस्कृती</span> <br />
                                of Maharashtra
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Maharashtra is not just a destination; it's an emotion. The rhythm of Lezim, the beats of Dhol-Tasha, the devotion of Warkaris, and the artistry of Paithani.
                                <br /><br />
                                At Pravasya, we take you beyond the sightseeing. We invite you to wear the Nauvari, taste the Puran Poli, and live the rich traditions that make this land unique.
                            </p>

                            <Link to="/about">
                                <Button variant="primary" size="lg" icon={ArrowRight}>
                                    Our Story
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
};

export default CulturalHighlight;
