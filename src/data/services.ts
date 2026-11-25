export type ServiceIcon = "web" | "mobile" | "design" | "software" | "cloud" | "ai";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web",
    title: "Web Development",
    description: "Fast, responsive websites and web apps built to last.",
    icon: "web",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Intuitive apps for iOS and Android.",
    icon: "mobile",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Clear, considered interfaces people enjoy using.",
    icon: "design",
  },
  {
    id: "software",
    title: "Custom Software Development",
    description: "Tailored systems shaped around how your business works.",
    icon: "software",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Reliable, scalable infrastructure and smooth deployments.",
    icon: "cloud",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Practical automation that saves time and removes busywork.",
    icon: "ai",
  },
];
