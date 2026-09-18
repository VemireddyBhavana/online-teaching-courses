// ==========================================================
// LearnHub Online Learning Platform - Core Logic
// ==========================================================

// Master Course Catalog
const COURSES_DATA = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "Web Development",
        level: "Beginner",
        instructor: "Sarah Johnson",
        instructorTitle: "Senior Web Developer at Google",
        instructorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        price: 999,
        rating: 4.9,
        reviewsCount: 1240,
        studentsCount: "12,540",
        duration: "42 Hours",
        lectures: 145,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        description: "Master HTML5, CSS3, Modern JavaScript (ES6+), React 18, Node.js, Express, MongoDB, and build 15+ real-world projects from scratch.",
        highlights: [
            "HTML5 Fundamentals & Semantic Structure",
            "CSS3, Flexbox, CSS Grid & Responsive Design",
            "Modern JavaScript ES6+ & DOM Manipulation",
            "React 18 Hooks, Router, and Context API",
            "Node.js & Express RESTful API Development",
            "MongoDB Database Design & CRUD Operations",
            "Git, GitHub & Cloud Deployment"
        ],
        curriculum: [
            { module: "Module 1", title: "HTML5 Foundations & Semantic Web", lessons: "12 Lessons • 3.5 hrs" },
            { module: "Module 2", title: "Modern CSS3, Flexbox & Responsive Layouts", lessons: "18 Lessons • 6 hrs" },
            { module: "Module 3", title: "JavaScript ES6+ Masterclass & DOM", lessons: "25 Lessons • 10 hrs" },
            { module: "Module 4", title: "Building Modern SPAs with React 18", lessons: "30 Lessons • 12 hrs" },
            { module: "Module 5", title: "Backend APIs & Full-Stack Capstone Project", lessons: "20 Lessons • 10.5 hrs" }
        ]
    },
    {
        id: 2,
        title: "Artificial Intelligence & Machine Learning",
        category: "Artificial Intelligence",
        level: "Intermediate",
        instructor: "Alex Chen",
        instructorTitle: "AI Research Scientist at DeepMind",
        instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
        price: 1199,
        rating: 4.8,
        reviewsCount: 980,
        studentsCount: "9,200",
        duration: "38 Hours",
        lectures: 110,
        badge: "Hot & New",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        description: "Deep dive into Machine Learning algorithms, Neural Networks, Deep Learning with PyTorch, NLP, and Computer Vision with practical hands-on labs.",
        highlights: [
            "Python for Data Science (NumPy, Pandas, Matplotlib)",
            "Supervised & Unsupervised Machine Learning",
            "Deep Neural Networks with PyTorch & TensorFlow",
            "Computer Vision & Image Classification",
            "Natural Language Processing & Large Language Models",
            "Model Deployment using FastAPI & Docker"
        ],
        curriculum: [
            { module: "Module 1", title: "Mathematics & Python for Machine Learning", lessons: "15 Lessons • 5 hrs" },
            { module: "Module 2", title: "Core ML Algorithms & Scikit-Learn", lessons: "20 Lessons • 8 hrs" },
            { module: "Module 3", title: "Neural Networks & Deep Learning with PyTorch", lessons: "25 Lessons • 12 hrs" },
            { module: "Module 4", title: "NLP & Transformers Explained", lessons: "18 Lessons • 7 hrs" },
            { module: "Module 5", title: "Production AI Deployment & MLOps", lessons: "14 Lessons • 6 hrs" }
        ]
    },
    {
        id: 3,
        title: "UI / UX Design Masterclass",
        category: "UI/UX",
        level: "Beginner",
        instructor: "Emily Davis",
        instructorTitle: "Lead Product Designer at Airbnb",
        instructorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
        price: 899,
        rating: 4.9,
        reviewsCount: 840,
        studentsCount: "11,100",
        duration: "28 Hours",
        lectures: 95,
        badge: "Top Rated",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
        description: "Learn Figma from scratch, master UI design principles, wireframing, interactive prototyping, user research, and build an eye-catching design portfolio.",
        highlights: [
            "Design Fundamentals: Typography, Color Theory & Spacing",
            "Figma Component Systems, Auto-Layout & Variants",
            "User Research, Personas & User Journey Mapping",
            "Interactive Micro-animations & High-Fidelity Prototypes",
            "Creating Industry-Standard Design Systems",
            "Client Presentation & Design Portfolio Building"
        ],
        curriculum: [
            { module: "Module 1", title: "UI Design Foundations & Aesthetics", lessons: "12 Lessons • 4 hrs" },
            { module: "Module 2", title: "Figma Mastery from Zero to Hero", lessons: "22 Lessons • 8 hrs" },
            { module: "Module 3", title: "UX Research & Information Architecture", lessons: "16 Lessons • 5 hrs" },
            { module: "Module 4", title: "Building Scalable Design Systems", lessons: "15 Lessons • 6 hrs" },
            { module: "Module 5", title: "Real-world App Redesign Portfolio Project", lessons: "10 Lessons • 5 hrs" }
        ]
    },
    {
        id: 4,
        title: "Cyber Security & Ethical Hacking",
        category: "Cyber Security",
        level: "Advanced",
        instructor: "David Wilson",
        instructorTitle: "Certified Ethical Hacker & SecOps Director",
        instructorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
        price: 1299,
        rating: 4.7,
        reviewsCount: 710,
        studentsCount: "8,400",
        duration: "35 Hours",
        lectures: 120,
        badge: "Industry Certified",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
        description: "Learn penetration testing, Kali Linux tools, network security analysis, vulnerability assessments, and web application security hands-on.",
        highlights: [
            "Kali Linux Setup & Essential Networking",
            "Reconnaissance & Footprinting Techniques",
            "Vulnerability Scanning with Nmap, Nessus & Burp Suite",
            "Web Application Penetration Testing (OWASP Top 10)",
            "System Hacking, Malware Analysis & Defense Mechanisms",
            "Incident Response & Securing Enterprise Networks"
        ],
        curriculum: [
            { module: "Module 1", title: "Introduction to Ethical Hacking & Kali Linux", lessons: "14 Lessons • 5 hrs" },
            { module: "Module 2", title: "Network Scanning & Reconnaissance", lessons: "18 Lessons • 6.5 hrs" },
            { module: "Module 3", title: "Web Application Security & OWASP Top 10", lessons: "24 Lessons • 10 hrs" },
            { module: "Module 4", title: "Wireless & System Penetration Testing", lessons: "16 Lessons • 6.5 hrs" },
            { module: "Module 5", title: "Defensive Security & Blue Team Fundamentals", lessons: "12 Lessons • 7 hrs" }
        ]
    },
    {
        id: 5,
        title: "Cloud Computing with AWS & DevOps",
        category: "Cloud",
        level: "Intermediate",
        instructor: "Marcus Vance",
        instructorTitle: "AWS Solutions Architect & Cloud Consultant",
        instructorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600",
        price: 1149,
        rating: 4.8,
        reviewsCount: 650,
        studentsCount: "7,800",
        duration: "36 Hours",
        lectures: 105,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        description: "Master Amazon Web Services (AWS), Docker, Kubernetes, CI/CD pipelines, and Infrastructure as Code using Terraform.",
        highlights: [
            "Core AWS Services: EC2, S3, RDS, Lambda, VPC",
            "Containerization with Docker & Multi-stage Builds",
            "Orchestration with Kubernetes & Helm Charts",
            "CI/CD Automation with GitHub Actions",
            "Infrastructure as Code (IaC) with Terraform",
            "Monitoring, Logging & Cost Optimization"
        ],
        curriculum: [
            { module: "Module 1", title: "AWS Core Services & Global Infrastructure", lessons: "16 Lessons • 6 hrs" },
            { module: "Module 2", title: "Docker Mastery for Developers", lessons: "18 Lessons • 6.5 hrs" },
            { module: "Module 3", title: "Kubernetes Cluster Architecture & Deployments", lessons: "22 Lessons • 9 hrs" },
            { module: "Module 4", title: "Automated CI/CD Pipelines with GitHub Actions", lessons: "15 Lessons • 5.5 hrs" },
            { module: "Module 5", title: "Terraform Infrastructure as Code Project", lessons: "16 Lessons • 9 hrs" }
        ]
    },
    {
        id: 6,
        title: "Mobile App Development with Flutter & Dart",
        category: "Mobile App",
        level: "Beginner",
        instructor: "Jessica Lin",
        instructorTitle: "Senior Mobile Engineer at Uber",
        instructorImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
        price: 1049,
        rating: 4.9,
        reviewsCount: 890,
        studentsCount: "10,300",
        duration: "34 Hours",
        lectures: 115,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        description: "Build beautiful, fast, and native iOS and Android apps using a single Flutter codebase with state management, animations, and offline storage.",
        highlights: [
            "Dart Programming Language Essentials",
            "Flutter Widget Tree, Layouts & Theming",
            "State Management with Riverpod & Bloc",
            "REST API Integration & Local Storage with Hive",
            "Native Device Features (Camera, GPS, Notifications)",
            "Publishing Apps to App Store and Google Play"
        ],
        curriculum: [
            { module: "Module 1", title: "Dart Language Deep Dive", lessons: "14 Lessons • 5 hrs" },
            { module: "Module 2", title: "Flutter Widgets & UI Engineering", lessons: "20 Lessons • 7 hrs" },
            { module: "Module 3", title: "State Management Masterclass", lessons: "18 Lessons • 7.5 hrs" },
            { module: "Module 4", title: "REST APIs, Authentication & Local Cache", lessons: "16 Lessons • 6 hrs" },
            { module: "Module 5", title: "Production E-Commerce App Project", lessons: "20 Lessons • 8.5 hrs" }
        ]
    },
    {
        id: 7,
        title: "Data Science & Big Data Analytics",
        category: "Artificial Intelligence",
        level: "Intermediate",
        instructor: "Dr. Robert Hansen",
        instructorTitle: "Principal Data Scientist",
        instructorImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
        price: 1249,
        rating: 4.8,
        reviewsCount: 540,
        studentsCount: "6,900",
        duration: "40 Hours",
        lectures: 125,
        badge: "Featured",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        description: "Harness big data with Python, SQL, Tableau, Apache Spark, statistical modeling, hypothesis testing, and interactive dashboard storytelling.",
        highlights: [
            "Advanced SQL for Data Analysis & Window Functions",
            "Exploratory Data Analysis (EDA) with Python & Seaborn",
            "Statistical Inference, A/B Testing & Hypothesis Testing",
            "Big Data Processing with PySpark",
            "Business Intelligence Dashboards with Tableau",
            "End-to-end Real Estate Price Prediction Project"
        ],
        curriculum: [
            { module: "Module 1", title: "SQL for Big Data & Complex Queries", lessons: "18 Lessons • 6.5 hrs" },
            { module: "Module 2", title: "Statistical Foundations & Probability", lessons: "15 Lessons • 5.5 hrs" },
            { module: "Module 3", title: "Python EDA & Advanced Visualizations", lessons: "22 Lessons • 8 hrs" },
            { module: "Module 4", title: "Apache Spark & Distributed Computing", lessons: "16 Lessons • 7 hrs" },
            { module: "Module 5", title: "Executive Dashboards & Tableau Storytelling", lessons: "14 Lessons • 6.5 hrs" }
        ]
    },
    {
        id: 8,
        title: "Full-Stack React & Next.js Architecture",
        category: "Web Development",
        level: "Advanced",
        instructor: "Nathan Drake",
        instructorTitle: "Staff Software Engineer & Open Source Contributor",
        instructorImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
        price: 1099,
        rating: 4.9,
        reviewsCount: 820,
        studentsCount: "9,600",
        duration: "32 Hours",
        lectures: 98,
        badge: "Hot",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        description: "Master Next.js App Router, Server Components, Server Actions, TypeScript, Tailwind CSS, authentication, and high-performance serverless deployment.",
        highlights: [
            "Next.js App Router Architecture & Server Components",
            "TypeScript Deep Dive for React Applications",
            "Server Actions & Mutating Data Securely",
            "Authentication & Role-Based Access Control",
            "PostgreSQL with Prisma ORM & Connection Pooling",
            "Vercel Deployment, Edge Functions & Performance Tuning"
        ],
        curriculum: [
            { module: "Module 1", title: "Next.js App Router & Server Components", lessons: "14 Lessons • 5 hrs" },
            { module: "Module 2", title: "TypeScript Integration & Type Safety", lessons: "16 Lessons • 5.5 hrs" },
            { module: "Module 3", title: "Prisma ORM & Relational Database Design", lessons: "18 Lessons • 7 hrs" },
            { module: "Module 4", title: "Authentication, Middleware & Security", lessons: "15 Lessons • 5.5 hrs" },
            { module: "Module 5", title: "Production SaaS App with Stripe Payments", lessons: "20 Lessons • 9 hrs" }
        ]
    }
];

