"use client"

import { useLanguage } from "@/lib/i18n"

export default function GalleryHeader() {
  const { t } = useLanguage()

  return (
    <header className="text-center mb-16 space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold">{t("galleryTitle")}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("galleryIntro")}</p>
    </header>
  )
}
