"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// Tipe data untuk item gallery
interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    category: string;
    title: string;
    date: string;
    location?: string;
    description: string;
}

// Data gallery menggunakan foto asli dari public/galery
const galleryItems: GalleryItem[] = [
    {
        id: 1,
        src: "/galery/Msib.jpg",
        alt: "MSIB Program",
        category: "Internship",
        title: "MSIB Batch 7 Program",
        date: "Sep - Dec 2024",
        location: "LLDIKTI Region 7, Surabaya",
        description: "Final Prensentation Project dan upacara penutupan MSIB Batch 7 LLDIKTI 7",
    },
    {
        id: 2,
        src: "/galery/foto kmipn.png",
        alt: "KMIPN Competition",
        category: "Competition",
        title: "KMIPN E-Government",
        date: "Oct 2024",
        location: "National",
        description: "Meraih Juara 3 dalam Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN) kategori E-Government.",
    },
    {
        id: 3,
        src: "/galery/foto opening msib.jpeg",
        alt: "MSIB Opening Ceremony",
        category: "Event",
        title: "Opening Ceremony MSIB",
        date: "Sep 2024",
        location: "Surabaya",
        description: "Acara pembukaan program MSIB Batch 7 bersama peserta dan mentor dari berbagai instansi.",
    },
    {
        id: 4,
        src: "/galery/foto wisuda.jpeg",
        alt: "Graduation Day",
        category: "Milestone",
        title: "Wisuda D3 Teknik Informatika",
        date: "2024",
        location: "PENS, Surabaya",
        description: "Momen kelulusan dari Program Studi D3 Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS).",
    },
    {
        id: 5,
        src: "/galery/IMG_8417.jpg",
        alt: "Final Project Competition",
        category: "Event",
        title: "Final Project Competition",
        date: "2024",
        location: "PENS, Surabaya",
        description: "Event tahunan PENS untuk pamarena karya Tugas Akhir Mahasiswa",
    },
];

export default function GalleryGrid() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item) => (
                <Dialog key={item.id} onOpenChange={(open) => !open && setSelectedId(null)}>
                    <DialogTrigger asChild>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl border-2 border-transparent hover:border-primary/20 bg-muted/20"
                            onClick={() => setSelectedId(item.id)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Hover Effect */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">{item.category}</Badge>
                                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                <div className="flex items-center gap-4 text-white/80 text-sm mt-1">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                                    {item.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</span>}
                                </div>
                            </div>
                        </motion.div>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-2xl">
                        <DialogTitle className="sr-only">{item.title}</DialogTitle>
                        <div className="relative bg-background rounded-lg overflow-hidden flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-2/3 max-h-[80vh] bg-black flex items-center justify-center">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="w-full md:w-1/3 p-6 flex flex-col bg-background">
                                <div className="flex items-center gap-2 mb-4">
                                    <Badge variant="secondary">{item.category}</Badge>
                                    <time className="text-sm text-muted-foreground flex items-center gap-1">
                                        <Calendar className="w-4 h-4" /> {item.date}
                                    </time>
                                </div>

                                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

                                {item.location && (
                                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                                        <MapPin className="w-4 h-4" />
                                        <span>{item.location}</span>
                                    </div>
                                )}

                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}
