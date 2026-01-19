export const toursData = [
    {
        id: 1,
        title: "Konkan Coastal Paradise",
        slug: "konkan-coastal-paradise",
        subtitle: "कोकणची सहल",
        description: "Experience the pristine beaches, ancient temples, and delicious seafood of Maharashtra's Konkan coast.",
        longDescription: "Embark on a mesmerizing journey along Maharashtra's stunning Konkan coastline. This tour takes you through picturesque beaches, ancient temples, and charming coastal villages. Experience the warm hospitality of Konkan locals, savor authentic Malvani cuisine, and create memories that will last a lifetime. From the historic Sindhudurg Fort rising from the sea to the pristine sands of Tarkarli, every moment is a postcard-perfect experience.",
        images: [
            "/images/konkan-beach.png"
        ],
        duration: "5 Days / 4 Nights",
        price: 18500,
        originalPrice: 22000,
        discount: 16,
        category: "Beach",
        difficulty: "Easy",
        groupSize: "2-15",
        destinations: ["Alibaug", "Ganpatipule", "Ratnagiri", "Tarkarli"],
        highlights: [
            "Sindhudurg Fort visit",
            "Scuba diving at Tarkarli",
            "Malvani cuisine experience",
            "Dolphin watching",
            "Beach camping"
        ],
        inclusions: [
            "Accommodation in beach resorts",
            "All meals (breakfast, lunch, dinner)",
            "AC transport throughout",
            "All entry fees and permits",
            "Professional tour guide",
            "Water sports activities"
        ],
        exclusions: [
            "Personal expenses",
            "Travel insurance",
            "Tips and gratuities",
            "Alcoholic beverages"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival at Alibaug",
                description: "Arrive at Alibaug and check into your beachside resort. Evening visit to Alibaug Beach and Kolaba Fort. Welcome dinner with Konkani specialties."
            },
            {
                day: 2,
                title: "Alibaug to Ganpatipule",
                description: "Drive along the scenic coastal route to Ganpatipule. Visit the famous Swayambhu Ganpati Temple. Relax at Ganpatipule Beach."
            },
            {
                day: 3,
                title: "Ratnagiri Exploration",
                description: "Explore Ratnagiri - visit Ratnadurg Fort, Thibaw Palace, and the famous mango orchards. Evening at Bhatye Beach."
            },
            {
                day: 4,
                title: "Tarkarli Adventure",
                description: "Travel to Tarkarli for water sports. Enjoy scuba diving, snorkeling, and banana boat rides. Visit Sindhudurg Fort by boat."
            },
            {
                day: 5,
                title: "Departure",
                description: "Morning dolphin watching excursion. After breakfast, depart with beautiful memories of Konkan."
            }
        ],
        bestTime: "October to March",
        rating: 4.8,
        reviews: 245,
        featured: true
    },
    {
        id: 2,
        title: "Sahyadri Fort Trail",
        slug: "sahyadri-fort-trail",
        subtitle: "गडकिल्ल्यांची सफर",
        description: "Trek through the majestic Sahyadri mountains and explore the legendary forts of Shivaji Maharaj.",
        longDescription: "Walk in the footsteps of the great Maratha warriors as you explore the magnificent forts of the Sahyadri range. This adventure tour combines thrilling treks with rich history lessons. Stand atop ancient fortifications that witnessed battles and strategies that shaped Indian history. Experience the spirit of Swarajya while enjoying breathtaking views of the Western Ghats.",
        images: [
            "/images/sahyadri-fort.png",
            "/images/lonavala-waterfall.png"
        ],
        duration: "4 Days / 3 Nights",
        price: 12500,
        originalPrice: 15000,
        discount: 17,
        category: "Adventure",
        difficulty: "Moderate",
        groupSize: "6-20",
        destinations: ["Rajgad", "Torna", "Sinhagad", "Lohagad"],
        highlights: [
            "Trek to 4 historic forts",
            "Camping under stars",
            "Local village experience",
            "Traditional Maharashtrian food",
            "Expert history guides"
        ],
        inclusions: [
            "Camping equipment",
            "All meals during trek",
            "Transport from Pune",
            "Trekking guides",
            "First aid support",
            "Entry permits"
        ],
        exclusions: [
            "Personal trekking gear",
            "Travel insurance",
            "Personal expenses",
            "Camera fees"
        ],
        itinerary: [
            {
                day: 1,
                title: "Pune to Rajgad",
                description: "Early morning departure from Pune. Trek to Rajgad Fort - the capital of Maratha Empire. Camp at the fort with stargazing session."
            },
            {
                day: 2,
                title: "Rajgad to Torna",
                description: "Descend from Rajgad and trek to Torna Fort (Prachandgad). Explore the highest fort in Pune district. Overnight camping."
            },
            {
                day: 3,
                title: "Sinhagad Exploration",
                description: "Drive to Sinhagad. Trek and explore this fort famous for the Battle of Sinhagad. Enjoy traditional lunch at village. Visit Khadakwasla Dam."
            },
            {
                day: 4,
                title: "Lohagad and Return",
                description: "Morning trek to Lohagad Fort. Explore Bhaja and Karla Caves en route. Return to Pune by evening."
            }
        ],
        bestTime: "July to February",
        rating: 4.9,
        reviews: 189,
        featured: true
    },
    {
        id: 3,
        title: "Mahabaleshwar Retreat",
        slug: "mahabaleshwar-retreat",
        subtitle: "महाबळेश्वर विश्रांती",
        description: "Escape to the queen of hill stations. Enjoy strawberry farms, scenic viewpoints, and pleasant weather.",
        longDescription: "Discover the timeless charm of Mahabaleshwar, Maharashtra's most beloved hill station. Nestled in the Sahyadri mountains, this retreat offers everything from stunning viewpoints to lush strawberry farms. Wake up to misty mornings, explore ancient temples, and indulge in fresh strawberries with cream. Perfect for couples, families, and anyone seeking peace amidst nature.",
        images: [
            "/images/mahabaleshwar-view.png"
        ],
        duration: "3 Days / 2 Nights",
        price: 9500,
        originalPrice: 11000,
        discount: 14,
        category: "Hill Station",
        difficulty: "Easy",
        groupSize: "2-12",
        destinations: ["Mahabaleshwar", "Panchgani", "Pratapgad"],
        highlights: [
            "Visit to 12 viewpoints",
            "Strawberry farm tour",
            "Venna Lake boating",
            "Pratapgad Fort excursion",
            "Mapro Garden visit"
        ],
        inclusions: [
            "Premium resort stay",
            "Breakfast and dinner",
            "AC vehicle",
            "Sightseeing as per itinerary",
            "Tour guide"
        ],
        exclusions: [
            "Lunch",
            "Personal expenses",
            "Boating charges",
            "Horse riding"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival and Local Sightseeing",
                description: "Arrive at Mahabaleshwar. Visit Arthur's Seat, Wilson Point, and Kate's Point. Evening at leisure in Mall Road."
            },
            {
                day: 2,
                title: "Full Day Exploration",
                description: "Morning visit to Pratapgad Fort. Afternoon at Mapro Garden and strawberry farms. Evening boating at Venna Lake."
            },
            {
                day: 3,
                title: "Panchgani and Departure",
                description: "Visit Panchgani's Table Land and Sydney Point. Shop for local products. Depart with sweet memories."
            }
        ],
        bestTime: "Year Round (Best: Sept-June)",
        rating: 4.7,
        reviews: 312,
        featured: true
    },
    {
        id: 4,
        title: "Ajanta Ellora Heritage",
        slug: "ajanta-ellora-heritage",
        subtitle: "अजिंठा-वेरूळ वारसा",
        description: "Marvel at the UNESCO World Heritage caves featuring ancient Buddhist, Hindu, and Jain art spanning 800 years.",
        longDescription: "Step into a world of ancient artistry at the magnificent Ajanta and Ellora caves. These UNESCO World Heritage sites showcase the finest examples of Indian rock-cut architecture and paintings. From the serene Buddhist murals of Ajanta to the massive Kailasa temple carved from a single rock at Ellora, this tour is a journey through India's artistic and spiritual heritage.",
        images: [
            "/images/ajanta-ellora-caves.png"
        ],
        duration: "4 Days / 3 Nights",
        price: 15500,
        originalPrice: 18000,
        discount: 14,
        category: "Heritage",
        difficulty: "Easy",
        groupSize: "2-20",
        destinations: ["Chhatrapati Sambhajinagar", "Ajanta", "Ellora", "Daulatabad"],
        highlights: [
            "Ajanta Caves (30 caves)",
            "Ellora Caves (34 caves)",
            "Kailasa Temple",
            "Daulatabad Fort",
            "Bibi Ka Maqbara"
        ],
        inclusions: [
            "4-star hotel accommodation",
            "All meals",
            "AC transport",
            "Professional guide",
            "All entry fees",
            "Flight/train assistance"
        ],
        exclusions: [
            "Flights/trains",
            "Camera fees",
            "Personal expenses",
            "Tips"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Chhatrapati Sambhajinagar",
                description: "Arrive at Chhatrapati Sambhajinagar. Visit Bibi Ka Maqbara (Mini Taj) and Panchakki. Evening orientation about cave history."
            },
            {
                day: 2,
                title: "Ellora Caves Exploration",
                description: "Full day at Ellora Caves. Explore Buddhist, Hindu, and Jain caves. Marvel at the Kailasa Temple - carved from a single rock."
            },
            {
                day: 3,
                title: "Ajanta Caves Discovery",
                description: "Early morning drive to Ajanta Caves. Explore the stunning Buddhist paintings and sculptures. Return via Daulatabad Fort."
            },
            {
                day: 4,
                title: "Departure",
                description: "Morning visit to Chhatrapati Sambhajinagar Caves and local markets. Depart with memories of ancient India."
            }
        ],
        bestTime: "October to March",
        rating: 4.9,
        reviews: 428,
        featured: true
    },
    {
        id: 5,
        title: "Lonavala Adventure",
        slug: "lonavala-adventure",
        subtitle: "लोणावळा साहस",
        description: "Explore waterfalls, caves, and valley views in Maharashtra's favorite hill station.",
        longDescription: "Escape the city hustle for an action-packed weekend in Lonavala. Just a short drive from Mumbai and Pune, Lonavala offers the perfect blend of natural beauty and adventure. Trek to Tiger's Leap, explore the mysterious Bhaja and Karla caves, and witness spectacular waterfalls during monsoon. End your days with chikki shopping and Maggi at misty viewpoints.",
        images: [
            "/images/lonavala-waterfall.png",
            "/images/sahyadri-fort.png"
        ],
        duration: "2 Days / 1 Night",
        price: 5500,
        originalPrice: 6500,
        discount: 15,
        category: "Adventure",
        difficulty: "Easy",
        groupSize: "4-20",
        destinations: ["Lonavala", "Khandala", "Bhushi Dam"],
        highlights: [
            "Tiger's Leap viewpoint",
            "Bhaja & Karla Caves",
            "Rajmachi Point",
            "Bhushi Dam",
            "Local chikki shopping"
        ],
        inclusions: [
            "Resort accommodation",
            "Breakfast and dinner",
            "AC transport",
            "Guided trek",
            "Entry fees"
        ],
        exclusions: [
            "Lunch",
            "Personal expenses",
            "Adventure activities (extra)",
            "Shopping"
        ],
        itinerary: [
            {
                day: 1,
                title: "Mumbai/Pune to Lonavala",
                description: "Arrive and visit Tiger's Leap, Rajmachi Point, and Bhushi Dam. Evening at leisure, enjoy local street food."
            },
            {
                day: 2,
                title: "Exploration and Return",
                description: "Morning visit to Karla and Bhaja Caves. Explore Lohagad Fort if time permits. Chikki shopping and return journey."
            }
        ],
        bestTime: "June to February",
        rating: 4.5,
        reviews: 567,
        featured: false
    },
    {
        id: 6,
        title: "Nashik Wine & Temple",
        slug: "nashik-wine-temple",
        subtitle: "नाशिक देवदर्शन",
        description: "Blend spirituality with sophistication. Visit ancient temples, Kumbh Mela ghats, and renowned vineyards.",
        longDescription: "Discover the many facets of Nashik - India's wine capital and one of the sacred Char Dham sites. This unique tour combines spiritual experiences at ancient temples and Kumbh Mela ghats with visits to award-winning vineyards. Taste premium Indian wines, explore the Trimbakeshwar Jyotirlinga, and enjoy the scenic beauty of Nashik's countryside.",
        images: [
            "/images/nashik-vineyard.png",
            "/images/kolhapur-temple.png"
        ],
        duration: "3 Days / 2 Nights",
        price: 11000,
        originalPrice: 13000,
        discount: 15,
        category: "Heritage",
        difficulty: "Easy",
        groupSize: "2-15",
        destinations: ["Nashik", "Trimbakeshwar", "Sula Vineyards"],
        highlights: [
            "Trimbakeshwar Jyotirlinga",
            "Sula & York Winery tours",
            "Wine tasting sessions",
            "Ramkund holy dip",
            "Pandavleni Caves"
        ],
        inclusions: [
            "Boutique hotel stay",
            "Breakfast and dinner",
            "Winery tours & tasting",
            "AC vehicle",
            "Temple guide"
        ],
        exclusions: [
            "Puja arrangements",
            "Wine purchases",
            "Lunch",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival and Temple Tour",
                description: "Arrive in Nashik. Visit Trimbakeshwar Temple (Jyotirlinga). Evening aarti at Ramkund on Godavari banks."
            },
            {
                day: 2,
                title: "Vineyard Experience",
                description: "Full day vineyard hopping - Sula, York, and Soma wineries. Wine tasting and grape stomping experience. Sunset at vineyard."
            },
            {
                day: 3,
                title: "Exploration and Departure",
                description: "Morning visit to Pandavleni Caves and Saptashrungi Devi. Local market visit. Depart with wine purchases."
            }
        ],
        bestTime: "September to March",
        rating: 4.6,
        reviews: 234,
        featured: false
    },
    {
        id: 7,
        title: "Mumbai Heritage Walk",
        slug: "mumbai-heritage-walk",
        subtitle: "मुंबई वारसा",
        description: "Explore the architectural marvels of Mumbai - from Gothic buildings to ancient caves.",
        longDescription: "Discover the soul of Mumbai through its magnificent heritage. Walk through the Gothic and Art Deco precincts of Fort area, explore the ancient Elephanta and Kanheri caves, and experience the vibrant culture of India's financial capital. From the Gateway of India to the dabbawalas of CST, this tour reveals Mumbai's fascinating layers of history.",
        images: [
            "/images/mumbai-skyline.jpg"
        ],
        duration: "3 Days / 2 Nights",
        price: 13500,
        originalPrice: 16000,
        discount: 16,
        category: "Urban",
        difficulty: "Easy",
        groupSize: "2-20",
        destinations: ["Mumbai", "Elephanta", "Kanheri"],
        highlights: [
            "Gateway of India",
            "CST Railway Station (UNESCO)",
            "Elephanta Caves",
            "Kanheri Caves",
            "Dabbawala tour",
            "Street food trail"
        ],
        inclusions: [
            "4-star hotel stay",
            "Breakfast",
            "Local transport",
            "Walking tour guides",
            "Ferry to Elephanta",
            "All entry fees"
        ],
        exclusions: [
            "Lunch and dinner",
            "Shopping",
            "Personal expenses",
            "Tips"
        ],
        itinerary: [
            {
                day: 1,
                title: "South Mumbai Heritage",
                description: "Arrive and check-in. Walking tour of Fort area - CST Station, Flora Fountain, Horniman Circle. Evening at Marine Drive."
            },
            {
                day: 2,
                title: "Caves and Culture",
                description: "Morning ferry to Elephanta Caves. Afternoon visit to Kanheri Caves in Sanjay Gandhi National Park. Evening Dabbawala experience."
            },
            {
                day: 3,
                title: "Markets and Departure",
                description: "Visit Crawford Market and Chor Bazaar. Street food trail through Mohammed Ali Road. Depart with Mumbai memories."
            }
        ],
        bestTime: "October to March",
        rating: 4.7,
        reviews: 345,
        featured: false
    },
    {
        id: 8,
        title: "Tadoba Tiger Safari",
        slug: "tadoba-tiger-safari",
        subtitle: "ताडोबा वाघ सफारी",
        description: "Experience the thrill of spotting Royal Bengal Tigers in Maharashtra's largest national park.",
        longDescription: "Get ready for the adventure of a lifetime at Tadoba-Andhari Tiger Reserve. Known as the 'Jewel of Vidarbha', this pristine wilderness is home to over 80 tigers and diverse wildlife. Expert naturalists guide you through deciduous forests, open meadows, and serene lakes in search of the magnificent Royal Bengal Tiger. An unforgettable wildlife experience in the heart of Maharashtra.",
        images: [
            "/images/tadoba-tiger.png"
        ],
        duration: "4 Days / 3 Nights",
        price: 22000,
        originalPrice: 26000,
        discount: 15,
        category: "Wildlife",
        difficulty: "Easy",
        groupSize: "4-12",
        destinations: ["Tadoba", "Chandrapur"],
        highlights: [
            "4 jungle safaris",
            "Tiger sighting guarantee*",
            "Expert naturalist",
            "Wildlife photography",
            "Night safari experience"
        ],
        inclusions: [
            "Jungle resort stay",
            "All meals",
            "4 safari permits",
            "Gypsy and guide",
            "Naturalist services",
            "Transfers from Nagpur"
        ],
        exclusions: [
            "Camera fees",
            "Personal expenses",
            "Tips",
            "Extra safaris"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival and Evening Safari",
                description: "Arrive at Nagpur, transfer to Tadoba (3 hours). Check-in at jungle resort. Evening safari into the core zone."
            },
            {
                day: 2,
                title: "Full Day Safaris",
                description: "Early morning safari at dawn - best time for tiger sighting. Rest and lunch. Afternoon safari exploring different zones."
            },
            {
                day: 3,
                title: "Safari and Nature Walks",
                description: "Morning safari in buffer zone. Afternoon nature walk around resort. Night safari experience (subject to availability)."
            },
            {
                day: 4,
                title: "Final Safari and Departure",
                description: "Last safari at sunrise. Breakfast and check-out. Transfer to Nagpur airport/station."
            }
        ],
        bestTime: "March to May (Tigers), Oct-Feb (Pleasant)",
        rating: 4.8,
        reviews: 178,
        featured: true
    },
    {
        id: 9,
        title: "Kolhapur Cultural",
        slug: "kolhapur-cultural",
        subtitle: "कोल्हापूर संस्कृती",
        description: "Immerse yourself in the rich culture of Kolhapur - temples, palaces, wrestling, and spicy cuisine.",
        longDescription: "Experience the royal and cultural heritage of Kolhapur, a city that has preserved its traditions for centuries. Visit the powerful Mahalakshmi Temple, explore the magnificent New Palace, watch traditional wrestling (Kushti) at taleem, and indulge in authentic Kolhapuri misal and tambda-pandhra rassa. Don't forget to shop for the famous Kolhapuri chappals!",
        images: [
            "/images/kolhapur-temple.png"
        ],
        duration: "3 Days / 2 Nights",
        price: 8500,
        originalPrice: 10000,
        discount: 15,
        category: "Heritage",
        difficulty: "Easy",
        groupSize: "2-15",
        destinations: ["Kolhapur", "Panhala"],
        highlights: [
            "Mahalakshmi Temple darshan",
            "New Palace museum",
            "Traditional Kushti",
            "Panhala Fort excursion",
            "Kolhapuri cuisine trail"
        ],
        inclusions: [
            "Heritage hotel stay",
            "All meals (authentic Kolhapuri)",
            "AC vehicle",
            "Local guide",
            "Kushti experience"
        ],
        exclusions: [
            "Temple donations",
            "Shopping",
            "Personal expenses",
            "Camera fees"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival and Temple Visit",
                description: "Arrive in Kolhapur. Visit Mahalakshmi Temple for darshan. Evening at New Palace museum and Rankala Lake."
            },
            {
                day: 2,
                title: "Culture and Cuisine",
                description: "Morning Kushti experience at traditional taleem. Visit Jotiba Temple. Afternoon food trail - misal, tambda rassa. Chappal shopping."
            },
            {
                day: 3,
                title: "Panhala and Departure",
                description: "Full morning at Panhala Fort - history of Shivaji Maharaj's escape. Local market visit. Departure with royal memories."
            }
        ],
        bestTime: "October to March",
        rating: 4.6,
        reviews: 156,
        featured: false
    },
    {
        id: 10,
        title: "Lavasa-Panshet",
        slug: "lavasa-panshet-retreat",
        subtitle: "लवासा-पानशेत",
        description: "Relax by pristine lakes and enjoy water sports in Maharashtra's mini Italy.",
        longDescription: "Discover the Italian-inspired hill town of Lavasa and the serene backwaters of Panshet. This retreat combines architectural beauty with natural splendor. Enjoy water sports, lakeside camping, and scenic boat rides. Perfect for those seeking a quick escape from Pune, with Instagram-worthy locations at every turn.",
        images: [
            "/images/lavasa-lake-city.jpg"
        ],
        duration: "2 Days / 1 Night",
        price: 6500,
        originalPrice: 8000,
        discount: 19,
        category: "Leisure",
        difficulty: "Easy",
        groupSize: "2-20",
        destinations: ["Lavasa", "Panshet"],
        highlights: [
            "Lavasa town exploration",
            "Panshet water sports",
            "Lakeside camping option",
            "Scenic boat rides",
            "Nature walks"
        ],
        inclusions: [
            "Resort/camp stay",
            "Breakfast and dinner",
            "Water sports package",
            "AC transport from Pune",
            "Boat ride"
        ],
        exclusions: [
            "Extra activities",
            "Lunch",
            "Personal expenses",
            "Alcohol"
        ],
        itinerary: [
            {
                day: 1,
                title: "Pune to Lavasa-Panshet",
                description: "Depart from Pune. Explore Lavasa town and promenade. Afternoon at Panshet - kayaking, speed boat. Lakeside dinner and camping."
            },
            {
                day: 2,
                title: "Morning Activities and Return",
                description: "Early morning nature walk or bird watching. Breakfast by the lake. Additional water sports. Return to Pune by afternoon."
            }
        ],
        bestTime: "July to February",
        rating: 4.4,
        reviews: 423,
        featured: false
    },
    {
        id: 11,
        title: "Pune Heritage & Food",
        slug: "pune-heritage-food",
        subtitle: "पुणे दर्शन",
        description: "Explore the cultural capital - historic landmarks, museums, cafes, and legendary Puneri food.",
        longDescription: "Discover Pune's rich heritage as the seat of Peshwa power and modern-day IT hub. This tour takes you through iconic landmarks like Shaniwar Wada and Aga Khan Palace, vibrant markets, and the famous food lanes of FC Road and JM Road. Experience the blend of old and new that makes Pune uniquely charming.",
        images: [
            "/images/pune-lonely-planet.jpg"
        ],
        duration: "2 Days / 1 Night",
        price: 5000,
        originalPrice: 6000,
        discount: 17,
        category: "Urban",
        difficulty: "Easy",
        groupSize: "2-15",
        destinations: ["Pune"],
        highlights: [
            "Shaniwar Wada",
            "Aga Khan Palace",
            "Raja Dinkar Kelkar Museum",
            "FC Road food trail",
            "Osho Ashram visit"
        ],
        inclusions: [
            "Boutique hotel stay",
            "Breakfast",
            "Local transport",
            "Heritage guide",
            "Food trail experience"
        ],
        exclusions: [
            "Personal expenses",
            "Dinner",
            "Shopping",
            "Osho meditation fees"
        ],
        itinerary: [
            {
                day: 1,
                title: "Heritage Exploration",
                description: "Visit Shaniwar Wada, Kelkar Museum, and Pataleshwar Caves. Evening at FC Road for street food and cafe hopping."
            },
            {
                day: 2,
                title: "Modern Pune and Departure",
                description: "Morning at Aga Khan Palace and Osho Ashram. Visit local markets. Authentic Puneri breakfast at Kayani Bakery. Departure."
            }
        ],
        bestTime: "October to March",
        rating: 4.5,
        reviews: 287,
        featured: false
    },
    {
        id: 12,
        title: "Bhandardara Monsoon",
        slug: "bhandardara-monsoon",
        subtitle: "भंडारदरा पावसाळी सहल",
        description: "Witness the magical transformation of Bhandardara - waterfalls, greenery, and firefly camping.",
        longDescription: "Experience the monsoon magic of Bhandardara, Maharashtra's hidden paradise. Watch the majestic Arthur Lake overflow into cascading waterfalls, trek through misty mountains, and witness the ethereal firefly spectacle in May-June. This tour offers a unique blend of adventure, natural beauty, and the raw power of Maharashtra's monsoons.",
        images: [
            "/images/bhandardara-lake.jpg"
        ],
        duration: "2 Days / 1 Night",
        price: 4500,
        originalPrice: 5500,
        discount: 18,
        category: "Adventure",
        difficulty: "Moderate",
        groupSize: "6-25",
        destinations: ["Bhandardara", "Randha Falls", "Wilson Dam"],
        highlights: [
            "Randha Falls viewing",
            "Arthur Lake boat ride",
            "Firefly camping (seasonal)",
            "Ratangad trek option",
            "Umbrella waterfall trek"
        ],
        inclusions: [
            "Tent/cottage stay",
            "All meals",
            "Bonfire",
            "Transport from city",
            "Trekking guide"
        ],
        exclusions: [
            "Personal gear",
            "Travel insurance",
            "Extra activities",
            "Tips"
        ],
        itinerary: [
            {
                day: 1,
                title: "Journey and Waterfall Exploration",
                description: "Depart morning. Visit Randha Falls and Wilson Dam. Check-in and lakeside exploration. Evening bonfire with local songs."
            },
            {
                day: 2,
                title: "Trek and Return",
                description: "Early morning trek to Ratangad or Umbrella Falls. Breakfast by the lake. Visit Amruteshwar Temple. Return journey."
            }
        ],
        bestTime: "July to October (Monsoon), May-June (Fireflies)",
        rating: 4.7,
        reviews: 345,
        featured: false
    },
    {
        id: 13,
        title: "Malshej Ghat Monsoon",
        slug: "malshej-ghat-monsoon",
        subtitle: "माळशेज घाट वर्षाविहार",
        description: "Experience the misty mountains, cascading waterfalls, and pink flamingos of Malshej Ghat.",
        longDescription: "Malshej Ghat is a mountain pass in the Western Ghats range in the Thane-Pune district of Maharashtra, India. The site is nestled in the lofty rugged hills of the Western Ghats. It is known for its misty mountains, cascading waterfalls, and the pink flamingos that migrate here during the monsoon. It is a perfect monsoon getaway for nature lovers and trekkers.",
        images: [
            "/images/malshej-ghat-road.jpg"
        ],
        duration: "2 Days / 1 Night",
        price: 4200,
        originalPrice: 5000,
        discount: 16,
        category: "Hill Station",
        difficulty: "Easy",
        groupSize: "4-20",
        destinations: ["Malshej Ghat", "Pimpalgaon Joga Dam"],
        highlights: [
            "Malshej Falls",
            "Flamingo watching",
            "Harishchandragad view",
            "Pimpalgaon Joga Dam",
            "Foggy mountain drive"
        ],
        inclusions: [
            "Resort stay",
            "All meals",
            "Transport from Mumbai/Pune",
            "Guide",
            "First aid"
        ],
        exclusions: [
            "Personal expenses",
            "Shopping",
            "Extra snacks"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival and Waterfalls",
                description: "Drive through the misty Malshej Ghat. Stop at various waterfalls. Check-in at resort. Evening walk near Pimpalgaon Joga Dam."
            },
            {
                day: 2,
                title: "Nature and Return",
                description: "Early morning bird watching (flamingos). Visit Shivneri Fort on the way back if time permits. Return journey."
            }
        ],
        bestTime: "June to September",
        rating: 4.5,
        reviews: 120,
        featured: false
    },
    {
        id: 14,
        title: "Toranmal Hill Station",
        slug: "toranmal-hill-station",
        subtitle: "तोरणमाळ हिल स्टेशन",
        description: "Discover the hidden gem of Satpura ranges. Serene lakes, ancient caves, and cool weather await.",
        longDescription: "Nestled in the Satpura ranges of Nandurbar district, Toranmal is a serene hill station known for its rich tribal culture and natural beauty. Visit the stunning Yashwant Lake, explore the ancient Machhindranath Cave, and enjoy breathtaking views from Khadki Point. It's an ideal destination for those seeking tranquility away from the crowds.",
        images: [
            "/images/toranmal-lake.jpg"
        ],
        duration: "3 Days / 2 Nights",
        price: 7500,
        originalPrice: 9000,
        discount: 17,
        category: "Hill Station",
        difficulty: "Easy",
        groupSize: "2-12",
        destinations: ["Toranmal", "Yashwant Lake", "Machhindranath Cave"],
        highlights: [
            "Yashwant Lake boating",
            "Machhindranath Cave exploration",
            "Sunset at Khadki Point",
            "Lotus Lake visit",
            "Tribal culture experience"
        ],
        inclusions: [
            "Resort stay",
            "All meals",
            "Local sightseeing",
            "Guide fees",
            "Transport from Nandurbar"
        ],
        exclusions: [
            "Personal expenses",
            "Camera fees",
            "Tips"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival and Lake Visit",
                description: "Arrive at Toranmal. Check-in and refreshing lunch. Evening boat ride at Yashwant Lake and visit to Lotus Lake."
            },
            {
                day: 2,
                title: "Caves and Viewpoints",
                description: "Morning trek to Machhindranath Cave. Afternoon visit to Khadki Point and Sita Khai for panoramic valley views."
            },
            {
                day: 3,
                title: "Culture and Departure",
                description: "Visit local tribal market and Gorakhnath Temple. Depart with peaceful memories."
            }
        ],
        bestTime: "October to February",
        rating: 4.6,
        reviews: 85,
        featured: false
    },
    {
        id: 15,
        title: "Tarkarli Scuba Adventure",
        slug: "tarkarli-scuba-adventure",
        subtitle: "तारकर्ली स्कूबा डायव्हिंग",
        description: "Dive into the clear waters of Tarkarli and experience the underwater world of Konkan.",
        longDescription: "For adventure lovers, Tarkarli offers the best scuba diving experience in Maharashtra. Explore vibrant coral reefs and exotic marine life in the crystal-clear waters near Sindhudurg Fort. This tour also includes parasailing, banana boat rides, and a relaxing stay at a beachfront resort in Malvan.",
        images: [
            "/images/hero_konkan_beach.png"
        ],
        duration: "3 Days / 2 Nights",
        price: 12000,
        originalPrice: 14500,
        discount: 17,
        category: "Beach",
        difficulty: "Moderate",
        groupSize: "2-10",
        destinations: ["Tarkarli", "Malvan", "Sindhudurg"],
        highlights: [
            "Scuba diving (Training included)",
            "Parasailing & Jet Ski",
            "Sindhudurg Fort tour",
            "Malvani seafood feast",
            "Dolphin safari"
        ],
        inclusions: [
            "Beach resort stay",
            "All water sports",
            "Breakfast & Dinner",
            "Scuba gear & instructor",
            "AC Transport"
        ],
        exclusions: [
            "Lunch",
            "Underwater photography/video (extra)",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Malvan",
                description: "Arrive at Malvan. Visit Rock Garden and Chivla Beach. Evening sunset at Sindhudurg Fort."
            },
            {
                day: 2,
                title: "Scuba and Water Sports",
                description: "Full day of water sports at Tsunami Island. Scuba diving session with certified instructors. Evening leisure."
            },
            {
                day: 3,
                title: "Departure",
                description: "Morning Dolphin safari. Shopping for Malvani masalas and cashews. Departure."
            }
        ],
        bestTime: "October to May",
        rating: 4.9,
        reviews: 112,
        featured: true
    },
    {
        id: 16,
        title: "Alibaug & Murud Weekend",
        slug: "alibaug-murud-weekend",
        subtitle: "अलिबाग-मुरुड जंजिरा",
        description: "A perfect coastal getaway visiting the sea forts of Kolaba and the unconquered Murud Janjira.",
        longDescription: "Explore the historic coastal towns of Alibaug and Murud. Famous for their clean beaches and imposing sea forts, this short trip is perfect for history buffs and beach lovers alike. Take a sailboat to the unconquered Janjira fort, relax on Nagaon beach, and enjoy fresh coconut water by the sea.",
        images: [
            "/images/konkan-beach.png"
        ],
        duration: "2 Days / 1 Night",
        price: 6000,
        originalPrice: 7500,
        discount: 20,
        category: "Beach",
        difficulty: "Easy",
        groupSize: "2-20",
        destinations: ["Alibaug", "Murud", "Nagaon"],
        highlights: [
            "Murud Janjira Sea Fort",
            "Kolaba Fort",
            "Nagaon Beach water sports",
            "Birla Temple",
            "Coastal drive"
        ],
        inclusions: [
            "Hotel accommodation",
            "Breakfast",
            "Ferry tickets",
            "AC Vehicle",
            "Guide for Janjira"
        ],
        exclusions: [
            "Meals (Lunch/Dinner)",
            "Water sports charges",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Alibaug Forts",
                description: "Arrival in Alibaug. Visit Kolaba Fort during low tide. Evening water sports at Nagaon Beach."
            },
            {
                day: 2,
                title: "Murud Janjira",
                description: "Drive to Murud. Take a sailboat to the majestic Janjira Fort. Explore the fort and return. Departure."
            }
        ],
        bestTime: "Year Round",
        rating: 4.5,
        reviews: 204,
        featured: false
    },
    {
        id: 17,
        title: "Khandala Nature Walk",
        slug: "khandala-nature-walk",
        subtitle: "खंडाळा निसर्ग",
        description: "Experience the misty charm of Khandala, famous for its viewpoints and hiking trails.",
        longDescription: "While often clubbed with Lonavala, Khandala has its own unique charm. This tour focuses on the quieter, greener side of the twin hill stations. Hike up to Duke's Nose for a panoramic view, visit the ancient rock-cut Bhaja caves, and enjoy a peaceful picnic at Bhushi Dam's quieter backwaters.",
        images: [
            "/images/hero-sahyadri_fort.png"
        ],
        duration: "2 Days / 1 Night",
        price: 4800,
        originalPrice: 6000,
        discount: 20,
        category: "Hill Station",
        difficulty: "Easy",
        groupSize: "2-15",
        destinations: ["Khandala", "Duke's Nose", "Lonavala"],
        highlights: [
            "Duke's Nose Trek",
            "Rajmachi Garden",
            "Sunset Point",
            "Wax Museum visit",
            "Foggy morning walks"
        ],
        inclusions: [
            "Hotel stay",
            "All meals",
            "Local guide",
            "Transport"
        ],
        exclusions: [
            "Personal expenses",
            "Shopping"
        ],
        itinerary: [
            {
                day: 1,
                title: "Khandala Viewpoints",
                description: "Arrive in Khandala. Visit Rajmachi Garden and Sunset Point. Hiking to Duke's Nose (Nagphani)."
            },
            {
                day: 2,
                title: "Leisure and Return",
                description: "Morning walk in the mist. Visit Wax Museum. Buy chikki and fudge. Return journey."
            }
        ],
        bestTime: "June to February",
        rating: 4.4,
        reviews: 98,
        featured: false
    },
    {
        id: 18,
        title: "Mahabaleshwar History Tour",
        slug: "mahabaleshwar-history",
        subtitle: "प्रतापगड आणि इतिहास",
        description: "Beyond strawberries, explore the fascinating history of Pratapgad and Old Mahabaleshwar.",
        longDescription: "Mahabaleshwar is steep deep in history. This specialized tour focuses on the Maratha heritage of the region. Spend a full day exploring the massive Pratapgad fort, the site of the historic encounter between Shivaji Maharaj and Afzal Khan. Visit the ancient Shiva temple in Old Mahabaleshwar that gives the town its name.",
        images: [
            "/images/sahyadri-fort.png"
        ],
        duration: "2 Days / 1 Night",
        price: 5500,
        originalPrice: 7000,
        discount: 21,
        category: "Heritage",
        difficulty: "Easy",
        groupSize: "2-20",
        destinations: ["Pratapgad", "Old Mahabaleshwar"],
        highlights: [
            "Pratapgad Fort detailed tour",
            "Krishnabai Temple",
            "Panchganga Temple",
            "Bhavani Mata Temple",
            "Arthur's Seat"
        ],
        inclusions: [
            "Resort stay",
            "Breakfast & Dinner",
            "Expert Historian Guide",
            "Transport"
        ],
        exclusions: [
            "Lunch",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Old Mahabaleshwar",
                description: "Visit the 5 temples of Old Mahabaleshwar (Panchganga). See the source of 5 rivers. Sunset at Arthur's Seat."
            },
            {
                day: 2,
                title: "Pratapgad Expedition",
                description: "Drive to Pratapgad. Guided tour of the fort, Afzal Khan tomb, and Bhavani temple. Return."
            }
        ],
        bestTime: "Year Round",
        rating: 4.7,
        reviews: 145,
        featured: false
    },
    {
        id: 19,
        title: "Chhatrapati Sambhajinagar Historical Trail",
        slug: "chhatrapati-sambhajinagar-historical",
        subtitle: "छत्रपती संभाजीनगर इतिहास",
        description: "A journey through the gates of Chhatrapati Sambhajinagar, Daulatabad Fort, and Mughal architecture.",
        longDescription: "While Ajanta-Ellora steal the spotlight, Chhatrapati Sambhajinagar city itself is a treasure trove of history. Explore the imposing Daulatabad Fort, known as the most impregnable fort of the Deccan. Visit the Bibi Ka Maqbara, often called the Taj of the Deccan, and see the ancient water mill (Panchakki).",
        images: [
            "/images/hero_ajanta_caves.png"
        ],
        duration: "2 Days / 1 Night",
        price: 6500,
        originalPrice: 8000,
        discount: 18,
        category: "Heritage",
        difficulty: "Moderate",
        groupSize: "2-15",
        destinations: ["Chhatrapati Sambhajinagar", "Daulatabad"],
        highlights: [
            "Daulatabad Fort trek",
            "Bibi Ka Maqbara",
            "Panchakki",
            "Chhatrapati Sambhajinagar Caves",
            "Himroo Weaving Centre"
        ],
        inclusions: [
            "Hotel stay",
            "Breakfast & Dinner",
            "Guide fees",
            "Monument tickets",
            "Local transport"
        ],
        exclusions: [
            "Lunch",
            "Camera fees",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "City Monuments",
                description: "Visit Bibi Ka Maqbara and Panchakki. Explore Chhatrapati Sambhajinagar caves. Visit a Himroo shawl workshop."
            },
            {
                day: 2,
                title: "Daulatabad Fort",
                description: "Morning climb to Daulatabad Fort (Devgiri). Explore the dark passages and cannons. Departure."
            }
        ],
        bestTime: "August to February",
        rating: 4.6,
        reviews: 110,
        featured: false
    },
    {
        id: 20,
        title: "Shirdi Spiritual Journey",
        slug: "shirdi-spiritual-journey",
        subtitle: "शिर्डी धार्मिक यात्रा",
        description: "Seek blessings at the holy shrine of Sai Baba in Shirdi and Shani Shingnapur.",
        longDescription: "A spiritual pilgrimage to the abode of Sai Baba. Experience the peace and devotion at the Samadhi Mandir. This tour also covers a visit to the unique village of Shani Shingnapur, where houses have no doors, displaying the residents' immense faith.",
        images: [
            "/images/shirdi-temple.jpg"
        ],
        duration: "2 Days / 1 Night",
        price: 4500,
        originalPrice: 5500,
        discount: 18,
        category: "Heritage",
        difficulty: "Easy",
        groupSize: "2-40",
        destinations: ["Shirdi", "Shani Shingnapur"],
        highlights: [
            "Sai Baba Samadhi Mandir",
            "Dwarkamai & Chavadi",
            "Shani Shingnapur Darshan",
            "Prasadalaya lunch",
            "Evening Aarti"
        ],
        inclusions: [
            "Hotel AC accommodation",
            "VIP Darshan pass assistance",
            "Breakfast",
            "AC Transport"
        ],
        exclusions: [
            "Darshan pass cost",
            "Meals",
            "Donations"
        ],
        itinerary: [
            {
                day: 1,
                title: "Shirdi Darshan",
                description: "Arrival in Shirdi. Check-in. Visit Samadhi Mandir and temple complex. Evening Aarti."
            },
            {
                day: 2,
                title: "Shani Shingnapur",
                description: "Morning drive to Shani Shingnapur (70km). Darshan of Shani Dev. Return journey."
            }
        ],
        bestTime: "Year Round",
        rating: 4.8,
        reviews: 540,
        featured: true
    },
    {
        id: 21,
        title: "Tadoba Photography Expedition",
        slug: "tadoba-photography",
        subtitle: "ताडोबा वाइल्डलाइफ फोटोग्राफी",
        description: "A specialized tour for wildlife photographers focusing on tracking tigers and capturing perfect shots.",
        longDescription: "Designed for serious wildlife enthusiasts and photographers. This tour offers full-day safaris (subject to permits) or premium zone safaris with experienced naturalist guides who understand lighting and positioning for the best shots. Focus on tracking tigers, leopards, and sloth bears.",
        images: [
            "/images/hero_tadoba_tiger.png"
        ],
        duration: "3 Days / 2 Nights",
        price: 28000,
        originalPrice: 32000,
        discount: 12,
        category: "Wildlife",
        difficulty: "Moderate",
        groupSize: "4 (Gypsy limit)",
        destinations: ["Tadoba"],
        highlights: [
            "premium zone safaris",
            "Dedicated photography gypsy",
            "Expert tracker guide",
            "Post-safari photo review",
            "Bird photography"
        ],
        inclusions: [
            "Luxury Jungle Lodge",
            "All meals",
            "4 Private Gypsy Safaris",
            "Camera lens rental assistance"
        ],
        exclusions: [
            "Camera fees (high for telephoto)",
            "Tips for guides/drivers",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "First Light",
                description: "Arrive and immediate afternoon safari. Focus on waterholes for tiger sightings."
            },
            {
                day: 2,
                title: "Deep Jungle",
                description: "Morning and afternoon safaris. Tracking movement in different zones like Moharli and Kolara."
            },
            {
                day: 3,
                title: "Final Frames",
                description: "Morning safari for golden hour shots. Breakfast and departure."
            }
        ],
        bestTime: "April to June (Best sightings)",
        rating: 5.0,
        reviews: 45,
        featured: false
    },
    {
        id: 22,
        title: "Pench Wildlife Safari",
        slug: "pench-wildlife-safari",
        subtitle: "पेंच जंगल सफारी",
        description: "Visit the land of Mowgli. Explore Pench National Park, straddling the border of Maharashtra and MP.",
        longDescription: "Pench National Park inspired Rudyard Kipling's 'The Jungle Book'. This park offers a diverse landscape of teak forests and open grasslands. It is an excellent place to spot tigers, leopards, wild dogs (dholes), and huge herds of deer. A calmer, more scenic alternative to the busy Tadoba.",
        images: [
            "/images/tadoba-tiger.png"
        ],
        duration: "3 Days / 2 Nights",
        price: 16000,
        originalPrice: 19000,
        discount: 15,
        category: "Wildlife",
        difficulty: "Easy",
        groupSize: "4-12",
        destinations: ["Pench", "Sillari"],
        highlights: [
            "Jungle Book settings",
            "Tiger & Leopard sighting",
            "Wolf sanctuary visit",
            "Pottery village tour",
            "Night safari"
        ],
        inclusions: [
            "Jungle resort stay",
            "All meals",
            "3 Jeep Safaris",
            "Pick up from Nagpur"
        ],
        exclusions: [
            "Tips",
            "Personal expenses",
            "Extra safari"
        ],
        itinerary: [
            {
                day: 1,
                title: "Welcome to the Jungle",
                description: "Drive from Nagpur to Pench. Evening nature walk or night safari in buffer zone."
            },
            {
                day: 2,
                title: "The Jungle Book",
                description: "Morning and afternoon safaris in the core zone. Spotting 'Sher Khan' and 'Bagheera'."
            },
            {
                day: 3,
                title: "Village and Departure",
                description: "Morning safari. Visit to the nearby potter's village (Pachdar). Departure."
            }
        ],
        bestTime: "October to June",
        rating: 4.7,
        reviews: 132,
        featured: false
    }
];

export const getTourById = (id) => {
    return toursData.find(tour => tour.id === parseInt(id));
};

export const getTourBySlug = (slug) => {
    return toursData.find(tour => tour.slug === slug);
};

export const getFeaturedTours = () => {
    return toursData.filter(tour => tour.featured);
};

export const getToursByCategory = (category) => {
    return toursData.filter(tour => tour.category === category);
};

export const searchTours = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return toursData.filter(tour =>
        tour.title.toLowerCase().includes(lowercaseQuery) ||
        tour.description.toLowerCase().includes(lowercaseQuery) ||
        tour.destinations.some(dest => dest.toLowerCase().includes(lowercaseQuery))
    );
};

export default toursData;
