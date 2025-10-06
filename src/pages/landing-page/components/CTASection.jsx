import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const CTASection = ({ onSubmit }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 23,
    seconds: 45,
  });
  const [spotsLeft] = useState(7);
  const [formData, setFormData] = useState({
    websiteUrl: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Show analysis preview when URL is entered
    if (name === "websiteUrl" && value?.includes(".")) {
      setShowAnalysis(true);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (onSubmit) {
      onSubmit(formData);
    }

    setIsSubmitting(false);
  };

  const mockAnalysis = {
    securityScore: 65,
    speedScore: 72,
    seoScore: 58,
    issues: [
      "Outdated WordPress version detected",
      "SSL certificate expires in 30 days",
      "Large images slowing page load",
      "Missing security headers",
    ],
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary via-blue-600 to-accent text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Limited Time Offer */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Icon name="Clock" size={20} className="mr-2" />
            <span className="font-medium">
              Limited Time: 48-Hour Response Guarantee
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Secure Your Website Today
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get instant analysis of your website's vulnerabilities and start
            your care plan with exclusive onboarding
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Get Your Free Website Analysis
              </h3>
              <p className="opacity-90">
                Enter your website URL to receive an instant security and
                performance analysis
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Website URL"
                type="url"
                name="websiteUrl"
                value={formData?.websiteUrl}
                onChange={handleInputChange}
                placeholder="https://yourwebsite.com"
                required
                className="bg-white/20 border-white/30 text-white placeholder-white/70"
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="bg-white/20 border-white/30 text-white placeholder-white/70"
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
                className="bg-white/20 border-white/30 text-white placeholder-white/70"
              />

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="bg-white text-primary hover:bg-gray-100 shadow-cta"
                iconName="Zap"
                iconPosition="left"
              >
                {isSubmitting
                  ? "Analyzing Website..."
                  : "Get Free Analysis & Quote"}
              </Button>

              <div className="text-center text-sm opacity-80">
                <Icon name="Shield" size={16} className="inline mr-1" />
                Your information is secure and will never be shared
              </div>
            </form>

            {/* Instant Analysis Preview */}
            {showAnalysis && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8 bg-white/20 rounded-2xl p-6 border border-white/30"
              >
                <h4 className="font-bold mb-4 flex items-center">
                  <Icon name="Search" size={20} className="mr-2" />
                  Quick Analysis Preview
                </h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">
                      {mockAnalysis?.securityScore}%
                    </div>
                    <div className="text-xs opacity-80">Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-300">
                      {mockAnalysis?.speedScore}%
                    </div>
                    <div className="text-xs opacity-80">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-300">
                      {mockAnalysis?.seoScore}%
                    </div>
                    <div className="text-xs opacity-80">SEO</div>
                  </div>
                </div>
                <div className="text-sm opacity-90">
                  <strong>Issues Found:</strong> {mockAnalysis?.issues?.length}{" "}
                  critical items need attention
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Urgency & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Exclusive Consultation Expires In:
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">
                    {String(timeLeft?.hours)?.padStart(2, "0")}
                  </div>
                  <div className="text-sm opacity-80">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">
                    {String(timeLeft?.minutes)?.padStart(2, "0")}
                  </div>
                  <div className="text-sm opacity-80">Minutes</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold">
                    {String(timeLeft?.seconds)?.padStart(2, "0")}
                  </div>
                  <div className="text-sm opacity-80">Seconds</div>
                </div>
              </div>
              <div className="bg-accent/20 rounded-lg p-4">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="Users" size={20} />
                  <span className="font-medium">
                    Only {spotsLeft} spots left for exclusive onboarding
                  </span>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">What You Get Today:</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "Search",
                    title: "Instant Website Analysis",
                    description: "Complete security, speed, and SEO audit",
                  },
                  {
                    icon: "FileText",
                    title: "Detailed Report",
                    description: "Comprehensive findings and recommendations",
                  },
                  {
                    icon: "Calculator",
                    title: "Custom Savings Calculation",
                    description: "See exactly how much you'll save annually",
                  },
                  {
                    icon: "Phone",
                    title: "Priority Consultation",
                    description: "30-minute strategy call with our experts",
                  },
                  {
                    icon: "Gift",
                    title: "Exclusive Bonus",
                    description: "First month free with annual plan signup",
                  },
                ]?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit?.icon} size={16} />
                    </div>
                    <div>
                      <div className="font-semibold">{benefit?.title}</div>
                      <div className="text-sm opacity-80">
                        {benefit?.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-80">Websites Protected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-sm opacity-80">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">₹25L+</div>
                  <div className="text-sm opacity-80">Client Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Monitoring</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
            <Icon name="Shield" size={24} className="mr-3" />
            <span className="text-lg font-medium">
              30-Day Money-Back Guarantee • No Setup Fees • Cancel Anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
