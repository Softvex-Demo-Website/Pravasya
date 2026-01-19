import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import faqData, { faqCategories, getFaqsByCategory } from '../data/faqData';
import { AnimatePresence, motion } from 'framer-motion';

const Contact = () => {
    const [activeFaqCat, setActiveFaqCat] = useState("Booking");
    const filteredFaqs = getFaqsByCategory(activeFaqCat);

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <SectionTitle title="Get in Touch" subtitle="Contact Us" />
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">

                    {/* Contact Info */}
                    <AnimatedSection className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-card">
                            <h3 className="text-xl font-bold text-deepGreen-800 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-saffron-50 p-3 rounded-full text-saffron-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Address</h4>
                                        <p className="text-gray-600">123, Heritage Road, FC Road, Pune, Maharashtra - 411004</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-saffron-50 p-3 rounded-full text-saffron-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-400 text-sm">Mon-Sat, 9am - 7pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-saffron-50 p-3 rounded-full text-saffron-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Email</h4>
                                        <p className="text-gray-600">hello@pravasya.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <Button variant="primary" className="w-full" icon={MessageCircle} onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Contact Form */}
                    <AnimatedSection className="lg:col-span-2" delay={0.2}>
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-card">
                            <h3 className="text-xl font-bold text-deepGreen-800 mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-saffron-500 bg-gray-50" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-saffron-500 bg-gray-50" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-saffron-500 bg-gray-50" placeholder="How can we help you?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-saffron-500 bg-gray-50" placeholder="Write your message here..."></textarea>
                                </div>
                                <Button type="submit" variant="primary" icon={Send}>
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </AnimatedSection>

                </div>

                {/* Map */}
                <AnimatedSection className="mb-20">
                    <div className="rounded-2xl overflow-hidden shadow-card h-80 w-full bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043224!2d73.79292693836267!3d18.524603553535694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </AnimatedSection>

                {/* FAQ Section */}
                <AnimatedSection>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-heading font-bold text-deepGreen-800 mb-4">Frequently Asked Questions</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {faqCategories.filter(c => c !== 'All').map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFaqCat(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFaqCat === cat
                                            ? 'bg-saffron-500 text-white'
                                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <AnimatePresence mode='wait'>
                            {filteredFaqs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                                >
                                    <h4 className="font-bold text-deepGreen-800 text-lg mb-2">{faq.question}</h4>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </AnimatedSection>

            </div>
        </div>
    );
};

export default Contact;
