import GalleryGrid from "@/components/gallery/gallery-grid";
import GalleryHeader from "@/components/gallery/gallery-header";

export const metadata = {
    title: "Gallery | Ian Ale Hansyah",
    description: "A collection of photos from my professional journey, internships, and events.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <GalleryHeader />

                <GalleryGrid />
            </div>
        </div>
    );
}
