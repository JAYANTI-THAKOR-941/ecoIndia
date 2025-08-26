const statesData = [
    // 1. Andhra Pradesh
    {
        name: "Andhra Pradesh",
        image: "https://example.com/andr_pradesh.jpg",
        description: "A coastal & agrarian state known for its rice paddies and Tirupati Temple.",
        population: "5.26 crore",
        literacyRate: "67%",
        languages: ["Telugu", "Urdu", "Hindi", "English"],
        gdp: "₹12 lakh crore (2023)",
        industries: ["Agro-based", "Petrochemical", "Pharma"],
        education: ["Andhra University", "Sri Venkateswara University"],
        healthcare: "Regional medical colleges and private multispecialty hospitals.",
        tourismInfo: "Beaches (Vishakhapatnam), world-famous temples, and wildlife sanctuaries.",
        touristPlaces: ["Tirupati", "Araku Valley", "Vishakhapatnam", "Srisailam"],
        keyIssues: ["Farmer debt", "Cyclone damage", "Flood control"],
        insights: ["Rice export leader", "Solar park investments", "Growing IT hubs"],
        chartData: [
            { name: "Literacy", value: 67 },
            { name: "Urbanization", value: 40 },
            { name: "Healthcare Index", value: 60 },
            { name: "Employment Rate", value: 62 },
        ]
    },
    // 2. Arunachal Pradesh
    {
        name: "Arunachal Pradesh",
        image: "https://example.com/arunachal.jpg",
        description: "Northeastern state with rich biodiversity and tribal heritage.",
        population: "15.5 lakh",
        literacyRate: "66%",
        languages: ["Apatani", "Nyishi", "Hindi", "English"],
        gdp: "₹45,000 crore (2023)",
        industries: ["Hydel power", "Agri-horti", "Handloom"],
        education: ["Rajiv Gandhi University"],
        healthcare: "Community health centers; improving district infrastructure.",
        tourismInfo: "Paradise for trekkers, wildlife lovers, and culture enthusiasts.",
        touristPlaces: ["Tawang", "Ziro", "Namdapha", "Siang Valley"],
        keyIssues: ["Road connectivity", "Power transmission", "Healthcare access"],
        insights: ["Renewable energy potential", "Eco-tourism growth", "Cultural preservation"],
        chartData: [
            { name: "Literacy", value: 66 },
            { name: "Urbanization", value: 22 },
            { name: "Healthcare Index", value: 55 },
            { name: "Employment Rate", value: 58 },
        ]
    },
    // 3. Assam
    {
        name: "Assam",
        image: "https://example.com/assam.jpg",
        description: "Fertile northeastern plains, famed for tea gardens and riverine culture.",
        population: "3.5 crore",
        literacyRate: "73%",
        languages: ["Assamese", "Bengali", "Hindi", "English"],
        gdp: "₹7 lakh crore (2023)",
        industries: ["Tea", "Oil & gas", "Petrochemicals"],
        education: ["Tezpur University", "Dibrugarh University"],
        healthcare: "Medical colleges in Guwahati, Jorhat; rural PHCs.",
        tourismInfo: "Kaziranga’s rhinoceros, Majuli’s river island, and historic sites.",
        touristPlaces: ["Kaziranga", "Majuli", "Manas", "Sivasagar"],
        keyIssues: ["Flooding", "Erosion", "Insurgent activity in parts"],
        insights: ["Tea exports rising", "Oil refining expansion", "River tourism initiatives"],
        chartData: [
            { name: "Literacy", value: 73 },
            { name: "Urbanization", value: 35 },
            { name: "Healthcare Index", value: 62 },
            { name: "Employment Rate", value: 60 },
        ]
    },
    // 4. Bihar
    {
        name: "Bihar",
        image: "https://example.com/bihar.jpg",
        description: "Land of rivers Ganga & popular for its historical & cultural legacy.",
        population: "12.8 crore",
        literacyRate: "70%",
        languages: ["Hindi", "Maithili", "Urdu", "English"],
        gdp: "₹9 lakh crore (2023)",
        industries: ["Agriculture", "Sugar mills", "Handicraft"],
        education: ["Magadh University", "Patna University"],
        healthcare: "Improving state-run hospitals; challenges in rural coverage.",
        tourismInfo: "Ancient Nalanda, Buddhist pilgrimage sites, and heritage forts.",
        touristPlaces: ["Bodh Gaya", "Nalanda", "Vaishali", "Patna Sahib"],
        keyIssues: ["Rural poverty", "Child malnutrition", "Unemployment"],
        insights: ["RR infrastructure investment", "Agri-technology uptake", "Tourism bottling"],
        chartData: [
            { name: "Literacy", value: 70 },
            { name: "Urbanization", value: 38 },
            { name: "Healthcare Index", value: 58 },
            { name: "Employment Rate", value: 55 },
        ]
    },
    // 5. Chhattisgarh
    {
        name: "Chhattisgarh",
        image: "https://example.com/chhattisgarh.jpg",
        description: "Mineral-rich central state with tribal culture & scenic hills.",
        population: "2.8 crore",
        literacyRate: "71%",
        languages: ["Hindi", "Chhattisgarhi", "Gondi"],
        gdp: "₹5 lakh crore (2023)",
        industries: ["Steel", "Mining", "Power"],
        education: ["Rajiv Gandhi Technical University"],
        healthcare: "District hospitals and evolving rural health programs.",
        tourismInfo: "Chitrakote Falls, Bastar forested locales, ancient temples.",
        touristPlaces: ["Chitrakote Falls", "Bastar", "Barnawapara", "Sirpur"],
        keyIssues: ["Naxalite insurgency", "Deforestation", "Water quality"],
        insights: ["Steel plant expansions", "Solar power drives", "Ecotourism trials"],
        chartData: [
            { name: "Literacy", value: 71 },
            { name: "Urbanization", value: 30 },
            { name: "Healthcare Index", value: 63 },
            { name: "Employment Rate", value: 57 },
        ]
    },
    // 6. Goa
    {
        name: "Goa",
        image: "https://example.com/goa.jpg",
        description: "Smallest state, famous for beaches, nightlife, and Portuguese heritage.",
        population: "15 lakh",
        literacyRate: "88%",
        languages: ["Konkani", "Marathi", "English"],
        gdp: "₹2 lakh crore (2023)",
        industries: ["Tourism", "Mining", "IT"],
        education: ["Goa University"],
        healthcare: "Good mix of government and private hospitals.",
        tourismInfo: "Beach tourism, heritage churches, and spice plantation visits.",
        touristPlaces: ["Calangute", "Baga", "Old Goa", "Dudhsagar Falls"],
        keyIssues: ["Overtourism", "Environmental degradation", "Water supply"],
        insights: ["Nightlife economy boost", "Eco-tourism projects", "Mining controversies"],
        chartData: [
            { name: "Literacy", value: 88 },
            { name: "Urbanization", value: 45 },
            { name: "Healthcare Index", value: 78 },
            { name: "Employment Rate", value: 72 },
        ]
    },
    // 7. Gujarat
    {
        name: "Gujarat",
        image: "https://www.girnationalpark.in/uploads/gujarat-place.jpg",
        description: "A vibrant state in western India known for its culture, industry, and commerce.",
        population: "6.27 crore",
        literacyRate: "78%",
        languages: ["Gujarati", "Hindi", "English"],
        gdp: "₹18.8 lakh crore (2023)",
        industries: ["Textiles", "Petrochemicals", "Pharmaceuticals"],
        education: ["IIT Gandhinagar", "Gujarat University"],
        healthcare: "Robust network of government and private hospitals",
        tourismInfo: "Known for Gir National Park, Somnath Temple, and White Desert of Kutch.",
        touristPlaces: ["Statue of Unity", "Rani ki Vav", "Dwarka", "Saputara"],
        keyIssues: ["Water scarcity", "Traffic in Ahmedabad", "Pollution"],
        insights: ["8.5% GDP growth", "Increasing urban migration", "Focus on renewable energy"],
        chartData: [
            { name: "Literacy", value: 78 },
            { name: "Urbanization", value: 45 },
            { name: "Healthcare Index", value: 70 },
            { name: "Employment Rate", value: 65 },
        ]
    },
    // 8. Haryana
    {
        name: "Haryana",
        image: "https://example.com/haryana.jpg",
        description: "Agriculturally rich and industrialized state surrounding Delhi NCR.",
        population: "2.8 crore",
        literacyRate: "76%",
        languages: ["Hindi", "Punjabi", "English"],
        gdp: "₹11 lakh crore (2023)",
        industries: ["Automobile", "IT", "Agriculture"],
        education: ["Kurukshetra University", "NIT Kurukshetra"],
        healthcare: "Good network of urban hospitals and rural PHCs.",
        tourismInfo: "Historical forts, pilgrimage sites, and adventure sports hubs.",
        touristPlaces: ["Kurukshetra", "Sultanpur Bird Sanctuary", "Morni Hills", "Pinjore"],
        keyIssues: ["Air pollution", "Water table depletion", "Traffic"],
        insights: ["Auto hub growth", "Solar farms", "Smart city initiatives"],
        chartData: [
            { name: "Literacy", value: 76 },
            { name: "Urbanization", value: 53 },
            { name: "Healthcare Index", value: 73 },
            { name: "Employment Rate", value: 68 },
        ]
    },
    // 9. Himachal Pradesh
    {
        name: "Himachal Pradesh",
        image: "https://example.com/himachal.jpg",
        description: "Mountainous state known for scenic beauty, apples, and tourism.",
        population: "73 lakh",
        literacyRate: "83%",
        languages: ["Hindi", "Pahari", "English"],
        gdp: "₹1.8 lakh crore (2023)",
        industries: ["Tourism", "Agriculture", "Hydropower"],
        education: ["Himachal Pradesh University", "IIT Mandi"],
        healthcare: "Good access in urban regions; expanding rural network.",
        tourismInfo: "Popular for hill stations like Manali, Shimla and religious tourism.",
        touristPlaces: ["Shimla", "Manali", "Dharamshala", "Kullu"],
        keyIssues: ["Landslides", "Urbanization pressure", "Limited industry"],
        insights: ["High tourism revenue", "Apple exports", "Hydro projects"],
        chartData: [
            { name: "Literacy", value: 83 },
            { name: "Urbanization", value: 10 },
            { name: "Healthcare Index", value: 74 },
            { name: "Employment Rate", value: 66 },
        ]
    },

    // 10. Jharkhand
    {
        name: "Jharkhand",
        image: "https://example.com/jharkhand.jpg",
        description: "Mineral-rich eastern state with tribal heritage and forests.",
        population: "3.9 crore",
        literacyRate: "67%",
        languages: ["Hindi", "Santhali", "Ho", "English"],
        gdp: "₹4.1 lakh crore (2023)",
        industries: ["Mining", "Steel", "Power"],
        education: ["Ranchi University", "BIT Mesra"],
        healthcare: "Public health facilities improving in tribal belts.",
        tourismInfo: "Forests, waterfalls, and heritage temples attract visitors.",
        touristPlaces: ["Netarhat", "Hundru Falls", "Deoghar", "Betla National Park"],
        keyIssues: ["Tribal rights", "Mining displacement", "Education gap"],
        insights: ["Coal and iron production", "Tribal empowerment schemes", "Eco-tourism potential"],
        chartData: [
            { name: "Literacy", value: 67 },
            { name: "Urbanization", value: 24 },
            { name: "Healthcare Index", value: 58 },
            { name: "Employment Rate", value: 61 },
        ]
    },

    // 11. Karnataka
    {
        name: "Karnataka",
        image: "https://example.com/karnataka.jpg",
        description: "A hub of India’s IT industry and rich historical architecture.",
        population: "6.85 crore",
        literacyRate: "75%",
        languages: ["Kannada", "Hindi", "English"],
        gdp: "₹18 lakh crore (2023)",
        industries: ["IT", "Biotech", "Aerospace"],
        education: ["IISc Bangalore", "NITK Surathkal"],
        healthcare: "Good metro coverage, improving rural facilities.",
        tourismInfo: "Known for Hampi, temples, and wildlife sanctuaries.",
        touristPlaces: ["Hampi", "Coorg", "Mysore Palace", "Bandipur"],
        keyIssues: ["Traffic congestion", "Water sharing", "Pollution"],
        insights: ["IT exports leader", "Startup ecosystem", "Smart city projects"],
        chartData: [
            { name: "Literacy", value: 75 },
            { name: "Urbanization", value: 55 },
            { name: "Healthcare Index", value: 72 },
            { name: "Employment Rate", value: 68 },
        ]
    },

    // 12. Kerala
    {
        name: "Kerala",
        image: "https://example.com/kerala.jpg",
        description: "Known for highest literacy, healthcare, and beautiful backwaters.",
        population: "3.46 crore",
        literacyRate: "96%",
        languages: ["Malayalam", "English"],
        gdp: "₹10 lakh crore (2023)",
        industries: ["Tourism", "Spices", "Marine exports"],
        education: ["University of Kerala", "IISER TVM"],
        healthcare: "Among best public healthcare in India.",
        tourismInfo: "Backwaters, houseboats, Ayurveda, and beaches.",
        touristPlaces: ["Alleppey", "Munnar", "Kochi", "Wayanad"],
        keyIssues: ["Flooding", "Youth migration", "Unemployment"],
        insights: ["Model healthcare", "Remittance-driven economy", "High HDI"],
        chartData: [
            { name: "Literacy", value: 96 },
            { name: "Urbanization", value: 48 },
            { name: "Healthcare Index", value: 85 },
            { name: "Employment Rate", value: 63 },
        ]
    },

    // 13. Madhya Pradesh
    {
        name: "Madhya Pradesh",
        image: "https://example.com/madhyapradesh.jpg",
        description: "Heart of India with rich history, wildlife, and tribal culture.",
        population: "8.5 crore",
        literacyRate: "70%",
        languages: ["Hindi", "Bundeli", "English"],
        gdp: "₹12 lakh crore (2023)",
        industries: ["Cement", "Agro", "Textiles"],
        education: ["IIT Indore", "Barkatullah University"],
        healthcare: "Public healthcare developing in rural zones.",
        tourismInfo: "Temples, forts, and national parks attract tourists.",
        touristPlaces: ["Khajuraho", "Bhopal", "Bandhavgarh", "Ujjain"],
        keyIssues: ["Nutrition", "Irrigation", "Tribal upliftment"],
        insights: ["Renewable energy hubs", "Smart city rollout", "Textile clusters"],
        chartData: [
            { name: "Literacy", value: 70 },
            { name: "Urbanization", value: 35 },
            { name: "Healthcare Index", value: 60 },
            { name: "Employment Rate", value: 64 },
        ]
    },

    // 14. Maharashtra
    {
        name: "Maharashtra",
        image: "https://example.com/maharashtra.jpg",
        description: "India’s financial powerhouse, home to Mumbai and Bollywood.",
        population: "12.4 crore",
        literacyRate: "82%",
        languages: ["Marathi", "Hindi", "English"],
        gdp: "₹32 lakh crore (2023)",
        industries: ["Finance", "Automotive", "IT"],
        education: ["IIT Bombay", "University of Mumbai"],
        healthcare: "Advanced healthcare in metros, improving in tier-2 cities.",
        tourismInfo: "Beaches, caves, forts, and religious sites.",
        touristPlaces: ["Ajanta & Ellora", "Lonavala", "Mumbai", "Shirdi"],
        keyIssues: ["Air pollution", "Housing", "Water shortage"],
        insights: ["Highest GDP contributor", "Smart infra projects", "Startup surge"],
        chartData: [
            { name: "Literacy", value: 82 },
            { name: "Urbanization", value: 60 },
            { name: "Healthcare Index", value: 75 },
            { name: "Employment Rate", value: 70 },
        ]
    },

    // 15. Manipur
    {
        name: "Manipur",
        image: "https://example.com/manipur.jpg",
        description: "Northeastern state known for classical dance, Loktak Lake, and sports culture.",
        population: "30 lakh",
        literacyRate: "76%",
        languages: ["Meitei", "English", "Hindi"],
        gdp: "₹35,000 crore (2023)",
        industries: ["Handloom", "Agro", "Tourism"],
        education: ["Manipur University"],
        healthcare: "Limited in hilly regions; growing urban clinics.",
        tourismInfo: "Floating lake islands, martial arts, and natural beauty.",
        touristPlaces: ["Loktak Lake", "Imphal", "Ukhrul", "Keibul Lamjao"],
        keyIssues: ["Insurgency", "Connectivity", "Infrastructure"],
        insights: ["Sports talent hub", "Eco-tourism focus", "Handicraft promotion"],
        chartData: [
            { name: "Literacy", value: 76 },
            { name: "Urbanization", value: 30 },
            { name: "Healthcare Index", value: 60 },
            { name: "Employment Rate", value: 59 },
        ]
    },

    // 16. Meghalaya
    {
        name: "Meghalaya",
        image: "https://example.com/meghalaya.jpg",
        description: "Known as the ‘abode of clouds’, famous for rainfall and caves.",
        population: "33 lakh",
        literacyRate: "75%",
        languages: ["Khasi", "Garo", "English"],
        gdp: "₹39,000 crore (2023)",
        industries: ["Tourism", "Coal", "Horticulture"],
        education: ["NEHU (Shillong)"],
        healthcare: "PHCs in rural areas, medical colleges in Shillong.",
        tourismInfo: "Lush green valleys, waterfalls, caves, and tribal lifestyle.",
        touristPlaces: ["Cherrapunji", "Shillong", "Living Root Bridges", "Mawsynram"],
        keyIssues: ["Illegal mining", "Landslides", "Health access"],
        insights: ["Heavy rainfall tourism", "Organic farming", "Handloom economy"],
        chartData: [
            { name: "Literacy", value: 75 },
            { name: "Urbanization", value: 21 },
            { name: "Healthcare Index", value: 61 },
            { name: "Employment Rate", value: 60 },
        ]
    },
    // 17. Mizoram
    {
        name: "Mizoram",
        image: "https://example.com/mizoram.jpg",
        description: "A serene northeastern state with lush hills and bamboo forests.",
        population: "12 lakh",
        literacyRate: "92%",
        languages: ["Mizo", "English", "Hindi"],
        gdp: "₹25,000 crore (2023)",
        industries: ["Handloom", "Bamboo", "Tourism"],
        education: ["Mizoram University"],
        healthcare: "Growing healthcare access; most facilities in Aizawl.",
        tourismInfo: "Nature treks, waterfalls, and local festivals.",
        touristPlaces: ["Aizawl", "Reiek", "Vantawng Falls", "Champhai"],
        keyIssues: ["Remote villages", "Limited industrial growth", "Connectivity"],
        insights: ["High literacy", "Cultural richness", "Green economy potential"],
        chartData: [
            { name: "Literacy", value: 92 },
            { name: "Urbanization", value: 51 },
            { name: "Healthcare Index", value: 68 },
            { name: "Employment Rate", value: 62 },
        ]
    },

    // 18. Nagaland
    {
        name: "Nagaland",
        image: "https://example.com/nagaland.jpg",
        description: "Home to vibrant tribal cultures and the famous Hornbill Festival.",
        population: "22 lakh",
        literacyRate: "80%",
        languages: ["Naga dialects", "English", "Hindi"],
        gdp: "₹30,000 crore (2023)",
        industries: ["Handicrafts", "Agro", "Tourism"],
        education: ["Nagaland University"],
        healthcare: "Expanding rural services; key hospitals in Kohima and Dimapur.",
        tourismInfo: "Cultural and festival tourism along with scenic trekking spots.",
        touristPlaces: ["Kohima", "Dzukou Valley", "Mon", "Mokokchung"],
        keyIssues: ["Insurgency", "Rural road infrastructure", "Healthcare access"],
        insights: ["Cultural tourism", "Organic farming", "Youth entrepreneurship"],
        chartData: [
            { name: "Literacy", value: 80 },
            { name: "Urbanization", value: 28 },
            { name: "Healthcare Index", value: 59 },
            { name: "Employment Rate", value: 57 },
        ]
    },

    // 19. Odisha
    {
        name: "Odisha",
        image: "https://example.com/odisha.jpg",
        description: "Eastern coastal state famous for Jagannath Temple and tribal diversity.",
        population: "4.7 crore",
        literacyRate: "73%",
        languages: ["Odia", "Hindi", "English"],
        gdp: "₹7.5 lakh crore (2023)",
        industries: ["Mining", "Steel", "Textiles"],
        education: ["Utkal University", "IIT Bhubaneswar"],
        healthcare: "Mix of government hospitals and private care in cities.",
        tourismInfo: "Temples, beaches, handicrafts, and wildlife.",
        touristPlaces: ["Puri", "Konark", "Chilika Lake", "Bhubaneswar"],
        keyIssues: ["Cyclones", "Tribal development", "Disaster preparedness"],
        insights: ["Port development", "Industrial clusters", "Eco-tourism"],
        chartData: [
            { name: "Literacy", value: 73 },
            { name: "Urbanization", value: 34 },
            { name: "Healthcare Index", value: 65 },
            { name: "Employment Rate", value: 64 },
        ]
    },

    // 20. Punjab
    {
        name: "Punjab",
        image: "https://example.com/punjab.jpg",
        description: "Agricultural heartland of India, famous for wheat and vibrant culture.",
        population: "2.77 crore",
        literacyRate: "76%",
        languages: ["Punjabi", "Hindi", "English"],
        gdp: "₹6.5 lakh crore (2023)",
        industries: ["Agriculture", "Textiles", "Pharma"],
        education: ["Panjab University", "GNDU"],
        healthcare: "Decent public and private sector healthcare facilities.",
        tourismInfo: "Religious and cultural sites with a strong historical legacy.",
        touristPlaces: ["Golden Temple", "Wagah Border", "Jallianwala Bagh", "Patiala"],
        keyIssues: ["Drug abuse", "Groundwater depletion", "Stubble burning"],
        insights: ["Agritech boom", "Diaspora-led investments", "Cultural tourism"],
        chartData: [
            { name: "Literacy", value: 76 },
            { name: "Urbanization", value: 37 },
            { name: "Healthcare Index", value: 70 },
            { name: "Employment Rate", value: 66 },
        ]
    },

    // 21. Rajasthan
    {
        name: "Rajasthan",
        image: "https://example.com/rajasthan.jpg",
        description: "Land of deserts, forts, palaces, and a rich royal heritage.",
        population: "7.9 crore",
        literacyRate: "69%",
        languages: ["Hindi", "Rajasthani dialects", "English"],
        gdp: "₹12 lakh crore (2023)",
        industries: ["Tourism", "Textiles", "Minerals"],
        education: ["University of Rajasthan", "IIT Jodhpur"],
        healthcare: "Improving access in rural desert areas.",
        tourismInfo: "Globally famous for its royal palaces and festivals.",
        touristPlaces: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
        keyIssues: ["Water scarcity", "Desertification", "Rural poverty"],
        insights: ["Solar energy hub", "Handicraft exports", "Eco-tourism rise"],
        chartData: [
            { name: "Literacy", value: 69 },
            { name: "Urbanization", value: 29 },
            { name: "Healthcare Index", value: 64 },
            { name: "Employment Rate", value: 60 },
        ]
    },

    // 22. Sikkim
    {
        name: "Sikkim",
        image: "https://example.com/sikkim.jpg",
        description: "Himalayan gem known for organic farming and Buddhist monasteries.",
        population: "7 lakh",
        literacyRate: "82%",
        languages: ["Nepali", "Lepcha", "Bhutia", "English"],
        gdp: "₹30,000 crore (2023)",
        industries: ["Tourism", "Organic farming", "Hydropower"],
        education: ["Sikkim University"],
        healthcare: "Compact and functional health system.",
        tourismInfo: "High-altitude beauty, monasteries, trekking, and adventure.",
        touristPlaces: ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Pelling"],
        keyIssues: ["Landslides", "Connectivity", "Youth outmigration"],
        insights: ["100% organic", "Eco-tourism model", "Biodiversity hub"],
        chartData: [
            { name: "Literacy", value: 82 },
            { name: "Urbanization", value: 25 },
            { name: "Healthcare Index", value: 72 },
            { name: "Employment Rate", value: 65 },
        ]
    },

    // 23. Tamil Nadu
    {
        name: "Tamil Nadu",
        image: "https://example.com/tamilnadu.jpg",
        description: "Cultural, industrial and educational hub of southern India.",
        population: "7.2 crore",
        literacyRate: "80%",
        languages: ["Tamil", "English"],
        gdp: "₹20 lakh crore (2023)",
        industries: ["Automobile", "Electronics", "Textiles", "IT"],
        education: ["IIT Madras", "Anna University"],
        healthcare: "Excellent healthcare with medical tourism influx.",
        tourismInfo: "Dravidian temples, beaches, hill stations, and heritage.",
        touristPlaces: ["Madurai", "Ooty", "Chennai", "Mahabalipuram"],
        keyIssues: ["Pollution", "Urban stress", "Agrarian debt"],
        insights: ["Auto manufacturing hub", "Top FDI recipient", "Medical tourism rise"],
        chartData: [
            { name: "Literacy", value: 80 },
            { name: "Urbanization", value: 50 },
            { name: "Healthcare Index", value: 74 },
            { name: "Employment Rate", value: 69 },
        ]
    },

    // 24. Telangana
    {
        name: "Telangana",
        image: "https://example.com/telangana.jpg",
        description: "India’s youngest state with Hyderabad as an IT powerhouse.",
        population: "3.5 crore",
        literacyRate: "72%",
        languages: ["Telugu", "Urdu", "English"],
        gdp: "₹13 lakh crore (2023)",
        industries: ["IT", "Pharma", "Textiles"],
        education: ["Osmania University", "IIT Hyderabad"],
        healthcare: "Good healthcare in Hyderabad; expanding in rural belts.",
        tourismInfo: "Heritage sites, IT corridors, lakes, and bazaars.",
        touristPlaces: ["Hyderabad", "Warangal", "Nagarjuna Sagar", "Charminar"],
        keyIssues: ["Water disputes", "Urban congestion", "Tribal development"],
        insights: ["Global pharma hub", "Startup city (Hyderabad)", "Rapid metro expansion"],
        chartData: [
            { name: "Literacy", value: 72 },
            { name: "Urbanization", value: 47 },
            { name: "Healthcare Index", value: 70 },
            { name: "Employment Rate", value: 68 },
        ]
    },
    // 25. Tripura
    {
        name: "Tripura",
        image: "https://example.com/tripura.jpg",
        description: "A lush northeastern state with tribal culture and palaces.",
        population: "36 lakh",
        literacyRate: "87%",
        languages: ["Bengali", "Kokborok", "English"],
        gdp: "₹55,000 crore (2023)",
        industries: ["Rubber", "Handloom", "Tourism"],
        education: ["Tripura University"],
        healthcare: "Improving facilities; Agartala has major hospitals.",
        tourismInfo: "Temples, palaces, and tribal culture attract visitors.",
        touristPlaces: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Jampui Hills"],
        keyIssues: ["Unemployment", "Connectivity", "Industrialization"],
        insights: ["Rubber production leader", "Heritage tourism growth", "High literacy rate"],
        chartData: [
            { name: "Literacy", value: 87 },
            { name: "Urbanization", value: 26 },
            { name: "Healthcare Index", value: 66 },
            { name: "Employment Rate", value: 60 },
        ]
    },

    // 26. Uttar Pradesh
    {
        name: "Uttar Pradesh",
        image: "https://example.com/uttarpradesh.jpg",
        description: "India’s most populous state with immense cultural and historical importance.",
        population: "24 crore",
        literacyRate: "71%",
        languages: ["Hindi", "Urdu", "English"],
        gdp: "₹20 lakh crore (2023)",
        industries: ["Handicrafts", "Textiles", "Agro-based"],
        education: ["IIT Kanpur", "Banaras Hindu University"],
        healthcare: "Tiered system; expanding rural and specialty care.",
        tourismInfo: "Pilgrimage, heritage sites, and spiritual centers.",
        touristPlaces: ["Varanasi", "Agra", "Ayodhya", "Lucknow"],
        keyIssues: ["Unemployment", "Population pressure", "Pollution"],
        insights: ["Jewar Airport upcoming", "Metro rail expansion", "Startup hubs in Noida"],
        chartData: [
            { name: "Literacy", value: 71 },
            { name: "Urbanization", value: 22 },
            { name: "Healthcare Index", value: 60 },
            { name: "Employment Rate", value: 58 },
        ]
    },

    // 27. Uttarakhand
    {
        name: "Uttarakhand",
        image: "https://example.com/uttarakhand.jpg",
        description: "Mountain state known for pilgrimage, rivers, and the Himalayas.",
        population: "1.2 crore",
        literacyRate: "79%",
        languages: ["Hindi", "Garhwali", "Kumaoni", "English"],
        gdp: "₹3.5 lakh crore (2023)",
        industries: ["Tourism", "Hydropower", "Pharmaceuticals"],
        education: ["IIT Roorkee", "Doon University"],
        healthcare: "Metro cities are well served; hills need outreach.",
        tourismInfo: "Char Dham, trekking, wildlife and yoga tourism.",
        touristPlaces: ["Rishikesh", "Haridwar", "Nainital", "Kedarnath"],
        keyIssues: ["Landslides", "Outmigration", "Overtourism"],
        insights: ["Adventure tourism boom", "Yoga capital branding", "Hydro-electric initiatives"],
        chartData: [
            { name: "Literacy", value: 79 },
            { name: "Urbanization", value: 31 },
            { name: "Healthcare Index", value: 69 },
            { name: "Employment Rate", value: 61 },
        ]
    },

    // 28. West Bengal
    {
        name: "West Bengal",
        image: "https://example.com/westbengal.jpg",
        description: "A vibrant eastern state with literary, artistic, and cultural heritage.",
        population: "10 crore",
        literacyRate: "77%",
        languages: ["Bengali", "Hindi", "English", "Urdu"],
        gdp: "₹14 lakh crore (2023)",
        industries: ["Jute", "Tea", "Steel", "IT"],
        education: ["IIT Kharagpur", "Calcutta University"],
        healthcare: "Good metro network; rural services improving.",
        tourismInfo: "Sundarbans, colonial heritage, temples, and hills.",
        touristPlaces: ["Darjeeling", "Kolkata", "Sundarbans", "Kalimpong"],
        keyIssues: ["Urban overcrowding", "Cyclones", "Industrial slowdown"],
        insights: ["Literary festivals", "Startup incentives", "Port development"],
        chartData: [
            { name: "Literacy", value: 77 },
            { name: "Urbanization", value: 48 },
            { name: "Healthcare Index", value: 71 },
            { name: "Employment Rate", value: 62 },
        ]
    }

];
export default statesData;
