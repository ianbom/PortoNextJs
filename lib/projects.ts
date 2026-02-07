export interface ProjectImage {
  url: string
  alt: string
  caption?: string
}

export interface Project {
  slug: string
  title: string
  demoCredentials?: {
    email: string
    password: string
    note?: string
  }
  description: string
  fullDescription: string
  features: string[]
  technologies: string[]
  images: ProjectImage[]
  githubUrl: string
  demoUrl: string
  featured: boolean
  thumbnail: string
  videoUrl?: string
}


export const projects: Project[] = [
  {
    slug: "sobat-bumi",
    title: "SobatBumi",
    demoCredentials: {
      email: "ianbom@gmail.com",
      password: "ianbom123",
      note: "This is a demo account for user role 'citizen'."
    },
    description: "A collaborative platform for reporting and taking real action on environmental issues in Indonesia.",
    fullDescription:
      "SobatBumi connects citizens, communities, and volunteers to report, verify, and follow up on environmental issues such as waste and pollution. The platform provides a reporting system, verification process, environmental action missions, and an admin dashboard for monitoring and statistics.",
    features: [
      "User registration and secure authentication",
      "Environmental issue reporting with location and photo upload",
      "Admin verification before reports are published",
      "Convert reports into environmental action missions",
      "Admin dashboard for monitoring reports, missions, and statistics",
      "Gamification system: points, badges, and leaderboard",
      "Redeem points for merchandise",
      "Donation system to support environmental missions (Midtrans integration)",
      "Environmental education quizzes",
      "Multi-role support: admin, volunteer, community, citizen"
    ],
    technologies: ["Laravel", "React", "TypeScript", "Inertia.js", "MySQL", "Midtrans", "Tailwind CSS", "Leaflet Maps"],
    images: [
      {
        url: "/sobatbumi/FireShot Capture 167 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Report List",
        caption: "Displays a comprehensive list of environmental reports submitted by users, allowing admins to monitor and manage incoming issues efficiently.",
      },
      {
        url: "/sobatbumi/FireShot Capture 168 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Report Detail",
        caption: "Shows detailed information about a specific environmental report, including location, description, and supporting images for verification.",
      },
      {
        url: "/sobatbumi/FireShot Capture 169 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Mission Detail",
        caption: "Provides an in-depth view of an environmental action mission, including objectives, participants, and progress updates.",
      },
      {
        url: "/sobatbumi/FireShot Capture 170 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Maps",
        caption: "Interactive map feature that visualizes the locations of reported environmental issues and ongoing missions across regions.",
      },
      {
        url: "/sobatbumi/FireShot Capture 171 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Education Content",
        caption: "Section dedicated to educational content, providing users with articles and resources about environmental awareness and best practices.",
      },
      {
        url: "/sobatbumi/FireShot Capture 172 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Education Quiz",
        caption: "Interactive quizzes designed to test and improve users' knowledge about environmental issues and solutions.",
      },
      {
        url: "/sobatbumi/FireShot Capture 173 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Merchandise",
        caption: "Merchandise page where users can redeem points earned from participation for exclusive eco-friendly products.",
      },
      {
        url: "/sobatbumi/FireShot Capture 174 - SobatBumi - [sobatbumi.ianianale.shop].png",
        alt: "Profile",
        caption: "User profile page displaying personal information, achievements, earned badges, and participation history in environmental missions.",
      },
    ],
    videoUrl: "https://youtu.be/7AT-kHSZ0b4",
    githubUrl: "https://github.com/ianbom/AduanEmisi.git",
    demoUrl: "https://sobatbumi.iandev.my.id/login",
    featured: true,
    thumbnail: "/sobatbumi/FireShot Capture 166 - SobatBumi - [sobatbumi.ianianale.shop].png"
  },

  {
    slug: "simkes",
    title: "SIMKESIA",
    demoCredentials: {
      email: "warga1@gmail.com",
      password: "password",
      note: "This is a demo account for user role 'patient'."
    },
    description: "A health information system for maternal & child care, facility management, and clinical record-keeping.",
    fullDescription: "SIMKESIA is a web-based health information system focused on managing maternal and child health (ANC, child growth), facility and staff administration, online consultations, and patient records. The platform offers patient and staff portals, growth charts, media-supported examination records, a chatbot for basic triage, and administrative dashboards for facility and superadmin roles to monitor services and KPIs.",
    features: [
      "Patient portal: profile, family management, and medical history",
      "Maternal care (ANC): pregnancy records, checkups, and fetal measurements",
      "Child care: growth tracking with percentile charts and developmental graphs",
      "Upload and view examination photos and media with zoom modal",
      "Online consultation: request, schedule, and join consultations",
      "Chatbot for basic health guidance and context-aware suggestions",
      "Facility (Faskes) management: CRUD for facilities and staff",
      "Role-based access: patient, staff, admin-faskes, superadmin",
      "Administrative dashboards and reports for monitoring services",
      "Export and print patient data and examination history",
      "Maps integration for facility locations",
      "UI built with reusable components and responsive design"
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "React",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "Recharts (or Chart.js)",
      "Leaflet Maps",
      "Vite",
      "Axios"
    ],
    images: [
      {
        "url": "/simkesia/list obat.png",
        "alt": "List Medicine",
        "caption": "List medicine to support maternal and child health care."
      },
      {
        "url": "/simkesia/graf anak.png",
        "alt": "Growth Chart",
        "caption": "Child and fetal growth charts showing weight, height, and head circumference over time."
      },
      {
        "url": "/simkesia/graf hml.png",
        "alt": "ANC History",
        "caption": "Detailed ANC checkup list with measurements, vitals, and media attachments."
      },
      {
        "url": "/simkesia/chatbit.png",
        "alt": "Chatbot",
        "caption": "Chatbot interface for quick health guidance and context building."
      },
      {
        "url": "/simkesia/faskes map.png",
        "alt": "Facilities",
        "caption": "List of health facilities with location and contact details."
      },
      {
        "url": "/simkesia/meet.png",
        "alt": "Online Consultation",
        "caption": "Consultation detail with video call link"
      }
    ],
    videoUrl: "https://youtu.be/MX6tX80Vumk",
    githubUrl: "https://github.com/ianbom/Simkes.git",
    demoUrl: "https://simkesia.iandev.my.id/",
    featured: true,
    thumbnail: "/simkesia/home por.png"
  },
  {
    slug: "rentease",
    title: "RentEase",
    demoCredentials: {
      email: "ianalebom@gmail.com",
      password: "ianbom123",
      note: "This is a demo account with role users."
    },
    description: "Online platform that connects product owners with customers who want to rent various items easily and securely. ",
    fullDescription:
      "Rentease was created as a liaison between product providers and renters, with order management features to make it easier to manage products.",
    features: [
      "User registration and login with secure authentication",
      "Product rental listings with categories and advanced search filters",
      "Rental order system with real-time product availability",
      "Admin dashboard for managing products, orders, and users",
      "Responsive design for both mobile and desktop devices",
      "Real-time order tracking and rental status updates",
      "Image upload support for product listings",
      "Email notifications for order confirmations and updates",
      "Product review and rating system",
      "Multi-role support: admin, owner, and renter"
    ],
    technologies: ["Laravel", "Bootstrap", "Midtrans", "MySql", "Fonnte (WhatsApp Gateway)"],
    images: [
      {
        url: "/rentease/FireShot Capture 051 - Home - RentEase - Penyewaan Barang dan Jasa - [127.0.0.1].png",
        alt: "E-Commerce Platform Homepage",
        caption: "Modern homepage with featured products and categories",
      },
      {
        url: "/rentease/FireShot Capture 052 - Products - RentEase - Penyewaan Barang dan Jasa - [127.0.0.1].png",
        alt: "Detail Product",
        caption: "Detail product with review and comentar",
      },
      {
        url: "/rentease/FireShot Capture 053 - Blog - RentEase - Penyewaan Barang dan Jasa - [127.0.0.1].png",
        alt: "Blog Home",
        caption: "Home blog with searching",
      },
      {
        url: "/rentease/FireShot Capture 054 - Blog Detail - RentEase - Penyewaan Barang dan Jasa - [127.0.0.1].png",
        alt: "Detail Blog",
        caption: "Detail blog where user can read and give a comentar",
      },
      {
        url: "/rentease/FireShot Capture 055 - Product - RentEasy by IanBom - [127.0.0.1].png",
        alt: "Product Management",
        caption: "Product management dashboard for our vendor",
      },
    ],
    githubUrl: "https://github.com/ianbom/RentEase.git",
    demoUrl: "https://rentease.iandev.my.id/login",
    featured: true,
    thumbnail: "/rentease/FireShot Capture 051 - Home - RentEase - Penyewaan Barang dan Jasa - [127.0.0.1].png"
  },
  {
    slug: "warga-usaha",
    title: "WargaUsaha",
    demoCredentials: {
      email: "ianaleale123@gmail.com",
      password: "ianbom123",
      note: "This is a demo account with role users."
    },
    description: "A digital platform that empowers local economies by connecting UMKM, job seekers, and service providers in one ecosystem.",
    fullDescription:
      "WargaUsaha is a community-focused digital platform designed to strengthen the local economy of Sidoarjo by providing an integrated space for selling local products, offering professional services, and posting job opportunities. Built with accessibility in mind, WargaUsaha helps small businesses (UMKM), freelancers, and job seekers promote their offerings and connect with the community efficiently. This platform enables economic growth through features like digital storefronts, service listings, job boards, and a built-in wallet system, all in one easy-to-use system.",
    features: [
      "Comprehensive product catalog featuring local MSME (UMKM) offerings with advanced filtering and digital storefronts",
      "Service directory for local professionals and businesses (e.g., tutors, repair, culinary, creative services)",
      "Job and freelance opportunity board for local employment and project postings",
      "Role-based dashboards for citizens, business owners, and administrators",
      "Integrated digital wallet for secure transactions and balance management",
      "Real-time chat and consultation system between users, businesses, and employers",
      "Midtrans payment gateway integration (sandbox mode) for seamless online payments",
      "Detailed transaction history for product purchases, service bookings, and job applications",
      "Admin panel for store verification, user management, and activity monitoring",
    ],
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "Midtrans (Sandbox)",
      "Fonnte (WhatsApp Gateway)",
      "Maps API",
      "GPS Integration"
    ],
    images: [
      {
        url: "/wargausaha/FireShot Capture 058 - WargaUsaha - [wargausaha.ianianale.shop].png",
        alt: "Product Page",
        caption: "Product page where user can search the product"
      },
      {
        url: "/wargausaha/FireShot Capture 059 - WargaUsaha - [wargausaha.ianianale.shop].png",
        alt: "Detail Product",
        caption: "Product detail page for the detail product and review"
      },
      {
        url: "/wargausaha/FireShot Capture 060 - WargaUsaha - [wargausaha.ianianale.shop].png",
        alt: "Job Board",
        caption: "List of available jobs and freelance projects"
      },
      {
        url: "/wargausaha/FireShot Capture 061 - WargaUsaha - [wargausaha.ianianale.shop].png",
        alt: "Service Listing",
        caption: "Digital listing of local services with pricing and contact"
      },
      {
        url: "/wargausaha/FireShot Capture 062 - Warga Usaha - [wargausaha.ianianale.shop].png",
        alt: "Profile",
        caption: "Profile user"
      }
    ],
    videoUrl: "https://youtu.be/_03SNdteHr4",
    githubUrl: "https://github.com/ianbom/WargaUsaha",
    demoUrl: "https://wargausaha.iandev.my.id/login",
    featured: true,
    thumbnail: "/wargausaha/FireShot Capture 056 - WargaUsaha - [wargausaha.ianianale.shop].png"
  },
  {
    slug: "dental-clinic",
    title: "DentalClinic",
    description: "A comprehensive dental clinic management system with appointment booking, patient management, and admin dashboard.",
    fullDescription: "DentalClinic is a web-based clinic management system designed to streamline dental practice operations. It features an intuitive booking system with calendar integration, patient check-in management, service catalog, and a comprehensive admin dashboard for monitoring appointments and clinic activities. Built with Laravel, the platform offers a clean, professional interface for both patients and clinic staff.",
    features: [
      "Online appointment booking with time slot selection",
      "Interactive calendar view for scheduling",
      "Patient check-in and queue management",
      "Service and treatment catalog",
      "Admin dashboard with appointment overview",
      "Booking history and patient records",
      "Responsive design for all devices",
      "Real-time appointment status updates"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "React", "WhatsApp Gateway", "TypeScript", "jQuery", "Tailwind CSS"],
    images: [
      {
        url: "/DentalClinic/Home.png",
        alt: "Homepage",
        caption: "Professional homepage showcasing dental clinic services and information"
      },
      {
        url: "/DentalClinic/Tentang.png",
        alt: "About Page",
        caption: "About page with clinic information and team introduction"
      },
      {
        url: "/DentalClinic/Layanan.png",
        alt: "Services",
        caption: "Comprehensive list of dental services and treatments offered"
      },
      {
        url: "/DentalClinic/Booking.png",
        alt: "Booking System",
        caption: "Online appointment booking interface with date and time selection"
      },
      {
        url: "/DentalClinic/Kalender.png",
        alt: "Calendar View",
        caption: "Interactive calendar for viewing and managing appointments"
      },
      {
        url: "/DentalClinic/Checkin.png",
        alt: "Check-in System",
        caption: "Patient check-in interface for queue management"
      },
      {
        url: "/DentalClinic/Admin Dashboard.png",
        alt: "Admin Dashboard",
        caption: "Admin dashboard for monitoring appointments and clinic activities"
      }
    ],
    githubUrl: "https://github.com/ianbom/DentalClinic.git",
    demoUrl: "https://klinik-gigi.iandev.my.id",
    featured: false,
    thumbnail: "/DentalClinic/Home.png"
  },
  {
    slug: "persona-q",
    title: "PersonaQ - Online Consultation",
    demoCredentials: {
      email: "ianalebom@gmail.com",
      password: "ianbom123",
      note: "This is a demo account with role patient."
    },
    description: "An online consultation platform connecting users with professionals for personalized advice and guidance.",
    fullDescription: "PersonaQ (Online Consultation) is a modern web application that facilitates online consultations between users and professional advisors. The platform features a streamlined booking system, consultation history tracking, and an intuitive admin dashboard for managing consultations. Users can easily book sessions, view their consultation history, and receive personalized guidance through the platform.",
    features: [
      "Online consultation booking system",
      "Time slot picker for flexible scheduling",
      "Consultation history and records",
      "Professional advisor profiles",
      "Booking confirmation and notifications",
      "Admin dashboard for consultation management",
      "User-friendly booking flow",
      "Responsive interface for mobile and desktop"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "React", "TypeScript", "Alpine.js", "Payment Gateway"],
    images: [
      {
        url: "/PersonaQ/Dashboard.png",
        alt: "Dashboard",
        caption: "Main dashboard with consultation overview and quick actions"
      },
      {
        url: "/PersonaQ/Booking.png",
        alt: "Booking",
        caption: "Consultation booking interface for scheduling sessions"
      },
      {
        url: "/PersonaQ/Time Picker.png",
        alt: "Time Picker",
        caption: "Interactive time slot selection for booking appointments"
      },
      {
        url: "/PersonaQ/Detail Book.png",
        alt: "Booking Details",
        caption: "Detailed view of booking information and confirmation"
      },
      {
        url: "/PersonaQ/History.png",
        alt: "History",
        caption: "Consultation history showing past and upcoming sessions"
      },
      {
        url: "/PersonaQ/Adm Dashb.png",
        alt: "Admin Dashboard",
        caption: "Admin panel for managing consultations and users"
      }
    ],
    githubUrl: "https://github.com/ianbom/OnlineConsultation.git",
    demoUrl: "https://consul.iandev.my.id/login",
    featured: false,
    thumbnail: "/PersonaQ/Dashboard.png"
  },
  {
    slug: "lms-impact-academy",
    title: "LMS Impact Academy",
    description: "A comprehensive Learning Management System with course management, video learning, quizzes, and certification.",
    fullDescription: "LMS Impact Academy is a full-featured learning management platform designed to deliver engaging online education. It features an intuitive course catalog with category filtering, video-based learning modules, interactive quizzes with instant feedback, progress tracking, and automated certificate generation. Built with Laravel and React, the platform offers a modern, responsive interface for both learners and administrators to manage the complete learning lifecycle.",
    features: [
      "Course catalog with category-based filtering",
      "Video-based learning modules with resource attachments",
      "Interactive quiz system with multiple choice questions",
      "Student progress tracking and analytics",
      "Admin dashboard for course and student management",
      "Automated certificate generation upon course completion",
      "Enrollment and payment order management",
      "Responsive design for all devices",
      "Real-time learning progress updates",
      "Video notes and bookmarking",
      "Mentor assignment and management"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "React", "TypeScript", "Inertia.js", "Tailwind CSS"],
    images: [
      {
        url: "/Lms/Login.png",
        alt: "Login",
        caption: "Login page for students and instructors",
      },
      {
        url: "/Lms/DashboardUser.png",
        alt: "User Dashboard",
        caption: "Student dashboard with enrolled courses and progress tracking",
      },
      {
        url: "/Lms/ListClass.png",
        alt: "Course List",
        caption: "Course catalog with filtering and search capabilities",
      },
      {
        url: "/Lms/DetailClass.png",
        alt: "Course Detail",
        caption: "Detailed course page showing modules and lessons",
      },
      {
        url: "/Lms/DashboardAdmin.png",
        alt: "Admin Dashboard",
        caption: "Admin dashboard for managing courses and users",
      },
      {
        url: "/Lms/AdminClass.png",
        alt: "Course Management",
        caption: "Admin interface for creating and managing courses",
      },
      {
        url: "/Lms/AdminDetailClass.png",
        alt: "Course Detail Admin",
        caption: "Admin view for editing course content and modules",
      },
      {
        url: "/Lms/FireShot Capture 269 - Buat Modul - ImpactAcademy - [127.0.0.1].png",
        alt: "Create Module",
        caption: "Module creation interface for adding new lessons",
      },
      {
      url: "/Lms/WatchVideo.png",
        alt: "Video Learning",
        caption: "Video player interface for watching course lessons",
      },
    ],
    githubUrl: "https://github.com/ianbom/lms.git",
    demoUrl: "https://lms.iandev.my.id",
    featured: false,
    thumbnail: "/Lms/FireShot Capture 269 - Buat Modul - ImpactAcademy - [127.0.0.1].png"
  },
  {
    slug: "mijel-apps",
    title: "Mijel Apps Mobile and Website Dashboard",
    description: "Used Cooking Exchange and E-Commerce Apps",
    fullDescription: "A mobile SaaS application that enables users to exchange used cooking oil for reward points, which can be redeemed for essential groceries within the app and Webstie dashboard for admin to manage the product and verification agent and customers",
    features: [
      "User registration and authentication (Superadmin, Admin, Agent, Customer)",
      "Oil transaction management (collection, exchange, top up)",
      "Transaction history and reporting",
      "Dashboard with transaction statistics",
      "Product and stock management",
      "Configurable system settings",
      "Address and region management (districts, villages, etc.)",
      "Role-based access control",
      "Notifications for important events",
      "Exportable transaction reports"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "PostgreSql",
      "RESTful API",
      "Dart",
      "Flutter",
      "Tailwind Css",
      "jQuery"
    ],
    images: [
      {
        url: "/mijel/FireShot Capture 080 - Mijel - Penukaran Minyak Jelantah - [103.56.148.69].png",
        alt: "Weather Dashboard Main View",
        caption: "Main dashboard with current weather and 7-day forecast",
      },
      {
        url: "/mijel/FireShot Capture 081 - Mijel - Penukaran Minyak Jelantah - [103.56.148.69].png",
        alt: "Interactive Weather Charts",
        caption: "Interactive charts showing temperature and precipitation trends",
      },
      {
        url: "/mijel/FireShot Capture 082 - Mijel - Penukaran Minyak Jelantah - [103.56.148.69].png",
        alt: "Mobile Weather App",
        caption: "Mobile-optimized interface for weather on the go",
      },
      {
        url: "/mijel/FireShot Capture 083 - Mijel - Penukaran Minyak Jelantah - [103.56.148.69].png",
        alt: "Mobile Weather App",
        caption: "Mobile-optimized interface for weather on the go",
      },
      {
        url: "/mijel/FireShot Capture 084 - Mijel - Penukaran Minyak Jelantah - [103.56.148.69].png",
        alt: "Mobile Weather App",
        caption: "Mobile-optimized interface for weather on the go",
      },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: false,
    thumbnail: "/mijel/FireShot Capture 079 - Mijel - Penukaran Minyak Jelantah - [103.56.148.69].png"
  },
  {
    slug: "webcare-portal",
    title: "Webcare Portal",
    description: "A web-based client management system for PT Webcare with project tracking, invoicing, and real-time notifications.",
    fullDescription:
      "A robust client management platform developed for PT Webcare, a leading software house. This system streamlines the management of clients, projects, and communications. It features an intuitive dashboard for administrators and staff to manage client data, track project progress, handle invoicing, and monitor support tickets. Real-time notifications keep users updated on project milestones and client requests. The platform also offers comprehensive reporting tools, secure authentication, and role-based access control to ensure data privacy and efficient workflow.",
    features: [
      "Client data management",
      "Project tracking and status updates",
      "Log activity tracking",
      "Support ticket management",
      "Real-time notifications via email",
      "Role-based access control (admin, staff, client)",
      "Comprehensive reporting and analytics",
      "Responsive and user-friendly interface",
      "Search and filter functionality",
      "Secure authentication and data protection"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "SMTP", "WhatsApp Gateway"],
    images: [
      {
        url: "/kpwebcare/FireShot Capture 063 - Dashboard - [127.0.0.1].png",
        alt: "Dashboard",
        caption: "Dashboard for admin",
      },
      {
        url: "/kpwebcare/FireShot Capture 064 - Client - [127.0.0.1].png",
        alt: "Client List",
        caption: "List client and manage their order",
      },
      {
        url: "/kpwebcare/FireShot Capture 065 - Video Tutorial - [127.0.0.1].png",
        alt: "Tutorial Video",
        caption: "Tutorial Video for client using youtube API",
      },
      {
        url: "/kpwebcare/FireShot Capture 066 -  - [127.0.0.1].png",
        alt: "Calendar",
        caption: "Calendar to manage the order timeline",
      },
      {
        url: "/kpwebcare/FireShot Capture 067 - Log - [127.0.0.1].png",
        alt: "Log",
        caption: "Log activity for users activity",
      },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: false,
    thumbnail: "/kpwebcare/FireShot Capture 068 - Login Client Portal - [127.0.0.1].png"
  },
  {
    slug: "e-klinik-pens",
    title: "E-Klinik Pens Mobile Apps",
    description: "A modern clinic management app for handling patients, doctors, queues, and checkups.",
    fullDescription:
      "A comprehensive and user-friendly clinic management application designed to streamline daily operations in healthcare settings. Built with Flutter for cross-platform compatibility, the app features an intuitive dashboard, efficient patient and doctor data management, queue and checkup tracking, and a powerful search function. The design focuses on usability, clean navigation, and a professional appearance, ensuring a smooth experience for both staff and administrators.",
    features: [
      "Responsive UI for mobile and desktop",
      "Dashboard overview with key statistics",
      "Patient and doctor data management",
      "Queue and checkup tracking",
      "Powerful search functionality",
      "Drawer navigation and custom header",
      "Modern bottom navigation bar",
      "Cross-platform support (Android, iOS, Web, Desktop)",
      "Secure and accessible design",
      "Easy integration with backend APIs",
    ],
    technologies: ["Flutter", "Dart", "Laravel", "PHP", "Provider", "REST API", "Material Design", "MySql"],
    images: [
      {
        url: "/eklinik/36.jpg",
        alt: "Home",
        caption: "E-Klinik Home",
      },
      {
        url: "/eklinik/37.jpg",
        alt: "Queue",
        caption: "Queue page for patients",
      },
      {
        url: "/eklinik/38.jpg",
        alt: "Doctor Schedule",
        caption: "Doctor Schedule page",
      },
      {
        url: "/eklinik/39.jpg",
        alt: "Patients Page",
        caption: "Patiens detail page",
      },
    ],
    githubUrl: "https://github.com/ianbom/klinik-pens.git",
    demoUrl: "https://github.com",
    featured: false,
    thumbnail: "/eklinik/36.jpg"
  },
  {
    slug: "rent-trip",
    title: "Rent Trip ",
    description: "Vehicle rental application with vehicle management, transactions, and administration.",
    fullDescription: "A modern web application for vehicle rental that streamlines vehicle management, rental transactions, and administration. Users can browse available vehicles, make reservations, manage transactions, and handle customer and employee data. The system supports vehicle image uploads, user authentication, and an admin dashboard for real-time data monitoring. Built for scalability and ease of use, this application is suitable for small to medium-sized vehicle rental businesses.",
    features: [
      "Vehicle data management (CRUD)",
      "Vehicle rental booking and transaction management",
      "Vehicle image upload and management",
      "Customer and employee data management",
      "User authentication and authorization (admin, staff, customer)",
      "Admin dashboard for monitoring transactions and vehicles",
      "Vehicle search and filtering",
      "Transaction status notifications",
      "Mobile-responsive interface",
      "Database integration with Prisma"
    ],
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Firebase Authentication",
      "Vercel Blob",
      "Tailwind CSS"
    ],
    images: [
      {
        url: "/renttrip/FireShot Capture 069 -  - [rental-nextjs.vercel.app].png",
        alt: "Login",
        caption: "Login page for Rent Trip",
      },
      {
        url: "/renttrip/FireShot Capture 070 -  - [rental-nextjs.vercel.app].png",
        alt: "Homepage",
        caption: "Rent Trip Homepage",
      },
      {
        url: "/renttrip/FireShot Capture 071 -  - [rental-nextjs.vercel.app].png",
        alt: "List Vechile",
        caption: "List vechile for users ",
      },
      {
        url: "/renttrip/FireShot Capture 072 -  - [rental-nextjs.vercel.app].png",
        alt: "Dashboard Vechile",
        caption: "Dashboard vechile for admin",
      },
      {
        url: "/renttrip/FireShot Capture 073 -  - [rental-nextjs.vercel.app].png",
        alt: "Dashboard Transaction",
        caption: "Dashboard transaction for admin",
      },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://rental-nextjs.vercel.app",
    featured: false,
    thumbnail: "/renttrip/FireShot Capture 069 -  - [rental-nextjs.vercel.app].png"
  },
  {
    slug: "online-course",
    title: "Online Course ",
    description: "Islamic online course platform with structured learning, quizzes, and certification.",
    fullDescription: "A comprehensive web application for Islamic online learning, offering structured courses, video lessons, quizzes, e-certificates, and discussion groups. Users can enroll in courses, track their progress, participate in quizzes, and receive certificates upon completion. The platform features user authentication, subscription management, and an admin dashboard for managing content and monitoring user activity. Designed for accessibility and scalability, this application is ideal for individuals seeking flexible and guided Islamic education.",
    features: [
      "Course and lesson management (CRUD)",
      "Video-based learning modules",
      "Quiz and assessment system",
      "E-certificate generation upon course completion",
      "User authentication and authorization (admin, instructor, student)",
      "Subscription and payment management",
      "Discussion groups and community features",
      "Progress tracking and reporting",
      "Mobile-responsive interface",
      "Database integration with Laravel Eloquent ORM"
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Blade Templates",
      "MySQL",
      "JavaScript",
      "Bootstrap/Tailwind CSS"
    ],
    images: [
      {
        url: "/course/FireShot Capture 076 - Login - [course.ianianale.shop].png",
        alt: "Login",
        caption: "Login page",
      },
      {
        url: "/course/FireShot Capture 074 - Laravel - [course.ianianale.shop].png",
        alt: "Class ",
        caption: "Class for users",
      },
      {
        url: "/course/FireShot Capture 075 - Laravel - [course.ianianale.shop].png",
        alt: "Membership",
        caption: "Subscription with Midtrans payment gateway",
      },
      {
        url: "/course/FireShot Capture 077 - Laravel - Daftar Materi - [course.ianianale.shop].png",
        alt: "Dashboard Course",
        caption: "Dashboard course for admin",
      },
      {
        url: "/course/FireShot Capture 078 - Laravel - Daftar Paket Langganan - [course.ianianale.shop].png",
        alt: "Dashboard Subscription",
        caption: "Dashboard subscription for admin",
      },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    featured: false,
    thumbnail: "/course/FireShot Capture 076 - Login - [course.ianianale.shop].png"
  },

]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
