export const HeaderVariants = {
  header: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  mobileMenuItem: {
    initial: {
      x: 25,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
    },
  },
  mobileMenuFooter: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
    },
  },
  mobileMenuContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
  },
  mobileToggle: {
    open: {
      scale: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
    close: {
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  },
  line1: {
    open: {
      strokeDashoffset: 40,
      strokeDasharray: 18,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    close: {
      strokeDashoffset: 40,
      strokeDasharray: 40,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  },
  path1: {
    open: {
      strokeDashoffset: 10,
      strokeDasharray: 5,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    close: {
      strokeDashoffset: 10,
      strokeDasharray: 10,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  },
  path2: {
    open: {
      strokeDashoffset: 10,
      strokeDasharray: 20,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    close: {
      strokeDashoffset: 10,
      strokeDasharray: 10,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  },
  circle: {
    open: {
      strokeDashoffset: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    close: {
      strokeDashoffset: -193,
      strokeDasharray: 227,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  },
  menuItem: {
    initial: {
      y: 50,
    },
    open: {
      y: 0,
      transition: {
        duration: 2,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      y: 50,
      transition: {
        duration: 5,
        delay: 1,
      },
    },
  },
};

export const ProjectVariants = {
  headingTextContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  mainImageOverlay: {
    initial: { width: "100%" },
    animate: {
      width: 0,
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  headingtext: {
    initial: {
      y: 75,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  a: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.6,
      },
    },
  },
  description: {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.4,
      },
    },
  },
  projectInfo: {
    initial: {},
    whileInView: {},
    viewport: {},
  },
  underline: {
    initial: {
      width: 0,
    },
    whileInView: {
      width: "100%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.8,
      },
    },
    viewport: { once: true },
  },
  infoText: {
    initial: {
      opacity: 0,
      y: 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.4,
      },
    },
    viewport: { once: true },
  },
  infoImage: {
    initial: {
      height: 0,
    },
    whileInView: {
      height: "100%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.4,
      },
    },
  },
};

export const serviceVariants = {
  serviceContainer: {
    initial: {},
    open: {
      height: "auto",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
    close: {
      //TODO: FIND SOLUTION FOR UPDATING BASED ON WIDTH
      height: 50,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.7,
      },
    },
  },
  serviceButton: {
    open: {
      rotate: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
    close: {
      rotate: 90,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  descriptions: {
    initial: {
      opacity: 0,
      y: 25,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.5,
      },
    },
    close: {
      opacity: 0,
      y: 25,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  images: {
    initial: {
      height: 0,
    },
    open: {
      height: "100%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.4,
      },
    },
    close: {
      height: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.4,
      },
    },
  },
  underline: {
    initial: {
      width: 0,
    },
    whileInView: {
      width: "100%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.8,
      },
    },
    viewport: { once: true },
  },
};
export const desktopServiceVariants = {
  serviceContainer: {
    initial: {},
    open: {
      height: "auto",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
    close: {
      height: 110,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.7,
      },
    },
  },
};

export const projectDisplayVariants = {
  headingText: {
    initial: {
      y: 75,
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  imageVariants: {
    initial: {},
    animate: {
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
    whileHover: {
      scale: 1.2,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
        duration: 0,
      },
    },
  },
};
export const heroVariants = {
  container: {
    initial: {},
    animate: {},
  },
  portfolioText: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 1,
      },
    },
  },
  headingText1: {
    initial: {
      y: 180,
      //opacity: 0,
    },
    animate: {
      y: 0,
      //opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.8,
      },
    },
  },
  headingText2: {
    initial: {
      y: 180,
      //opacity: 0,
    },
    animate: {
      y: 0,
      //opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 1,
      },
    },
  },
  headingText3: {
    initial: {
      y: 180,
      //opacity: 0,
    },
    animate: {
      y: 0,
      //opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 1.2,
      },
    },
  },
  headingTextSlider: {
    initial: {
      y: 150,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.2,
      },
    },
  },
};

export const introVariants = {
  introContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  },
  introContainer2: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.5,
      },
    },
  },
  span: {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
    exit: {
      y: -100,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  heroContainer: {
    initial: {},
    animate: {},
    exit: {
      y: "-100vh",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 0.5,
      },
    },
  },
};

export const contactVariants = {
  headingContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  },
  headingText: {
    initial: {
      y: 110,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  mainContainer: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
        delay: 1,
      },
    },
  },
};

export const footerVariants = {
  links: {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  linksContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export const socialVariants = {
  iconsContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  },
  headingText: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
  icons: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1,
      },
    },
  },
};
