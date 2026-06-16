"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Gem, Palette, Wrench, Shirt, Crown, FileText } from "lucide-react";

export function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      icon: Shirt,
      title: "Designer Blouse",
      services: [
        "Custom Blouse Stitching",
        "Designer Blouse Stitching",
        "Bridal Blouse Stitching",
        "Padded Blouse",
        "Princess Cut Blouse",
        "Aari Work Blouse",
        "Maggam Work Blouse",
      ],
    },
    {
      id: 1,
      icon: Scissors,
      title: "Dress Stitching",
      services: [
        "Salwar Suit Stitching",
        "Churidar Stitching",
        "Anarkali Stitching",
        "Palazzo Suit Stitching",
        "Kurti Stitching",
        "Designer Kurti Stitching",
        "Gown Stitching",
        "Lehenga Stitching",
        "Bridal Lehenga Stitching",
      ],
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Aari Work",
      services: [
        "Traditional Aari Work",
        "Maggam Work",
        "Hand Embroidery",
        "Zardosi Work",
        "Mirror Work",
        "Stone Work",
        "Bead Work",
        "Pearl Work",
        "Sequence Work",
        "Thread Work",
      ],
    },
    {
      id: 3,
      icon: Crown,
      title: "Bridal Wear",
      services: [
        "Bridal Blouse Design",
        "Bridal Lehenga",
        "Bridal Gown",
        "Bridal Saree Customization",
        "Heavy Embroidery Work",
      ],
    },
    {
      id: 4,
      icon: FileText,
      title: "Hand Embroidery",
      services: [
        "Patch Work",
        "Fabric Painting",
        "Kundan Work",
        "Kasuti Work",
        "Chikankari",
        "Phulkari",
      ],
    },
    {
      id: 5,
      icon: Wrench,
      title: "Alterations",
      services: [
        "Blouse Alteration",
        "Dress Alteration",
        "Kurti Alteration",
        "Lehenga Alteration",
        "Sleeve Modification",
        "Neck Design Modification",
        "Perfect Fitting Adjustments",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-luxury-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium tailoring services crafted with excellence and attention to detail
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category.id
                  ? "gold-gradient text-luxury-background luxury-shadow"
                  : "glass-effect text-gray-300 hover:text-white border-luxury-gold/30"
              }`}
            >
              <category.icon className="h-4 w-4 md:h-5 md:w-5 inline mr-2" />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {categories[activeCategory].services.map((service, index) => {
              const Icon = categories[activeCategory].icon;
              return (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 luxury-shadow hover:shadow-luxury-gold/20">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-goldHover flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 md:h-6 md:w-6 text-luxury-background" />
                        </div>
                        <h3 className="text-white font-medium text-sm md:text-base">{service}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
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
            Don&apos;t see what you&apos;re looking for? Contact us for custom requests.
          </p>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="gold-gradient text-luxury-background px-8 py-3 rounded-lg font-semibold luxury-shadow hover:opacity-90 transition-opacity hover:scale-105 transform duration-300"
          >
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
