"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      image: "/media/portfolio/portfolio-1.jpeg",
      aspect: "aspect-[3/4]",
    },
    {
      id: 2,
      image: "/media/portfolio/portfolio-2.jpeg",
      aspect: "aspect-square",
    },
    {
      id: 3,
      image: "/media/portfolio/portfolio-3.jpeg",
      aspect: "aspect-[4/5]",
    },
    {
      id: 4,
      image: "/media/portfolio/portfolio-4.jpeg",
      aspect: "aspect-[3/4]",
    },
    {
      id: 5,
      image: "/media/portfolio/portfolio-5.jpeg",
      aspect: "aspect-square",
    },
    {
      id: 6,
      image: "/media/portfolio/portfolio-6.jpeg",
      aspect: "aspect-[4/5]",
    },
    {
      id: 7,
      image: "/media/portfolio/portfolio-7.jpeg",
      aspect: "aspect-[3/4]",
    },
    {
      id: 8,
      image: "/media/portfolio/portfolio-8.jpeg",
      aspect: "aspect-square",
    },
    {
      id: 9,
      image: "/media/portfolio/portfolio-9.jpeg",
      aspect: "aspect-[4/5]",
    },
    {
      id: 10,
      image: "/media/portfolio/portfolio-10.jpeg",
      aspect: "aspect-[3/4]",
    },
    {
      id: 11,
      image: "/media/portfolio/portfolio-11.jpeg",
      aspect: "aspect-square",
    },
    {
      id: 12,
      image: "/media/portfolio/portfolio-12.jpeg",
      aspect: "aspect-[4/5]",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-luxury-slate">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="gold-text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of our finest work
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg luxury-shadow cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className={`${item.aspect} overflow-hidden`}>
                <Image
                  src={item.image}
                  alt="Portfolio item"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl max-h-[90vh]"
              >
                <Image
                  src={selectedImage}
                  alt="Portfolio item"
                  width={1200}
                  height={1600}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-4 -right-4 bg-luxury-gold text-luxury-background rounded-full p-2 hover:bg-luxury-goldHover transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more? Visit our boutique or book an appointment.
          </p>
          <button
            onClick={() => (window.location.href = "#booking")}
            className="gold-gradient text-luxury-background px-8 py-3 rounded-lg font-semibold luxury-shadow hover:opacity-90 transition-opacity hover:scale-105 transform duration-300"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
