import React from "react";
import { motion } from "framer-motion";

const WebsiteCareLogo = ({
  size = "md",
  showText = true,
  animated = false,
}) => {
  const sizes = {
    sm: { icon: 24, text: "text-lg", container: "h-8" },
    md: { icon: 32, text: "text-xl", container: "h-10" },
    lg: { icon: 40, text: "text-2xl", container: "h-12" },
    xl: { icon: 48, text: "text-3xl", container: "h-14" },
  };

  const currentSize = sizes?.[size];

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        rotate: { duration: 0.5 },
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.4 },
    },
  };

  const LogoIcon = () => (
    <div className="relative">
      {/* Main Shield */}
      <svg
        width={currentSize?.icon}
        height={currentSize?.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Shield Background */}
        <path
          d="M16 2L26 6v8c0 6.627-4.5 12.8-10 14-5.5-1.2-10-7.373-10-14V6l10-4z"
          fill="url(#primaryGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="0.5"
        />

        {/* Inner Tech Pattern */}
        <circle cx="16" cy="14" r="3" fill="rgba(255,255,255,0.9)" />
        <circle cx="16" cy="14" r="2" fill="url(#accentGradient)" />

        {/* Tech Lines */}
        <path
          d="M16 8v3m0 6v3m-5-5h3m6 0h3"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Corner Accents */}
        <circle cx="12" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="20" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="12" cy="18" r="1" fill="rgba(255,255,255,0.6)" />
        <circle cx="20" cy="18" r="1" fill="rgba(255,255,255,0.6)" />

        {/* Gradients */}
        <defs>
          <linearGradient
            id="primaryGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient
            id="accentGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient
            id="borderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulse Effect for Animation */}
      {animated && (
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute inset-1 rounded-full bg-primary/10 animate-pulse" />
        </div>
      )}
    </div>
  );

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 ${currentSize?.container}`}>
      {animated ? (
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <LogoIcon />
        </motion.div>
      ) : (
        <LogoIcon />
      )}

      {showText && (
        <motion.div
          variants={animated ? textVariants : {}}
          initial={animated ? "initial" : false}
          animate={animated ? "animate" : false}
          className="flex flex-col"
        >
          <span
            className={`font-bold text-text-primary ${currentSize?.text} leading-tight`}
          >
            Website Care
          </span>
          {size === "lg" || size === "xl" ? (
            <span className="text-xs text-text-secondary -mt-1 font-medium">
              Professional Maintenance
            </span>
          ) : null}
        </motion.div>
      )}
    </div>
  );

  return animated ? (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="cursor-pointer"
    >
      <LogoContent />
    </motion.div>
  ) : (
    <LogoContent />
  );
};

export default WebsiteCareLogo;
