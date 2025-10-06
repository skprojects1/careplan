import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const PricingSection = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState("annual");

  const plans = [
    {
      id: "starter",
      name: "Starter Care",
      description: "Perfect for small business websites",
      monthlyPrice: 2082.5, // 24990/12
      annualPrice: 24990,
      popular: false,
      features: [
        "Weekly security scans",
        "Monthly backups",
        "Basic performance monitoring",
        "Email support (48h response)",
        "Plugin updates",
        "Uptime monitoring",
        "SSL certificate management",
        "Basic SEO monitoring",
      ],
      limitations: [
        "Limited to 1 website only",
        "Basic reporting",
        "No priority support",
      ],
    },
    {
      id: "professional",
      name: "Professional Care",
      description: "Most popular for growing businesses",
      monthlyPrice: 3332.5, // 39990/12
      annualPrice: 39990,
      popular: true,
      badge: "Best Value",
      features: [
        "Daily security scans",
        "Weekly automated backups",
        "Advanced performance optimization",
        "Priority support (24h response)",
        "All plugin & theme updates",
        "Real-time uptime monitoring",
        "SSL & security certificates",
        "Advanced SEO monitoring",
        "Monthly performance reports",
        "Malware removal included",
        "Speed optimization",
        "Database optimization",
      ],
      limitations: ["Limited to 1 website only"],
    },
    {
      id: "enterprise",
      name: "Enterprise Care",
      description: "For large businesses and e-commerce",
      monthlyPrice: 4999.2, // 59990/12
      annualPrice: 59990,
      popular: false,
      features: [
        "Real-time security monitoring",
        "Daily automated backups",
        "Premium performance optimization",
        "Dedicated support manager",
        "All updates & maintenance",
        "99.9% uptime guarantee",
        "Advanced security suite",
        "Comprehensive SEO management",
        "Weekly detailed reports",
        "Malware removal & prevention",
        "Advanced speed optimization",
        "Database & server optimization",
        "Custom development hours (5h/month)",
        "Emergency response (2h)",
        "White-label reporting",
      ],
      limitations: ["Limited to 1 website only"],
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const formatMonthlyPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    })?.format(amount);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Choose Your Care Plan
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Professional website maintenance plans with annual billing. Each
            plan covers only one website.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans?.map((plan, index) => (
            <motion.div
              key={plan?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all hover:shadow-2xl ${
                plan?.popular
                  ? "border-primary scale-105 ring-4 ring-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {plan?.badge || "Most Popular"}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {plan?.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {plan?.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-text-primary mb-2">
                      {formatCurrency(plan?.annualPrice)}
                      <span className="text-lg text-text-secondary font-normal">
                        /year
                      </span>
                    </div>
                    <div className="text-text-secondary">
                      {formatMonthlyPrice(plan?.monthlyPrice)}/month
                    </div>
                    <div className="text-sm text-primary font-medium mt-2 bg-primary/10 px-3 py-1 rounded-full inline-block">
                      Billed Annually
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan?.popular ? "default" : "outline"}
                    size="lg"
                    fullWidth
                    onClick={() => onSelectPlan(plan)}
                    className={`mb-6 ${
                      plan?.popular
                        ? "bg-accent hover:bg-accent/90 shadow-cta"
                        : ""
                    }`}
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {plan?.popular ? "Get Started Now" : "Choose Plan"}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-text-primary flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-success mr-2"
                    />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {plan?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-success mr-3 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-text-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Website Limitation Note */}
                  <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-start">
                      <Icon
                        name="Info"
                        size={16}
                        className="text-warning mr-2 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          Single Website Coverage
                        </p>
                        <p className="text-xs text-text-secondary mt-1">
                          Each plan covers only one website
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Plan Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">
                  All Plans Include
                </h4>
                <p className="text-text-secondary text-sm">
                  Complete security, maintenance, and support
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-success" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">
                  No Setup Fees
                </h4>
                <p className="text-text-secondary text-sm">
                  Start protecting your website immediately
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="RotateCcw" size={32} className="text-accent" />
                </div>
                <h4 className="font-bold text-text-primary mb-2">
                  Cancel Anytime
                </h4>
                <p className="text-text-secondary text-sm">
                  No long-term commitments or hidden fees
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <p className="text-text-secondary text-center">
                <strong className="text-text-primary">
                  Need multiple websites?
                </strong>{" "}
                Contact us for custom pricing on multi-site plans. We offer
                volume discounts for agencies and businesses with multiple
                websites.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 border border-success/20 max-w-2xl mx-auto">
            <Icon
              name="Shield"
              size={48}
              className="text-success mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-text-secondary">
              Not satisfied with our service? Get a full refund within 30 days,
              no questions asked. We're confident you'll love the peace of mind
              our care plans provide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
