import React from 'react';
import { ShieldCheck, Map, Users, HeartHandshake } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

const WhyChooseUs = () => {
    const features = [
        {
            icon: Map,
            title: "Local Expertise",
            description: "We don't just guide; we belong here. Our deep roots in Maharashtra ensure you discover hidden gems effectively."
        },
        {
            icon: ShieldCheck,
            title: "Trusted & Safe",
            description: "Your safety is our priority. Verified hotels, experienced drivers, and 24/7 support throughout your journey."
        },
        {
            icon: HeartHandshake,
            title: "Authentic Experiences",
            description: "From home-cooked Malvani meals to village walks, we connect you with the real culture of the land."
        },
        {
            icon: Users,
            title: "Small Groups",
            description: "We believe in intimate travel experiences. Small groups ensure personalized attention and better connections."
        }
    ];

    return (
        <section className="py-20 bg-deepGreen-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-deepGreen-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute inset-0 warli-pattern opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <SectionTitle
                        title="Why Pravasya?"
                        subtitle="The Pravasya Promise"
                        light={true}
                    />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} delay={index * 0.15}>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-saffron-500/20 rounded-full flex items-center justify-center text-saffron-400 mb-6 group-hover:bg-saffron-500 group-hover:text-white transition-colors">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-200 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
