export const faqData = [
    {
        id: 1,
        category: "Booking",
        question: "How do I book a tour with Pravasya?",
        answer: "You can book a tour by filling out the enquiry form on our website, calling our helpline at +91-XXXXX-XXXXX, or sending a WhatsApp message. Our travel experts will get back to you within 2 hours during business hours."
    },
    {
        id: 2,
        category: "Booking",
        question: "What is the payment process?",
        answer: "We require a 30% advance payment to confirm your booking. The remaining amount can be paid before the trip starts. We accept UPI, bank transfers, credit/debit cards, and cash payments."
    },
    {
        id: 3,
        category: "Booking",
        question: "Can I customize a tour package?",
        answer: "Absolutely! We specialize in customized tours. Visit our 'Plan My Trip' page or contact us with your preferences - destinations, budget, duration, and travel style. We'll create a personalized itinerary just for you."
    },
    {
        id: 4,
        category: "Cancellation",
        question: "What is your cancellation policy?",
        answer: "Cancellation more than 15 days before departure: 90% refund. 7-15 days before: 50% refund. Less than 7 days: No refund. However, you can transfer your booking to another date or person."
    },
    {
        id: 5,
        category: "Cancellation",
        question: "What if the tour is cancelled due to weather?",
        answer: "If we cancel a tour due to safety concerns (weather, natural calamities), you'll receive a full refund or can reschedule at no extra cost. For partial disruptions, we'll arrange alternatives or partial refunds."
    },
    {
        id: 6,
        category: "Tours",
        question: "What is included in the tour package?",
        answer: "Most packages include accommodation, meals as specified, transport (AC vehicles), entry fees, permits, and a professional guide. Each tour page lists specific inclusions and exclusions clearly."
    },
    {
        id: 7,
        category: "Tours",
        question: "Are your tours suitable for senior citizens?",
        answer: "Many of our tours are senior-friendly with easy to moderate activity levels. We always mention the difficulty level on each tour page. Contact us to customize a comfortable itinerary for senior travellers."
    },
    {
        id: 8,
        category: "Tours",
        question: "Do you offer solo traveller options?",
        answer: "Yes! Solo travellers can join our group departures for a shared experience, or opt for a private tour with adjusted pricing. We have female-only group departures too."
    },
    {
        id: 9,
        category: "Safety",
        question: "What safety measures do you follow?",
        answer: "Safety is our priority. Our vehicles are regularly serviced, drivers are experienced, guides carry first-aid kits, and we maintain emergency contacts throughout. For adventure activities, we work with certified operators only."
    },
    {
        id: 10,
        category: "Safety",
        question: "Is travel insurance included?",
        answer: "Travel insurance is not included in our packages but is strongly recommended. We can help you arrange comprehensive travel insurance at reasonable rates upon request."
    },
    {
        id: 11,
        category: "General",
        question: "Do you provide vegetarian/Jain food options?",
        answer: "Absolutely! We cater to all dietary preferences including pure vegetarian, Jain, vegan, and special dietary requirements. Please inform us at the time of booking."
    },
    {
        id: 12,
        category: "General",
        question: "How do I contact customer support during the trip?",
        answer: "You'll have our 24/7 emergency helpline number, your guide's contact, and a dedicated trip coordinator's WhatsApp. We ensure you're never without support during your journey."
    }
];

export const faqCategories = ["All", "Booking", "Cancellation", "Tours", "Safety", "General"];

export const getFaqsByCategory = (category) => {
    if (category === "All") return faqData;
    return faqData.filter(faq => faq.category === category);
};

export default faqData;
