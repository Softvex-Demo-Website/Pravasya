import React, { Suspense } from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularDestinations from '../components/home/PopularDestinations';
import FeaturedTours from '../components/home/FeaturedTours';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CulturalHighlight from '../components/home/CulturalHighlight';
import Newsletter from '../components/home/Newsletter';
import Loader from '../components/ui/Loader';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Suspense fallback={<Loader />}>
                <HeroSection />
                <PopularDestinations />
                <FeaturedTours />
                <CulturalHighlight />
                <WhyChooseUs />
                <Testimonials />
                <Newsletter />
            </Suspense>
        </motion.div>
    );
};

export default Home;
