"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Clock, Award } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const trustBadges = [
    { icon: Award, title: "Premium Quality", description: "Finest craftsmanship" },
    { icon: Scissors, title: "Perfect Fit", description: "Tailored to perfection" },
    { icon: Clock, title: "On-Time Delivery", description: "Always on schedule" },
    { icon: Sparkles, title: "Expert Tailors", description: "Skilled professionals" },
  ];

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-background">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy via-luxury-slate to-luxury-background" />
        <div className="absolute inset-0 bg-[url('/media/front-background.png')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-background via-luxury-background/80 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 leading-tight">
              Perfect Stitching.
              <span className="block gold-text-gradient mt-2">Perfect You.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-luxury-text font-light tracking-wide"
            >
              Premium Ladies Tailoring & Designer Blouse Stitching
            </motion.p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Expert craftsmanship in bridal wear, Aari work, Maggam work, and custom embroidery.
            Transform your vision into reality with Nithya Sri Fashion Culture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="gold"
              size="xl"
              onClick={() => (window.location.href = "#booking")}
              className="w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => window.open("https://wa.me/918892300449", "_blank")}
              className="w-full sm:w-auto text-lg px-8 py-6 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-background transition-all duration-300"
            >
              WhatsApp Us
            </Button>
            <Button
              variant="ghost"
              size="xl"
              onClick={() => (window.location.href = "#portfolio")}
              className="w-full sm:w-auto text-lg px-8 py-6 text-luxury-gold hover:text-luxury-goldHover transition-colors duration-300"
            >
              View Portfolio
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-lg p-4 md:p-6 text-center hover:border-luxury-gold/50 transition-all duration-300 cursor-pointer"
              >
                <badge.icon className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-1 text-sm md:text-base">{badge.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{badge.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-luxury-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
