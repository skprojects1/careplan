import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const HeroSection = ({ onCalculateClick, onQuoteClick }) => {
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { label: "Years Experience", value: "8+", icon: "Award" },
    { label: "Happy Clients", value: "500+", icon: "Users" },
    { label: "Uptime Guarantee", value: "99.9%", icon: "Shield" },
  ];

  const floatingElements = [
    { icon: "Globe", delay: 0, x: 100, y: 50 },
    { icon: "Shield", delay: 0.5, x: -80, y: 80 },
    { icon: "Zap", delay: 1, x: 120, y: -60 },
    { icon: "Lock", delay: 1.5, x: -100, y: -40 },
    { icon: "TrendingUp", delay: 2, x: 80, y: 100 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements?.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.1,
              scale: 1,
              x: [element?.x, element?.x + 20, element?.x],
              y: [element?.y, element?.y - 20, element?.y],
            }}
            transition={{
              duration: 4,
              delay: element?.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${50 + element?.x}px`,
              top: `${50 + element?.y}px`,
            }}
          >
            <Icon name={element?.icon} size={48} className="text-primary" />
          </motion.div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
            >
              <Icon name="Sparkles" size={16} className="mr-2" />
              Trusted by 500+ Business Owners
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
            >
              Save{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                ₹30,000+
              </span>{" "}
              Annually on Website Maintenance
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-text-secondary mb-8 max-w-2xl"
            >
              Stop paying ₹5,000-15,000 for emergency fixes. Get complete peace
              of mind with our comprehensive care plan for just ₹3,333/month.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                variant="default"
                size="lg"
                onClick={onCalculateClick}
                className="bg-accent hover:bg-accent/90 shadow-cta"
                iconName="Calculator"
                iconPosition="left"
              >
                Calculate Your Savings
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onQuoteClick}
                iconName="MessageCircle"
                iconPosition="left"
              >
                Get Instant Quote
              </Button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {metrics?.map((metric, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-4 rounded-lg transition-all duration-300 ${
                    currentMetric === index
                      ? "bg-primary/10 border-2 border-primary/20"
                      : "bg-white/50 border border-border"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon
                    name={metric?.icon}
                    size={24}
                    className={`mx-auto mb-2 ${
                      currentMetric === index
                        ? "text-primary"
                        : "text-text-secondary"
                    }`}
                  />
                  <div className="text-2xl font-bold text-text-primary">
                    {metric?.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {metric?.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Preview */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-border">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-text-secondary">
                  Website Care Dashboard
                </div>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <div className="flex items-center justify-between">
                    <Icon name="Shield" size={20} className="text-success" />
                    <span className="text-xs text-success font-medium">
                      SECURE
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="text-lg font-bold text-text-primary">
                      100%
                    </div>
                    <div className="text-xs text-text-secondary">
                      Security Score
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between">
                    <Icon name="Zap" size={20} className="text-primary" />
                    <span className="text-xs text-primary font-medium">
                      FAST
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="text-lg font-bold text-text-primary">
                      1.2s
                    </div>
                    <div className="text-xs text-text-secondary">Load Time</div>
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-text-primary">
                    Monthly Performance
                  </span>
                  <Icon name="TrendingUp" size={16} className="text-success" />
                </div>
                <div className="flex items-end space-x-2 h-16">
                  {[40, 60, 80, 90, 85, 95, 100]?.map((height, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-t from-primary to-accent rounded-t flex-1"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* Live Status */}
              <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-text-secondary">
                  Live monitoring • Last check: 2 minutes ago
                </span>
              </div>
            </div>

            {/* Floating Cost Comparison */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border"
            >
              <div className="text-xs text-text-secondary mb-1">
                Emergency Fix Cost
              </div>
              <div className="text-lg font-bold text-error line-through">
                ₹12,000
              </div>
              <div className="text-xs text-success font-medium">
                Care Plan: ₹3,333/month
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-text-secondary"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
