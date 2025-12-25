import GalleryGrid from "@/components/gallery/gallery-grid";
import { motion } from "framer-motion";

export const metadata = {
    title: "Gallery | Ian Ale Hansyah",
    description: "A collection of photos from my professional journey, internships, and events.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Activity Gallery</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A visual journal of my journey. From coding sprints to community events,
                        here are some moments that define my professional path.
                    </p>
                </header>

                <GalleryGrid />
            </div>
        </div>
    );
}
