import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "E-commerce Store Owner",
      company: "Kumar Electronics",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Before the care plan, I was spending ₹15,000-20,000 every few months on emergency fixes. My site went down during Diwali sales and I lost ₹50,000 in revenue. Now with the care plan, I haven't had a single emergency in 8 months and saved over ₹35,000 this year.`,
      savings: "₹35,000",
      businessGrowth: "25% increase in uptime",
      timeframe: "8 months",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Restaurant Owner",
      company: "Sharma's Kitchen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `My website was hacked twice last year, costing me ₹25,000 in recovery and lost business. Since joining the care plan, my site has been completely secure. The team even improved my site speed by 60%. Best investment I've made for my business.`,
      savings: "₹25,000",
      businessGrowth: "60% faster loading",
      timeframe: "12 months",
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Digital Agency Owner",
      company: "Patel Digital Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Managing 15 client websites was a nightmare. Emergency fixes were eating into our profits. The care plan covers all our sites and we've eliminated 90% of emergency calls. Our clients are happier and we're more profitable.`,
      savings: "₹1,20,000",
      businessGrowth: "90% fewer emergencies",
      timeframe: "6 months",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "Online Course Creator",
      company: "Learn with Sneha",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `My course platform crashed during a major launch, costing me ₹80,000 in lost sales. The care plan has given me complete peace of mind. My site is faster, more secure, and I can focus on creating content instead of worrying about technical issues.`,
      savings: "₹45,000",
      businessGrowth: "Zero downtime",
      timeframe: "10 months",
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Manufacturing Business",
      company: "Singh Industries",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `We were losing leads because our website was slow and often down. The care plan transformed our online presence. Site speed improved by 70%, we get better Google rankings, and haven't missed a single inquiry in months.`,
      savings: "₹30,000",
      businessGrowth: "70% speed improvement",
      timeframe: "7 months",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Real Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how our care plans have saved businesses thousands while
            providing peace of mind
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-border"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  {/* Quote */}
                  <div className="mb-6">
                    <Icon
                      name="Quote"
                      size={48}
                      className="text-primary/20 mb-4"
                    />
                    <blockquote className="text-lg text-text-primary leading-relaxed">
                      "{current?.content}"
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <Image
                        src={current?.avatar}
                        alt={current?.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-text-primary text-lg">
                        {current?.name}
                      </div>
                      <div className="text-text-secondary">
                        {current?.position}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {current?.company}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(current?.rating)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-text-secondary">
                      {current?.rating}.0 out of 5
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      Results Achieved
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Savings */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name="TrendingDown"
                            size={24}
                            className="text-success"
                          />
                        </div>
                        <div>
                          <div className="text-sm text-text-secondary">
                            Annual Savings
                          </div>
                          <div className="text-2xl font-bold text-success">
                            {current?.savings}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Growth */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name="TrendingUp"
                            size={24}
                            className="text-primary"
                          />
                        </div>
                        <div>
                          <div className="text-sm text-text-secondary">
                            Improvement
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {current?.businessGrowth}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeframe */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name="Clock"
                            size={24}
                            className="text-accent"
                          />
                        </div>
                        <div>
                          <div className="text-sm text-text-secondary">
                            Time Period
                          </div>
                          <div className="text-lg font-bold text-accent">
                            {current?.timeframe}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-primary" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <Icon name="ChevronRight" size={20} className="text-text-primary" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial
                  ? "bg-primary scale-125"
                  : "bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">₹2.5L+</div>
            <div className="text-text-secondary">Total Savings for Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">99.9%</div>
            <div className="text-text-secondary">Average Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-text-secondary">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
