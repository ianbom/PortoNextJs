"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/lib/i18n"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: t("fillAllFields"),
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: t("validEmail"),
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("messageSent"),
        description: t("messageSentDesc"),
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{t("contactTitle")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contactIntro")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Card className="border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t("sendMessageTitle")}</CardTitle>
                <CardDescription>{t("sendMessageDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t("fullNamePlaceholder")}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("messagePlaceholder")}
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-gradient hover:bg-brand-gradient-dark shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("sending") : t("sendMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="initial"
              animate="animate"
              variants={
                // Cast to any to avoid strict Variant type issues with custom transition delay
                ({
                  ...fadeInUp,
                  transition: { duration: 0.6, delay: 0.2 },
                } as any)
              }
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contactInformation")}</CardTitle>
                <CardDescription>{t("contactInformationDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-gradient p-3 rounded-lg shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">i.alehansyah@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-gradient p-3 rounded-lg shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{t("phone")}</p>
                    <p className="text-muted-foreground">(+62) 812 3391 4116</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-gradient p-3 rounded-lg shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{t("location")}</p>
                    <p className="text-muted-foreground">Surabaya, Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t("followMe")}</CardTitle>
                <CardDescription>{t("followMeDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <Link href="https://www.linkedin.com/in/ian-ale-hansyah-204ab9286/" target="_blank">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
                    asChild
                  >
                    <Link href="https://www.instagram.com/ianale._/" target="_blank">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t("letsWorkTogether")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("letsWorkTogetherDesc")}
                </p>
                <Button asChild>
                  <Link href="/projects">{t("viewMyWork")}</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
