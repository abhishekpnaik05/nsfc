"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including designer blouse stitching, bridal wear, Aari work, Maggam work, hand embroidery, custom stitching, alterations, and boutique tailoring.",
    },
    {
      question: "How long does it take to complete a blouse?",
      answer: "Typically, a designer blouse takes 7-10 days to complete. Bridal blouses with intricate work may take 15-20 days depending on the complexity of the design.",
    },
    {
      question: "Do you provide home pickup and delivery?",
      answer: "Yes, we offer home pickup and delivery services within Bangalore for an additional charge. Contact us via WhatsApp to schedule a pickup.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the complexity of the work, fabric, and design. We offer competitive rates and provide quotes after assessing your requirements. Contact us for a personalized quote.",
    },
    {
      question: "Can I bring my own fabric?",
      answer: "Absolutely! You can bring your own fabric, and we'll provide expert stitching services. We also offer fabric selection assistance if needed.",
    },
    {
      question: "Do you offer trial fittings?",
      answer: "Yes, we offer trial fittings for bridal wear and complex designs to ensure the perfect fit. This is included in our service.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, bank transfers, and all major payment methods. Payment is typically taken in two installments - 50% advance and 50% on delivery.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website's booking form, WhatsApp us at +91 8892300449, or call us directly. We recommend booking in advance, especially for bridal orders.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-luxury-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Frequently Asked <span className="gold-text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="glass-effect border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-center justify-between"
                  >
                    <h3 className="text-white font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                      )}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/918892300449"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-luxury-gold hover:text-luxury-goldHover transition-colors font-medium border border-luxury-gold/30 px-6 py-3 rounded-full hover:border-luxury-gold/60"
          >
            <span>Chat with us on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
