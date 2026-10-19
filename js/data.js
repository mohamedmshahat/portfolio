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
    { label: "ECPC 2026 Finalist", value: "Competitor", icon: "award" },
    { label: "ECPC 2025 Finalist", value: "Competitor", icon: "award" },
    { label: "Students Mentored", value: "100+", icon: "users" },
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
        { name: "Linux", level: "80%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Codeforces Competitive Engine", level: "90%" },
      ],
    },
  ],

  // 4. Featured Projects (Updated with additions & deletions)
  projects: [
    {
      id: "tenten-flutter-chat-app",
      title: "TenTen - Flutter Chat App",
      tagline: "Real-Time Mobile Messaging Application with Modern UI/UX",
      category: "opensource",
      badge: "Flutter & Mobile",
      featured: true,
      color: "#0284c7",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=600&q=80",
      ],
      description: "A feature-rich real-time chat application built using Flutter and Dart. Designed with a clean architecture approach for smooth user messaging, intuitive interface navigation, and reactive state management.",
      keyFeatures: [
        "Real-time chat interface with interactive UI components",
        "Responsive design supporting various screen sizes and mobile display densities",
        "Structured state management architecture for predictable UI state handling",
        "Clean project code structure following Flutter best practices",
      ],
      techStack: ["Flutter", "Dart", "State Management", "REST API / Sockets", "Git"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat/TenTen-Flutter-Chat-App-.git",
        liveDemo: "",
        apkDownload: "",
      },
    },
    {
      id: "favorite-places-app",
      title: "Favorite Places App",
      tagline: "Feature-Rich Location & Camera Integrated Native Mobile App",
      category: "opensource",
      badge: "Flutter & Device Features",
      featured: true,
      color: "#10b981",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
      ],
      description: "A native-featured Flutter application designed to allow users to capture, tag, and store their favorite locations. Integrates device hardware functions including camera capture, GPS positioning, local storage, and interactive maps.",
      keyFeatures: [
        "Camera integration for capturing custom venue and location images",
        "GPS location picker and interactive maps display",
        "Local data persistence using Sqflite for offline access",
        "Clean Flutter state management for dynamic UI updating",
      ],
      techStack: ["Flutter", "Dart", "GPS / Maps API", "Sqflite", "Camera API", "Git"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat/favorite_places_App.git",
        liveDemo: "",
        apkDownload: "",
      },
    },
    {
      id: "shopping-list-app",
      title: "Shopping List App",
      tagline: "Dynamic Grocery & Inventory Management App with Real-Time State",
      category: "opensource",
      badge: "Flutter & REST API",
      featured: true,
      color: "#ea580c",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      ],
      description: "An intuitive and interactive cross-platform shopping list application built with Flutter. Features asynchronous HTTP networking for real-time backend synchronization, category filtering, and seamless item creation/deletion.",
      keyFeatures: [
        "Real-time HTTP requests for persistent inventory CRUD operations",
        "Form validation with dynamic category and quantity selectors",
        "Smooth interactive dismissible list gestures for instant item deletion",
        "Optimized state management ensuring responsive UI updates",
      ],
      techStack: ["Flutter", "Dart", "REST API", "HTTP", "State Management", "Git"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat/Shopping-List-App.git",
        liveDemo: "",
        apkDownload: "",
      },
    },
    {
      id: "hotel-management-system-analysis-design",
      title: "Hotel Management System (Analysis & Design)",
      tagline: "Comprehensive Software Engineering & System Architecture Project",
      category: "opensource",
      badge: "System Analysis & Design",
      featured: true,
      color: "#2563eb",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      mockupScreens: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      ],
      description: "A complete system analysis and design specification for an enterprise Hotel Management System. Features structural UML diagrams, functional requirement modeling, database schemas, and architectural design patterns.",
      keyFeatures: [
        "In-depth System Requirement Specification (SRS) & Use Case Modeling",
        "Comprehensive UML Modeling (Class Diagrams, Sequence Diagrams, Data Flow Diagrams)",
        "Database Architecture & Relational ERD Schema Design",
        "UI/UX Workflow Design tailored for hotel staff and guest reservation flows",
      ],
      techStack: ["System Analysis", "UML Modeling", "Software Architecture", "Database Design", "Git"],
      links: {
        playStore: "",
        appStore: "",
        github: "https://github.com/mohamedmshahat/Hotel-Management-System---System-Analysis-Design.git",
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