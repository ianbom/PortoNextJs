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
    heroRole: "Full-Stack Developer",
    heroIntro:
      "Passionate about creating innovative web solutions and exploring the latest technologies. Currently pursuing my degree while building real-world projects.",
    viewCv: "View CV",
    viewProjects: "View Projects",
    viewPortfolioPpt: "View Portfolio Ppt",
    aboutTitle: "About Me",
    aboutP1:
      "Hello! I'm Ian, a graduate of the D3 Informatics Engineering program at PENS, currently continuing my studies in the D4 Informatics Engineering program at the same institution. With over 10 application and website projects completed, I specialize as a Fullstack Developer skilled in PHP, Dart, and JavaScript, using frameworks like Laravel, Flutter, Express.js, Next.Js, and React.",
    aboutP2:
      "I have professional experience as a Backend Developer Intern at Webcare Indonesia and through the MSIB Batch 7 program at LLDIKTI Region 7. I’m passionate about building efficient and scalable digital solutions.",
    aboutP3:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with fellow developers.",
    workExperience: "Work Experience",
    keyAchievements: "Key Achievements:",
    technologiesUsed: "Technologies Used:",
    certificatesTitle: "Certificates & Achievements",
    viewCertificate: "View Certificate",
    skillsTitle: "Skills & Technologies",
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
    heroRole: "Full-Stack Developer",
    heroIntro:
      "Saya antusias membuat solusi web inovatif dan mengeksplorasi teknologi terbaru. Saat ini saya melanjutkan studi sambil membangun proyek nyata.",
    viewCv: "Lihat CV",
    viewProjects: "Lihat Proyek",
    viewPortfolioPpt: "Lihat Portofolio PPT",
    aboutTitle: "Tentang Saya",
    aboutP1:
      "Halo! Saya Ian, lulusan D3 Teknik Informatika PENS dan saat ini melanjutkan studi D4 Teknik Informatika di institusi yang sama. Dengan lebih dari 10 proyek aplikasi dan website yang telah diselesaikan, saya berfokus sebagai Fullstack Developer dengan keahlian PHP, Dart, dan JavaScript, menggunakan framework seperti Laravel, Flutter, Express.js, Next.Js, dan React.",
    aboutP2:
      "Saya memiliki pengalaman profesional sebagai Backend Developer Intern di Webcare Indonesia dan melalui program MSIB Batch 7 di LLDIKTI Wilayah 7. Saya antusias membangun solusi digital yang efisien dan scalable.",
    aboutP3:
      "Di luar coding, saya senang mengeksplorasi teknologi baru, berkontribusi pada proyek open-source, dan berbagi pengetahuan dengan sesama developer.",
    workExperience: "Pengalaman Kerja",
    keyAchievements: "Pencapaian Utama:",
    technologiesUsed: "Teknologi yang Digunakan:",
    certificatesTitle: "Sertifikat & Prestasi",
    viewCertificate: "Lihat Sertifikat",
    skillsTitle: "Keahlian & Teknologi",
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

