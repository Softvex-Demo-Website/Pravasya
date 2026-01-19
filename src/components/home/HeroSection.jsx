import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

// Convert import to direct styles since we might not have set up CSS loaders for node_modules correctly in all environments
// In a real app we'd import 'swiper/css' etc. but with Vite it should work if installed.
// Assuming standard Vite setup handles CSS imports from node_modules.
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            image: '/images/hero_ajanta_caves.png',
            subtitle: 'Welcome to Maharashtra',
            title: 'Discover Ancient Caves',
            marathiTitle: 'प्राचीन लेणी शोधा',
            description: 'Explore the UNESCO World Heritage sites of Ajanta and Ellora, where history is carved in stone.',
            path: '/tours/ajanta-ellora-heritage'
        },
        {
            id: 2,
            image: '/images/hero_konkan_beach.png',
            subtitle: 'Konkan Coast',
            title: 'Pristine Beaches Await',
            marathiTitle: 'कोकण किनारा',
            description: 'Relax on the untouched beaches of Tarkarli and Ganpatipule with authentic Malvani cuisine.',
            path: '/tours/konkan-coastal-paradise'
        },
        {
            id: 3,
            image: '/images/hero-sahyadri_fort.png',
            subtitle: 'Sahyadri Range',
            title: 'Conquer the Forts',
            marathiTitle: 'गडकिल्ले सर करा',
            description: 'Trek through the majestic Sahyadris and stand where Maratha warriors once stood.',
            path: '/tours/sahyadri-fort-trail'
        },
        {
            id: 4,
            image: '/images/hero_tadoba_tiger.png',
            subtitle: 'Wildlife Safari',
            title: 'Into the Wild',
            marathiTitle: 'जंगलाची हाक',
            description: 'Experience the thrill of spotting tigers in their natural habitat at Tadoba Andhari Tiger Reserve.',
            path: '/tours/tadoba-tiger-safari'
        },
        {
            id: 5,
            image: '/images/hero_nashik_vineyard.png',
            subtitle: 'Wine Capital',
            title: 'Vineyards of Nashik',
            marathiTitle: 'नाशिकची द्राक्षं',
            description: 'Savor the finest Indian wines and tour the lush green vineyards of Nashik.',
            path: '/tours/nashik-wine-temple'
        }
    ];

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                className="h-full w-full bg-black"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-scale-in"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-hero"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start pt-20">
                                <div className="max-w-3xl space-y-6">
                                    <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-saffron-400 font-bold tracking-widest uppercase text-sm animate-fade-in-down border border-white/20">
                                        {slide.subtitle}
                                    </span>

                                    <div className="animate-fade-in-up">
                                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-2">
                                            {slide.title}
                                        </h1>
                                        <h2 className="text-4xl md:text-6xl font-marathi text-white/90 leading-relaxed tracking-wide">
                                            {slide.marathiTitle}
                                        </h2>
                                    </div>

                                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-200">
                                        <Link to="/tours">
                                            <Button variant="primary" size="lg" icon={ArrowRight}>
                                                Explore Tour
                                            </Button>
                                        </Link>
                                        <Link to="/custom-trip">
                                            <Button variant="white" size="lg">
                                                Plan Custom Trip
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    );
};

export default HeroSection;
