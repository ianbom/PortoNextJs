import Link from "next/link"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">IA</span>
              </div>
              <span className="font-bold text-xl">Ian Ale Hansyah</span>
            </div>
            <p className="text-muted-foreground">
              Full-Stack Developer 
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>i.alehansyah@gmail.com</p>
              <p>(+62) 812 339 14116</p>
              <p>Surabaya, Indonesia</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Follow Me</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="https://linkedin.com/in/alexrivera" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="https://github.com/johndoe" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="https://instagram.com/johndoe" target="_blank">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-2 hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                asChild
              >
                <Link href="mailto:john.doe@example.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ian Ale Hansyah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