// ==========================================================
// Local Storage Helper Functions
// ==========================================================

function getMyCourses() {
    try {
        return JSON.parse(localStorage.getItem("myCourses")) || [];
    } catch (e) {
        console.error("Error reading myCourses from localStorage:", e);
        return [];
    }
}

function saveMyCourses(courses) {
    localStorage.setItem("myCourses", JSON.stringify(courses));
    updateNavBadges();
}

function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch (e) {
        console.error("Error reading wishlist from localStorage:", e);
        return [];
    }
}

function saveWishlist(wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateNavBadges();
}

const DEFAULT_PROFILE = {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 234-5678",
    bio: "Passionate full-stack developer and lifelong learner. Dedicated to mastering modern web and AI technologies.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    role: "Full-Stack Learner",
    joinedDate: "January 2026"
};

function getUserProfile() {
    try {
        const stored = localStorage.getItem("userProfile");
        if (stored) return JSON.parse(stored);
        localStorage.setItem("userProfile", JSON.stringify(DEFAULT_PROFILE));
        return DEFAULT_PROFILE;
    } catch (e) {
        return DEFAULT_PROFILE;
    }
}

function saveUserProfile(profile) {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    updateProfileUI();
}

// ==========================================================
// Toast Notification System
// ==========================================================

