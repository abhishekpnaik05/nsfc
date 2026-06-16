import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-luxury-charcoal border-t border-gold-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center luxury-shadow">
                <span className="text-luxury-black font-bold text-xl">NSF</span>
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-lg">
                  Nithya Sri
                </h3>
                <p className="text-gold-500 text-xs font-medium">
                  Fashion Culture
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium ladies tailoring and designer blouse stitching with
              perfect fit guarantee. Expert craftsmanship in bridal wear,
              Aari work, and custom embroidery.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-luxury-black">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-luxury-black">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-luxury-black">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm">Designer Blouse Stitching</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Bridal Wear</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Aari & Maggam Work</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Hand Embroidery</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Custom Stitching</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Alterations</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">+91 8892300449</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">nithyasrifashion@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Bangalore, Karnataka, India</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Nithya Sri Fashion Culture. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Crafted with ❤️ by Nagesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
