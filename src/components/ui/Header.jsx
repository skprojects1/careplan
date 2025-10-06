import React, { useState, useEffect } from "react";
import Icon from "../AppIcon";
import Button from "./Button";
import WebsiteCareLogo from "../WebsiteCareLogo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigationItems = [
    { id: "calculator", label: "Calculate Savings", href: "#calculator" },
    { id: "pricing", label: "Plans & Pricing", href: "#pricing" },
    { id: "services", label: "What's Included", href: "#services" },
    { id: "testimonials", label: "Client Success", href: "#testimonials" },
    { id: "contact", label: "Get Started", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navigationItems?.map((item) => item?.id);
      const currentSection = sections?.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    scrollToSection("#contact");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-navigation transition-all duration-smooth ${
          isScrolled
            ? "backdrop-blur-nav border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo - Updated with professional logo */}
            <div className="flex items-center">
              <WebsiteCareLogo size="sm" showText={true} animated={false} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.href)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item?.id
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-text-secondary"
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection("#calculator")}
                iconName="Calculator"
                iconPosition="left"
                iconSize={16}
              >
                Free Calculator
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleGetStarted}
                className="bg-accent hover:bg-accent/90 shadow-cta"
              >
                Start My Care Plan
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-muted transition-smooth"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.href)}
                  className={`block w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-smooth ${
                    activeSection === item?.id
                      ? "text-primary bg-primary/10"
                      : "text-text-secondary hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item?.label}
                </button>
              ))}

              <div className="pt-4 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => scrollToSection("#calculator")}
                  iconName="Calculator"
                  iconPosition="left"
                  iconSize={16}
                >
                  Free Calculator
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={handleGetStarted}
                  className="bg-accent hover:bg-accent/90 shadow-cta"
                >
                  Start My Care Plan
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-floating lg:hidden">
        <Button
          variant="default"
          size="lg"
          onClick={() => window.open("https://wa.me/919876543210", "_blank")}
          className="bg-success hover:bg-success/90 shadow-cta rounded-full w-14 h-14 p-0"
          iconName="MessageCircle"
          iconSize={24}
        />
      </div>
      {/* Progress Indicator */}
      <div className="fixed top-16 left-0 right-0 z-floating">
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-smooth"
            style={{
              width: `${Math.min(
                100,
                (window.scrollY /
                  (document.documentElement?.scrollHeight -
                    window.innerHeight)) *
                  100
              )}%`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
