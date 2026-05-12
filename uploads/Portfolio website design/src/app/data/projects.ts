export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics",
    category: "Web Application",
    description: "A comprehensive analytics dashboard for SaaS businesses, providing real-time insights and predictive modeling.",
    image: "https://images.unsplash.com/photo-1767449356630-c60094b1d1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwYXBwJTIwdWl8ZW58MXx8fHwxNzc4NDY3ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2025",
    tags: ["React", "TypeScript", "Tailwind", "D3.js"],
  },
  {
    id: "aural-mobile",
    title: "Aural Mobile App",
    category: "Mobile Design",
    description: "An intuitive mobile application designed for audiophiles to seamlessly curate and stream lossless audio formats.",
    image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzc4MjgwNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2024",
    tags: ["UI/UX", "Figma", "React Native"],
  },
  {
    id: "strata-fintech",
    title: "Strata Trading",
    category: "Fintech Platform",
    description: "A secure, high-performance trading platform offering algorithmic trading strategies to retail investors.",
    image: "https://images.unsplash.com/photo-1644143153646-f36282dfb953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYXBwJTIwYWJzdHJhY3QlMjBjaGFydHxlbnwxfHx8fDE3Nzg0Njc4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2024",
    tags: ["Next.js", "Node.js", "WebSockets"],
  },
  {
    id: "luna-ecommerce",
    title: "Luna Fashion",
    category: "E-Commerce",
    description: "A headless e-commerce experience for a luxury fashion brand with immersive 3D product interactions.",
    image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc3RvcmUlMjBmYXNoaW9ufGVufDF8fHx8MTc3ODQ2NzgwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    year: "2023",
    tags: ["Shopify", "React", "Framer Motion"],
  }
];
