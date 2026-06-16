"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const services = [
    "Designer Blouse Stitching",
    "Bridal Wear",
    "Aari Work",
    "Maggam Work",
    "Hand Embroidery",
    "Custom Stitching",
    "Alterations",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Message:* ${formData.message}`;
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/918892300449?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 bg-luxury-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Book an <span className="gold-text-gradient">Appointment</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Schedule your visit and let us create the perfect outfit for you
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-gold-500/20 luxury-shadow">
            <CardContent className="p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-20 w-20 text-gold-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Booking Submitted Successfully!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    We'll confirm your appointment via WhatsApp shortly.
                  </p>
                  <p className="text-gold-500 font-medium">
                    Thank you for choosing Nithya Sri Fashion Culture
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white flex items-center">
                        <User className="h-4 w-4 mr-2 text-gold-500" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="bg-luxury-charcoal border-gold-500/20 text-white placeholder:text-gray-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gold-500" />
                        Phone Number *
                      </Label>
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

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gold-500" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-luxury-charcoal border-gold-500/20 text-white placeholder:text-gray-500"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2 text-gold-500" />
                        Service Type *
                      </Label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gold-500/20 bg-luxury-charcoal px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-white flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gold-500" />
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="bg-luxury-charcoal border-gold-500/20 text-white"
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-white flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gold-500" />
                        Preferred Time *
                      </Label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gold-500/20 bg-luxury-charcoal px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, measurements, or any specific requests..."
                      rows={4}
                      className="bg-luxury-charcoal border-gold-500/20 text-white placeholder:text-gray-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                  >
                    Book Appointment
                  </Button>

                  {/* WhatsApp Alternative */}
                  <div className="text-center pt-4">
                    <p className="text-gray-400 text-sm mb-3">
                  Or book instantly via WhatsApp
                </p>
                    <a
                      href="https://wa.me/918892300449?text=Hi! I'd like to book an appointment."
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

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="glass-effect border-gold-500/20 text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 8892300449</p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-gold-500/20 text-center">
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">WhatsApp</h4>
                <p className="text-gray-400 text-sm">Instant Response</p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-gold-500/20 text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Working Hours</h4>
                <p className="text-gray-400 text-sm">10 AM - 8 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