function showToast(message, type = "success", icon = null) {
    let container = document.getElementById("lh-toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "lh-toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let defaultIcon = "fa-check-circle";
    if (type === "warning") defaultIcon = "fa-triangle-exclamation";
    if (type === "danger") defaultIcon = "fa-circle-xmark";
    if (type === "info") defaultIcon = "fa-circle-info";

    const iconClass = icon || defaultIcon;

    toast.innerHTML = `
        <div class="toast-icon"><i class="fa-solid ${iconClass}"></i></div>
        <div class="toast-message">${message}</div>
        <button class="toast-close" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add("show"), 10);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}

// ==========================================================
// Theme Management (Dark / Light Mode)
// ==========================================================

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    updateThemeToggleButtons(theme);
    showToast(`${isDark ? "Dark" : "Light"} mode activated`, "info", isDark ? "fa-moon" : "fa-sun");
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    updateThemeToggleButtons(savedTheme);
}

function updateThemeToggleButtons(theme) {
    const toggles = document.querySelectorAll(".theme-toggle-btn");
    toggles.forEach(btn => {
        if (theme === "dark") {
            btn.innerHTML = `<i class="fa-solid fa-sun"></i> <span>Light Mode</span>`;
            btn.setAttribute("title", "Switch to Light Mode");
        } else {
            btn.innerHTML = `<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>`;
            btn.setAttribute("title", "Switch to Dark Mode");
        }
    });

    // Checkbox if present in settings
    const themeSwitch = document.getElementById("themeSwitch");
    if (themeSwitch) {
        themeSwitch.checked = (theme === "dark");
    }
}

// ==========================================================
// Course Enrollment (Feature 1)
// ==========================================================

function enrollCourse(id, title, image, instructor, price) {
    let courseData = COURSES_DATA.find(c => c.id === Number(id));
    if (!courseData) {
        courseData = {
            id: Number(id),
            title: title || "Course " + id,
            image: image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
            instructor: instructor || "LearnHub Instructor",
            price: price || 999,
            category: "General",
            level: "All Levels"
        };
    }

    const courses = getMyCourses();
    const exists = courses.find(c => Number(c.id) === Number(id));

    if (exists) {
        showToast(`You are already enrolled in "${courseData.title}".`, "warning", "fa-circle-exclamation");
        return;
    }

    const newEnrollment = {
        id: Number(courseData.id),
        title: courseData.title,
        image: courseData.image,
        instructor: courseData.instructor,
        price: courseData.price,
        category: courseData.category,
        level: courseData.level,
        progress: 0,
        enrolledAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        completedAt: null
    };

    courses.push(newEnrollment);
    saveMyCourses(courses);

    // Also remove from wishlist if present
    let wishlist = getWishlist();
    if (wishlist.some(item => Number(item.id) === Number(id))) {
        wishlist = wishlist.filter(item => Number(item.id) !== Number(id));
        saveWishlist(wishlist);
    }

    showToast(`Successfully enrolled in "${courseData.title}"! 🎉`, "success");

    // Redirect to My Learning
    setTimeout(() => {
        window.location.href = "my-learning.html";
    }, 700);
}

// ==========================================================
// Course Progress Tracking (Feature 3)
// ==========================================================

function increaseProgress(id) {
    let courses = getMyCourses();
    let updatedCourse = null;
    let unlockedCert = false;

    courses = courses.map(course => {
        if (Number(course.id) === Number(id)) {
            const currentProgress = Number(course.progress) || 0;
            if (currentProgress < 100) {
                course.progress = Math.min(100, currentProgress + 20);
                if (course.progress === 100 && !course.completedAt) {
                    course.completedAt = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                    unlockedCert = true;
                }
            }
            updatedCourse = course;
        }
        return course;
    });

    saveMyCourses(courses);

    if (updatedCourse) {
        if (unlockedCert) {
            showToast(`🏆 Congratulations! You completed "${updatedCourse.title}"! Certificate unlocked!`, "success", "fa-award");
        } else {
            showToast(`Progress updated: ${updatedCourse.progress}% completed for "${updatedCourse.title}"`, "info", "fa-chart-line");
        }
    }

    if (document.getElementById("courseContainer")) {
        loadMyCourses();
    }
    if (document.getElementById("certificatesContainer")) {
        loadCertificates();
    }
}

// ==========================================================
// Remove Course from My Learning
// ==========================================================

function removeCourse(id) {
    if (!confirm("Are you sure you want to remove this course from your learning dashboard?")) {
        return;
    }

    let courses = getMyCourses();
    const target = courses.find(c => Number(c.id) === Number(id));
    courses = courses.filter(c => Number(c.id) !== Number(id));
    saveMyCourses(courses);

    showToast(`Course "${target ? target.title : 'Course'}" removed from your list.`, "warning", "fa-trash-can");
    loadMyCourses();
}

// ==========================================================
// Wishlist Management (Feature 4)
// ==========================================================

function toggleWishlist(id) {
    const courseData = COURSES_DATA.find(c => Number(c.id) === Number(id));
    if (!courseData) return;

    let wishlist = getWishlist();
    const index = wishlist.findIndex(item => Number(item.id) === Number(id));

    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist(wishlist);
        showToast(`Removed "${courseData.title}" from Wishlist.`, "info", "fa-heart-crack");
        updateWishlistHeartUI(id, false);
    } else {
        wishlist.push({
            id: courseData.id,
            title: courseData.title,
            image: courseData.image,
            instructor: courseData.instructor,
            price: courseData.price,
            category: courseData.category,
            level: courseData.level,
            rating: courseData.rating
        });
        saveWishlist(wishlist);
        showToast(`Added "${courseData.title}" to Wishlist ❤️`, "success", "fa-heart");
        updateWishlistHeartUI(id, true);
    }

    if (document.getElementById("wishlistContainer")) {
        loadWishlistPage();
    }
}

function updateWishlistHeartUI(id, isWishlisted) {
    const buttons = document.querySelectorAll(`.wishlist-btn-${id}, [data-wishlist-id="${id}"]`);
    buttons.forEach(btn => {
        const icon = btn.querySelector("i");
        if (icon) {
            if (isWishlisted) {
                icon.className = "fa-solid fa-heart";
                btn.classList.add("active");
                icon.style.color = "#ef4444";
            } else {
                icon.className = "fa-regular fa-heart";
                btn.classList.remove("active");
                icon.style.color = "";
            }
        }
    });
}

// ==========================================================
// Navigation & Badges (Feature 10 & 12)
// ==========================================================

function updateNavBadges() {
    const wishlist = getWishlist();
    const myCourses = getMyCourses();

    const wishlistBadges = document.querySelectorAll(".wishlist-count-badge");
    wishlistBadges.forEach(b => {
        b.textContent = wishlist.length;
        b.style.display = wishlist.length > 0 ? "inline-flex" : "none";
    });

    const learningBadges = document.querySelectorAll(".learning-count-badge");
    learningBadges.forEach(b => {
        b.textContent = myCourses.length;
        b.style.display = myCourses.length > 0 ? "inline-flex" : "none";
    });
}

function updateProfileUI() {
    const profile = getUserProfile();
    const avatarEls = document.querySelectorAll(".user-nav-avatar, .profile-avatar-display");
    avatarEls.forEach(img => {
        if (img.tagName === "IMG") {
            img.src = profile.avatar || DEFAULT_PROFILE.avatar;
            img.alt = profile.name;
        }
    });

    const nameEls = document.querySelectorAll(".user-name-display");
    nameEls.forEach(el => el.textContent = profile.name);
}

function initGlobalNav() {
    const hamburger = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            hamburger.classList.toggle("active");
        });
    }

    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(a => {
        const href = a.getAttribute("href");
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            a.classList.add("active");
        } else if (href && !href.startsWith("#") && href !== currentPath) {
            a.classList.remove("active");
        }
    });

    updateNavBadges();
    updateProfileUI();
}

// ==========================================================
// Dashboard Statistics (Feature 10) & My Learning (Feature 2)
// ==========================================================

function loadMyCourses() {
    const container = document.getElementById("courseContainer");
    const courses = getMyCourses();

    const totalEnrolled = courses.length;
    const completedCourses = courses.filter(c => Number(c.progress) === 100).length;
    const certificatesEarned = completedCourses;
    const overallProgress = totalEnrolled === 0 ? 0 : Math.round(courses.reduce((acc, c) => acc + (Number(c.progress) || 0), 0) / totalEnrolled);

    const totalEl = document.getElementById("statTotalCourses");
    const completedEl = document.getElementById("statCompletedCourses");
    const certEl = document.getElementById("statCertificates");
    const progressEl = document.getElementById("statOverallProgress");
    const overallProgressBar = document.getElementById("overallProgressBar");

    if (totalEl) totalEl.textContent = totalEnrolled;
    if (completedEl) completedEl.textContent = completedCourses;
    if (certEl) certEl.textContent = certificatesEarned;
    if (progressEl) progressEl.textContent = `${overallProgress}%`;
    if (overallProgressBar) overallProgressBar.style.width = `${overallProgress}%`;

    if (!container) return;

    if (courses.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                <h3>No Courses Enrolled Yet</h3>
                <p>Explore our wide selection of top-rated courses and start learning today!</p>
                <a href="courses.html" class="btn btn-primary"><i class="fa-solid fa-compass"></i> Explore Courses</a>
            </div>
        `;
        return;
    }

    container.innerHTML = "";

    courses.forEach(course => {
        const isComplete = Number(course.progress) === 100;
        const progressVal = Number(course.progress) || 0;

        const card = document.createElement("div");
        card.className = `learning-card ${isComplete ? "completed-card" : ""}`;
        card.innerHTML = `
            <div class="learning-card-img">
                <img src="${course.image}" alt="${course.title}">
                <span class="status-badge ${isComplete ? 'badge-completed' : 'badge-in-progress'}">
                    <i class="fa-solid ${isComplete ? 'fa-circle-check' : 'fa-spinner fa-spin'}"></i>
                    ${isComplete ? 'Completed' : `${progressVal}% In Progress`}
                </span>
            </div>

            <div class="learning-card-body">
                <div class="learning-card-meta">
                    <span class="category-tag"><i class="fa-solid fa-tag"></i> ${course.category || 'Development'}</span>
                    <span class="price-tag">₹${course.price}</span>
                </div>

                <h3 class="learning-card-title">${course.title}</h3>
                <p class="instructor-info"><i class="fa-solid fa-chalkboard-user"></i> <strong>Instructor:</strong> ${course.instructor}</p>

                <div class="progress-section">
                    <div class="progress-labels">
                        <span>Learning Progress</span>
                        <strong>${progressVal}%</strong>
                    </div>
                    <div class="custom-progress-bar">
                        <div class="progress-fill ${isComplete ? 'fill-completed' : ''}" style="width: ${progressVal}%;"></div>
                    </div>
                </div>

                <div class="learning-card-actions">
                    ${!isComplete ? `
                        <button class="btn btn-primary continue-btn" onclick="increaseProgress(${course.id})">
                            <i class="fa-solid fa-circle-play"></i> Continue Learning (+20%)
                        </button>
                    ` : `
                        <a href="certificates.html" class="btn btn-success cert-btn">
                            <i class="fa-solid fa-award"></i> View Certificate
                        </a>
                    `}
                    <button class="btn btn-outline-danger remove-btn" title="Remove course" onclick="removeCourse(${course.id})">
                        <i class="fa-solid fa-trash-can"></i> Remove
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// ==========================================================
// Courses Page: Search, Filters, & Listing (Features 7 & 8)
// ==========================================================

function renderCoursesList(coursesToRender) {
    const container = document.getElementById("courseGridContainer");
    if (!container) return;

    const wishlist = getWishlist();
    const myCourses = getMyCourses();

    if (!coursesToRender || coursesToRender.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <h3>No Matching Courses Found</h3>
                <p>Try searching for different keywords or clearing your active filters.</p>
                <button class="btn btn-primary" onclick="resetFilters()"><i class="fa-solid fa-rotate-left"></i> Reset All Filters</button>
            </div>
        `;
        return;
    }

    container.innerHTML = "";

    coursesToRender.forEach(course => {
        const isEnrolled = myCourses.some(c => Number(c.id) === Number(course.id));
        const isWishlisted = wishlist.some(w => Number(w.id) === Number(course.id));

        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <div class="course-card-image-wrap">
                <a href="course-details.html?id=${course.id}">
                    <img src="${course.image}" alt="${course.title}">
                </a>
                <span class="course-badge">${course.badge || course.level}</span>
                <button class="wishlist-btn-corner wishlist-btn-${course.id} ${isWishlisted ? 'active' : ''}"
                        onclick="toggleWishlist(${course.id})"
                        title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                    <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart" ${isWishlisted ? 'style="color:#ef4444;"' : ''}></i>
                </button>
            </div>

            <div class="course-content">
                <div class="course-top">
                    <span class="course-rating">⭐ ${course.rating} (${course.reviewsCount || '100+'})</span>
                    <span class="course-duration"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
                </div>

                <h3 class="course-title">
                    <a href="course-details.html?id=${course.id}">${course.title}</a>
                </h3>

                <p class="course-desc">${course.description.substring(0, 85)}...</p>

                <div class="course-instructor">
                    <img src="${course.instructorImg}" alt="${course.instructor}">
                    <span>${course.instructor}</span>
                </div>

                <div class="course-bottom">
                    <div class="price-wrap">
                        <span class="price">₹${course.price}</span>
                        <span class="level-pill">${course.level}</span>
                    </div>

                    <div class="card-btn-group">
                        <a href="course-details.html?id=${course.id}" class="btn btn-outline" title="Course Details">Details</a>
                        ${isEnrolled ? `
                            <a href="my-learning.html" class="btn btn-enrolled">
                                <i class="fa-solid fa-circle-check"></i> Enrolled
                            </a>
                        ` : `
                            <button class="btn btn-primary" onclick="enrollCourse(${course.id}, '${course.title.replace(/'/g, "\\'")}', '${course.image}', '${course.instructor}', ${course.price})">
                                Enroll Now
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCourses() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const levelFilter = document.getElementById("levelFilter");
    const sortFilter = document.getElementById("sortFilter");

    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const category = categoryFilter ? categoryFilter.value : "All Categories";
    const level = levelFilter ? levelFilter.value : "All Levels";
    const sort = sortFilter ? sortFilter.value : "default";

    let filtered = COURSES_DATA.filter(course => {
        const matchesQuery = !query ||
            course.title.toLowerCase().includes(query) ||
            course.instructor.toLowerCase().includes(query) ||
            course.category.toLowerCase().includes(query);

        const matchesCategory = category === "All Categories" || course.category === category;
        const matchesLevel = level === "All Levels" || course.level === level;

        return matchesQuery && matchesCategory && matchesLevel;
    });

    if (sort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    renderCoursesList(filtered);

    const resultCount = document.getElementById("filterResultCount");
    if (resultCount) {
        resultCount.textContent = `Showing ${filtered.length} of ${COURSES_DATA.length} courses`;
    }
}

function resetFilters() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const levelFilter = document.getElementById("levelFilter");
    const sortFilter = document.getElementById("sortFilter");

    if (searchInput) searchInput.value = "";
    if (categoryFilter) categoryFilter.value = "All Categories";
    if (levelFilter) levelFilter.value = "All Levels";
    if (sortFilter) sortFilter.value = "default";

    filterCourses();
}

function initCoursesPage() {
    renderCoursesList(COURSES_DATA);

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const levelFilter = document.getElementById("levelFilter");
    const sortFilter = document.getElementById("sortFilter");

    if (searchInput) searchInput.addEventListener("input", filterCourses);
    if (categoryFilter) categoryFilter.addEventListener("change", filterCourses);
    if (levelFilter) levelFilter.addEventListener("change", filterCourses);
    if (sortFilter) sortFilter.addEventListener("change", filterCourses);

    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    const catParam = params.get("category");

    if (searchParam && searchInput) searchInput.value = searchParam;
    if (catParam && categoryFilter) categoryFilter.value = catParam;

    if (searchParam || catParam) {
        filterCourses();
    }
}

// ==========================================================
// Course Details Page: Dynamic Loader
// ==========================================================

function initCourseDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    let courseId = Number(params.get("id")) || 1;

    let course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) {
        course = COURSES_DATA[0];
    }

    const myCourses = getMyCourses();
    const wishlist = getWishlist();
    const isEnrolled = myCourses.some(c => Number(c.id) === Number(course.id));
    const isWishlisted = wishlist.some(w => Number(w.id) === Number(course.id));

    document.title = `${course.title} | LearnHub`;

    const imgEl = document.getElementById("detailCourseImg");
    if (imgEl) imgEl.src = course.image;

    const tagEl = document.getElementById("detailCourseTag");
    if (tagEl) tagEl.textContent = course.badge || course.category;

    const titleEl = document.getElementById("detailCourseTitle");
    if (titleEl) titleEl.textContent = course.title;

    const descEl = document.getElementById("detailCourseDesc");
    if (descEl) descEl.textContent = course.description;

    const infoEl = document.getElementById("detailCourseInfo");
    if (infoEl) {
        infoEl.innerHTML = `
            <span>⭐ ${course.rating} (${course.reviewsCount} reviews)</span>
            <span>👨‍🎓 ${course.studentsCount} Students</span>
            <span>⏰ ${course.duration}</span>
            <span>📚 ${course.lectures} Lectures</span>
            <span>🌐 English</span>
            <span>📊 ${course.level}</span>
        `;
    }

    const priceEl = document.getElementById("detailCoursePrice");
    if (priceEl) priceEl.textContent = `₹${course.price}`;

    const enrollBtn = document.getElementById("detailEnrollBtn");
    if (enrollBtn) {
        if (isEnrolled) {
            enrollBtn.className = "btn btn-success";
            enrollBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Already Enrolled (Go to Dashboard)`;
            enrollBtn.onclick = () => window.location.href = "my-learning.html";
        } else {
            enrollBtn.className = "btn btn-primary";
            enrollBtn.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Enroll Now`;
            enrollBtn.onclick = () => enrollCourse(course.id, course.title, course.image, course.instructor, course.price);
        }
    }

    const wishlistBtn = document.getElementById("detailWishlistBtn");
    if (wishlistBtn) {
        wishlistBtn.innerHTML = `<i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart" ${isWishlisted ? 'style="color:#ef4444;"' : ''}></i> ${isWishlisted ? 'Wishlisted' : 'Wishlist'}`;
        wishlistBtn.onclick = () => {
            toggleWishlist(course.id);
            const currentWishlisted = getWishlist().some(w => Number(w.id) === Number(course.id));
            wishlistBtn.innerHTML = `<i class="fa-${currentWishlisted ? 'solid' : 'regular'} fa-heart" ${currentWishlisted ? 'style="color:#ef4444;"' : ''}></i> ${currentWishlisted ? 'Wishlisted' : 'Wishlist'}`;
        };
    }

    const highlightsContainer = document.getElementById("detailHighlights");
    if (highlightsContainer && course.highlights) {
        highlightsContainer.innerHTML = course.highlights.map(h => `<div>✔ ${h}</div>`).join("");
    }

    const curriculumContainer = document.getElementById("detailCurriculum");
    if (curriculumContainer && course.curriculum) {
        curriculumContainer.innerHTML = course.curriculum.map(m => `
            <div class="module-item">
                <div class="module-header">
                    <h4><i class="fa-solid fa-folder-closed"></i> ${m.module}: ${m.title}</h4>
                    <span class="module-lessons">${m.lessons}</span>
                </div>
            </div>
        `).join("");
    }

    const instructorImg = document.getElementById("detailInstructorImg");
    if (instructorImg) instructorImg.src = course.instructorImg;

    const instructorName = document.getElementById("detailInstructorName");
    if (instructorName) instructorName.textContent = course.instructor;

    const instructorRole = document.getElementById("detailInstructorRole");
    if (instructorRole) instructorRole.textContent = course.instructorTitle;

    const relatedContainer = document.getElementById("detailRelatedCourses");
    if (relatedContainer) {
        const related = COURSES_DATA.filter(c => c.id !== course.id).slice(0, 3);
        relatedContainer.innerHTML = related.map(rc => `
            <div class="course-card">
                <img src="${rc.image}" alt="${rc.title}">
                <div class="course-content">
                    <h3><a href="course-details.html?id=${rc.id}">${rc.title}</a></h3>
                    <p>${rc.instructor}</p>
                    <div class="course-bottom">
                        <span class="price">₹${rc.price}</span>
                        <a href="course-details.html?id=${rc.id}" class="btn btn-outline">View Course</a>
                    </div>
                </div>
            </div>
        `).join("");
    }
}

// ==========================================================
// Wishlist Page (Feature 4)
// ==========================================================

function loadWishlistPage() {
    const container = document.getElementById("wishlistContainer");
    if (!container) return;

    const wishlist = getWishlist();
    const countEl = document.getElementById("wishlistTotalCount");
    if (countEl) countEl.textContent = `${wishlist.length} Courses Saved`;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon"><i class="fa-regular fa-heart"></i></div>
                <h3>Your Wishlist is Empty</h3>
                <p>Browse our catalog and save your favorite courses for later!</p>
                <a href="courses.html" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i> Explore Courses</a>
            </div>
        `;
        return;
    }

    container.innerHTML = "";

    wishlist.forEach(item => {
        const card = document.createElement("div");
        card.className = "wishlist-card";
        card.innerHTML = `
            <div class="wishlist-img-wrap">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="wishlist-details">
                <span class="category-tag">${item.category || 'Online Course'}</span>
                <h3><a href="course-details.html?id=${item.id}">${item.title}</a></h3>
                <p class="instructor-info"><i class="fa-solid fa-chalkboard-user"></i> ${item.instructor}</p>
                <div class="wishlist-price">₹${item.price}</div>
            </div>
            <div class="wishlist-actions">
                <button class="btn btn-primary" onclick="enrollCourse(${item.id}, '${item.title.replace(/'/g, "\\'")}', '${item.image}', '${item.instructor}', ${item.price})">
                    <i class="fa-solid fa-graduation-cap"></i> Enroll Now
                </button>
                <button class="btn btn-outline-danger" onclick="toggleWishlist(${item.id})">
                    <i class="fa-solid fa-trash-can"></i> Remove
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==========================================================
// Student Profile Page (Feature 5)
// ==========================================================

function loadProfilePage() {
    const profile = getUserProfile();
    const myCourses = getMyCourses();
    const completedCourses = myCourses.filter(c => Number(c.progress) === 100).length;

    const nameDisplay = document.getElementById("profileNameDisplay");
    const emailDisplay = document.getElementById("profileEmailDisplay");
    const roleDisplay = document.getElementById("profileRoleDisplay");
    const avatarImg = document.getElementById("profileAvatarImg");

    if (nameDisplay) nameDisplay.textContent = profile.name;
    if (emailDisplay) emailDisplay.textContent = profile.email;
    if (roleDisplay) roleDisplay.textContent = profile.role || "Student";
    if (avatarImg) avatarImg.src = profile.avatar;

    const enrolledStat = document.getElementById("profileEnrolledCount");
    const completedStat = document.getElementById("profileCompletedCount");
    const certStat = document.getElementById("profileCertCount");

    if (enrolledStat) enrolledStat.textContent = myCourses.length;
    if (completedStat) completedStat.textContent = completedCourses;
    if (certStat) certStat.textContent = completedCourses;

    const nameInput = document.getElementById("inputProfileName");
    const emailInput = document.getElementById("inputProfileEmail");
    const phoneInput = document.getElementById("inputProfilePhone");
    const bioInput = document.getElementById("inputProfileBio");
    const avatarInput = document.getElementById("inputProfileAvatar");

    if (nameInput) nameInput.value = profile.name || "";
    if (emailInput) emailInput.value = profile.email || "";
    if (phoneInput) phoneInput.value = profile.phone || "";
    if (bioInput) bioInput.value = profile.bio || "";
    if (avatarInput) avatarInput.value = profile.avatar || "";

    const form = document.getElementById("profileForm");
    if (form) {
        form.onsubmit = function (e) {
            e.preventDefault();
            const updatedProfile = {
                ...profile,
                name: nameInput.value.trim() || profile.name,
                email: emailInput.value.trim() || profile.email,
                phone: phoneInput.value.trim() || profile.phone,
                bio: bioInput.value.trim() || profile.bio,
                avatar: avatarInput.value.trim() || profile.avatar
            };
            saveUserProfile(updatedProfile);
            showToast("Profile updated successfully! ✨", "success");
            loadProfilePage();
        };
    }

    if (avatarInput) {
        avatarInput.addEventListener("input", function () {
            if (avatarImg && this.value.trim()) {
                avatarImg.src = this.value.trim();
            }
        });
    }

    const fileInput = document.getElementById("avatarFileInput");
    if (fileInput) {
        fileInput.addEventListener("change", function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    const dataUrl = evt.target.result;
                    if (avatarImg) avatarImg.src = dataUrl;
                    if (avatarInput) avatarInput.value = dataUrl;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

function selectPresetAvatar(url) {
    const avatarImg = document.getElementById("profileAvatarImg");
    const avatarInput = document.getElementById("inputProfileAvatar");
    if (avatarImg) avatarImg.src = url;
    if (avatarInput) avatarInput.value = url;
}

function resetProfileToDefaults() {
    if (confirm("Reset profile details back to initial default values?")) {
        saveUserProfile(DEFAULT_PROFILE);
        showToast("Profile reset to default.", "info");
        loadProfilePage();
    }
}

// ==========================================================
// Certificates (Feature 6)
// ==========================================================

function loadCertificates() {
    const container = document.getElementById("certificatesContainer");
    const lockedContainer = document.getElementById("lockedCertificatesContainer");
    if (!container) return;

    const myCourses = getMyCourses();
    const completedCourses = myCourses.filter(c => Number(c.progress) === 100);
    const inProgressCourses = myCourses.filter(c => Number(c.progress) < 100);

    const countBadge = document.getElementById("certCountBadge");
    if (countBadge) countBadge.textContent = `${completedCourses.length} Earned`;

    if (completedCourses.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon"><i class="fa-solid fa-award"></i></div>
                <h3>No Certificates Earned Yet</h3>
                <p>Complete any course 100% to automatically unlock your verified certificate of completion!</p>
                <a href="my-learning.html" class="btn btn-primary"><i class="fa-solid fa-play"></i> Continue Learning</a>
            </div>
        `;
    } else {
        container.innerHTML = "";
        completedCourses.forEach(course => {
            const certCard = document.createElement("div");
            certCard.className = "certificate-card";
            certCard.innerHTML = `
                <div class="cert-card-header">
                    <i class="fa-solid fa-certificate cert-icon"></i>
                    <span class="cert-badge">Verified Certificate</span>
                </div>
                <div class="cert-card-body">
                    <h3 class="cert-title">${course.title}</h3>
                    <p class="cert-meta">
                        <span><i class="fa-solid fa-user-tie"></i> ${course.instructor}</span>
                        <span><i class="fa-regular fa-calendar-check"></i> ${course.completedAt || 'Completed'}</span>
                    </p>
                    <div class="cert-id">Credential ID: LH-CERT-${course.id}9824X</div>
                </div>
                <div class="cert-card-actions">
                    <button class="btn btn-primary" onclick="openCertificateModal(${course.id})">
                        <i class="fa-solid fa-eye"></i> View Certificate
                    </button>
                    <button class="btn btn-outline" onclick="openCertificateModal(${course.id}, true)">
                        <i class="fa-solid fa-download"></i> Download
                    </button>
                </div>
            `;
            container.appendChild(certCard);
        });
    }

    if (lockedContainer) {
        if (inProgressCourses.length === 0) {
            lockedContainer.innerHTML = `<p class="text-muted">No courses currently in progress.</p>`;
        } else {
            lockedContainer.innerHTML = "";
            inProgressCourses.forEach(course => {
                const item = document.createElement("div");
                item.className = "locked-cert-item";
                item.innerHTML = `
                    <div class="locked-icon"><i class="fa-solid fa-lock"></i></div>
                    <div class="locked-info">
                        <h4>${course.title}</h4>
                        <div class="locked-progress-wrap">
                            <div class="custom-progress-bar">
                                <div class="progress-fill" style="width: ${course.progress || 0}%;"></div>
                            </div>
                            <span>${course.progress || 0}% / 100% (${100 - (course.progress || 0)}% left to unlock)</span>
                        </div>
                    </div>
                    <a href="my-learning.html" class="btn btn-sm btn-outline">Complete Now</a>
                `;
                lockedContainer.appendChild(item);
            });
        }
    }
}

function openCertificateModal(courseId, triggerPrint = false) {
    const course = getMyCourses().find(c => Number(c.id) === Number(courseId));
    if (!course) return;

    const profile = getUserProfile();

    let modal = document.getElementById("certificateModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "certificateModal";
        modal.className = "modal-overlay";
        document.body.appendChild(modal);
    }

    const completionDate = course.completedAt || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const credId = `LH-CERT-${course.id}${Math.floor(1000 + Math.random() * 9000)}`;

    modal.innerHTML = `
        <div class="modal-dialog cert-modal-dialog">
            <div class="modal-header no-print">
                <h3>Certificate Preview</h3>
                <button class="modal-close-btn" onclick="closeCertificateModal()"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <div class="modal-body cert-printable" id="printableCertificate">
                <div class="certificate-frame">
                    <div class="certificate-inner">
                        <div class="cert-logo">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <span>LearnHub</span>
                        </div>
                        <h1 class="cert-headline">Certificate of Completion</h1>
                        <p class="cert-subtitle">This is proudly presented to</p>

                        <div class="cert-recipient">${profile.name}</div>

                        <p class="cert-statement">
                            For successfully completing the comprehensive professional program in
                        </p>
                        <h2 class="cert-course-name">${course.title}</h2>

                        <div class="cert-footer">
                            <div class="cert-signature-box">
                                <div class="signature-line font-signature">${course.instructor}</div>
                                <div class="cert-signatory-name">${course.instructor}</div>
                                <div class="cert-signatory-title">Course Instructor</div>
                            </div>

                            <div class="cert-seal">
                                <div class="seal-outer">
                                    <i class="fa-solid fa-award"></i>
                                    <span>VERIFIED<br>EXCELLENCE</span>
                                </div>
                            </div>

                            <div class="cert-signature-box">
                                <div class="signature-line font-signature">Sarah Jenkins</div>
                                <div class="cert-signatory-name">Dr. Sarah Jenkins</div>
                                <div class="cert-signatory-title">Dean of Academic Affairs</div>
                            </div>
                        </div>

                        <div class="cert-id-date">
                            <span>Issue Date: <strong>${completionDate}</strong></span>
                            <span>Credential ID: <strong>${credId}</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer no-print">
                <button class="btn btn-outline" onclick="closeCertificateModal()">Close</button>
                <button class="btn btn-primary" onclick="window.print()">
                    <i class="fa-solid fa-print"></i> Print / Download PDF
                </button>
            </div>
        </div>
    `;

    modal.classList.add("show");

    if (triggerPrint) {
        setTimeout(() => window.print(), 500);
    }
}

function closeCertificateModal() {
    const modal = document.getElementById("certificateModal");
    if (modal) {
        modal.classList.remove("show");
    }
}

// ==========================================================
// Settings Page Logic
// ==========================================================

function initSettingsPage() {
    const themeSwitch = document.getElementById("themeSwitch");
    const currentTheme = localStorage.getItem("theme") || "light";

    if (themeSwitch) {
        themeSwitch.checked = (currentTheme === "dark");
        themeSwitch.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
                updateThemeToggleButtons("dark");
                showToast("Dark mode enabled", "info");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
                updateThemeToggleButtons("light");
                showToast("Light mode enabled", "info");
            }
        });
    }

    const resetBtn = document.getElementById("resetAllDataBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            if (confirm("WARNING: This will clear all enrolled courses, progress, wishlist, and reset your profile to default. Are you sure?")) {
                localStorage.removeItem("myCourses");
                localStorage.removeItem("wishlist");
                localStorage.removeItem("userProfile");
                showToast("All platform data reset to initial state!", "warning");
                setTimeout(() => window.location.href = "index.html", 1000);
            }
        });
    }

    const populateDemoBtn = document.getElementById("populateDemoDataBtn");
    if (populateDemoBtn) {
        populateDemoBtn.addEventListener("click", function () {
            const demoCourses = [
                {
                    id: 1,
                    title: COURSES_DATA[0].title,
                    image: COURSES_DATA[0].image,
                    instructor: COURSES_DATA[0].instructor,
                    price: COURSES_DATA[0].price,
                    category: COURSES_DATA[0].category,
                    level: COURSES_DATA[0].level,
                    progress: 100,
                    enrolledAt: "Feb 10, 2026",
                    completedAt: "Feb 24, 2026"
                },
                {
                    id: 2,
                    title: COURSES_DATA[1].title,
                    image: COURSES_DATA[1].image,
                    instructor: COURSES_DATA[1].instructor,
                    price: COURSES_DATA[1].price,
                    category: COURSES_DATA[1].category,
                    level: COURSES_DATA[1].level,
                    progress: 60,
                    enrolledAt: "Feb 25, 2026",
                    completedAt: null
                }
            ];
            saveMyCourses(demoCourses);
            showToast("Demo learning data populated! (1 Completed + 1 In Progress)", "success");
            setTimeout(() => window.location.href = "my-learning.html", 1000);
        });
    }
}

// ==========================================================
// Global Page Dispatcher
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initGlobalNav();

    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
        btn.addEventListener("click", toggleTheme);
    });

    if (document.getElementById("courseGridContainer")) {
        initCoursesPage();
    }

    if (document.getElementById("courseContainer")) {
        loadMyCourses();
    }

    if (document.getElementById("wishlistContainer")) {
        loadWishlistPage();
    }

    if (document.getElementById("detailCourseTitle")) {
        initCourseDetailsPage();
    }

    if (document.getElementById("profileForm")) {
        loadProfilePage();
    }

    if (document.getElementById("certificatesContainer")) {
        loadCertificates();
    }

    if (document.getElementById("settingsPage")) {
        initSettingsPage();
    }

    const heroSearchInput = document.getElementById("heroSearchInput");
    const heroSearchBtn = document.getElementById("heroSearchBtn");
    if (heroSearchBtn && heroSearchInput) {
        const doHeroSearch = () => {
            const q = heroSearchInput.value.trim();
            if (q) {
                window.location.href = `courses.html?search=${encodeURIComponent(q)}`;
            } else {
                window.location.href = "courses.html";
            }
        };
        heroSearchBtn.addEventListener("click", doHeroSearch);
        heroSearchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") doHeroSearch();
        });
    }
});