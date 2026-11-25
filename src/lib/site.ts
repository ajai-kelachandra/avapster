export const site = {
  name: "AVAPSTER",
  email: "ppk2600@gmail.com",
  whatsappNumber: "919633162989",
  whatsappDisplay: "+91 96331 62989",
  linkedin: "https://www.linkedin.com/company/avapster",
  whatsappUrl: (message = "Hello AVAPSTER, I'd like to talk about a project.") =>
    `https://wa.me/919633162989?text=${encodeURIComponent(message)}`,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/#contact" },
];
