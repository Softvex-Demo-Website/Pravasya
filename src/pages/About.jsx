import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Users, Heart, Award, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            {/* Hero */}
            <div className="container mx-auto px-4 mb-20">
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-deepGreen-900 mb-6">
                            Our Journey, <span className="text-saffron-500">Your Pravasya</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are a team of passionate travellers, historians, and locals dedicated to showcasing the authentic soul of Maharashtra to the world.
                        </p>
                    </div>
                </AnimatedSection>
            </div>

            <div className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection direction="right">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1000"
                                alt="Our Mission"
                                className="rounded-2xl shadow-xl w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-saffron-50 rounded-2xl -z-10"></div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="left">
                        <h2 className="text-3xl font-heading font-bold text-deepGreen-800 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Pravasya was born from a deep love for the Sahyadri mountains, the Konkan coast, and the rich Maratha history. We observed that while many visit Maharashtra, few truly experience its essence.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our mission is to bridge this gap. We curate experiences that go beyond sightseeing – connecting you with local communities, forgotten folklore, and authentic flavors. We believe in sustainable tourism that respects the land and benefits the locals.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h4 className="font-bold text-deepGreen-800 text-3xl mb-1">500+</h4>
                                <p className="text-sm text-gray-500">Happy Travellers</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <h4 className="font-bold text-deepGreen-800 text-3xl mb-1">50+</h4>
                                <p className="text-sm text-gray-500">Curated Tours</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>

            {/* Values */}
            <div className="bg-deepGreen-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 warli-pattern opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <SectionTitle title="Our Values" subtitle="What Drives Us" light={true} />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                        {[
                            { icon: Heart, title: "Passion", desc: "We love what we do and it shows in every itinerary we craft." },
                            { icon: Users, title: "Community", desc: "We empower local guides and support village economies." },
                            { icon: Shield, title: "Integrity", desc: "Honest pricing, transparent policies, and no hidden costs." },
                            { icon: Award, title: "Excellence", desc: "We strive for perfection in every little detail of your trip." }
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-14 h-14 bg-saffron-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
