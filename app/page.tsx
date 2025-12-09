"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Github, Linkedin, Instagram, MapPin, Calendar, Award, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

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
  "PostgreSQL",
  "MongoDB",
  "Github",
  "Express.Js",
  "Flutter",
];

const skillIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Laravel": SiLaravel,
  "Node.js": SiNodedotjs,
  "Docker": SiDocker,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Github": SiGithub,
  "Express.Js": SiExpress,
  "Flutter": SiFlutter,
};

const workExperience = [
  {
    company: "Webcare Indonesia",
    position: "Backend Developer Intern",
    duration: "Jun 2024 - Dec 2024",
    location: "Surabaya, Indonesia",
    description:
      "Collaborated as part of the Webcare development team to build and maintain client-requested web projects. Contributed to backend development and ensured features aligned with client requirements and project goals.",
    achievements: [
      "Developed and deployed RESTful APIs for client web applications using Laravel",
      "Integrated third-party services such as payment gateways and email automation",
      "Refactored legacy PHP code to modern Laravel structure, improving maintainability",
      "Collaborated with frontend team to connect backend APIs with React interfaces",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Laravel", "Bootstrap", 'Wordpress'],
  },
  {
    company: "MSIB Batch 7 at LLDIKTI Region 7",
    position: "Backend Developer Intern",
    duration: "Sep 2024 - Dec 2024",
    location: "Surabaya, Indonesia",
    description:
      "Joined the backend development team to support the creation of internal web systems at LLDIKTI Region 7. Worked on developing RESTful APIs, managing databases, and assisting in system maintenance to improve internal workflows.",
    achievements: [
      "Developed and maintained several backend modules using Laravel",
      "Deploy the website and manage the server",
      "Contributed to API documentation and data validation for internal use",
    ],
    technologies: ["Laravel", "MySQL", "Postman", "Git", "REST API", "Bootstrap"],
  },
];

const certificates = [
  {
    title: "Certificate MSIB Batch 7",
    issuer: "Kampus Merdeka",
    date: "Dec 2024",
    credentialId: "11378206",
    description: "This certificate is awarded to Me in recognition of successfully completing the Certified Internship and Independent Study Program (MSIB) Batch 7, organized by LLDIKTI Region VII East Java.",
    verificationUrl: "/SISFOR_IAN ALE.pdf",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "1st Place Web Development",
    issuer: "National Competition Silogi Expo - UNSIKA",
    date: "July 2025",
    credentialId: "-",
    description: "This certificate is awarded to Me as the 1st Place Winner in the Web Development Category at the National Competition Silogy Expo 2025, organized by the Information Systems Student Association, Universitas Singaperbangsa Karawang (UNSIKA).",
    verificationUrl: "/Silogy Expo - Ian Ale Hansyah - Web Dev Juara 1_page-0001.jpg",
    logo: "/placeholder.svg?height=60&width=60",
  },
    {
    title: "1st Place Web Development",
    issuer: "Technology Innovative Challenge (TIC) - UNEJ ",
    date: "August 2025",
    credentialId: "-",
    description: "Certificate awarded by the Faculty of Computer Science, University of Jember, through the Information Technology Student Association (HIMATIF) to Me as 1st Place Winner in the Technology Innovative Challenge (TIC) 8.0 – National Website Development Competition.",
    verificationUrl: "/tic.png",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    title: "3rd Place KMIPN E-Government",
    issuer: "BAKORMA, Diktisaintek ",
    date: "October 2025",
    credentialId: "-",
    description: "Won 3rd place in the KMIPN (national competition) in the E-Government category for developing digital solutions to improve government services and public engagement.",
    verificationUrl: "/KMIPN .jpg",
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
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
            Skills & Technologies
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
        </motion.div>
      </div>
    </section>
  );
};

// --- Komponen HomePage Utama ---
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ian Ale Hansyah</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Full-Stack Developer</p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions and exploring the latest technologies. Currently
              pursuing my degree while building real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button
                size="lg"
                className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild // Penting: Agar Button berperilaku sebagai Link
              >
                <Link href="/CV Ian Ale H.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View CV
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
                  View Projects
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
                  View Portofolio Ppt
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
              About Me
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
                  Hello! I'm Ian, a graduate of the D3 Informatics Engineering program at PENS, 
                  currently continuing my studies in the D4 Informatics Engineering program at the same institution. 
                  With over 10 application and website projects completed, I specialize as a Fullstack Developer skilled in PHP, Dart, and JavaScript, using frameworks like Laravel, Flutter, Express.js, Next.Js, and React.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have professional experience as a Backend Developer Intern at Webcare Indonesia and through the MSIB Batch 7 program at LLDIKTI Region 7.
                  I’m passionate about building efficient and scalable digital solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge with fellow developers.
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
              Work Experience
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
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
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
              Certificates & Achievements
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
                      <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>

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
                            View Cerificate
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