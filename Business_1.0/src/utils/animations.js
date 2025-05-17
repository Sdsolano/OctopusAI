// utils/animations.js
// Page Transition Animation
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Logo animation variants
export const logoVariants = {
  expanded: { width: "16ch" },
  collapsed: { width: "6ch" }
};

export const fullNameVariants = {
  expanded: { opacity: 1, x: 0 },
  collapsed: { opacity: 0, x: -20 }
};

export const shortNameVariants = {
  expanded: { opacity: 0, x: 20 },
  collapsed: { opacity: 1, x: 0 }
};

// Icon hover animations
export const iconHoverVariants = {
  hover: { scale: 1.2, y: -5 }
};

// Button animations
export const buttonHoverVariants = {
  scale: 1.05
};

export const buttonTapVariants = {
  scale: 0.95
};