"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Github, Linkedin, Instagram, MapPin, Calendar, Award, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { useLanguage } from "@/lib/i18n";

// Import ikon dari react-icons
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiBootstrap,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiExpress,
  SiFlutter,
  SiFastapi,
  SiOpenai,
  SiGooglegemini,
  SiLangchain,
  SiLinux,
  SiTerraform,
  SiDocker, // Menggunakan SiAmazonaws untuk AWS, karena SiAmazon lebih generik
} from "react-icons/si";

// --- Data Definitions ---

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "Node.js",
  "Docker",
  "Bootstrap",
  "Linux",
  "Infrastructure",
  "PostgreSQL",
  "MongoDB",
  "Github",
  "Express.Js",
  "Flutter",
  "FastAPI",
  "Vector Database",
  "AI Engineering",
  "Context Engineering",
  "AI Generation",
];

const skillIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Laravel": SiLaravel,
  "Node.js": SiNodedotjs,
  "Docker": SiDocker,
  "Bootstrap": SiBootstrap,
  "Linux": SiLinux,
  "Infrastructure": SiTerraform,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Github": SiGithub,
  "Express.Js": SiExpress,
  "Flutter": SiFlutter,
  "FastAPI": SiFastapi,
  "Vector Database": SiPostgresql,
  "AI Engineering": SiOpenai,
  "Context Engineering": SiLangchain,
  "AI Generation": SiGooglegemini,
};

