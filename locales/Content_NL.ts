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
    label: "werk",
    href: "#work",
  },
  {
    label: "ik",
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
    "Laat me je helpen met identiteit, logo ontwerp, websites, applicaties, illustraties, icoon ontwerp en meer. Bekijk mijn werk en laat me weten wat je nodig hebt.",
};

// WORK

export const Work: ContentProps = {
  title: "Werk",
  intro:
    "Hieronder een kleine greep uit mijn projecten. Projecten die ik getekend, ontworpen, aan meegewerkt en ontwikkeld hebt.",
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
