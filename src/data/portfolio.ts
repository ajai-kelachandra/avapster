export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  features: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "restaurant-ordering",
    title: "Restaurant QR Code Ordering System",
    category: "FoodTech & Hospitality",
    image: "/images/portfolio/restaurant-ordering.jpg",
    features: [
      "Scan QR code at the table",
      "View available food items",
      "Live availability status",
      "Add to cart and order without a waiter",
      "Online payment and order tracking",
    ],
  },
  {
    id: "saree-ecommerce",
    title: "Saree E-commerce Website",
    category: "Fashion & Retail Platform",
    image: "/images/portfolio/saree-ecommerce.jpg",
    features: [
      "Traditional and modern saree collections",
      "Product details and pricing",
      "Category filters",
      "Shopping cart and checkout",
      "DM / WhatsApp enquiry",
    ],
  },
  {
    id: "jewellery-ecommerce",
    title: "Jewellery E-commerce Website",
    category: "Luxury Retail E-Commerce",
    image: "/images/portfolio/jewellery-ecommerce.jpg",
    features: [
      "Gold, diamond and bridal collections",
      "Product gallery",
      "Price and product details",
      "Wishlist and cart",
      "Premium luxury design",
    ],
  },
  {
    id: "construction-company",
    title: "Construction Company Website",
    category: "Corporate & Infrastructure",
    image: "/images/portfolio/construction-company.jpg",
    features: [
      "Company introduction",
      "Completed projects",
      "Services and expertise",
      "Project gallery",
      "Contact and enquiry form",
    ],
  },
  {
    id: "gym-fitness",
    title: "Gym & Fitness Website",
    category: "Health & Wellness Platform",
    image: "/images/portfolio/gym-fitness.jpg",
    features: [
      "Membership plans",
      "Training programs",
      "Trainer profiles",
      "Class schedules",
      "Join Now registration",
    ],
  },
];

