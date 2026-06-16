"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      text: "Absolutely stunning bridal blouse! The Aari work was exquisite and the fit was perfect. Nagesh and his team are true artists. Highly recommend for any bride-to-be!",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Anjali Reddy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      text: "I've been coming here for all my tailoring needs for 5 years. The quality is unmatched and they always deliver on time. The designer kurtis they made for me are my favorites!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Sneha Patel",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
      text: "The Maggam work on my lehenga was breathtaking. Everyone at the wedding couldn't stop complimenting me. Thank you Nithya Sri Fashion Culture for making my special day even more beautiful!",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "Kavitha Nair",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
      text: "Professional service with excellent craftsmanship. They understood exactly what I wanted and delivered beyond expectations. The princess cut blouse fits like a dream!",
      date: "1 month ago",
    },
    {
      id: 5,
      name: "Divya Krishnan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      text: "Best tailor in Bangalore! The hand embroidery work is exceptional. I've recommended all my friends and family here. You won't be disappointed!",
      date: "2 months ago",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (!isAutoScroll) return;
    
    const interval = setInterval(() => {
      nextReview();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  // Pause auto-scroll on user interaction
  const handleInteraction = () => {
    setIsAutoScroll(false);
    // Resume auto-scroll after 10 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoScroll(true), 10000);
    return () => clearTimeout(timeout);
  };

  return (
    <section id="reviews" className="py-24 bg-luxury-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Customer <span className="gold-text-gradient">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What our happy customers say about our services
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative" onMouseEnter={handleInteraction} onTouchStart={handleInteraction}>
            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-luxury-gold text-luxury-background p-3 rounded-full hover:bg-luxury-goldHover transition-colors luxury-shadow hidden md:block"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-luxury-gold text-luxury-background p-3 rounded-full hover:bg-luxury-goldHover transition-colors luxury-shadow hidden md:block"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Review Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-effect border-luxury-gold/20 luxury-shadow hover:border-luxury-gold/50 transition-colors duration-300">
                  <CardContent className="p-8 md:p-12">
                    <Quote className="h-12 w-12 text-luxury-gold mb-6 opacity-50" />
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                      "{reviews[currentIndex].text}"
                    </p>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={reviews[currentIndex].image}
                          alt={reviews[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold"
                        />
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {reviews[currentIndex].name}
                          </h4>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-luxury-gold text-luxury-gold"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {reviews[currentIndex].date}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  handleInteraction();
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-luxury-gold w-8"
                    : "bg-gray-600 hover:bg-gray-500 w-3"
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 md:hidden">
            <button
              onClick={() => {
                prevReview();
                handleInteraction();
              }}
              className="bg-luxury-gold text-luxury-background p-3 rounded-full hover:bg-luxury-goldHover transition-colors luxury-shadow"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => {
                nextReview();
                handleInteraction();
              }}
              className="bg-luxury-gold text-luxury-background p-3 rounded-full hover:bg-luxury-goldHover transition-colors luxury-shadow"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-luxury-gold text-luxury-gold" />
            ))}
          </div>
          <p className="text-gray-400 mb-6">
            Rated 5.0 on Google by 500+ happy customers
          </p>
          <a
            href="https://g.page/r/dummy-link/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-luxury-gold hover:text-luxury-goldHover transition-colors font-medium border border-luxury-gold/30 px-6 py-3 rounded-full hover:border-luxury-gold/60"
          >
            <span>Write a Review on Google</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
