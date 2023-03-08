import deepmerge from "deepmerge";

export const basicVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      duration: 0.3,
    },
  },
};

export const inViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.25,
  },
};

export const arrows = deepmerge(inViewProps, {
  variants: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        delay: 1,
      },
    },
  },
});

export const inViewContainer = deepmerge(inViewProps, {
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  },
});

export const inViewChild = deepmerge(
  {},
  {
    variants: basicVariants,
  }
);
