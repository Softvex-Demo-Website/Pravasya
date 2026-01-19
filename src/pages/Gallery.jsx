import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { galleryData, galleryCategories } from '../data/galleryData';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = activeCategory === "All"
        ? galleryData
        : galleryData.filter(img => img.category === activeCategory);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle
                        title="Visual Journey"
                        subtitle="Gallery"
                    />
                </AnimatedSection>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {galleryCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? 'bg-deepGreen-800 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {filteredImages.map((img, idx) => (
                        <AnimatedSection key={img.id} delay={idx * 0.05} className="break-inside-avoid">
                            <div
                                className="relative group rounded-xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ZoomIn className="text-white w-8 h-8" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h4 className="text-white font-bold">{img.title}</h4>
                                    <p className="text-gray-300 text-xs">{img.category}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="max-w-5xl max-h-[90vh] relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl text-white font-heading font-bold">{selectedImage.title}</h3>
                                <p className="text-gray-300">{selectedImage.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
