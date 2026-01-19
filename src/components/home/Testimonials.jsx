import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import testimonialsData from '../../data/testimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section className="py-20 bg-saffron-50">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle
                        title="Traveller Stories"
                        subtitle="Testimonials"
                    />
                </AnimatedSection>

                <div className="mt-12">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {testimonialsData.map((item, index) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col relative">
                                    <Quote className="absolute top-6 right-6 text-saffron-200 w-10 h-10" />

                                    <div className="flex items-center gap-1 text-yellow-500 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < item.rating ? "currentColor" : "none"}
                                                className={i < item.rating ? "" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-6 italic flex-grow leading-relaxed">
                                        "{item.review}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-saffron-100"
                                        />
                                        <div>
                                            <h4 className="font-heading font-bold text-deepGreen-800">{item.name}</h4>
                                            <p className="text-sm text-gray-500">{item.tour}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