const workExperience = [
  {
    company: "Software Development Company",
    position: "Backend Developer Intern",
    duration: "Jun 2024 - Dec 2024",
    location: "Surabaya, Indonesia",
    description:
      "Collaborated as part of a software development team to build and maintain client-requested web projects. Contributed to backend development and ensured features aligned with client requirements and project goals.",
    descriptionId:
      "Berkolaborasi sebagai bagian dari tim pengembangan software untuk membangun dan memelihara proyek web sesuai permintaan klien. Berkontribusi pada pengembangan backend dan memastikan fitur sesuai kebutuhan klien serta tujuan proyek.",
    achievements: [
      "Developed and deployed RESTful APIs for client web applications using Laravel",
      "Integrated third-party services such as payment gateways and email automation",
      "Refactored legacy PHP code to modern Laravel structure, improving maintainability",
      "Collaborated with frontend team to connect backend APIs with React interfaces",
    ],
    achievementsId: [
      "Mengembangkan dan men-deploy RESTful API untuk aplikasi web klien menggunakan Laravel",
      "Mengintegrasikan layanan pihak ketiga seperti payment gateway dan automasi email",
      "Melakukan refactor kode PHP legacy ke struktur Laravel modern untuk meningkatkan maintainability",
      "Berkolaborasi dengan tim frontend untuk menghubungkan API backend dengan antarmuka React",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Laravel", "Bootstrap", 'Wordpress'],
  },
  {
    company: "Certified Internship Program at Regional Higher Education Institution",
    position: "Backend Developer Intern",
    duration: "Sep 2024 - Dec 2024",
    location: "Surabaya, Indonesia",
    description:
      "Joined the backend development team to support the creation of internal web systems at a regional higher education institution. Worked on developing RESTful APIs, managing databases, and assisting in system maintenance to improve internal workflows.",
    descriptionId:
      "Bergabung dengan tim backend untuk mendukung pembuatan sistem web internal di institusi pendidikan tinggi regional. Berperan dalam pengembangan RESTful API, pengelolaan database, dan pemeliharaan sistem untuk meningkatkan alur kerja internal.",
    achievements: [
      "Developed and maintained several backend modules using Laravel",
      "Deploy the website and manage the server",
      "Contributed to API documentation and data validation for internal use",
    ],
    achievementsId: [
      "Mengembangkan dan memelihara beberapa modul backend menggunakan Laravel",
      "Melakukan deploy website dan mengelola server",
      "Berkontribusi pada dokumentasi API dan validasi data untuk kebutuhan internal",
    ],
    technologies: ["Laravel", "MySQL", "Postman", "Github", "REST API", "Bootstrap"],
  },
  {
  "company": "Software Development Company",
  "position": "Freelance Web Developer",
  "duration": "Dec 2024 - Present",
  "location": "Indonesia",
"description": "Develop custom websites tailored to client specifications, managing the entire lifecycle from requirements analysis to implementation.",
  "descriptionId": "Mengembangkan website custom sesuai spesifikasi klien, mencakup seluruh siklus kerja dari analisis kebutuhan hingga implementasi.",
  "achievements": [
    "Conducted end-to-end client requirement analysis to ensure successful implementation",
    "Designed website structure, interface, and functionality to align with business objectives and user experience"
  ],
  "achievementsId": [
    "Melakukan analisis kebutuhan klien secara end-to-end untuk memastikan implementasi berjalan sesuai target",
    "Merancang struktur website, antarmuka, dan fungsionalitas agar selaras dengan tujuan bisnis serta pengalaman pengguna"
  ],
  "technologies": ['Laravel', 'React Typescript', 'MySQL', 'Postman', 'Github', 'Tailwind Css', 'Inertia.js']
}
];

const certificates = [
  {
    title: "Certificate MSIB Batch 7",
    issuer: "Kampus Merdeka",
    date: "Dec 2024",
    credentialId: "11378206",
    description: "This certificate is awarded to me in recognition of successfully completing a certified internship and independent study program organized by a regional higher education institution.",
    descriptionId: "Sertifikat ini diberikan kepada saya sebagai pengakuan atas keberhasilan menyelesaikan program magang dan studi independen bersertifikat yang diselenggarakan oleh institusi pendidikan tinggi regional.",
    verificationUrl: "/SISFOR_IAN ALE.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "1st Place Web Development",
    issuer: "National Competition Silogi Expo - UNSIKA",
    date: "July 2025",
    credentialId: "-",
    description: "This certificate is awarded to Me as the 1st Place Winner in the Web Development Category at the National Competition Silogy Expo 2025, organized by the Information Systems Student Association, Universitas Singaperbangsa Karawang (UNSIKA).",
    descriptionId: "Sertifikat ini diberikan kepada saya sebagai Juara 1 kategori Web Development pada National Competition Silogy Expo 2025 yang diselenggarakan oleh Himpunan Mahasiswa Sistem Informasi Universitas Singaperbangsa Karawang (UNSIKA).",
    verificationUrl: "/Silogy Expo - Ian Ale Hansyah - Web Dev Juara 1_page-0001.jpg",
    logo: "/placeholder.svg?height=60&width=60",
  },
    {
    title: "1st Place Web Development",
    issuer: "Technology Innovative Challenge (TIC) - UNEJ ",
    date: "August 2025",
    credentialId: "-",
    description: "Certificate awarded by the Faculty of Computer Science, University of Jember, through the Information Technology Student Association (HIMATIF) to Me as 1st Place Winner in the Technology Innovative Challenge (TIC) 8.0 – National Website Development Competition.",
    descriptionId: "Sertifikat ini diberikan oleh Fakultas Ilmu Komputer Universitas Jember melalui Himpunan Mahasiswa Teknologi Informasi (HIMATIF) kepada saya sebagai Juara 1 Technology Innovative Challenge (TIC) 8.0 - Kompetisi Website Development Nasional.",
    verificationUrl: "/tic.png",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "3rd Place KMIPN E-Government",
    issuer: "BAKORMA, Diktisaintek ",
    date: "October 2025",
    credentialId: "-",
    description: "Won 3rd place in the KMIPN (national competition) in the E-Government category for developing digital solutions to improve government services and public engagement.",
    descriptionId: "Meraih Juara 3 pada KMIPN tingkat nasional kategori E-Government melalui pengembangan solusi digital untuk meningkatkan layanan pemerintahan dan keterlibatan masyarakat.",
    verificationUrl: "/KMIPN .jpg",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Laravel 9 Website Development Course",
    issuer: "Coding Studio",
    date: "December 2025",
    credentialId: "-",
    description:
      "Certificate for successfully completing the online course Mahir Membuat Website dengan Laravel 9, covering practical Laravel-based website development fundamentals.",
    descriptionId:
      "Sertifikat penyelesaian kursus online Mahir Membuat Website dengan Laravel 9, yang mencakup dasar pengembangan website praktis berbasis Laravel.",
    verificationUrl: "/sertif/Sertif Cstudio.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Professional Application Database Course",
    issuer: "Coding Studio",
    date: "December 2025",
    credentialId: "-",
    description:
      "Certificate for successfully completing the online course Mahir Membuat Database Aplikasi Profesional, focused on database design and implementation for professional applications.",
    descriptionId:
      "Sertifikat penyelesaian kursus online Mahir Membuat Database Aplikasi Profesional, berfokus pada perancangan dan implementasi database untuk aplikasi profesional.",
    verificationUrl: "/sertif/Sertif db costudio.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Basic Artificial Intelligence",
    issuer: "Dicoding Indonesia",
    date: "May 2026",
    credentialId: "-",
    description:
      "Dicoding certificate for completing a basic Artificial Intelligence learning program, covering AI concepts, common use cases, responsible AI awareness, and how AI can support software development and digital products.",
    descriptionId:
      "Sertifikat Dicoding untuk penyelesaian program pembelajaran dasar Artificial Intelligence, mencakup konsep AI, contoh penerapan umum, pemahaman AI yang bertanggung jawab, serta cara AI mendukung pengembangan software dan produk digital.",
    verificationUrl: "/sertif/sertif%20Dasar%20AI%20Dicoding.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "May 2026",
    credentialId: "-",
    description:
      "Dicoding certificate for completing Machine Learning learning material, focused on fundamental ML workflow, data preparation, model training, evaluation, and applying machine learning concepts to solve practical problems.",
    descriptionId:
      "Sertifikat Dicoding untuk penyelesaian materi Machine Learning, berfokus pada alur kerja dasar ML, persiapan data, pelatihan model, evaluasi, serta penerapan konsep machine learning untuk menyelesaikan masalah praktis.",
    verificationUrl: "/sertif/sertif%20dicoding%20machine%20learning.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Prompt Engineering",
    issuer: "Dicoding Indonesia",
    date: "May 2026",
    credentialId: "-",
    description:
      "Dicoding certificate for completing Prompt Engineering learning material, covering prompt structure, context design, instruction clarity, iterative refinement, and effective use of generative AI tools for development workflows.",
    descriptionId:
      "Sertifikat Dicoding untuk penyelesaian materi Prompt Engineering, mencakup struktur prompt, perancangan konteks, kejelasan instruksi, perbaikan iteratif, serta penggunaan efektif tools generative AI dalam alur kerja pengembangan.",
    verificationUrl: "/sertif/sertif%20dicoding%20prompt%20engineer.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Python Programming",
    issuer: "Dicoding Indonesia",
    date: "May 2026",
    credentialId: "-",
    description:
      "Dicoding certificate for completing backend development with Python learning material, covering server-side programming fundamentals, backend logic, data handling, API-oriented workflows, and Python practices for building application services.",
    descriptionId:
      "Sertifikat Dicoding untuk penyelesaian materi pengembangan backend dengan Python, mencakup dasar pemrograman server-side, logika backend, pengelolaan data, alur kerja berbasis API, serta praktik Python untuk membangun layanan aplikasi.",
    verificationUrl: "/sertif/sertif%20dicoding%20python.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "Introduction to Generative AI - Art of the Possible",
    issuer: "AWS Training & Certification",
    date: "April 2026",
    credentialId: "-",
    description:
      "AWS Training & Certification completion certificate for Introduction to Generative AI - Art of the Possible, introducing practical concepts and possibilities of generative AI.",
    descriptionId:
      "Sertifikat penyelesaian AWS Training & Certification untuk Introduction to Generative AI - Art of the Possible, yang memperkenalkan konsep praktis dan peluang penggunaan generative AI.",
    verificationUrl: "/sertif/SertifAWS AI Gen.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "TOEFL Prediction Test Certificate",
    issuer: "Central Course",
    date: "April 2026",
    credentialId: "2604245325",
    description:
      "Certificate of Achievement for the TOEFL Prediction Test with a total score of 503, covering listening comprehension, structure and written expression, and reading comprehension.",
    descriptionId:
      "Certificate of Achievement untuk TOEFL Prediction Test dengan total skor 503, mencakup listening comprehension, structure and written expression, serta reading comprehension.",
    verificationUrl: "/sertif/TOEFL IAN ALE.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
];

// --- Framer Motion Variants (didefinisikan di luar komponen utama) ---
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Menambahkan transisi ke animate
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }, // Menambahkan transisi ke animate
};

