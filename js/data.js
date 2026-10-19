/**
 * ===================================================================
 *  PORTFOLIO CONFIGURATION DATA - MOHAMED MAHMOUD SHAHAT
 * ===================================================================
 *  Junior Flutter Developer | Software Engineer | Competitive Programmer
 * ===================================================================
 */

const portfolioData = {
  // 1. Personal & Contact Information
  personal: {
    name: "Mohamed Mahmoud Shahat",
    title: "Junior Flutter Developer | Software Engineer",
    badge: "Available for Full-time & Internship Opportunities",
    shortBio: "Detail-oriented Computer Science student and Junior Flutter Developer with strong foundational expertise in software engineering, state management, and mobile architecture. Skilled in architecting clean, responsive cross-platform applications using Dart, Flutter, and PHP backends, integrating RESTful APIs, and implementing scalable state management patterns (Provider/GetX). Active competitive programmer and ICPC Vice Community Leader at Fayoum University.",
    location: "Fayoum, Egypt",
    email: "mohamedmahmoud75368@gmail.com",
    phone: "+20 101 495 4967",
    whatsapp: "+201014954967",
    resumeUrl: "#contact",
    github: "https://github.com/mohamedmshahat",
    linkedin: "https://linkedin.com/in/m-shahat",
    codeforces: "https://codeforces.com/profile/Mohamed_ShahaT",
    playStoreDev: "",
    appStoreDev: "",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },

  // 2. Highlights / Key Metrics
  metrics: [
    { label: "ECPC 2026 Finalist", value: "competitor", icon: "award" },
    { label: "ECPC 2025 Finalist", value: "competitor", icon: "award" },
    { label: "Students Mentored", value: "1000+", icon: "users" },
    { label: "Cumulative GPA", value: "3.36 / 4.0", icon: "graduation-cap" },
    { label: "Codeforces Rank", value: "Pupil", icon: "code" },
  ],

  // 3. Technical Skills
  skillCategories: [
    {
      category: "Programming Languages",
      icon: "code-2",
      skills: [
        { name: "Dart", level: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "C++", level: "92%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", level: "85%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", level: "80%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", level: "82%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "JavaScript", level: "75%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", level: "84%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "HTML5 & CSS3", level: "88%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      ],
    },
    {
      category: "Flutter & Mobile Development",
      icon: "layers",
      skills: [
        { name: "Flutter Framework", level: "92%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Provider", level: "88%" },
        { name: "Riverpod", level: "85%" },
        { name: "GetX", level: "85%" },
        { name: "Native Device Features (Camera, Location, Maps)", level: "86%" },
        { name: "Local Storage (Sqflite)", level: "85%" },
        { name: "Responsive UI Design", level: "92%" },
      ],
    },
    {
      category: "Core CS & Architecture",
      icon: "cpu",
      skills: [
        { name: "Data Structures & Algorithms", level: "95%" },
        { name: "Problem Solving", level: "93%" },
        { name: "OOP (Object-Oriented Programming)", level: "92%" },
        { name: "Software Engineering Principles", level: "88%" },
        { name: "Clean Architecture", level: "88%" },
        { name: "System Design Principles", level: "85%" },
        { name: "File Structures & Storage", level: "86%" },
      ],
    },
    {
      category: "Backend, APIs & Databases",
      icon: "database",
      skills: [
        { name: "MySQL", level: "84%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "RESTful API Design & Integration", level: "92%" },
        { name: "PHP Backend & CRUD", level: "82%" },
        { name: "JSON & Asynchronous Dart", level: "90%" },
        { name: "Local Caching & Storage", level: "85%" },
      ],
    },
    {
      category: "Developer Tools & Platforms",
      icon: "settings",
      skills: [
        { name: "Git", level: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", level: "92%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Android Studio", level: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { name: "Postman (API Testing)", level: "85%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Linux", level: "80%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Codeforces Competitive Engine", level: "90%" },
      ],
    },
  ],

  // 4. Featured Projects
  projects: [
    {
      id: "flutter-php-ecommerce-app",
      title: "Flutter Mobile App with PHP REST API",
      tagline: "Cross-Platform Application with Clean Architecture & PHP Backend",
      category: "production",
      badge: "Full-Stack Mobile",
      featured: true,
      color: "#0284c7",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80",
      ],
      description: "A comprehensive cross-platform mobile application architected using Clean Architecture principles. Features custom PHP-backed RESTful APIs for real-time authentication, dynamic asynchronous data flows, and secure persistent CRUD operations with BLoC and Provider state management.",
      keyFeatures: [
        "Clean Architecture separation across Domain, Data, and Presentation layers",
        "Custom PHP REST API backend handling authentication, token validation, and data persistence",
        "Scalable state management using BLoC and Provider for predictable UI states",
        "Responsive cross-platform layout optimized for diverse Android & iOS screen densities",
        "Robust error handling, Dio network interceptors, and offline caching",
      ],
      techStack: ["Flutter", "Dart", "PHP", "RESTful APIs", "BLoC", "Clean Architecture", "Git"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat",
        liveDemo: "",
        apkDownload: "",
      },
    },
    {
      id: "cpp-filesystem-library-engine",
      title: "C++ File System & Library Engine",
      tagline: "Low-Level Record Management Engine with Custom File Structures",
      category: "opensource",
      badge: "Systems Programming",
      featured: true,
      color: "#059669",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      ],
      description: "Developed a low-level C++ record management and library indexing engine at Fayoum University. Engineered custom binary file formats, indexed storage lookup, persistent disk operations, and memory-efficient data retrieval algorithms.",
      keyFeatures: [
        "Custom binary file structures with fixed and variable-length record formats",
        "High-efficiency B-Tree and inverted index lookup algorithms for instant search",
        "Data persistence, crash recovery routines, and disk fragmentation handlers",
        "Object-Oriented C++ design adhering strictly to SOLID and memory safety",
      ],
      techStack: ["C++", "File Structures", "Data Structures", "Algorithms", "OOP", "System Design"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat",
        liveDemo: "",
        apkDownload: "",
      },
    },
    {
      id: "flutter-clean-architecture-portfolio",
      title: "Flutter & Dart Open Source Repository",
      tagline: "Modular Mobile Architecture with State Management Showcases",
      category: "opensource",
      badge: "Open Source / GitHub",
      featured: true,
      color: "#7c3aed",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
      ],
      description: "A showcase repository demonstrating production patterns in Flutter: Clean Architecture, reactive BLoC/Cubit, GetX routing, asynchronous data handling with Dio, and reusable UI widget libraries.",
      keyFeatures: [
        "Modular Clean Architecture setup ready for enterprise app scaling",
        "Multi-state pattern implementations comparing Bloc, Provider, and GetX",
        "REST API client with JWT authentication lifecycle and auto-retry",
      ],
      techStack: ["Flutter", "Dart", "BLoC", "Provider", "GetX", "REST APIs"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat",
        liveDemo: "",
        apkDownload: "",
      },
    },
    {
      id: "competitive-programming-solutions",
      title: "Algorithmic Problem Solving & ICPC Library",
      tagline: "500+ Algorithmic Solutions in C++ & Dart (Codeforces & ECPC)",
      category: "opensource",
      badge: "Competitive Programming",
      featured: false,
      color: "#ea580c",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      ],
      description: "Curated collection of high-performance algorithmic solutions developed during ICPC contests, Codeforces rounds, and ECPC national qualifiers. Covers dynamic programming, graph theory, number theory, and advanced data structures.",
      keyFeatures: [
        "Optimized graph traversal (Dijkstra, BFS/DFS, MST, Floyd-Warshall)",
        "Segment Trees, Fenwick Trees, Disjoint Set Union (DSU)",
        "Dynamic Programming with bitmasking and memoization",
      ],
      techStack: ["C++", "Algorithms", "Data Structures", "Codeforces", "ICPC"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat",
        liveDemo: "https://codeforces.com/profile/Mohamed_ShahaT",
        apkDownload: "",
      },
    },
  ],

  // 5. Work Experience & Leadership
  experience: [
    {
      role: "Vice Community Leader & Problem Solving Mentor",
      company: "ICPC Community – Fayoum University",
      period: "2024 – Present",
      location: "Fayoum, Egypt",
      description: "Co-leading community operations and technical direction while mentoring 50+ computer science students in core algorithmic concepts, data structures, and software logic.",
      achievements: [
        "Structured comprehensive educational roadmaps guiding 50+ students from foundational logic to advanced problem solving.",
        "Conducted weekly code reviews and hosted mock contests for regional ICPC qualifications.",
        "Simplified complex topics in discrete mathematics and logic design to foster practical software engineering mindsets.",
      ],
    },
    {
      role: "Mobile Application Developer (Flutter & Dart)",
      company: "Open Source Projects & Self-Directed Engineering",
      period: "2024 – Present",
      location: "Fayoum, Egypt",
      description: "Architecting and publishing cross-platform mobile applications adhering strictly to Clean Architecture and modern mobile design conventions.",
      achievements: [
        "Implemented scalable state management solutions using Bloc, Provider, and GetX patterns for predictable app behavior.",
        "Designed and integrated PHP-backed RESTful APIs to handle dynamic asynchronous data flows, user authentication, and persistent CRUD operations.",
        "Built responsive, accessible user interfaces following Material Design and iOS Human Interface guidelines.",
      ],
    },
  ],

  // 6. Education
  education: {
    institution: "Fayoum University",
    degree: "B.Sc. in Computer Science & Artificial Intelligence",
    period: "2024 – 2028 (Expected)",
    location: "Fayoum, Egypt",
    gpa: "Cumulative GPA: 3.36 / 4.0 (Grade: B)",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming (OOP)",
      "Systems Analysis & Design",
      "File Structures & Storage",
      "Operations Research",
    ],
  },

  // 7. Honors & Competitive Programming Achievements
  honors: [
    {
      title: "ECPC 2025 National Finalist",
      organization: "Egyptian Collegiate Programming Contest (ECPC)",
      rank: "Secured 4th Place at Fayoum University & 60th Overall in Qualifications",
      year: "2025",
      icon: "trophy",
    },
    {
      title: "Codeforces Rank of Pupil",
      organization: "Codeforces",
      rank: "Handle: Mohamed_ShahaT (Hundreds of Algorithmic Problems Solved)",
      year: "2024 - Present",
      icon: "code",
    },
  ],

  // 8. Services Offered
  services: [
    {
      icon: "smartphone",
      title: "Cross-Platform Flutter Development",
      description: "Engineering responsive, performant iOS and Android mobile apps from scratch using Dart, Flutter, and Clean Architecture.",
    },
    {
      icon: "database",
      title: "PHP RESTful API & Backend Integration",
      description: "Designing and integrating PHP-backed REST APIs, JSON data serialization, authentication tokens, and CRUD databases.",
    },
    {
      icon: "layers",
      title: "State Management Architecture",
      description: "Implementing robust, scalable state management using BLoC, Cubit, Provider, or GetX with predictable data flow.",
    },
    {
      icon: "code-2",
      title: "Algorithmic Logic & Optimization",
      description: "Applying deep data structures and algorithmic efficiency to eliminate memory bottlenecks and boost app responsiveness.",
    },
    {
      icon: "refresh-cw",
      title: "Bug Fixing & Code Refactoring",
      description: "Auditing existing mobile applications, modernizing legacy codebases, and resolving complex logic or UI bugs.",
    },
    {
      icon: "users",
      title: "Technical Mentorship & Code Reviews",
      description: "Structuring educational paths, conducting code quality reviews, and mentoring junior developers in problem solving.",
    },
  ],

  // 9. Certifications
  certifications: [
    {
      title: "Flutter & Dart: The Complete Guide",
      issuer: "Udemy",
      year: "2024",
      credentialUrl: "https://www.udemy.com",
    },
    {
      title: "Data Structures & Algorithms in C++",
      issuer: "Udemy",
      year: "2024",
      credentialUrl: "https://www.udemy.com",
    },
    {
      title: "English for IT 1 & 2 (Professional Proficiency)",
      issuer: "Cisco Networking Academy",
      year: "2024",
      credentialUrl: "https://www.netacad.com",
    },
  ],

  // 10. Languages
  languages: [
    { language: "Arabic", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working Proficiency (Cisco Certified)" },
  ],
};

// Export to window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}