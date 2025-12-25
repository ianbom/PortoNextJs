import ServiceCard from "@/components/services/service-card";
import ProcessSteps from "@/components/services/process-steps";
import { Layout, ShoppingBag, Laptop, Megaphone, Paintbrush, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
    title: "Services | Ian Ale Hansyah",
    description: "Professional web development services including Full-stack development, API design, and UI implementation.",
};

const services = [
    {
        title: "Company Profile Website",
        description: "A professional website to introduce your business to the world. Perfect for building trust with new customers.",
        icon: <Layout className="w-6 h-6" />,
        features: [
            "Modern & Professional Look",
            "Mobile Friendly (Responsive)",
            "Google Maps Integration",
            "Contact Form Included",
            "Easy to Edit Content"
        ],
    },
    {
        title: "Online Store (E-Commerce)",
        description: "Open your digital shop that runs 24/7. Let customers buy your products anytime, anywhere.",
        icon: <ShoppingBag className="w-6 h-6" />,
        features: [
            "Product Catalog",
            "Shopping Cart System",
            "Payment Gateway Support",
            "Order Management Panel",
            "WhatsApp Order Button"
        ],
    },
    {
        title: "Custom Business App",
        description: "Tools to help your work. Like a system to record stock, manage employees, or track finance.",
        icon: <Laptop className="w-6 h-6" />,
        features: [
            "Tailored to Your Data",
            "Admin Dashboard",
            "User Login System",
            "Data Export to Excel",
            "Secure Database"
        ],
    },
    {
        title: "Promotion Landing Page",
        description: "A single focused page designed to sell one specific product or promote an event/webinar.",
        icon: <Megaphone className="w-6 h-6" />,
        features: [
            "High Conversion Design",
            "Fast Loading Speed",
            "Connect to Ads (FB/Google)",
            "Analytics Tracking",
            "Clear Call-to-Action"
        ],
    },
    {
        title: "Website Redesign",
        description: "Have an old website? I will make it look modern, fresh, and work perfectly on mobile phones.",
        icon: <Paintbrush className="w-6 h-6" />,
        features: [
            "Visual Makeover",
            "Speed Optimization",
            "Fix Broken Layouts",
            "Improve User Experience",
            "Content Restructuring"
        ],
    },
    {
        title: "Maintenance & Support",
        description: "Don't worry about technical issues. I keep your website secure, fast, and always online.",
        icon: <ShieldCheck className="w-6 h-6" />,
        features: [
            "Regular Backups",
            "Security Updates",
            "Bug Fixing",
            "Content Updates",
            "Performance Monitoring"
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Solutions Built for <span className="text-primary">Growth</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Helper businesses transform ideas into powerful, scalable, and user-centric digital experiences.
                    </p>
                </div>
            </section>

            {/* Service Cards Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                features={service.features}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A transparent and efficient workflow ensuring your project is delivered on time and to the highest standard.
                        </p>
                    </div>
                    <ProcessSteps />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-3xl p-12 border-2 border-primary/10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let's discuss how we can bring your vision to life today.
                    </p>
                    <Button size="lg" className="text-lg px-8" asChild>
                        <Link href="/contact">
                            Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
