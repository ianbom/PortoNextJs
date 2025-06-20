import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import type { Metadata } from "next"
import ProjectDetailClient from "./project-detail-client"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Alex Rivera`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 hover:bg-primary/10">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>
        </div>

        <ProjectDetailClient project={project} />
      </div>
    </div>
  )
}
