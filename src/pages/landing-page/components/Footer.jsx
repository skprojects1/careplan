import React from "react";
import Icon from "../../../components/AppIcon";

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Care Plans", href: "#pricing" },
      { name: "Security Monitoring", href: "#services" },
      { name: "Performance Optimization", href: "#services" },
      { name: "Backup Services", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Report Issue", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold">Website Care Plan</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Comprehensive website maintenance and security services that save
              businesses thousands while ensuring 24/7 reliability and peace of
              mind.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-primary" />
                <span className="text-gray-300">
                  support@websitecareplan.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="text-gray-300">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks?.services?.map((link) => (
                <li key={link?.name}>
                  <a
                    href={link?.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.name}>
                  <a
                    href={link?.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks?.support?.map((link) => (
                <li key={link?.name}>
                  <a
                    href={link?.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks?.legal?.map((link) => (
                <li key={link?.name}>
                  <a
                    href={link?.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Website Care Plan. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {/* Trust Badges */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                  <Icon name="Shield" size={16} className="text-green-400" />
                  <span className="text-xs text-gray-300">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                  <Icon name="Award" size={16} className="text-blue-400" />
                  <span className="text-xs text-gray-300">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                  <Icon name="Clock" size={16} className="text-orange-400" />
                  <span className="text-xs text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Contact Strip */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Icon name="AlertTriangle" size={20} />
            <span className="font-medium">Website Emergency?</span>
            <a href="tel:+919876543210" className="font-bold hover:underline">
              Call +91 98765 43210
            </a>
            <span className="text-red-200">•</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
