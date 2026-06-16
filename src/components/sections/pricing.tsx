"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Scissors, Sparkles, Gem, Palette, MessageSquare, Send, Check } from "lucide-react";

export function Pricing() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/Supabase
    console.log("Quote request submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        service: "",
        details: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pricingCategories = [
    {
      icon: Scissors,
      title: "Designer Blouse",
      description: "Custom designer blouses with perfect fit",
      priceRange: "₹1,500 - ₹5,000",
      features: [
        "Perfect fit guarantee",
        "Premium fabric",
        "Custom designs",
        "Multiple style options",
      ],
    },
    {
      icon: Sparkles,
      title: "Bridal Wear",
      description: "Exquisite bridal lehengas and sarees",
      priceRange: "₹5,000 - ₹25,000",
      features: [
        "Heavy embroidery work",
        "Custom measurements",
        "Premium materials",
        "Multiple fittings",
      ],
    },
    {
      icon: Gem,
      title: "Aari & Maggam Work",
      description: "Traditional hand embroidery on any fabric",
      priceRange: "₹2,000 - ₹15,000",
      features: [
        "Expert craftsmanship",
        "Custom designs",
        "Quality materials",
        "Timely delivery",
      ],
    },
    {
      icon: Palette,
      title: "Dress Stitching",
      description: "Salwar suits, kurtis, gowns & more",
      priceRange: "₹800 - ₹3,000",
      features: [
        "Modern designs",
        "Perfect stitching",
        "Quality fabric",
        "Quick turnaround",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-luxury-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Pricing & <span className="gold-text-gradient">Quotes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get a custom quote for your specific requirements. Prices vary based on design complexity and materials.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-effect border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 luxury-shadow h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-luxury-black" />
                    </div>
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-2xl font-bold gold-text-gradient">
                      {category.priceRange}
                    </div>
                    <ul className="space-y-2">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm">
                          <Check className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quote Request Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-effect border-gold-500/20 luxury-shadow">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">
                Request a Custom Quote
              </CardTitle>
              <p className="text-gray-400 text-center">
                Fill out the form below and we&apos;ll get back to you with a detailed quote
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-luxury-black" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Quote Request Sent!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    We&apos;ll send you a detailed quote via WhatsApp within 24 hours.
                  </p>
                  <p className="text-gold-500 font-medium">
                    Thank you for choosing Nithya Sri Fashion Culture
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-luxury-charcoal border-gold-500/20 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-luxury-charcoal border-gold-500/20 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">Service Type *</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gold-500/20 bg-luxury-charcoal px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="Designer Blouse">Designer Blouse</option>
                      <option value="Bridal Wear">Bridal Wear</option>
                      <option value="Aari Work">Aari Work</option>
                      <option value="Maggam Work">Maggam Work</option>
                      <option value="Hand Embroidery">Hand Embroidery</option>
                      <option value="Dress Stitching">Dress Stitching</option>
                      <option value="Alterations">Alterations</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details" className="text-white">Project Details *</Label>
                    <Textarea
                      id="details"
                      name="details"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe your requirements, fabric type, design preferences, measurements, etc."
                      rows={5}
                      className="bg-luxury-charcoal border-gold-500/20 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                  >
                    Get Quote
                  </Button>

                  {/* WhatsApp Alternative */}
                  <div className="text-center pt-4">
                    <p className="text-gray-400 text-sm mb-3">
                      Or get instant quote via WhatsApp
                    </p>
                    <a
                      href="https://wa.me/918892300449?text=Hi! I'd like to get a quote for tailoring services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 transition-colors font-medium"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="glass-effect border-gold-500/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Pricing Information
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Prices vary based on fabric quality, design complexity, and work required</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>50% advance payment required for all custom orders</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Balance payment due upon final fitting and delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Free alterations within 7 days of delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Emergency orders available with additional charges</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
