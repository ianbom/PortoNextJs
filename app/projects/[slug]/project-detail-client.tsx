"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, Copy, Check, Mail, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "@/lib/projects"

interface ProjectDetailClientProps {
  project: Project
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPassword, setCopiedPassword] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const copyToClipboard = async (text: string, type: 'email' | 'password') => {
    await navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPassword(true)
      setTimeout(() => setCopiedPassword(false), 2000)
    }
  }

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8">
      {/* Project Header */}
      <motion.div variants={fadeInUp} className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </Link>
          </Button>
      
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-5 w-5" />
              View Code
            </Link>
          </Button>

          {project.videoUrl && (
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={project.videoUrl} target="_blank">
                <ExternalLink className="mr-2 h-5 w-5" />
                Preview Video
              </Link>
            </Button>
          )}
        </div>
      </motion.div>

      {/* Demo Account Credentials */}
      {project.demoCredentials && (
        <motion.div variants={fadeInUp}>
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <KeyRound className="h-6 w-6 text-primary" />
                Demo Account
              </CardTitle>
              <CardDescription>Use these credentials to test the application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Email</p>
                      <p className="font-mono font-medium">{project.demoCredentials.email}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(project.demoCredentials!.email, 'email')}
                    className="hover:bg-primary/10"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <KeyRound className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Password</p>
                      <p className="font-mono font-medium">{project.demoCredentials.password}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(project.demoCredentials!.password, 'password')}
                    className="hover:bg-primary/10"
                  >
                    {copiedPassword ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {project.demoCredentials.note && (
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">{project.demoCredentials.note}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Project Images Gallery */}
     <motion.div variants={fadeInUp}>
        <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
          <div className="relative">
            <div className="relative aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images?.[currentImageIndex]?.url || "/placeholder.svg"}
                    alt={project.images?.[currentImageIndex]?.alt || project.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
        
              {/* Navigation Arrows */}
              {project.images?.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
      
              {/* Image Counter */}
              {project.images?.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>
            
            {/* Image Caption */}
            {project.images?.[currentImageIndex]?.caption && (
              <div className="p-4 bg-muted/50">
                <p className="text-sm text-muted-foreground text-center">{project.images?.[currentImageIndex].caption}</p>
              </div>
            )}
          </div>
        </Card>
          
        {/* Image Thumbnails */}
        {project.images?.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative flex-shrink-0 w-28 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
                }`}
              >
                <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Technologies Used */}
      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Project Description */}
      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About This Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.fullDescription}</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Features */}
      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Key Features</CardTitle>
            <CardDescription>Here are the main features and capabilities of this project</CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-4"
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <Separator className="my-8" />

      {/* Project Links */}
      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Project Links</CardTitle>
            <CardDescription>Explore the project further with these links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                asChild
              >
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-1"
                asChild
              >
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  Source Code
                </Link>
              </Button>

              {project.videoUrl && (
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                  asChild
                >
                  <Link href={project.videoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Preview Video
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Back to Projects */}
      <motion.div variants={fadeInUp} className="text-center pt-8">
        <Button variant="outline" size="lg" asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}