type ContentProps = {
  title: string;
  subTitle?: string;
  intro?: string;
  moustache?: string;
};

// NAVIGATION

export type LinkProps = {
  href: string;
  label: string;
  secondary?: boolean;
};

export const Navigation: LinkProps[] = [
  {
    label: "work",
    href: "#work",
  },
  {
    label: "me",
    href: "#me",
  },
  {
    label: "contact",
    href: "#contact",
    secondary: true,
  },
];

// HERO

export const Hero: ContentProps = {
  title: "Jorik van Ruiswijk.",
  subTitle: "Designer & Developer.",
  intro:
    "Let me help you with identity, logo design, websites, applications, illustrations, icon design and more. Check out my work and let me know what you need.",
};

// WORK

export const Work: ContentProps = {
  title: "Work",
  intro:
    "Below is a small grasp of projects. Projects that I have drawn, designed, collaborated on and developed.",
};

// ABOUT ME

export const About: ContentProps = {
  title: "About me",
  intro:
    "Jorik van Ruiswijk. 31 years of age. Based in the Netherlands. Self-taught front-end developer. Graduated graphic designer and illustrator. Enjoys designing and building interactive websites. With or without animations. Has a keen eye for details. Always trying to improve his skillset. Let him help you.",
  subTitle: "Skills",
  moustache: "And some experience with..",
};

// BRANDS

export const Brands: ContentProps = {
  title: "Worked for and with:",
};

// FOOTER

export const Footer: ContentProps = {
  title: "Contact me",
};