const projectText: Record<string, Partial<Record<Language, { description?: string; fullDescription?: string; features?: string[]; demoNote?: string }>>> = {
  "sobat-bumi": {
    id: {
      description: "Platform kolaboratif untuk melaporkan dan melakukan aksi nyata terhadap isu lingkungan di Indonesia.",
      fullDescription:
        "SobatBumi menghubungkan warga, komunitas, dan relawan untuk melaporkan, memverifikasi, dan menindaklanjuti isu lingkungan seperti sampah dan polusi. Platform ini menyediakan sistem pelaporan, proses verifikasi, misi aksi lingkungan, dan dashboard admin untuk monitoring serta statistik.",
      features: [
        "Registrasi pengguna dan autentikasi aman",
        "Pelaporan isu lingkungan dengan lokasi dan unggah foto",
        "Verifikasi admin sebelum laporan dipublikasikan",
        "Mengubah laporan menjadi misi aksi lingkungan",
        "Dashboard admin untuk monitoring laporan, misi, dan statistik",
        "Sistem gamifikasi: poin, badge, dan leaderboard",
        "Penukaran poin untuk merchandise",
        "Sistem donasi untuk mendukung misi lingkungan dengan integrasi Midtrans",
        "Kuis edukasi lingkungan",
        "Dukungan multi-role: admin, volunteer, komunitas, dan citizen",
      ],
      demoNote: "Ini adalah akun demo untuk role citizen.",
    },
  },
  simkes: {
    id: {
      description: "Sistem informasi kesehatan untuk layanan ibu dan anak, manajemen fasilitas, dan pencatatan klinis.",
      fullDescription:
        "SIMKESIA adalah sistem informasi kesehatan berbasis web untuk mengelola kesehatan ibu dan anak, fasilitas, staf, konsultasi online, dan rekam pasien.",
      features: [
        "Portal pasien: profil, manajemen keluarga, dan riwayat medis",
        "Layanan ibu hamil: catatan kehamilan, pemeriksaan, dan pengukuran janin",
        "Layanan anak: pelacakan pertumbuhan dengan grafik persentil dan perkembangan",
        "Unggah dan lihat foto serta media pemeriksaan dengan modal zoom",
        "Konsultasi online: permintaan, penjadwalan, dan akses konsultasi",
        "Chatbot untuk panduan kesehatan dasar dan saran kontekstual",
        "Manajemen fasilitas kesehatan dan staf",
        "Akses berbasis role: pasien, staf, admin faskes, dan superadmin",
        "Dashboard dan laporan administrasi untuk monitoring layanan",
        "Export dan cetak data pasien serta riwayat pemeriksaan",
        "Integrasi maps untuk lokasi fasilitas",
        "UI responsif dengan komponen reusable",
      ],
      demoNote: "Ini adalah akun demo untuk role patient.",
    },
  },
  rentease: {
    id: {
      description: "Platform online yang menghubungkan pemilik produk dengan pelanggan yang ingin menyewa barang secara mudah dan aman.",
      fullDescription:
        "Rentease dibuat sebagai penghubung antara penyedia produk dan penyewa, lengkap dengan fitur manajemen pesanan untuk mempermudah pengelolaan produk.",
      features: [
        "Registrasi dan login pengguna dengan autentikasi aman",
        "Daftar produk rental dengan kategori dan filter pencarian",
        "Sistem pesanan rental dengan ketersediaan produk real-time",
        "Dashboard admin untuk mengelola produk, pesanan, dan pengguna",
        "Desain responsif untuk mobile dan desktop",
        "Pelacakan pesanan dan status rental secara real-time",
        "Dukungan unggah gambar untuk listing produk",
        "Notifikasi email untuk konfirmasi dan update pesanan",
        "Sistem ulasan dan rating produk",
        "Dukungan multi-role: admin, owner, dan renter",
      ],
      demoNote: "Ini adalah akun demo dengan role users.",
    },
  },
  "warga-usaha": {
    id: {
      description: "Platform digital yang memperkuat ekonomi lokal dengan menghubungkan UMKM, pencari kerja, dan penyedia layanan.",
      fullDescription:
        "WargaUsaha adalah platform komunitas untuk memperkuat ekonomi lokal Sidoarjo melalui ruang terpadu untuk menjual produk lokal, menawarkan jasa, dan memposting peluang kerja.",
      features: [
        "Katalog produk UMKM dengan filter lanjutan dan etalase digital",
        "Direktori layanan profesional dan bisnis lokal",
        "Papan lowongan kerja dan peluang freelance lokal",
        "Dashboard berbasis role untuk warga, pemilik usaha, dan admin",
        "Dompet digital untuk transaksi aman dan pengelolaan saldo",
        "Chat dan konsultasi real-time antar pengguna, bisnis, dan pemberi kerja",
        "Integrasi payment gateway Midtrans sandbox",
        "Riwayat transaksi untuk pembelian, booking layanan, dan lamaran kerja",
        "Panel admin untuk verifikasi toko, manajemen pengguna, dan monitoring aktivitas",
      ],
      demoNote: "Ini adalah akun demo dengan role users.",
    },
  },
  "dental-clinic": {
    id: {
      description: "Sistem manajemen klinik gigi dengan booking janji, manajemen pasien, dan dashboard admin.",
      fullDescription:
        "DentalClinic adalah sistem manajemen klinik berbasis web untuk merapikan operasional praktik gigi, mulai dari booking, check-in pasien, katalog layanan, hingga dashboard admin.",
      features: [
        "Booking janji online dengan pilihan slot waktu",
        "Tampilan kalender interaktif untuk penjadwalan",
        "Check-in pasien dan manajemen antrean",
        "Katalog layanan dan perawatan",
        "Dashboard admin dengan ringkasan janji temu",
        "Riwayat booking dan catatan pasien",
        "Desain responsif untuk semua perangkat",
        "Update status janji temu secara real-time",
      ],
    },
  },
  "persona-q": {
    id: {
      description: "Platform konsultasi online yang menghubungkan pengguna dengan profesional untuk saran personal.",
      fullDescription:
        "PersonaQ adalah aplikasi web modern untuk memfasilitasi konsultasi online antara pengguna dan advisor profesional, lengkap dengan booking, riwayat konsultasi, dan dashboard admin.",
      features: [
        "Sistem booking konsultasi online",
        "Pemilih slot waktu untuk jadwal fleksibel",
        "Riwayat dan catatan konsultasi",
        "Profil advisor profesional",
        "Konfirmasi booking dan notifikasi",
        "Dashboard admin untuk manajemen konsultasi",
        "Alur booking yang mudah digunakan",
        "Antarmuka responsif untuk mobile dan desktop",
      ],
      demoNote: "Ini adalah akun demo dengan role patient.",
    },
  },
  "lms-impact-academy": {
    id: {
      description: "Learning Management System dengan manajemen kursus, video pembelajaran, kuis, dan sertifikat.",
      fullDescription:
        "LMS Impact Academy adalah platform pembelajaran lengkap untuk menyajikan pendidikan online melalui katalog kursus, video, kuis interaktif, pelacakan progres, dan sertifikat otomatis.",
      features: [
        "Katalog kursus dengan filter kategori",
        "Modul pembelajaran video dengan lampiran sumber belajar",
        "Sistem kuis interaktif dengan pilihan ganda",
        "Pelacakan progres dan analitik siswa",
        "Dashboard admin untuk manajemen kursus dan siswa",
        "Pembuatan sertifikat otomatis setelah kursus selesai",
        "Manajemen enrollment dan order pembayaran",
        "Desain responsif untuk semua perangkat",
        "Update progres belajar secara real-time",
        "Catatan dan bookmark video",
        "Manajemen mentor",
      ],
    },
  },
  "mijel-apps": {
    id: {
      description: "Aplikasi penukaran minyak jelantah dan e-commerce.",
      fullDescription:
        "Aplikasi SaaS mobile yang memungkinkan pengguna menukar minyak jelantah menjadi poin reward yang dapat ditukar dengan kebutuhan pokok, lengkap dengan dashboard website untuk admin.",
      features: [
        "Registrasi dan autentikasi pengguna untuk Superadmin, Admin, Agent, dan Customer",
        "Manajemen transaksi minyak: collection, exchange, dan top up",
        "Riwayat transaksi dan pelaporan",
        "Dashboard statistik transaksi",
        "Manajemen produk dan stok",
        "Pengaturan sistem yang dapat dikonfigurasi",
        "Manajemen alamat dan wilayah",
        "Role-based access control",
        "Notifikasi untuk aktivitas penting",
        "Laporan transaksi yang dapat diexport",
      ],
    },
  },
  "webcare-portal": {
    id: {
      description: "Sistem manajemen klien PT Webcare untuk pelacakan proyek, invoice, dan notifikasi real-time.",
      fullDescription:
        "Platform manajemen klien untuk PT Webcare yang membantu mengelola klien, proyek, komunikasi, invoice, tiket dukungan, laporan, autentikasi aman, dan role-based access control.",
      features: [
        "Manajemen data klien",
        "Pelacakan proyek dan update status",
        "Pelacakan log aktivitas",
        "Manajemen tiket dukungan",
        "Notifikasi real-time melalui email",
        "Role-based access control untuk admin, staff, dan client",
        "Laporan dan analitik menyeluruh",
        "Antarmuka responsif dan mudah digunakan",
        "Fitur pencarian dan filter",
        "Autentikasi aman dan perlindungan data",
      ],
    },
  },
  "e-klinik-pens": {
    id: {
      description: "Aplikasi manajemen klinik modern untuk pasien, dokter, antrean, dan pemeriksaan.",
      fullDescription:
        "Aplikasi manajemen klinik yang ramah pengguna untuk menyederhanakan operasional kesehatan, dibangun dengan Flutter dan didukung fitur dashboard, data pasien/dokter, antrean, pemeriksaan, dan pencarian.",
      features: [
        "UI responsif untuk mobile dan desktop",
        "Ringkasan dashboard dengan statistik utama",
        "Manajemen data pasien dan dokter",
        "Pelacakan antrean dan pemeriksaan",
        "Fitur pencarian yang kuat",
        "Navigasi drawer dan header custom",
        "Bottom navigation bar modern",
        "Dukungan cross-platform untuk Android, iOS, Web, dan Desktop",
        "Desain aman dan mudah diakses",
        "Mudah diintegrasikan dengan backend API",
      ],
    },
  },
  "rent-trip": {
    id: {
      description: "Aplikasi rental kendaraan dengan manajemen kendaraan, transaksi, dan administrasi.",
      fullDescription:
        "Aplikasi web rental kendaraan modern yang membantu mengelola kendaraan, booking, transaksi, pelanggan, karyawan, unggah gambar, autentikasi, dan dashboard admin.",
      features: [
        "Manajemen data kendaraan",
        "Booking rental kendaraan dan manajemen transaksi",
        "Unggah dan manajemen gambar kendaraan",
        "Manajemen data pelanggan dan karyawan",
        "Autentikasi dan otorisasi pengguna untuk admin, staff, dan customer",
        "Dashboard admin untuk monitoring transaksi dan kendaraan",
        "Pencarian dan filter kendaraan",
        "Notifikasi status transaksi",
        "Antarmuka responsif mobile",
        "Integrasi database dengan Prisma",
      ],
    },
  },
  "online-course": {
    id: {
      description: "Platform kursus online Islam dengan pembelajaran terstruktur, kuis, dan sertifikat.",
      fullDescription:
        "Aplikasi web pembelajaran Islam online yang menyediakan kursus terstruktur, video, kuis, e-sertifikat, grup diskusi, autentikasi, langganan, dan dashboard admin.",
      features: [
        "Manajemen kursus dan pelajaran",
        "Modul pembelajaran berbasis video",
        "Sistem kuis dan penilaian",
        "Pembuatan e-sertifikat setelah kursus selesai",
        "Autentikasi dan otorisasi pengguna untuk admin, instructor, dan student",
        "Manajemen langganan dan pembayaran",
        "Grup diskusi dan fitur komunitas",
        "Pelacakan progres dan laporan",
        "Antarmuka responsif mobile",
        "Integrasi database dengan Laravel Eloquent ORM",
      ],
    },
  },
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: keyof typeof translations.en) => string
  ta: (key: keyof typeof translations.en) => string[]
  projectCopy: (slug: string) => Partial<{ description: string; fullDescription: string; features: string[]; demoNote: string }>
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
      projectCopy: (slug) => projectText[slug]?.[language] ?? {},
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
