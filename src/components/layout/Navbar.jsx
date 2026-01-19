import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Tours', path: '/tours' },
        { title: 'Destinations', path: '/destinations' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ];

    const isHomePage = location.pathname === '/';
    const showNavbarBackground = scrolled || !isHomePage;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${showNavbarBackground
                ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="relative z-50 flex items-center gap-2 group">
                        <span className={`text-2xl font-heading font-bold ${showNavbarBackground ? 'text-deepGreen-800' : 'text-white'} group-hover:text-saffron-500 transition-colors`}>
                            Pravasya
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.path}
                                    className={`relative font-medium text-sm tracking-wide transition-colors ${showNavbarBackground ? 'text-earthBrown-700 hover:text-saffron-600' : 'text-white/90 hover:text-white'
                                        }`}
                                >
                                    <span className="underline-animate">{link.title}</span>
                                </Link>
                            ))}
                        </div>



                        <Button
                            variant={showNavbarBackground ? 'primary' : 'white'}
                            size="sm"
                            onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                        >
                            Plan My Trip
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden relative z-50 p-2 rounded-full transition-colors ${isOpen ? 'text-deepGreen-800' : showNavbarBackground ? 'text-deepGreen-800' : 'text-white'
                            }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.path}
                                    className="text-2xl font-heading font-medium text-deepGreen-800 border-b border-gray-100 pb-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            <Button variant="primary" className="w-full justify-center" icon={MessageCircle}>
                                Chat on WhatsApp
                            </Button>
                            <Button variant="outline" className="w-full justify-center" icon={Phone}>
                                Call Now
                            </Button>
                        </div>

                        <div className="mt-auto mb-8 text-center text-gray-400 text-sm">
                            <p>Pravasya Travel &copy; {new Date().getFullYear()}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
