export interface Founder {
  id: string;
  number: string;
  name: string;
  designation: string;
  bio: string;
  expertise: string[];
  image: string;
  cropAspect: "tall" | "standard" | "wide";
  linkedinUrl: string;
  quote?: string;
}

/**
 * EDITABLE FOUNDER PROFILES
 * NOTE: Replace the editable placeholder details below with the actual founders' details.
 * Kept completely modular for rapid real-world updating.
 */
export const foundersData: Founder[] = [
  {
    id: "founder-1",
    number: "01",
    name: "Vishnu Prasad",
    designation: "UI/UX Lead & Frontend Developer",
    bio: "Vishnu Prasad specializes in creating intuitive digital experiences through thoughtful UI/UX design and modern frontend development. As UI/UX Lead, he combines creative design thinking with technical expertise to build visually engaging, user-friendly and responsive digital interfaces.",
    expertise: [
      "UI/UX Design",
      "UI/UX Leadership",
      "User Interface Design",
      "User Experience Design",
      "Frontend Development",
      "Responsive Web Design",
      "Design Systems",
      "Modern Web Technologies",
    ],
    image: "/images/founders/founder-1.svg",
    cropAspect: "tall",
    linkedinUrl: "https://www.linkedin.com/company/avapster",
    quote: "Combining creative design thinking with technical precision.",
  },
  {
    id: "founder-2",
    number: "02",
    name: "Ajay KC",
    designation: "Full Stack Developer",
    bio: "Ajay KC specializes in frontend and full stack development, combining strong Java programming knowledge with modern web technologies. He focuses on building responsive, scalable and reliable digital applications with a strong emphasis on functionality and user experience.",
    expertise: [
      "Frontend Development",
      "Java Development",
      "Full Stack Development",
      "React.js",
      "JavaScript",
      "Backend Development",
      "Responsive Web Development",
      "Software Engineering",
    ],
    image: "/images/founders/ajay-kc-v3.jpg",
    cropAspect: "tall",
    linkedinUrl: "https://www.linkedin.com/company/avapster",
    quote: "Building responsive, scalable and reliable digital applications.",
  },
  {
    id: "founder-3",
    number: "03",
    name: "Sree Lakshmi",
    designation: "Technical Lead",
    bio: "Sree Lakshmi works across frontend and backend development, with expertise in Java and full stack engineering. As a Product Lead, she focuses on connecting technical execution with product goals, coordinating development activities and helping deliver scalable, user-focused digital solutions.",
    expertise: [
      "Frontend Development",
      "Backend Development",
      "Java Development",
      "Full Stack Engineering",
      "Product Development",
      "Technical Planning & Coordination",
    ],
    image: "/images/founders/sree-lakshmi-v4.jpg",
    cropAspect: "tall",
    linkedinUrl: "https://www.linkedin.com/company/avapster",
    quote: "Connecting technical execution with clear product goals.",
  },
  {
    id: "founder-4",
    number: "04",
    name: "Amina Thaher",
    designation: "QA Lead",
    bio: "Amina Thaher leads quality assurance and software testing, bringing deep expertise in test automation, quality engineering, and business requirements gathering. She ensures every platform built by AVAPSTER meets the highest standards of reliability, performance, and operational excellence.",
    expertise: [
      "Quality Assurance Leadership",
      "Software Testing",
      "Test Automation",
      "Business Requirements Gathering",
      "Quality Engineering",
      "Performance & Reliability Testing",
    ],
    image: "/images/founders/amina-taher-v2.jpg",
    cropAspect: "tall",
    linkedinUrl: "https://www.linkedin.com/company/avapster",
    quote: "Ensuring uncompromising reliability through automated precision.",
  },
  {
    id: "founder-5",
    number: "05",
    name: "Priyanka PK",
    designation: "Frontend Developer",
    bio: "Priyanka PK specializes in frontend development and user interface engineering, with experience in React.js and modern web technologies. She focuses on building responsive, visually engaging websites, developing CMS-based solutions and creating customized email templates that deliver consistent experiences across devices.",
    expertise: [
      "Frontend Development",
      "UI Development",
      "React.js",
      "Modern Frontend Frameworks",
      "CMS Website Development",
      "Custom Email Template Development",
      "Responsive Web Design",
      "Website Customization",
    ],
    image: "/images/founders/priyanka-pk-v2.jpg",
    cropAspect: "tall",
    linkedinUrl: "https://www.linkedin.com/company/avapster",
    quote: "Crafting responsive, visually engaging web interfaces.",
  },
];
