"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "id" | "en"

type TranslationValue = string | string[]
type TranslationMap = Record<string, TranslationValue>

const STORAGE_KEY = "portfolio-language"

const translations = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navContact: "Contact",
    navGallery: "Gallery",
    navToggleMenu: "Toggle menu",
    heroRole: "Full-Stack Developer & AI Engineer",
    heroIntro:
      "Passionate about creating innovative web solutions and exploring the latest technologies. Currently pursuing my degree while building real-world projects.",
    viewCv: "View CV",
    viewProjects: "View Projects",
    viewPortfolioPpt: "View Portfolio Ppt",
    aboutTitle: "About Me",
    aboutP1:
      "Hello, I’m Ian, a Fullstack Developer and AI Engineer with a strong background in building modern, scalable, and AI-enhanced digital products.",
    aboutP2:
      "I graduated from the D3 Informatics Engineering program at Politeknik Elektronika Negeri Surabaya (PENS) and am currently continuing my studies in the D4 Informatics Engineering program at the same institution. I have completed more than 10 application and website projects, working across frontend, backend, database, API integration, and AI-powered features.",
    aboutP3:
      "My experience includes working as a Backend Developer Intern at a software development company and joining MSIB Batch 7, a certified internship program at a regional higher education institution. I mainly work with technologies such as Laravel, React, Next.js, FastAPI, Express.js, Flutter, PostgreSQL, vector databases, and AI engineering workflows.",
    aboutP4:
      "Beyond professional experience, I have won three national-level web development competitions, which helped me strengthen my ability to design, build, and deliver practical digital solutions under real constraints.",
    aboutP5:
      "I’m passionate about creating efficient, scalable, and intelligent web applications that solve real problems and deliver meaningful user experiences.",
    workExperience: "Work Experience",
    keyAchievements: "Key Achievements:",
    technologiesUsed: "Technologies Used:",
    certificatesTitle: "Certificates & Achievements",
    viewCertificate: "View Certificate",
    skillsTitle: "Skills & Technologies",
    skillsCtaTitle: "Want to see these skills in action?",
    skillsCtaDesc: "Explore selected projects that show how I build full-stack, AI, and scalable web products.",
    skillsCtaButton: "View Projects",
    projectsTitle: "My Projects",
    projectsIntro:
      "Here are some of the projects I've worked on. Each one represents a learning journey and showcases different aspects of my development skills.",
    featuredProjects: "Featured Projects",
    otherProjects: "Other Projects",
    featured: "Featured",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    previewVideo: "Preview Video",
    demoAccount: "Demo Account",
    demoAccountDesc: "Use these credentials to test the application",
    password: "Password",
    aboutProject: "About This Project",
    keyFeatures: "Key Features",
    keyFeaturesDesc: "Here are the main features and capabilities of this project",
    projectDetails: "Project Details",
    projectDetailsDesc: "Additional implementation details, architecture, integrations, and operational scope",
    projectLinks: "Project Links",
    projectLinksDesc: "Explore the project further with these links",
    sourceCode: "Source Code",
    viewAllProjects: "View All Projects",
    backToProjects: "Back to Projects",
    projectNotFound: "Project Not Found",
    projectNotFoundDesc: "The project you're looking for doesn't exist or may have been moved.",
    goHome: "Go Home",
    contactTitle: "Get In Touch",
    contactIntro:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!",
    sendMessageTitle: "Send me a message",
    sendMessageDesc: "Fill out the form below and I'll get back to you as soon as possible.",
    name: "Name",
    fullNamePlaceholder: "Your full name",
    message: "Message",
    messagePlaceholder: "Tell me about your project or just say hello!",
    sending: "Sending...",
    sendMessage: "Send Message",
    fillAllFields: "Please fill in all fields.",
    validEmail: "Please enter a valid email address.",
    messageSent: "Message sent!",
    messageSentDesc: "Thank you for your message. I'll get back to you soon.",
    contactInformation: "Contact Information",
    contactInformationDesc: "Here are the different ways you can reach me.",
    phone: "Phone",
    location: "Location",
    followMe: "Follow Me",
    followMeDesc: "Connect with me on social media platforms.",
    letsWorkTogether: "Let's Work Together",
    letsWorkTogetherDesc:
      "I'm currently available for freelance work and open to discussing new opportunities. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
    viewMyWork: "View My Work",
    galleryTitle: "Activity Gallery",
    galleryIntro:
      "A visual journal of my journey. From coding sprints to community events, here are some moments that define my professional path.",
    quickLinks: "Quick Links",
    footerRights: "All rights reserved.",
    servicesHero: "Solutions Built for",
    servicesGrowth: "Growth",
    servicesIntro:
      "Helping businesses transform ideas into powerful, scalable, and user-centric digital experiences.",
    howIWork: "How I Work",
    howIWorkDesc:
      "A transparent and efficient workflow ensuring your project is delivered on time and to the highest standard.",
    ctaTitle: "Ready to start your project?",
    ctaDesc: "Let's discuss how we can bring your vision to life today.",
    letsTalk: "Let's Talk",
  },
  id: {
    navHome: "Beranda",
    navProjects: "Proyek",
    navContact: "Kontak",
    navGallery: "Galeri",
    navToggleMenu: "Buka menu",
    heroRole: "Full-Stack Developer & AI Engineer",
    heroIntro:
      "Saya antusias membuat solusi web inovatif dan mengeksplorasi teknologi terbaru. Saat ini saya melanjutkan studi sambil membangun proyek nyata.",
    viewCv: "Lihat CV",
    viewProjects: "Lihat Proyek",
    viewPortfolioPpt: "Lihat Portofolio PPT",
    aboutTitle: "Tentang Saya",
    aboutP1:
      "Halo, saya Ian, seorang Fullstack Developer dan AI Engineer dengan latar belakang kuat dalam membangun produk digital modern, scalable, dan didukung AI.",
    aboutP2:
      "Saya merupakan lulusan D3 Teknik Informatika Politeknik Elektronika Negeri Surabaya (PENS) dan saat ini melanjutkan studi di program D4 Teknik Informatika pada institusi yang sama. Saya telah menyelesaikan lebih dari 10 proyek aplikasi dan website, mencakup frontend, backend, database, integrasi API, dan fitur berbasis AI.",
    aboutP3:
      "Pengalaman saya mencakup peran sebagai Backend Developer Intern di sebuah perusahaan pengembangan software dan mengikuti MSIB Batch 7, program magang bersertifikat di institusi pendidikan tinggi regional. Saya banyak bekerja dengan teknologi seperti Laravel, React, Next.js, FastAPI, Express.js, Flutter, PostgreSQL, vector database, dan alur kerja AI engineering.",
    aboutP4:
      "Di luar pengalaman profesional, saya telah memenangkan tiga kompetisi web development tingkat nasional, yang membantu memperkuat kemampuan saya dalam merancang, membangun, dan menghadirkan solusi digital praktis dengan batasan nyata.",
    aboutP5:
      "Saya antusias menciptakan aplikasi web yang efisien, scalable, dan cerdas untuk menyelesaikan masalah nyata serta menghadirkan pengalaman pengguna yang bermakna.",
    workExperience: "Pengalaman Kerja",
    keyAchievements: "Pencapaian Utama:",
    technologiesUsed: "Teknologi yang Digunakan:",
    certificatesTitle: "Sertifikat & Prestasi",
    viewCertificate: "Lihat Sertifikat",
    skillsTitle: "Keahlian & Teknologi",
    skillsCtaTitle: "Ingin melihat skill ini diterapkan?",
    skillsCtaDesc: "Jelajahi beberapa proyek pilihan yang menunjukkan cara saya membangun produk full-stack, AI, dan web yang scalable.",
    skillsCtaButton: "Lihat Proyek",
    projectsTitle: "Proyek Saya",
    projectsIntro:
      "Berikut beberapa proyek yang pernah saya kerjakan. Setiap proyek merepresentasikan proses belajar dan menunjukkan berbagai kemampuan pengembangan saya.",
    featuredProjects: "Proyek Unggulan",
    otherProjects: "Proyek Lainnya",
    featured: "Unggulan",
    liveDemo: "Demo Langsung",
    viewCode: "Lihat Kode",
    previewVideo: "Video Preview",
    demoAccount: "Akun Demo",
    demoAccountDesc: "Gunakan kredensial ini untuk mencoba aplikasi",
    password: "Kata Sandi",
    aboutProject: "Tentang Proyek Ini",
    keyFeatures: "Fitur Utama",
    keyFeaturesDesc: "Berikut fitur dan kemampuan utama dari proyek ini",
    projectDetails: "Detail Proyek",
    projectDetailsDesc: "Detail tambahan tentang implementasi, arsitektur, integrasi, dan cakupan operasional",
    projectLinks: "Tautan Proyek",
    projectLinksDesc: "Jelajahi proyek lebih lanjut melalui tautan berikut",
    sourceCode: "Kode Sumber",
    viewAllProjects: "Lihat Semua Proyek",
    backToProjects: "Kembali ke Proyek",
    projectNotFound: "Proyek Tidak Ditemukan",
    projectNotFoundDesc: "Proyek yang Anda cari tidak ada atau mungkin telah dipindahkan.",
    goHome: "Ke Beranda",
    contactTitle: "Hubungi Saya",
    contactIntro:
      "Saya terbuka untuk diskusi peluang baru, proyek menarik, atau sekadar berbincang tentang teknologi. Silakan hubungi saya.",
    sendMessageTitle: "Kirim pesan",
    sendMessageDesc: "Isi formulir di bawah ini dan saya akan membalas secepatnya.",
    name: "Nama",
    fullNamePlaceholder: "Nama lengkap Anda",
    message: "Pesan",
    messagePlaceholder: "Ceritakan proyek Anda atau sekadar sapa saya!",
    sending: "Mengirim...",
    sendMessage: "Kirim Pesan",
    fillAllFields: "Mohon isi semua kolom.",
    validEmail: "Mohon masukkan alamat email yang valid.",
    messageSent: "Pesan terkirim!",
    messageSentDesc: "Terima kasih atas pesan Anda. Saya akan segera membalas.",
    contactInformation: "Informasi Kontak",
    contactInformationDesc: "Berikut beberapa cara untuk menghubungi saya.",
    phone: "Telepon",
    location: "Lokasi",
    followMe: "Ikuti Saya",
    followMeDesc: "Terhubung dengan saya di media sosial.",
    letsWorkTogether: "Mari Bekerja Sama",
    letsWorkTogetherDesc:
      "Saat ini saya tersedia untuk pekerjaan freelance dan terbuka untuk peluang baru. Jika Anda memiliki proyek atau ingin terhubung, saya senang mendengarnya.",
    viewMyWork: "Lihat Karya Saya",
    galleryTitle: "Galeri Aktivitas",
    galleryIntro:
      "Jurnal visual perjalanan saya. Dari sprint coding hingga acara komunitas, berikut beberapa momen yang membentuk perjalanan profesional saya.",
    quickLinks: "Tautan Cepat",
    footerRights: "Seluruh hak cipta dilindungi.",
    servicesHero: "Solusi yang Dibangun untuk",
    servicesGrowth: "Pertumbuhan",
    servicesIntro:
      "Membantu bisnis mengubah ide menjadi pengalaman digital yang kuat, scalable, dan berpusat pada pengguna.",
    howIWork: "Cara Saya Bekerja",
    howIWorkDesc:
      "Alur kerja transparan dan efisien untuk memastikan proyek Anda selesai tepat waktu dengan standar terbaik.",
    ctaTitle: "Siap memulai proyek Anda?",
    ctaDesc: "Mari diskusikan bagaimana visi Anda bisa diwujudkan mulai hari ini.",
    letsTalk: "Mari Bicara",
  },
} satisfies Record<Language, TranslationMap>

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: keyof typeof translations.en) => string
  ta: (key: keyof typeof translations.en) => string[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "id" || saved === "en") setLanguageState(saved)
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    document.documentElement.lang = nextLanguage
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "id" ? "en" : "id"),
      t: (key) => String(translations[language][key] ?? translations.en[key] ?? key),
      ta: (key) => {
        const value = translations[language][key] ?? translations.en[key]
        return Array.isArray(value) ? value : [String(value)]
      },
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }
  return context
}
