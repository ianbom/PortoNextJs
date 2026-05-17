import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import type { Metadata } from "next"
import ProjectDetailClient from "./project-detail-client"
import ProjectBreadcrumb from "./project-breadcrumb"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Ian Ale`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ProjectBreadcrumb title={project.title} />
        <ProjectDetailClient project={project} />
      </div>
    </div>
  )
}
