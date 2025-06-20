export interface ProjectImage {
  url: string
  alt: string
  caption?: string
}

export interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  features: string[]
  technologies: string[]
  images: ProjectImage[]
  githubUrl: string
  demoUrl: string
  featured: boolean
  thumbnail: string
}

export const projects: Project[] = [
  {
    slug: "rentease",
    title: "RentEase",
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
    demoUrl: "https://rentease.ianianale.shop/",
    featured: true,
    thumbnail: "/rentease/FireShot Capture 051 - Home - RentEase - Penyewaan Barang dan Jasa - [127.0.0.1].png"
  },
 {
  slug: "warga-usaha",
  title: "WargaUsaha",
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
  githubUrl: "https://github.com/ianbom/WargaUsaha",
  demoUrl: "https://wargausaha.ianianale.shop/login",
  featured: true, 
  thumbnail: "/wargausaha/FireShot Capture 056 - WargaUsaha - [wargausaha.ianianale.shop].png"
},

  {
    slug: "mijel-apps",
    title: "Mijel Apps Mobile",
    description: "Used Cooking Exchange and E-Commerce Apps",
    fullDescription:
      "A mobile SaaS application that enables users to exchange used cooking oil for reward points, which can be redeemed for essential groceries within the app.",
    features: [
      "Automatic location detection",
      "Current weather conditions display",
      "7-day weather forecast",
      "Hourly weather predictions",
      "Interactive charts and graphs",
      "Weather alerts and notifications",
      "UV index and air quality data",
      "Multiple location support",
      "Weather maps integration",
      "Customizable dashboard widgets",
    ],
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS", "Axios", "Geolocation API"],
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Weather Dashboard Main View",
        caption: "Main dashboard with current weather and 7-day forecast",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Interactive Weather Charts",
        caption: "Interactive charts showing temperature and precipitation trends",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Mobile Weather App",
        caption: "Mobile-optimized interface for weather on the go",
      },
    ],
    githubUrl: "https://github.com/alexrivera/weather-dashboard",
    demoUrl: "https://weather-demo.alexrivera.dev",
    featured: false,
    thumbnail: "/placeholder.jpg"
  },
  {
    slug: "webcare-portal",
    title: "Webcare Portal",
    description: "A modern blog platform with markdown support, SEO optimization, and content management.",
    fullDescription:
      "A feature-rich blog platform built for content creators who want full control over their publishing experience. The platform supports markdown writing with a live preview editor, making it easy to create rich, formatted content. It includes comprehensive SEO optimization features, automatic sitemap generation, and social media integration for maximum reach. The admin interface provides powerful content management tools, including scheduling posts, managing categories and tags, and analyzing reader engagement through built-in analytics.",
    features: [
      "Markdown editor with live preview",
      "SEO optimization and meta tags",
      "Content scheduling and publishing",
      "Category and tag management",
      "Comment system with moderation",
      "Social media sharing integration",
      "Built-in analytics dashboard",
      "Responsive reading experience",
      "Search functionality",
      "RSS feed generation",
    ],
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS", "Vercel"],
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Blog Homepage",
        caption: "Clean and modern blog homepage with featured articles",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Markdown Editor",
        caption: "Live markdown editor with real-time preview",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Content Management System",
        caption: "Comprehensive CMS for managing posts and content",
      },
    ],
    githubUrl: "https://github.com/alexrivera/blog-platform",
    demoUrl: "https://blog-demo.alexrivera.dev",
    featured: false,
    thumbnail: "/placeholder.jpg"
  },
  {
    slug: "e-klinik-pens",
    title: "E-Klinik Pens",
    description: "A responsive portfolio website showcasing projects and skills with modern design.",
    fullDescription:
      "A sleek and modern portfolio website designed to showcase development skills and projects effectively. Built with performance and user experience in mind, the site features smooth animations, responsive design, and optimized loading times. The portfolio includes detailed project showcases, an interactive skills section, and a contact form with form validation. The design emphasizes clean typography, strategic use of whitespace, and a cohesive color scheme that reflects professionalism while maintaining visual interest.",
    features: [
      "Responsive design for all devices",
      "Smooth animations with Framer Motion",
      "Project showcase with detailed pages",
      "Interactive skills and technologies section",
      "Contact form with validation",
      "Dark/light theme toggle",
      "SEO optimized pages",
      "Fast loading performance",
      "Accessible design principles",
      "Social media integration",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Shadcn UI", "Vercel"],
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Portfolio Homepage",
        caption: "Modern homepage with hero section and project showcase",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Projects Gallery",
        caption: "Interactive projects gallery with filtering options",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Contact Page",
        caption: "Professional contact page with form validation",
      },
    ],
    githubUrl: "https://github.com/alexrivera/portfolio",
    demoUrl: "https://alexrivera.dev",
    featured: false,
    thumbnail: "/placeholder.jpg"
  },
  {
    slug: "rent-trip",
    title: "Rent Trip ",
    description: "Real-time chat application with rooms, file sharing, and user presence indicators.",
    fullDescription:
      "A modern real-time chat application that enables seamless communication between users with advanced features typically found in professional messaging platforms. The application supports multiple chat rooms, direct messaging, file sharing capabilities, and real-time user presence indicators. Built with scalability in mind, it can handle multiple concurrent users and provides a smooth, responsive chat experience. The interface is intuitive and includes features like message search, emoji reactions, and message threading for organized conversations.",
    features: [
      "Real-time messaging with Socket.io",
      "Multiple chat rooms and direct messages",
      "File sharing and image uploads",
      "User presence indicators",
      "Message search and history",
      "Emoji reactions and custom emojis",
      "Message threading and replies",
      "User authentication and profiles",
      "Mobile-responsive interface",
      "Push notifications support",
    ],
    technologies: ["React", "Socket.io", "Express", "Redis", "MongoDB", "Cloudinary", "JWT"],
    images: [
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Chat Application Interface",
        caption: "Main chat interface with multiple rooms and direct messages",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "File Sharing Feature",
        caption: "File sharing and media upload functionality",
      },
      {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Mobile Chat Interface",
        caption: "Mobile-optimized chat interface for seamless communication",
      },
    ],
    githubUrl: "https://github.com/alexrivera/chat-app",
    demoUrl: "https://chat-demo.alexrivera.dev",
    featured: false,
    thumbnail: "/placeholder.jpg"
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