// --- Komponen SkillsSection (didefinisikan di luar HomePage) ---
const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t("skillsTitle")}
          </motion.h2>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skillIcons[skill];

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group hover:scale-105 border-2 hover:border-primary/20">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        {IconComponent ? (
                          <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                        ) : (
                          <div className="w-8 h-8 bg-primary/20 rounded"></div>
                        )}
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{skill}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <div className="max-w-2xl mx-auto space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold">{t("skillsCtaTitle")}</h3>
              <p className="text-muted-foreground text-lg">{t("skillsCtaDesc")}</p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/projects">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("skillsCtaButton")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Komponen HomePage Utama ---
export default function HomePage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ian Ale Hansyah</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("heroRole")}</p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("heroIntro")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button
                size="lg"
                className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild // Penting: Agar Button berperilaku sebagai Link
              >
                <Link href="/CV-Ian Ale H.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  {t("viewCv")}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <Link href="/projects">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("viewProjects")}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <Link href="https://www.canva.com/design/DAGrfgjDD_4/XeqpoH6G26wjL1e7ncl-4w/edit?utm_content=DAGrfgjDD_4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("viewPortfolioPpt")}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("aboutTitle")}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden">
                  <Image
                    src="/DJI_0687~3.JPG"
                    alt="Profile Photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutP1")}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutP2")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutP3")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutP4")}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("aboutP5")}
                </p>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/in/ian-ale-h" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/ianbom" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.instagram.com/ianale._/" target="_blank">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("workExperience")}
            </motion.h2>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.1 }} className="group">
                  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                            {job.position}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground mt-1">
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {language === "id" ? job.descriptionId : job.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">{t("keyAchievements")}</h4>
                        <ul className="space-y-1">
                          {(language === "id" ? job.achievementsId : job.achievements).map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">{t("technologiesUsed")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("certificatesTitle")}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} transition={{ delay: index * 0.1 }} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group-hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                            {cert.title}
                          </CardTitle>
                          <CardDescription className="font-medium text-foreground mt-1">{cert.issuer}</CardDescription>
                          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {language === "id" ? cert.descriptionId : cert.description}
                      </p>

                      <div className="space-y-2">
                        {/* <div className="text-sm"> 
                          <span className="font-medium">Credential ID: </span>
                          <span className="text-muted-foreground font-mono">{cert.credentialId}</span>
                        </div>
                        */}

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          asChild
                        >
                          <Link href={cert.verificationUrl} target="_blank">
                            <LinkIcon className="mr-2 h-4 w-4" />
                            {t("viewCertificate")}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Render the standalone component here */}
      <SkillsSection />
    </div>
  );
}
