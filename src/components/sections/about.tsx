"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Target } from "lucide-react";

export function About() {
  const stats = [
    { icon: Users, value: "3000+", label: "Happy Customers" },
    { icon: Award, value: "5000+", label: "Custom Designs" },
    { icon: Heart, value: "30+", label: "Years Experience" },
    { icon: Target, value: "100%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      title: "Craftsmanship",
      description: "Every stitch is a work of art, crafted with precision and attention to detail.",
    },
    {
      title: "Custom Designs",
      description: "We bring your vision to life with personalized designs tailored to your style.",
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We ensure perfect fit and quality every time.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-luxury-slate">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="gold-text-gradient">Nithya Sri</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A story of passion, craftsmanship, and dedication to perfect tailoring
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 luxury-shadow">
                <CardContent className="p-4 md:p-6 text-center">
                  <stat.icon className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Founded by Nagesh
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nithya Sri Fashion Culture was born from a passion for creating beautiful,
              perfectly fitted garments that make every woman feel confident and elegant.
              With over 7 years of experience in the fashion industry, we have established
              ourselves as a premier destination for ladies tailoring and designer wear.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our commitment to excellence, attention to detail, and customer-centric approach
              has earned us the trust of hundreds of satisfied customers. From bridal blouses
              to everyday wear, from intricate Aari work to modern designer pieces, we bring
              your fashion dreams to life.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
