export interface Skill {
  name: string;
  level: number; // 0-100 percentage
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface PortfolioData {
  personalDetails: {
    name: string;
    title: string;
    subTitle: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    cvUrl: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  personalDetails: {
    name: "Kavinda Sudesh",
    title: "Software Engineer",
    subTitle: "Full Stack Developer",
    bio: "HND in Computing (Software) graduate with experience in software development, IT support, and digital marketing. Passionate about building scalable applications and creating modern user experiences.",
    email: "kavindasudesh.info@gmail.com", // Professional placeholder email
    phone: "+94 77 123 4567", // Professional placeholder phone
    location: "Colombo, Sri Lanka",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    cvUrl: "#" // Link to CV file or download trigger
  },
  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 78 },
        { name: "MySQL", level: 82 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 85 },
        { name: "MS Office", level: 90 },
        { name: "VS Code", level: 92 }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Social Media Marketing", level: 85 },
        { name: "Digital Advertising", level: 80 },
        { name: "Technical Troubleshooting", level: 90 },
        { name: "IT Support", level: 95 }
      ]
    }
  ],
  experience: [
    {
      role: "IT Executive",
      company: "Nebula Homes Construction",
      period: "2024 - Present",
      description: [
        "Provide comprehensive IT support, hardware configurations, and local network diagnostics.",
        "Perform software-related tasks including system installations, database management, and script writing.",
        "Manage social media advertising campaigns, driving brand visibility and lead generation.",
        "Lead technical troubleshooting initiatives to reduce office downtime and resolve device/infrastructure failures."
      ]
    }
  ],
  education: [
    {
      degree: "HND in Computing (Software Engineering)",
      institution: "ESOFT Metro Campus",
      period: "2022 - 2024",
      description: "Covered topics in Object-Oriented Programming, Software Engineering Principles, Database Management Systems, Data Structures & Algorithms, and Web Development. Graduated with top marks."
    },
    {
      degree: "Diploma in English",
      institution: "ESOFT Metro Campus",
      period: "2022",
      description: "Focused on professional communication, report writing, public speaking, and presentation skills."
    }
  ],
  certifications: [
    {
      title: "React Development Certificate",
      issuer: "ESOFT Metro Campus",
      date: "2023"
    },
    {
      title: "Full-Stack Software Development Path",
      issuer: "FreeCodeCamp",
      date: "2024"
    },
    {
      title: "IT Support Professional",
      issuer: "Google Career Certificates",
      date: "2023"
    }
  ],
  projects: [
    {
      title: "Treasure Hunter AI",
      description: "An AI-powered grid navigation visualizer. Features pathfinding algorithms (A*, Dijkstra) and an autonomous intelligent agent searching for treasures inside dynamic, obstacle-filled environments.",
      techStack: ["TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      imageUrl: "/projects/treasure-hunter.jpg",
      featured: true
    },
    {
      title: "AI Chat Application",
      description: "A premium ChatGPT-style conversational assistant featuring real-time message streaming, markdown support, syntax highlighting, and custom memory context windows. Powered by Gemini/OpenAI API.",
      techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "Vercel SDK"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      imageUrl: "/projects/ai-chat.jpg",
      featured: true
    },
    {
      title: "E-Commerce System",
      description: "A complete online shopping experience. Includes catalog filtering, drag-and-drop checkout cart, order history tracker, administrative panel for inventory, and MySQL transactional databases.",
      techStack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      imageUrl: "/projects/ecommerce.jpg",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A collaborative project planning application modeled after Kanban boards. Supports drag-and-drop cards, checklist subtasks, user tags, priority levels, and instant local storage syncing.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      imageUrl: "/projects/taskmanager.jpg",
      featured: false
    },
    {
      title: "Developer Portfolio Website",
      description: "A portfolio designed to stand out. Implements custom canvas particle systems, interactive cursor tracking glow, animated section timelines, and responsive glassmorphic cards.",
      techStack: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      imageUrl: "/projects/portfolio.jpg",
      featured: false
    }
  ],
  services: [
    {
      title: "Web Development",
      description: "Building responsive, modern, and SEO-optimized web applications with Next.js, React, and server side rendering.",
      icon: "Code2"
    },
    {
      title: "UI/UX Design",
      description: "Crafting beautiful interfaces, fluid animations, and highly interactive user journeys that elevate your digital brand.",
      icon: "Palette"
    },
    {
      title: "Software Solutions",
      description: "Designing tailored system databases (MySQL), robust REST API backends, and resolving complex hardware/network concerns.",
      icon: "Cpu"
    }
  ],
  testimonials: [
    {
      name: "Pradeep Perera",
      role: "Project Manager",
      company: "Nebula Homes Construction",
      content: "Kavinda is an exceptionally reliable tech executive. He resolved all critical software issues and optimized our advertising campaigns, boosting our digital reach significantly.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Rohana Wijesinghe",
      role: "Senior Lecturer",
      company: "ESOFT Metro Campus",
      content: "Kavinda demonstrated outstanding programming skills and logical thinking during his software engineering HND coursework. He has a brilliant career ahead in full-stack development.",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ]
};
