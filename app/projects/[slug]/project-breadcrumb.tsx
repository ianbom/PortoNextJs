"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export default function ProjectBreadcrumb({ title }: { title: string }) {
  const { t } = useLanguage()

  return (
    <div className="mb-8">
      <Button variant="ghost" asChild className="mb-4 hover:bg-primary/10">
        <Link href="/projects" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t("backToProjects")}
        </Link>
      </Button>
      <nav className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          {t("navHome")}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/projects" className="hover:text-primary">
          {t("navProjects")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{title}</span>
      </nav>
    </div>
  )
}
