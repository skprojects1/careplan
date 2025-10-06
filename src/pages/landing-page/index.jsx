import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import SavingsCalculator from "./components/SavingsCalculator";
import ClientOutcomes from "./components/ClientOutcomes";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Scroll to section helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle calculator CTA
  const handleCalculateClick = () => {
    scrollToSection("calculator");
  };

  // Handle quote CTA
  const handleQuoteClick = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi! I'm interested in getting a quote for your website care plan.",
      "_blank"
    );
  };

  // Handle secure savings CTA
  const handleSecureSavings = () => {
    scrollToSection("pricing");
  };

  // Handle plan selection
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    scrollToSection("contact");

    // Store selected plan in localStorage for form pre-filling
    localStorage.setItem("selectedPlan", JSON.stringify(plan));
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    console.log("Selected plan:", selectedPlan);

    setShowSuccessMessage(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);

    // In a real app, this would submit to your backend
    // For now, we'll simulate success
  };

  // Success message component
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-success text-white px-6 py-4 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-3">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-success"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <div className="font-semibold">Analysis Request Submitted!</div>
          <div className="text-sm opacity-90">
            We'll send your website analysis within 2 hours.
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Success Message */}
      {showSuccessMessage && <SuccessMessage />}
      {/* Hero Section */}
      <HeroSection
        onCalculateClick={handleCalculateClick}
        onQuoteClick={handleQuoteClick}
      />
      {/* Savings Calculator */}
      <SavingsCalculator onSecureSavings={handleSecureSavings} />
      {/* Client Outcomes Section - NEW */}
      <ClientOutcomes />
      {/* Pricing Section */}
      <PricingSection onSelectPlan={handleSelectPlan} />
      {/* Services Section */}
      <ServicesSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* FAQ Section */}
      <FAQSection />
      {/* CTA Section */}
      <CTASection onSubmit={handleFormSubmit} />
      {/* Footer */}
      <Footer />
      {/* Floating WhatsApp Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </motion.a>
      </div>
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <div className="h-1 bg-muted">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{
              scaleX:
                typeof window !== "undefined"
                  ? Math.min(
                      1,
                      window.scrollY /
                        (document.documentElement?.scrollHeight -
                          window.innerHeight)
                    )
                  : 0,
            }}
            initial={{ scaleX: 0 }}
            animate={{
              scaleX:
                typeof window !== "undefined"
                  ? Math.min(
                      1,
                      window.scrollY /
                        (document.documentElement?.scrollHeight -
                          window.innerHeight)
                    )
                  : 0,
            }}
            transition={{ duration: 0.1 }}
            transformOrigin="left"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
