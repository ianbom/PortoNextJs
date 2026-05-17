"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Languages, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n"

const navigation = [
  { key: "navHome", href: "/" },
  { key: "navProjects", href: "/projects" },
  { key: "navContact", href: "/contact" },
  { key: "navGallery", href: "/gallery" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-primary-foreground font-bold text-lg">IA</span>
          </div>
          <span className="font-bold text-xl">Ian Ale Hansyah</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                pathname === item.href
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-muted-foreground hover:scale-105"
              }`}
            >
              {t(item.key as Parameters<typeof t>[0])}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            className="h-9 gap-2 border-2"
          >
            <Languages className="h-4 w-4" />
            {language.toUpperCase()}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("navToggleMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {t(item.key as Parameters<typeof t>[0])}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
