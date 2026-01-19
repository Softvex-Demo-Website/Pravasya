import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-deepGreen-900 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-saffron-400 via-saffron-500 to-saffron-600"></div>
            <div className="absolute inset-0 opacity-5 warli-pattern pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">Pravasya</h2>
                            <p className="text-saffron-400 text-sm tracking-widest uppercase">Maharashtra Travel Experiences</p>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            "Pravasya" means journey. We are dedicated to showcasing the hidden gems, historic forts, and pristine coastlines of Maharashtra with authentic local experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron-500 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron-500 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron-500 transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-saffron-100">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-300 hover:text-saffron-400 transition-colors">About Us</Link></li>
                            <li><Link to="/tours" className="text-gray-300 hover:text-saffron-400 transition-colors">Our Tours</Link></li>
                            <li><Link to="/gallery" className="text-gray-300 hover:text-saffron-400 transition-colors">Gallery</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-saffron-400 transition-colors">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-300 hover:text-saffron-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Popular Tours */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-saffron-100">Popular Tours</h3>
                        <ul className="space-y-4">
                            <li><Link to="/tours/konkan-coastal-paradise" className="text-gray-300 hover:text-saffron-400 transition-colors">Konkan Coastal Paradise</Link></li>
                            <li><Link to="/tours/sahyadri-fort-trail" className="text-gray-300 hover:text-saffron-400 transition-colors">Sahyadri Fort Trail</Link></li>
                            <li><Link to="/tours/ajanta-ellora-heritage" className="text-gray-300 hover:text-saffron-400 transition-colors">Ajanta Ellora Heritage</Link></li>
                            <li><Link to="/tours/tadoba-tiger-safari" className="text-gray-300 hover:text-saffron-400 transition-colors">Tadoba Tiger Safari</Link></li>
                            <li><Link to="/tours/mahableshwar-retreat" className="text-gray-300 hover:text-saffron-400 transition-colors">Mahabaleshwar Retreat</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-saffron-100">Newsletter</h3>
                        <p className="text-gray-300 mb-6">Subscribe to get special offers and travel inspiration.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-5 text-white placeholder-gray-400 focus:outline-none focus:border-saffron-500 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center hover:bg-saffron-600 transition-colors shadow-lg"
                            >
                                <Send size={16} />
                            </button>
                        </form>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-start gap-3 text-gray-300">
                                <MapPin size={18} className="text-saffron-400 mt-1 shrink-0" />
                                <p>123, Heritage Road, FC Road, Pune, Maharashtra - 411004</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone size={18} className="text-saffron-400 shrink-0" />
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail size={18} className="text-saffron-400 shrink-0" />
                                <p>namaste@pravasya.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Pravasya Travel. All rights reserved.
                    </p>
                    <p className="text-gray-500 font-heading italic text-lg">
                        "जय जय महाराष्ट्र माझा"
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
