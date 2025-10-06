import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "How much can I really save with a care plan?",
      answer: `Most of our clients save ₹30,000-50,000 annually by avoiding emergency fixes. Here's the math:\n\n• Average emergency fix: ₹8,000-15,000\n• Typical incidents per year: 4-6\n• Annual emergency costs: ₹32,000-90,000\n• Care plan cost: ₹39,996/year\n\nYou save money from the first avoided emergency. Plus, you get proactive maintenance that prevents most issues from becoming emergencies.`,
      category: "pricing",
    },
    {
      id: 1,
      question: "What exactly is included in the care plan?",
      answer: `Every care plan includes:\n\n• 24/7 security monitoring and malware removal\n• Daily automated backups with cloud storage\n• Performance optimization and speed improvements\n• All software updates (WordPress, plugins, themes)\n• Real-time uptime monitoring\n• Priority support with fast response times\n• Monthly performance and security reports\n• SEO monitoring and recommendations\n• Database optimization and maintenance\n\nNo hidden fees or extra charges for any of these services.`,
      category: "services",
    },
    {
      id: 2,
      question: "Can I cancel anytime? Are there long-term contracts?",
      answer: `Yes, you can cancel anytime with 30 days notice. We offer:\n\n• Month-to-month plans (no long-term commitment)\n• Annual plans with 20% discount\n• 30-day money-back guarantee\n• No setup fees or cancellation penalties\n\nWe're confident in our service quality, so we don't lock you into long contracts. Most clients stay because they see the value and peace of mind we provide.`,
      category: "contract",
    },
    {
      id: 3,
      question: "How quickly do you respond to issues?",
      answer: `Response times vary by plan:\n\n• Starter Care: 48 hours for non-critical issues\n• Professional Care: 24 hours for all issues\n• Enterprise Care: 2 hours for critical issues\n\nFor emergencies (site down, security breach), we respond within 2 hours regardless of plan. Our monitoring systems often detect and fix issues automatically before you even notice them.`,
      category: "support",
    },
    {
      id: 4,
      question: "Do you work with all types of websites?",
      answer: `We specialize in WordPress websites but also support:\n\n• WordPress (our specialty)\n• WooCommerce e-commerce stores\n• Custom PHP applications\n• Static HTML websites\n• Most popular CMS platforms\n\nWe handle websites of all sizes, from simple business sites to complex e-commerce platforms with thousands of products. Our team has experience with virtually every industry and website type.`,
      category: "compatibility",
    },
    {
      id: 5,
      question: "What happens if my website gets hacked?",
      answer: `If your site gets compromised, we:\n\n• Immediately isolate and secure the site\n• Remove all malware and malicious code\n• Restore from clean backup if needed\n• Identify and patch the vulnerability\n• Implement additional security measures\n• Provide detailed incident report\n\nMalware removal is included in all plans at no extra cost. We also help with Google blacklist removal and work to prevent future attacks.`,
      category: "security",
    },
    {
      id: 6,
      question: "How do backups work? Can I access them?",
      answer: `Our backup system provides:\n\n• Daily automated backups\n• Secure cloud storage (multiple locations)\n• 30-day backup retention\n• One-click restoration\n• Download access for your backups\n• Backup verification and testing\n\nYou can request backup downloads anytime or restore your site to any previous version. We also test backups regularly to ensure they work when needed.`,
      category: "backups",
    },
    {
      id: 7,
      question: "Will you slow down my website with monitoring?",
      answer: `No, our monitoring actually improves performance:\n\n• Lightweight monitoring agents (minimal resource usage)\n• Performance optimization included in all plans\n• Image compression and caching setup\n• Database optimization\n• CDN configuration\n\nMost clients see 40-70% speed improvements after we optimize their sites. Our monitoring helps identify and fix performance issues before they impact your visitors.`,
      category: "performance",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get answers to common questions about our website care plans and
            services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {String(faq?.id + 1)?.padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq?.question}
                  </h3>
                </div>
                <Icon
                  name={openFAQ === faq?.id ? "Minus" : "Plus"}
                  size={20}
                  className="text-primary flex-shrink-0"
                />
              </button>

              <AnimatePresence>
                {openFAQ === faq?.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-12">
                        <div className="prose prose-sm max-w-none">
                          {faq?.answer
                            ?.split("\n\n")
                            ?.map((paragraph, pIndex) => (
                              <div key={pIndex} className="mb-4 last:mb-0">
                                {paragraph?.includes("•") ? (
                                  <ul className="space-y-1 text-text-secondary">
                                    {paragraph
                                      ?.split("\n")
                                      ?.map((item, iIndex) => {
                                        if (item?.trim()?.startsWith("•")) {
                                          return (
                                            <li
                                              key={iIndex}
                                              className="flex items-start"
                                            >
                                              <Icon
                                                name="Check"
                                                size={16}
                                                className="text-success mr-2 mt-0.5 flex-shrink-0"
                                              />
                                              <span>
                                                {item?.replace("•", "")?.trim()}
                                              </span>
                                            </li>
                                          );
                                        }
                                        return item?.trim() ? (
                                          <div
                                            key={iIndex}
                                            className="font-medium text-text-primary mb-2"
                                          >
                                            {item}
                                          </div>
                                        ) : null;
                                      })}
                                  </ul>
                                ) : (
                                  <p className="text-text-secondary leading-relaxed">
                                    {paragraph}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-border">
            <Icon
              name="MessageCircle"
              size={48}
              className="text-primary mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our team is here to help! Get in touch for personalized answers
              about your website's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-success text-white rounded-lg font-medium hover:bg-success/90 transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp Chat
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
