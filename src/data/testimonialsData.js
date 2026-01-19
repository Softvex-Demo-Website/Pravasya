export const testimonialsData = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        rating: 5,
        tour: "Konkan Coastal Paradise",
        review: "An absolutely magical experience! The Pravasya team made our Konkan trip unforgettable. From the pristine beaches of Tarkarli to the delicious Malvani food, everything was perfect. The guide knew every hidden gem!",
        date: "2025-12-15"
    },
    {
        id: 2,
        name: "Amit Kulkarni",
        location: "Pune",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        rating: 5,
        tour: "Sahyadri Fort Trail",
        review: "As a history enthusiast, this fort trek was a dream come true. Standing atop Rajgad at sunrise, imagining the Maratha warriors - incredible! The camping arrangements and food were excellent too.",
        date: "2025-11-28"
    },
    {
        id: 3,
        name: "Sneha Patil",
        location: "Nagpur",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        rating: 5,
        tour: "Ajanta Ellora Heritage Tour",
        review: "The caves left us speechless. Our guide's knowledge about the Buddhist murals and Kailasa Temple was phenomenal. Pravasya organized everything smoothly - hotel, transport, and meals were top-notch.",
        date: "2025-11-10"
    },
    {
        id: 4,
        name: "Rajesh Deshmukh",
        location: "Nashik",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
        rating: 4,
        tour: "Mahabaleshwar Retreat",
        review: "Perfect family getaway! Kids loved the strawberry farm visit, and the scenic viewpoints were breathtaking. The resort was comfortable, and the itinerary was well-paced. Will book again!",
        date: "2025-10-22"
    },
    {
        id: 5,
        name: "Meera Joshi",
        location: "Thane",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
        rating: 5,
        tour: "Tadoba Tiger Safari",
        review: "We saw 3 tigers! The naturalist was incredibly knowledgeable, and the jungle resort was luxurious yet eco-friendly. The dawn safari was an experience we'll cherish forever. Thank you, Pravasya!",
        date: "2025-10-05"
    },
    {
        id: 6,
        name: "Vikram Pawar",
        location: "Kolhapur",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        rating: 5,
        tour: "Mumbai Heritage Walk",
        review: "Born and raised in Mumbai, but I discovered so much about my city through this tour! The CST and Art Deco walk was eye-opening. The dabbawala experience was a unique addition.",
        date: "2025-09-18"
    },
    {
        id: 7,
        name: "Anita Bhosale",
        location: "Chhatrapati Sambhajinagar",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150",
        rating: 4,
        tour: "Nashik Wine & Temple Tour",
        review: "A perfect blend of spirituality and leisure. The Trimbakeshwar darshan was peaceful, and the wine tasting at Sula was delightful. Great tour for couples!",
        date: "2025-09-02"
    },
    {
        id: 8,
        name: "Suresh Gaikwad",
        location: "Sangli",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
        rating: 5,
        tour: "Bhandardara Monsoon Magic",
        review: "The firefly experience was absolutely magical - like being in a fairy tale! The waterfall trek during monsoon was adventurous. Simple but comfortable camping setup. Highly recommend!",
        date: "2025-08-20"
    }
];

export const getAverageRating = () => {
    const total = testimonialsData.reduce((acc, t) => acc + t.rating, 0);
    return (total / testimonialsData.length).toFixed(1);
};

export const getTestimonialsByTour = (tourName) => {
    return testimonialsData.filter(t => t.tour === tourName);
};

export default testimonialsData;
