
export interface Business {
  id: string;
  name: string;
  services: string[];
  description: string;
  address: string;
  phone: string;
  website: string;
  rating: number;
  image: string;
}

export const businesses: Business[] = [
  {
    id: "1",
    name: "Cape Town Car Spa",
    services: ["car wash", "detailing", "waxing", "valet services"],
    description: "Premium car washing and detailing services in the heart of Cape Town.",
    address: "123 Long Street, Cape Town, 8001",
    phone: "021 555 1234",
    website: "www.capetowncarspa.co.za",
    rating: 4.7,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Joburg Tech Solutions",
    services: ["computer repair", "phone repair", "data recovery", "tech support"],
    description: "Fast and reliable tech repair services for all your devices in Johannesburg.",
    address: "456 Jan Smuts Ave, Sandton, 2196",
    phone: "011 234 5678",
    website: "www.joburgtechsolutions.co.za",
    rating: 4.5,
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Durban Style Hair Studio",
    services: ["haircut", "hair styling", "braiding", "beauty salon"],
    description: "Modern salon offering the latest trends in hair styling and treatments on the Durban beachfront.",
    address: "789 Marine Parade, Durban, 4001",
    phone: "031 345 6789",
    website: "www.durbanstylehair.co.za",
    rating: 4.8,
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Garden Route Landscaping",
    services: ["lawn care", "gardening", "indigenous planting", "tree trimming"],
    description: "Professional landscaping services specializing in water-wise and indigenous gardens.",
    address: "101 Wilderness Road, George, 6529",
    phone: "044 456 7890",
    website: "www.gardenroutelandscaping.co.za",
    rating: 4.6,
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Pretoria Plumbing Pros",
    services: ["plumbing", "geyser installation", "leak repair", "drain cleaning"],
    description: "Emergency plumbing services available 24/7 throughout Pretoria and surrounds.",
    address: "202 Church Street, Pretoria, 0002",
    phone: "012 567 8901",
    website: "www.pretoriaplumbingpros.co.za",
    rating: 4.9,
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Soweto Auto Detailers",
    services: ["car wash", "car detailing", "interior cleaning", "paint protection"],
    description: "Comprehensive auto detailing services that make your car look brand new.",
    address: "303 Vilakazi Street, Soweto, 1804",
    phone: "011 678 9012",
    website: "www.sowetoautodetailers.co.za",
    rating: 4.8,
    image: "/placeholder.svg"
  },
  {
    id: "7",
    name: "Cape Winelands IT",
    services: ["computer repair", "network setup", "wifi installation", "IT consulting"],
    description: "Full-service IT solutions for businesses and wine estates in Stellenbosch and Franschhoek.",
    address: "404 Dorp Street, Stellenbosch, 7600",
    phone: "021 789 0123",
    website: "www.capewinelandsit.co.za",
    rating: 4.7,
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Braai Masters Catering",
    services: ["catering", "event planning", "braai service", "private chef"],
    description: "Authentic South African braai catering for all types of events and occasions.",
    address: "505 Beach Road, Port Elizabeth, 6001",
    phone: "041 890 1234",
    website: "www.braamasterscatering.co.za",
    rating: 4.9,
    image: "/placeholder.svg"
  },
  {
    id: "9",
    name: "Johannesburg Fitness Hub",
    services: ["personal training", "group fitness", "bootcamp", "sports coaching"],
    description: "Personalized fitness programs to help you achieve your health goals in the heart of Jozi.",
    address: "606 Oxford Road, Rosebank, 2196",
    phone: "010 901 2345",
    website: "www.joburgfitnesshub.co.za",
    rating: 4.6,
    image: "/placeholder.svg"
  },
  {
    id: "10",
    name: "Cape Cleaning Services",
    services: ["house cleaning", "office cleaning", "carpet cleaning", "deep cleaning"],
    description: "Professional cleaning services for homes and businesses throughout the Cape Peninsula.",
    address: "707 Main Road, Sea Point, 8005",
    phone: "021 012 3456",
    website: "www.capecleaningservices.co.za",
    rating: 4.7,
    image: "/placeholder.svg"
  },
  {
    id: "11",
    name: "Smile Dental Clinic",
    services: ["dental cleaning", "teeth whitening", "dental implants", "orthodontics"],
    description: "Comprehensive dental care for the whole family with a gentle touch in Bloemfontein.",
    address: "808 President Brand Street, Bloemfontein, 9301",
    phone: "051 123 4567",
    website: "www.smiledentalclinic.co.za",
    rating: 4.8,
    image: "/placeholder.svg"
  },
  {
    id: "12",
    name: "Mpumalanga Auto Repairs",
    services: ["auto repair", "brake service", "oil change", "engine diagnostics"],
    description: "Expert automotive repair services with certified technicians in Nelspruit.",
    address: "909 Madiba Drive, Nelspruit, 1200",
    phone: "013 234 5678",
    website: "www.mpumalangaautorepairs.co.za",
    rating: 4.6,
    image: "/placeholder.svg"
  }
];

export const searchBusinesses = (query: string): Business[] => {
  if (!query || query.trim() === '') return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  return businesses.filter(business => {
    // Search by name
    if (business.name.toLowerCase().includes(searchTerm)) return true;
    
    // Search by services
    if (business.services.some(service => service.toLowerCase().includes(searchTerm))) return true;
    
    // Search by description
    if (business.description.toLowerCase().includes(searchTerm)) return true;
    
    return false;
  });
};
