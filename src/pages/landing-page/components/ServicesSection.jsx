import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: "security",
      icon: "Shield",
      title: "Security Monitoring",
      description: "24/7 protection against threats",
      details: `Our advanced security monitoring system continuously scans your website for vulnerabilities, malware, and suspicious activities. We provide real-time alerts and automatic threat mitigation to keep your website safe.\n\nIncludes: Daily security scans, malware detection and removal, firewall protection, SSL certificate management, and security patch updates.`,
      features: [
        "Real-time threat detection",
        "Automatic malware removal",
        "Firewall protection",
        "SSL management",
      ],
    },
    {
      id: "performance",
      icon: "Zap",
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds",
      details: `We optimize your website's performance to ensure fast loading times and excellent user experience. Our team monitors Core Web Vitals and implements best practices for speed optimization.\n\nIncludes: Image optimization, code minification, caching setup, database optimization, and CDN configuration.`,
      features: [
        "Speed optimization",
        "Image compression",
        "Caching setup",
        "Database tuning",
      ],
    },
    {
      id: "backups",
      icon: "HardDrive",
      title: "Automated Backups",
      description: "Your data is always safe",
      details: `Automated daily backups ensure your website data is always protected. We store multiple backup versions in secure cloud storage with easy one-click restoration capabilities.\n\nIncludes: Daily automated backups, secure cloud storage, version control, and instant restoration options.`,
      features: [
        "Daily backups",
        "Cloud storage",
        "Version control",
        "One-click restore",
      ],
    },
    {
      id: "updates",
      icon: "RefreshCw",
      title: "Software Updates",
      description: "Always up-to-date and secure",
      details: `We handle all software updates including WordPress core, plugins, and themes. Our team tests updates in a staging environment before applying them to your live site.\n\nIncludes: WordPress core updates, plugin updates, theme updates, and compatibility testing.`,
      features: [
        "WordPress updates",
        "Plugin management",
        "Theme updates",
        "Compatibility testing",
      ],
    },
    {
      id: "monitoring",
      icon: "Activity",
      title: "Uptime Monitoring",
      description: "99.9% uptime guarantee",
      details: `Continuous monitoring ensures your website is always accessible. We check your site every minute and immediately alert you of any downtime, working quickly to resolve issues.\n\nIncludes: Real-time uptime monitoring, instant downtime alerts, performance tracking, and detailed uptime reports.`,
      features: [
        "Real-time monitoring",
        "Instant alerts",
        "Performance tracking",
        "Uptime reports",
      ],
    },
    {
      id: "support",
      icon: "Headphones",
      title: "Priority Support",
      description: "Expert help when you need it",
      details: `Get priority access to our expert support team. Whether you have questions, need help with changes, or encounter issues, our team is here to help with fast response times.\n\nIncludes: Priority ticket system, phone support, screen sharing sessions, and dedicated account manager for enterprise plans.`,
      features: [
        "Priority tickets",
        "Phone support",
        "Screen sharing",
        "Dedicated manager",
      ],
    },
    {
      id: "seo",
      icon: "TrendingUp",
      title: "SEO Monitoring",
      description: "Maintain search rankings",
      details: `We monitor your website's SEO health and search engine rankings. Our team tracks important metrics and provides recommendations to improve your search visibility.\n\nIncludes: Keyword ranking tracking, technical SEO audits, performance monitoring, and monthly SEO reports.`,
      features: [
        "Ranking tracking",
        "SEO audits",
        "Performance monitoring",
        "Monthly reports",
      ],
    },
    {
      id: "analytics",
      icon: "BarChart3",
      title: "Analytics & Reports",
      description: "Detailed performance insights",
      details: `Comprehensive monthly reports provide insights into your website's performance, security status, and user engagement. Stay informed about your website's health and growth.\n\nIncludes: Monthly performance reports, security summaries, traffic analytics, and improvement recommendations.`,
      features: [
        "Monthly reports",
        "Security summaries",
        "Traffic analytics",
        "Recommendations",
      ],
    },
    {
      id: "maintenance",
      icon: "Settings",
      title: "General Maintenance",
      description: "Keep everything running smoothly",
      details: `Regular maintenance tasks keep your website running smoothly. We handle database optimization, broken link fixes, form testing, and other routine maintenance tasks.\n\nIncludes: Database optimization, broken link fixes, form testing, content updates, and general troubleshooting.`,
      features: [
        "Database optimization",
        "Link checking",
        "Form testing",
        "Content updates",
      ],
    },
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            What's Included in Your Care Plan
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive website maintenance and support services to keep your
            site secure, fast, and always online
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg border border-border transition-all duration-300 hover:shadow-xl ${
                expandedService === service?.id ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="p-6">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon
                        name={service?.icon}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">
                        {service?.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {service?.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleService(service?.id)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Icon
                      name={
                        expandedService === service?.id
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={20}
                      className="text-text-secondary"
                    />
                  </button>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service?.features
                    ?.slice(0, 4)
                    ?.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-success flex-shrink-0"
                        />
                        <span className="text-xs text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedService === service?.id ? "auto" : 0,
                    opacity: expandedService === service?.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-border">
                    <div className="space-y-3">
                      {service?.details
                        ?.split("\n\n")
                        ?.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-sm text-text-secondary leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>
                </motion.div>

                {/* Learn More Button */}
                <button
                  onClick={() => toggleService(service?.id)}
                  className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {expandedService === service?.id ? "Show Less" : "Learn More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
            <Icon
              name="Sparkles"
              size={48}
              className="text-accent mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              All Services Included in Every Plan
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              Unlike other providers who charge extra for each service, all our
              care plans include every service listed above. No hidden fees, no
              surprises - just comprehensive website care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">
                  No Setup Fees
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">
                  No Hidden Costs
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">
                  Cancel Anytime
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
