export const profile = {
  name: "Md Raihan Rimon",
  roles: [
    "Full-Stack MERN Developer",
    "Next.js Engineer",
    "Project Management Executive",
    "CMS & Web Solutions",
  ],
  tagline:
    "I build modern, real-time web applications with the MERN stack and Next.js — from authentication and messaging to full CMS platforms.",
  location: "Shyamoli, Dhaka, Bangladesh",
  email: "raihanrimon853@gmail.com",
  phone: "+8801875895858",
  photo: "/profile.jpg",
  cv: "/Md_Raihan_Rimon_CV.pdf",
  socials: {
    github: "https://github.com/rimon213311004",
    linkedin: "https://www.linkedin.com/in/raihan-rimon-997969289/",
  },
  stats: [
    { label: "Projects Built", value: "5+" },
    { label: "Years in Tech", value: "2+" },
    { label: "Tech in Stack", value: "20+" },
  ],
};

export const about = `Having worked at Softvence Delta selling full-stack CMS websites, I was promoted to Project Management Executive at Assignoholic Research and Consultancy. Alongside project management, I bring hands-on experience with the MERN stack and Next.js — designing, building, and shipping high-quality software. I coordinate international student research projects, solve complex problems, and deliver quality outcomes, while continuously learning and growing as an IT professional.`;

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "ShadCN",
      "Framer Motion",
      "React Hook Form",
      "React Router",
      "Bootstrap",
      "Daisy UI",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "RESTful APIs",
      "JWT",
      "Auth & Authorization",
      "Socket.io",
      "Cloudinary",
    ],
  },
  {
    group: "IT & Tools",
    items: [
      "MikroTik RouterOS",
      "VMware",
      "Linux",
      "VPN",
      "TCP/IP",
      "HTTP",
      "DNS",
      "DHCP",
      "Git & GitHub",
    ],
  },
];

// A flat list for the marquee strip
export const marqueeSkills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "Socket.io",
  "JWT",
  "PostgreSQL",
  "MySQL",
  "Framer Motion",
  "Chakra UI",
  "Material UI",
  "REST APIs",
];

export type Project = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  code: string;
  live?: string;
  accent: string; // css gradient
  emoji: string;
};

export const projects: Project[] = [
  {
    title: "ATS CV Maker",
    type: "Resume Builder Platform",
    description:
      "A full-stack resume builder that creates ATS-friendly CVs — live preview, multiple templates, autosave, an ATS score checker for uploaded PDF/DOCX files, and one-click PDF & Word export with real selectable text.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "react-pdf", "docx"],
    code: "https://github.com/rimon213311004/Cv",
    live: "https://ats-cv-maker-gules.vercel.app",
    accent: "linear-gradient(135deg,#34d399,#22d3ee)",
    emoji: "📄",
  },
  {
    title: "Unihive",
    type: "University Social Media Platform",
    description:
      "A real-time social platform for verified users to interact, create posts, message each other, and manage groups — combining authentication, live messaging, and group collaboration in one seamless interface.",
    tech: ["React", "Chakra UI", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
    code: "https://github.com/rimon213311004/Unihive-main",
    live: "https://frontend-weld-kappa-42.vercel.app/",
    accent: "linear-gradient(135deg,#7c5cff,#22d3ee)",
    emoji: "🐝",
  },
  {
    title: "Hostel Meal Management",
    type: "Full-Stack Mess Manager",
    description:
      "Manage a hostel mess end-to-end: student accounts, daily deposits, daily meals, grocery costs, and automatic monthly settlement — computing the meal rate and who gets refunded or owes money.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    code: "https://github.com/rimon213311004/Meal",
    live: "https://meal-orcin-psi.vercel.app/",
    accent: "linear-gradient(135deg,#22d3ee,#34d399)",
    emoji: "🍽️",
  },
  {
    title: "AR Traders — Rice Shop",
    type: "Shop Management System",
    description:
      "A rice shop management app with an owner dashboard for sales, inventory, dues and analytics — plus a public phone-based lookup for customers to check purchases and remaining dues. Supports bKash, Nagad, Rocket & bank payments with PDF invoices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Recharts", "jsPDF"],
    code: "https://github.com/rimon213311004/Shop",
    live: "https://rice-shop-rho.vercel.app/",
    accent: "linear-gradient(135deg,#f471b5,#7c5cff)",
    emoji: "🌾",
  },
  {
    title: "SSC 2018 Batch",
    type: "Batch Directory App",
    description:
      "A colorful, 3D-styled batch directory for the SSC 2018 class — members register with their details and an admin browses and searches the full member list from a dedicated dashboard.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MongoDB"],
    code: "https://github.com/rimon213311004/Batch",
    accent: "linear-gradient(135deg,#f59e0b,#f471b5)",
    emoji: "🎓",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Project Management Executive",
    company: "Assignoholic Research and Consultancy",
    period: "Dec 2025 – Present",
    current: true,
    points: [
      "Manage international students' research and thesis projects from initiation to final delivery.",
      "Coordinate communication between students, researchers, and academic experts.",
      "Monitor project progress, deadlines, and quality standards.",
      "Identify complex research issues and help teams develop effective solutions.",
      "Ensure timely delivery of high-quality research reports and academic documents.",
    ],
  },
  {
    role: "Keynote / Sales Executive",
    company: "Softvence Delta",
    period: "Jul 2025 – Dec 2025",
    points: [
      "Sold CMS-based website solutions to international and local clients.",
      "Conducted client meetings to understand requirements and propose web solutions.",
      "Collaborated with development teams to ensure requirements were properly implemented.",
      "Prepared project proposals, pricing plans, and service presentations.",
      "Maintained strong client relationships for satisfaction and repeat business.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  result: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Varendra University, Rajshahi",
    period: "Fall 2021 – Spring 2025",
    result: "CGPA 2.84 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Varendra College, Rajshahi",
    period: "2018 – 2019",
    result: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    school: "Nazipur Government High School",
    period: "2016 – 2017",
    result: "GPA 4.94 / 5.00",
  },
];
