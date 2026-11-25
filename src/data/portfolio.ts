export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "restaurant-ordering",
    description: "Guests scan a QR code at the table, browse the menu, then order and pay without waiting for a waiter.",
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
    description: "An online store for traditional and modern sarees, with filters, cart and WhatsApp enquiry.",
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
    description: "A refined storefront for gold, diamond and bridal collections.",
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
    description: "A corporate website presenting completed projects, services and a direct enquiry form.",
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
    description: "Membership plans, trainers and class schedules with simple online sign-up.",
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
  {
    id: "finance-app",
    description: "A mobile app that turns salary, bills and goals into a simple daily safe-to-spend number.",
    title: "Personal Finance App",
    category: "Mobile App",
    image: "/images/portfolio/finance-app.webp",
    features: [
      "Salary and pay-cycle overview",
      "Daily safe-to-spend amount",
      "EMIs, budgets and goals",
      "Fixed deductions tracking",
      "Quick add for expenses",
    ],
  },
];
