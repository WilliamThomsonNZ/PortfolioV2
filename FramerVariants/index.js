export const HeaderVariants = {
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
