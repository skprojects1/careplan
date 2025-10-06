import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const SavingsCalculator = ({ onSecureSavings }) => {
  const [monthlyIncidents, setMonthlyIncidents] = useState(2);
  const [avgFixCost, setAvgFixCost] = useState(4000); // Changed from 8000 to 4000
  const [websiteComplexity, setWebsiteComplexity] = useState("medium");
  const [annualSavings, setAnnualSavings] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const complexityMultipliers = {
    simple: 0.8,
    medium: 1.0,
    complex: 1.3,
    enterprise: 1.6,
  };

  const complexityLabels = {
    simple: "Simple Website (5-10 pages)",
    medium: "Business Website (10-50 pages)",
    complex: "E-commerce Store (50+ pages)",
    enterprise: "Enterprise Platform (100+ pages)",
  };

  const careplanCost = 3333; // Monthly care plan cost

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const multiplier = complexityMultipliers?.[websiteComplexity];
      const monthlyEmergencyCost = monthlyIncidents * avgFixCost * multiplier;
      const annualEmergencyCost = monthlyEmergencyCost * 12;
      const annualCareplanCost = careplanCost * 12;
      const savings = annualEmergencyCost - annualCareplanCost;
      setAnnualSavings(Math.max(0, savings));
      setIsCalculating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [monthlyIncidents, avgFixCost, websiteComplexity]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const currentAnnualCost =
    monthlyIncidents *
    avgFixCost *
    complexityMultipliers?.[websiteComplexity] *
    12;
  const careplanAnnualCost = careplanCost * 12;

  return (
    <section
      id="calculator"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
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
            Calculate Your Annual Savings
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See exactly how much you'll save by switching from emergency fixes
            to our predictable care plan
          </p>
        </motion.div>

        {/* Balanced Calculator Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-border h-full"
            >
              <div className="flex items-center mb-6">
                <Icon
                  name="Calculator"
                  size={24}
                  className="text-primary mr-3"
                />
                <h3 className="text-2xl font-bold text-text-primary">
                  Your Current Situation
                </h3>
              </div>

              <div className="space-y-8">
                {/* Monthly Incidents */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Monthly Website Issues/Incidents
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={monthlyIncidents}
                      onChange={(e) =>
                        setMonthlyIncidents(parseInt(e?.target?.value))
                      }
                      className="flex-1 h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center text-lg">
                      {monthlyIncidents}
                    </div>
                  </div>
                  <div className="text-sm text-text-secondary mt-2">
                    Average incidents requiring professional help per month
                  </div>
                </div>

                {/* Average Fix Cost */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Average Fix Cost per Incident
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={avgFixCost}
                      onChange={(e) =>
                        setAvgFixCost(parseInt(e?.target?.value) || 0)
                      }
                      className="w-full pl-8 pr-4 py-3 border-2 border-border rounded-lg text-lg font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div className="text-sm text-text-secondary mt-2">
                    Typical cost you pay for emergency fixes
                  </div>
                </div>

                {/* Website Complexity */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-4">
                    Website Complexity
                  </label>
                  <div className="space-y-3">
                    {Object.entries(complexityLabels)?.map(([key, label]) => (
                      <label
                        key={key}
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${
                          websiteComplexity === key
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border hover:border-primary/50 bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="complexity"
                          value={key}
                          checked={websiteComplexity === key}
                          onChange={(e) =>
                            setWebsiteComplexity(e?.target?.value)
                          }
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                            websiteComplexity === key
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        >
                          {websiteComplexity === key && (
                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Current Cost Breakdown */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    className="text-error mr-3"
                  />
                  <h3 className="text-xl font-bold text-text-primary">
                    Current Annual Cost
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-text-secondary">
                      Monthly incidents
                    </span>
                    <span className="font-semibold text-lg">
                      {monthlyIncidents} × 12
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-text-secondary">
                      Average cost per fix
                    </span>
                    <span className="font-semibold text-lg">
                      {formatCurrency(avgFixCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-text-secondary">
                      Complexity factor
                    </span>
                    <span className="font-semibold text-lg">
                      {complexityMultipliers?.[websiteComplexity]}x
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-error/10 px-4 rounded-lg mt-4">
                    <span className="font-bold text-text-primary">
                      Total Annual Cost
                    </span>
                    <span className="text-2xl font-bold text-error">
                      {formatCurrency(currentAnnualCost)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Care Plan Cost */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <Icon name="Shield" size={20} className="text-success mr-3" />
                  <h3 className="text-xl font-bold text-text-primary">
                    Care Plan Cost
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-text-secondary">
                      Monthly care plan
                    </span>
                    <span className="font-semibold text-lg">
                      {formatCurrency(careplanCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-text-secondary">
                      Annual commitment
                    </span>
                    <span className="font-semibold text-lg">12 months</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-success/10 px-4 rounded-lg mt-4">
                    <span className="font-bold text-text-primary">
                      Total Annual Cost
                    </span>
                    <span className="text-2xl font-bold text-success">
                      {formatCurrency(careplanAnnualCost)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Savings Result - Highlighted */}
              <motion.div
                className="bg-gradient-to-r from-accent to-primary rounded-2xl shadow-2xl p-8 text-white"
                animate={isCalculating ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <Icon name="TrendingUp" size={32} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Your Annual Savings
                  </h3>
                  {isCalculating ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      <span className="text-lg">Calculating...</span>
                    </div>
                  ) : (
                    <>
                      <div className="text-5xl font-bold mb-4 drop-shadow-lg">
                        {formatCurrency(annualSavings)}
                      </div>
                      <p className="text-lg opacity-90 mb-6">
                        {annualSavings > 0
                          ? `That's ${Math.round(
                              annualSavings / careplanCost
                            )} months of free website care!`
                          : "Consider our care plan for predictable costs and better service."}
                      </p>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={onSecureSavings}
                        className="bg-white text-primary hover:bg-gray-50 border-white font-semibold px-8 py-3"
                        iconName="Lock"
                        iconPosition="left"
                      >
                        Secure These Savings Now
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-border max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-text-primary mb-6">
              Plus, you get these additional benefits at no extra cost:
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 justify-center">
                <Icon name="Clock" size={20} className="text-primary" />
                <span className="text-text-secondary font-medium">
                  24/7 Monitoring
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Icon name="Shield" size={20} className="text-primary" />
                <span className="text-text-secondary font-medium">
                  Security Updates
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Icon name="Zap" size={20} className="text-primary" />
                <span className="text-text-secondary font-medium">
                  Performance Optimization
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--color-primary);
          cursor: pointer;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          border: 2px solid white;
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: var(--color-primary);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
};

export default SavingsCalculator;
