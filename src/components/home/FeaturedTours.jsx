import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TourCard from '../ui/TourCard';
import AnimatedSection from '../ui/AnimatedSection';
import { getFeaturedTours } from '../../data/toursData';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const FeaturedTours = () => {
    const featuredTours = getFeaturedTours();

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle
                        title="Curated Experiences"
                        subtitle="Featured Tours"
                    />
                    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 -mt-8">
                        Handpicked itineraries that showcase the best of Maharashtra. From weekend getaways to week-long expeditions.
                    </p>
                </AnimatedSection>

                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12 px-4"
                    >
                        {featuredTours.map((tour, index) => (
                            <SwiperSlide key={tour.id} className="h-auto">
                                <AnimatedSection delay={index * 0.1} className="h-full">
                                    <TourCard tour={tour} />
                                </AnimatedSection>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="text-center mt-8">
                    <Link to="/tours">
                        <Button variant="primary">
                            View All Tours
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
