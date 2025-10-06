import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ClientOutcomes = () => {
  const outcomes = [
    {
      icon: "Zap",
      emoji: "⏩",
      title: "30% Faster",
      subtitle: "Load Speeds",
      description: "Average page load time improvement",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600",
    },
    {
      icon: "Shield",
      emoji: "🔒",
      title: "99.9%",
      subtitle: "Uptime",
      description: "Guaranteed website availability",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: "TrendingUp",
      emoji: "📈",
      title: "Higher",
      subtitle: "Customer Retention",
      description: "Better user experience = more customers",
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reassurance Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Heart" size={24} className="text-accent mr-3" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">
                Our Promise
              </span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              We care about the technology and uptime of your website
            </h3>
            <p className="text-xl text-text-secondary">
              so you can focus on scaling and growing your business.
            </p>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Real Results from Our Care Plans
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            On average, businesses on our Care Plan report measurable
            improvements across all key metrics
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {outcomes?.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 ${outcome?.bgColor} text-center group cursor-pointer overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${outcome?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Emoji Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {outcome?.emoji}
              </div>

              {/* Tech Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
              >
                <Icon
                  name={outcome?.icon}
                  size={32}
                  className={outcome?.iconColor}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${outcome?.color} bg-clip-text text-transparent`}
                >
                  {outcome?.title}
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {outcome?.subtitle}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {outcome?.description}
                </p>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-border"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-text-secondary text-sm">
                Websites Protected
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">99.9%</div>
              <div className="text-text-secondary text-sm">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">
                8+ Years
              </div>
              <div className="text-text-secondary text-sm">Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-text-secondary text-sm">Monitoring</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to See These Results for Your Website?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their website
              maintenance. Start your journey to better performance, security,
              and growth today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-md"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                View Our Plans
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("calculator")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg border border-primary hover:bg-primary/5 transition-colors"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Calculate Savings
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientOutcomes;
