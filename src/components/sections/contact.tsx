"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Contact Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/918892300449?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-luxury-slate">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get in <span className="gold-text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Visit our boutique or reach out to us through any of the following channels. We&apos;re here to help you with all your tailoring needs.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-luxury-background" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <a href="tel:+918892300449" className="text-gray-400 hover:text-luxury-gold transition-colors">
                        +91 8892300449
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-luxury-background" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:nithyasrifashion@gmail.com" className="text-gray-400 hover:text-luxury-gold transition-colors">
                        nithyasrifashion@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-luxury-background" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Address</h4>
                      <p className="text-gray-400">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-luxury-background" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <p className="text-gray-400">Mon - Sat: 10:00 AM - 8:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918892300449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 luxury-shadow hover:scale-105 transform"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-luxury-gold/20 luxury-shadow">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                      <Send className="h-8 w-8 text-luxury-background" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-400">
                      We&apos;ll get back to you within 24 hours.
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
                        className="bg-luxury-charcoal border-luxury-gold/20 text-white placeholder:text-gray-500 focus:border-luxury-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-luxury-charcoal border-luxury-gold/20 text-white placeholder:text-gray-500 focus:border-luxury-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-luxury-charcoal border-luxury-gold/20 text-white placeholder:text-gray-500 focus:border-luxury-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="bg-luxury-charcoal border-luxury-gold/20 text-white placeholder:text-gray-500 focus:border-luxury-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="bg-luxury-charcoal border-luxury-gold/20 text-white placeholder:text-gray-500 focus:border-luxury-gold"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="xl"
                      className="w-full hover:scale-105 transition-transform duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
