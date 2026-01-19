import { createContext, useContext, useState, useEffect } from 'react';

const EnquiryContext = createContext();

export const useEnquiryContext = () => useContext(EnquiryContext);

export const EnquiryProvider = ({ children }) => {
    const [selectedTour, setSelectedTour] = useState(null);
    const [enquiryForm, setEnquiryForm] = useState({
        name: '',
        email: '',
        phone: '',
        tourId: '',
        tourName: '',
        travelDate: null,
        guests: 2,
        message: ''
    });

    const [wishlist, setWishlist] = useState([]);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('pravasya_wishlist');
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('pravasya_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (tour) => {
        if (!wishlist.some(item => item.id === tour.id)) {
            setWishlist([...wishlist, tour]);
        }
    };

    const removeFromWishlist = (tourId) => {
        setWishlist(wishlist.filter(item => item.id !== tourId));
    };

    const isInWishlist = (tourId) => {
        return wishlist.some(item => item.id === tourId);
    };

    const startEnquiry = (tour) => {
        setSelectedTour(tour);
        setEnquiryForm(prev => ({
            ...prev,
            tourId: tour.id,
            tourName: tour.title
        }));
    };

    const clearEnquiry = () => {
        setSelectedTour(null);
        setEnquiryForm({
            name: '',
            email: '',
            phone: '',
            tourId: '',
            tourName: '',
            travelDate: null,
            guests: 2,
            message: ''
        });
    };

    const value = {
        selectedTour,
        setSelectedTour,
        enquiryForm,
        setEnquiryForm,
        startEnquiry,
        clearEnquiry,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    };

    return (
        <EnquiryContext.Provider value={value}>
            {children}
        </EnquiryContext.Provider>
    );
};
