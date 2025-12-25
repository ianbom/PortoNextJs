"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Discovery & Planning",
        description: "We discuss your goals, requirements, and target audience to create a solid roadmap.",
        icon: MessageSquare,
    },
    {
        id: 2,
        title: "Design & Prototyping",
        description: "Creating wireframes and visual designs that align with your brand identity.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "Development",
        description: "Writing clean, efficient code to bring the designs to life using modern tech stacks.",
        icon: Code2,
    },
    {
        id: 4,
        title: "Testing & Deployment",
        description: "Rigorous testing across devices and final launch to the production server.",
        icon: Rocket,
    },
];

export default function ProcessSteps() {
    return (
        <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-muted -z-10" />

            <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center bg-background md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border md:border-none shadow-sm md:shadow-none"
                        >
                            <div className="w-24 h-24 bg-background flex items-center justify-center rounded-full border-4 border-muted mb-6 z-10">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Icon className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
