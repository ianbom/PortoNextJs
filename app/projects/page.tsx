"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { getAllProjects, getFeaturedProjects } from "@/lib/projects"

const allProjects = getAllProjects()
const featuredProjects = getFeaturedProjects()
const otherProjects = allProjects.filter((project) => !project.featured)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a learning journey and showcases different
            aspects of my development skills.
          </p>
        </motion.div>

        {/* Featured Projects */}
       <motion.section initial="hidden" animate="visible" variants={containerVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link href={`/projects/${project.slug}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02] border-2 hover:border-primary/30 overflow-hidden">
                    {/* Perubahan di sini: Menggunakan padding-bottom untuk rasio 16:9 */}
                    <div className="relative overflow-hidden pt-[56.25%] rounded-t-lg"> {/* 16:9 ratio (9 / 16 = 0.5625) */}
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        // Hapus width dan height dari Image component karena akan diatur oleh CSS
                        width={400}
                        height={200}
                        className="absolute inset-0 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-brand-gradient text-black border-0 shadow-lg">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link href={`/projects/${project.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                   
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
